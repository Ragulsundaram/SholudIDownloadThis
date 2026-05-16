"""
Smart privacy policy scraper.

Accepts either:
  - An App Store URL  →  auto-extracts app name, icon, developer, category,
                         finds the developer's privacy policy link, then scrapes it.
  - Any other URL    →  scrapes it directly as a privacy policy page.

Output: a .md file with an app-metadata header + full policy text,
        ready for the parser prompt in docs/CLAUDE-PARSER-PROMPT.md.

Usage:
    python scrape_privacy.py https://apps.apple.com/us/app/instagram/id389801252
    python scrape_privacy.py https://in.bookmyshow.com/privacy
"""

import sys
import re
import json
import urllib.request
from scrapling.fetchers import StealthyFetcher


# ── Helpers ────────────────────────────────────────────────────────────────────

def is_app_store_url(url: str) -> bool:
    return "apps.apple.com" in url


def extract_app_id(url: str) -> str | None:
    m = re.search(r"/id(\d+)", url)
    return m.group(1) if m else None


def itunes_lookup(app_id: str) -> dict:
    """Call the iTunes API and return the first result dict."""
    api = f"https://itunes.apple.com/lookup?id={app_id}"
    with urllib.request.urlopen(api, timeout=15) as resp:
        data = json.loads(resp.read())
    results = data.get("results", [])
    return results[0] if results else {}


def url_to_filename(url: str) -> str:
    name = re.sub(r"https?://", "", url)
    name = re.sub(r"[^\w]", "_", name).strip("_")
    return name[:80] + ".md"


def slug_from_name(name: str) -> str:
    s = name.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


# ── Accordion / popup expander (reused for any URL) ───────────────────────────

def make_expander(accordion_sections: list):
    """Return a page_action function that collects expanded content."""

    def expand_all(page):

        def safe_text(el):
            try:
                return (el.inner_text() or "").strip()
            except Exception:
                return ""

        seen = set()

        # Pass 1: aria-expanded="false"
        try:
            for trigger in page.query_selector_all('[aria-expanded="false"]'):
                try:
                    if not trigger.is_visible():
                        continue
                    label = safe_text(trigger)[:120]
                    if label in seen:
                        continue
                    seen.add(label)
                    trigger.click()
                    page.wait_for_timeout(700)
                    ctrl_id = trigger.get_attribute("aria-controls")
                    if ctrl_id:
                        panel = page.query_selector(f"#{ctrl_id}")
                        if panel:
                            text = safe_text(panel)
                            if len(text) > 30:
                                accordion_sections.append({"trigger": label, "content": text})
                    try:
                        trigger.click()
                        page.wait_for_timeout(300)
                    except Exception:
                        pass
                except Exception:
                    continue
        except Exception:
            pass

        # Pass 2: <details>/<summary>
        try:
            for summary in page.query_selector_all("details:not([open]) > summary"):
                try:
                    if not summary.is_visible():
                        continue
                    label = safe_text(summary)[:120]
                    if label in seen:
                        continue
                    seen.add(label)
                    summary.click()
                    page.wait_for_timeout(600)
                    details_el = page.evaluate_handle(
                        "(el) => el.closest('details')", summary
                    ).as_element()
                    if details_el:
                        text = safe_text(details_el)
                        if len(text) > len(label) + 10:
                            accordion_sections.append({"trigger": label, "content": text})
                    try:
                        summary.click()
                        page.wait_for_timeout(300)
                    except Exception:
                        pass
                except Exception:
                    continue
        except Exception:
            pass

        # Pass 3: annotation / subpage popup links
        try:
            items = page.evaluate("""
                () => {
                    const seen = new Set();
                    const result = [];
                    document.querySelectorAll('a[href]').forEach(a => {
                        const href = a.getAttribute('href') || '';
                        const abs = a.href;
                        const isPopup = href.includes('annotation') || href.includes('subpage') ||
                                        href.includes('popup') || href.includes('modal');
                        const isSkip = href.includes('section_id') || href.includes('link_dialog') ||
                                       href.includes('version');
                        if (isPopup && !isSkip && !seen.has(href)) {
                            seen.add(href);
                            result.push({ href: abs, label: (a.innerText || '').trim().slice(0, 120) });
                        }
                    });
                    return result;
                }
            """)
        except Exception:
            items = []

        if items:
            base_url = page.url.split("?")[0]
            try:
                base_text_raw = page.evaluate("() => document.body.innerText") or ""
            except Exception:
                base_text_raw = ""
            base_lines = set(l.strip() for l in base_text_raw.splitlines() if l.strip())

            for item in items:
                ann_url = item.get("href", "")
                label = item.get("label", "") or ann_url
                if not ann_url:
                    continue
                try:
                    page.goto(ann_url, wait_until="domcontentloaded")
                    page.wait_for_timeout(2000)
                    ann_text = page.evaluate("() => document.body.innerText") or ""
                    new_lines = [
                        l.strip()
                        for l in ann_text.splitlines()
                        if l.strip() and l.strip() not in base_lines
                    ]
                    new_text = "\n".join(new_lines).strip()
                    if len(new_text) > 30:
                        accordion_sections.append({"trigger": label, "content": new_text})
                        print(f"    [captured] {label[:60]} ({len(new_text)} chars)")
                except Exception as e:
                    print(f"    [skip] {label[:40]} — {e}")
                    continue

            try:
                page.goto(base_url, wait_until="domcontentloaded")
                page.wait_for_timeout(2000)
            except Exception:
                pass

    return expand_all


# ── App Store handling ─────────────────────────────────────────────────────────

def handle_app_store(app_store_url: str):
    """
    1. Call iTunes API for metadata + icon.
    2. Scrape the App Store page to find the developer's privacy policy URL.
    3. Scrape the privacy policy.
    Returns (metadata_dict, policy_md_text, output_filename).
    """
    app_id = extract_app_id(app_store_url)
    if not app_id:
        print("ERROR: Could not extract App ID from URL.")
        sys.exit(1)

    # Step A: iTunes API metadata
    print(f"Fetching app metadata from iTunes API (id={app_id})...")
    itunes = itunes_lookup(app_id)
    app_name = itunes.get("trackName", "Unknown App")
    developer = itunes.get("sellerName", "")
    category = itunes.get("primaryGenreName", "")
    icon_url = itunes.get("artworkUrl512") or itunes.get("artworkUrl100", "")
    privacy_url_from_api = itunes.get("privacyPolicyUrl", "")

    print(f"  App:       {app_name}")
    print(f"  Developer: {developer}")
    print(f"  Category:  {category}")
    print(f"  Icon:      {icon_url[:60]}...")

    # Step B: Find privacy policy URL — use API value if present, else scrape the App Store page
    privacy_url = privacy_url_from_api
    if not privacy_url:
        print("Privacy URL not in API response — scraping App Store page...")
        found = [None]

        def find_privacy_link(page):
            links = page.evaluate("""
                () => {
                    const result = [];
                    document.querySelectorAll('a').forEach(a => {
                        const text = (a.innerText || a.textContent || '').toLowerCase().trim();
                        const href = a.href || '';
                        // Must be external (not apple.com) and mention privacy
                        if (text.includes('privacy') && href &&
                            !href.includes('apple.com') && !href.includes('javascript')) {
                            result.push({ text, href });
                        }
                    });
                    return result;
                }
            """)
            if links:
                found[0] = links[0]["href"]
                print(f"  Found privacy link: {links[0]['href'][:80]}")

        StealthyFetcher.fetch(
            app_store_url,
            headless=True,
            network_idle=True,
            wait=3000,
            page_action=find_privacy_link,
        )
        privacy_url = found[0]

    if not privacy_url:
        print("ERROR: Could not find developer's privacy policy URL.")
        sys.exit(1)

    print(f"Privacy policy URL: {privacy_url}")

    # Step C: Scrape the privacy policy
    metadata = {
        "name": app_name,
        "developer": developer,
        "category": category,
        "icon_url": icon_url,
        "app_store_url": app_store_url,
        "app_store_id": app_id,
        "privacy_policy_url": privacy_url,
    }
    return metadata, privacy_url


# ── Main ───────────────────────────────────────────────────────────────────────

if len(sys.argv) < 2:
    print("Usage: python scrape_privacy.py <app-store-url-or-policy-url>")
    sys.exit(1)

input_url = sys.argv[1]
metadata = None

if is_app_store_url(input_url):
    metadata, policy_url = handle_app_store(input_url)
    slug = slug_from_name(metadata["name"])
    output = f"{slug}_policy.md"
else:
    policy_url = input_url
    output = url_to_filename(input_url)

# ── Scrape the privacy policy ──────────────────────────────────────────────────
accordion_sections = []
base_policy_url = re.sub(r"\?.*$", "", policy_url.rstrip("/"))

print(f"\nScraping privacy policy: {policy_url}")
print("Opening headless browser — complex pages may take 2–3 minutes...")

page = StealthyFetcher.fetch(
    base_policy_url,
    headless=True,
    network_idle=True,
    wait=3000,
    page_action=make_expander(accordion_sections),
)

# ── Build markdown output ──────────────────────────────────────────────────────
main_text = str(page.get_all_text(separator="\n", strip=True))

lines = ["# Privacy Policy — Scraped Source", ""]

if metadata:
    lines += [
        "## App Metadata",
        "",
        f"- **Name:** {metadata['name']}",
        f"- **Developer:** {metadata['developer']}",
        f"- **Category:** {metadata['category']}",
        f"- **Icon URL:** {metadata['icon_url']}",
        f"- **App Store URL:** {metadata['app_store_url']}",
        f"- **App Store ID:** {metadata['app_store_id']}",
        f"- **Privacy Policy URL:** {metadata['privacy_policy_url']}",
        "",
        "---",
        "",
    ]
else:
    lines += [f"**URL:** {policy_url}", "", "---", ""]

lines += ["## Main Page Content", "", main_text]

if accordion_sections:
    lines += [
        "",
        "---",
        "",
        "## Expanded Accordion / Modal Content",
        "",
        "_These sections were hidden behind expandable elements or popup links._",
        "",
    ]
    for section in accordion_sections:
        title = section["trigger"] or "Expanded section"
        lines += [f"### {title}", "", section["content"], ""]

output_md = "\n".join(lines)

with open(output, "w", encoding="utf-8") as f:
    f.write(output_md)

print(f"\nSaved to: {output}")
print(f"Total characters: {len(output_md):,}")
print(f"Accordion/modal sections captured: {len(accordion_sections)}")
if metadata:
    print(f"\nApp: {metadata['name']} ({metadata['category']})")
    print(f"Icon: {metadata['icon_url'][:70]}...")
