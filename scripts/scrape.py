#!/usr/bin/env python3
"""
scrape.py — Scrape App Store pages and privacy policies for ShouldIDownloadThis

This script does ONLY the fetching. No API key required.
After running this, tell Claude Code: "process the staged apps"
and it will parse each policy and write the final app.json files.

Usage:
  python scripts/scrape.py <url> [<url2> ...]

Examples:
  # All apps in a room/collection page
  python scripts/scrape.py https://apps.apple.com/in/iphone/room/6748333199

  # Single app
  python scripts/scrape.py https://apps.apple.com/in/app/pinterest/id429047995

  # Mix
  python scripts/scrape.py https://apps.apple.com/in/iphone/room/6748333199 \\
                           https://apps.apple.com/in/app/signal/id874139669

Setup (one time):
  pip install -r scripts/requirements.txt
  playwright install chromium

Output:
  data/staging/{slug}.json  — raw metadata + policy text, ready for Claude to parse
"""

import asyncio
import json
import re
import sys
from pathlib import Path
from typing import Optional

import httpx
from bs4 import BeautifulSoup
from playwright.async_api import Browser, BrowserContext, async_playwright

# ── Paths ──────────────────────────────────────────────────────────────────────
ROOT = Path(__file__).parent.parent
DATA_DIR = ROOT / "data"
APPS_DIR = DATA_DIR / "apps"
STAGING_DIR = DATA_DIR / "staging"

# ── Config ─────────────────────────────────────────────────────────────────────
MAX_CONCURRENT_PAGES = 3
PLAYWRIGHT_TIMEOUT = 45_000  # ms
ROOM_SCROLL_PASSES = 8

APP_URL_RE = re.compile(r"https://apps\.apple\.com/[a-z]{2}/app/[^/?#]+/id(\d+)")
ROOM_URL_RE = re.compile(r"apps\.apple\.com/.+/(?:iphone/room|story|collection)/")


def slugify(name: str) -> str:
    name = name.split(":")[0].split("–")[0].split("—")[0]
    name = name.lower().strip()
    name = re.sub(r"[^\w\s-]", "", name)
    name = re.sub(r"[\s_]+", "-", name.strip())
    return re.sub(r"-+", "-", name).strip("-")


def get_existing_ids() -> set[str]:
    """Return set of App Store IDs already ingested or staged — slug-independent."""
    ids: set[str] = set()
    if APPS_DIR.exists():
        for d in APPS_DIR.iterdir():
            f = d / "app.json"
            if f.exists():
                try:
                    data = json.loads(f.read_text())
                    aid = data.get("app", {}).get("app_store_id", "")
                    if aid:
                        ids.add(aid)
                except Exception:
                    pass
    if STAGING_DIR.exists():
        for f in STAGING_DIR.glob("*.json"):
            try:
                data = json.loads(f.read_text())
                aid = data.get("meta", {}).get("app_store_id", "")
                if aid:
                    ids.add(aid)
            except Exception:
                pass
    return ids


async def make_context(browser: Browser) -> BrowserContext:
    return await browser.new_context(
        user_agent=(
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/124.0.0.0 Safari/537.36"
        ),
        locale="en-US",
        viewport={"width": 1280, "height": 900},
    )


async def get_app_urls_from_room(browser: Browser, room_url: str) -> list[str]:
    ctx = await make_context(browser)
    page = await ctx.new_page()
    seen: set[str] = set()
    urls: list[str] = []

    try:
        print(f"\n→ Fetching room: {room_url}")
        await page.goto(room_url, wait_until="domcontentloaded", timeout=PLAYWRIGHT_TIMEOUT)
        for _ in range(ROOM_SCROLL_PASSES):
            await page.evaluate("window.scrollBy(0, window.innerHeight * 1.5)")
            await asyncio.sleep(0.8)

        hrefs: list[str] = await page.eval_on_selector_all(
            "a[href*='/app/']",
            "els => els.map(e => e.href)"
        )
        for href in hrefs:
            clean = href.split("?")[0].rstrip("/")
            m = APP_URL_RE.match(clean)
            if m and clean not in seen:
                seen.add(clean)
                urls.append(clean)
    except Exception as e:
        print(f"  ✗ Room page error: {e}")
    finally:
        try:
            await ctx.close()
        except Exception:
            pass

    print(f"  Found {len(urls)} apps")
    return urls


async def scrape_app_store_page(browser: Browser, url: str) -> Optional[dict]:
    ctx = await make_context(browser)
    page = await ctx.new_page()

    try:
        await page.goto(url, wait_until="domcontentloaded", timeout=PLAYWRIGHT_TIMEOUT)
        await asyncio.sleep(1.5)

        # Name
        name = ""
        for sel in ["h1.product-header__title", "h1.app-header__title", "h1"]:
            try:
                name = (await page.inner_text(sel, timeout=3000)).strip()
                if name:
                    break
            except Exception:
                pass
        if not name:
            title = await page.title()
            name = title.split(" on the App Store")[0].split(" - ")[0].strip()

        # Icon
        icon_url = ""
        try:
            icon_url = await page.get_attribute("meta[property='og:image']", "content") or ""
        except Exception:
            pass

        # Developer + Category — App Store renders these as dt/dd pairs
        # e.g. <dt>Provider</dt><dd>Pinterest, Inc.</dd>
        developer = ""
        category = ""
        try:
            dt_dd = await page.evaluate("""() => {
                const pairs = {};
                document.querySelectorAll('dt').forEach(dt => {
                    const dd = dt.nextElementSibling;
                    if (dd) pairs[dt.innerText.trim()] = dd.innerText.trim();
                });
                return pairs;
            }""")
            developer = dt_dd.get("Provider", dt_dd.get("Developer", ""))
            category = dt_dd.get("Category", "")
        except Exception:
            pass

        # Privacy policy URL — look for "developer's privacy policy" link
        policy_url = ""
        for selector in [
            "a:text-matches('privacy policy', 'i')",
            "a[href*='privacy']",
            ".privacy-types__link-privacy",
        ]:
            try:
                href = await page.get_attribute(selector, "href", timeout=3000)
                if href and "apple.com" not in href:
                    policy_url = href
                    break
            except Exception:
                pass

        # Scroll to App Privacy section and retry if not found
        if not policy_url:
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.7)")
            await asyncio.sleep(1)
            for selector in ["a:text-matches('privacy policy', 'i')", "a[href*='privacy']"]:
                try:
                    href = await page.get_attribute(selector, "href", timeout=3000)
                    if href and "apple.com" not in href:
                        policy_url = href
                        break
                except Exception:
                    pass

        id_match = re.search(r"/id(\d+)", url)
        app_store_id = id_match.group(1) if id_match else ""

        return {
            "slug": slugify(name),
            "name": name,
            "developer": developer,
            "icon_url": icon_url,
            "category": category,
            "app_store_url": url,
            "app_store_id": app_store_id,
            "policy_url": policy_url,
        }

    except Exception as e:
        print(f"  ✗ App page scrape failed ({url}): {e}")
        return None
    finally:
        try:
            await ctx.close()
        except Exception:
            pass


async def fetch_policy_text(policy_url: str, browser: Browser) -> str:
    if not policy_url:
        return ""

    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/124.0.0.0 Safari/537.36"
        ),
        "Accept": "text/html,application/xhtml+xml,*/*",
        "Accept-Language": "en-US,en;q=0.9",
    }

    BLOCK_PATTERNS = ("access denied", "403 forbidden", "you don't have permission", "blocked", "captcha")

    def is_blocked(text: str) -> bool:
        return len(text) < 1000 or any(p in text.lower()[:500] for p in BLOCK_PATTERNS)

    async def playwright_fetch(stealth: bool) -> str:
        ctx = await make_context(browser)
        page = await ctx.new_page()
        if stealth:
            # Hide Playwright's automation fingerprint
            await page.add_init_script("""
                Object.defineProperty(navigator, 'webdriver', {get: () => undefined});
                Object.defineProperty(navigator, 'plugins', {get: () => [1, 2, 3]});
                window.chrome = {runtime: {}};
            """)
        try:
            await page.goto(policy_url, wait_until="domcontentloaded", timeout=PLAYWRIGHT_TIMEOUT)
            await asyncio.sleep(3)
            text = await page.evaluate(
                """() => {
                    document.querySelectorAll('script,style,nav,footer,header,noscript').forEach(t => t.remove());
                    return document.body.innerText;
                }"""
            )
            return (text or "")[:120_000]
        except Exception as e:
            print(f"  ✗ Playwright fetch failed ({policy_url}): {e}")
            return ""
        finally:
            try:
                await ctx.close()
            except Exception:
                pass

    # 1. Try plain HTTP (fastest, works for most static policy pages)
    static_text = ""
    try:
        async with httpx.AsyncClient(follow_redirects=True, timeout=20) as client:
            r = await client.get(policy_url, headers=headers)
            if r.status_code == 200:
                soup = BeautifulSoup(r.text, "html.parser")
                for tag in soup(["script", "style", "nav", "footer", "header", "noscript"]):
                    tag.decompose()
                static_text = soup.get_text(separator="\n", strip=True)
    except Exception:
        pass

    if not is_blocked(static_text):
        return static_text[:120_000]

    # 2. Playwright (handles JS-rendered pages)
    print(f"  ↻ Static fetch blocked/short ({len(static_text)} chars), trying Playwright...")
    pw_text = await playwright_fetch(stealth=False)
    if not is_blocked(pw_text):
        return pw_text

    # 3. Stealth Playwright (hides automation flags, bypasses basic WAF/bot detection)
    print(f"  ↻ Playwright blocked, retrying with stealth mode...")
    stealth_text = await playwright_fetch(stealth=True)
    if not is_blocked(stealth_text):
        return stealth_text

    # 4. Wayback Machine — cached copy bypasses bot protection
    print(f"  ↻ All direct attempts blocked, trying Wayback Machine cache...")
    try:
        wayback_api = f"https://archive.org/wayback/available?url={policy_url}"
        async with httpx.AsyncClient(follow_redirects=True, timeout=15) as client:
            r = await client.get(wayback_api)
            snapshot = r.json().get("archived_snapshots", {}).get("closest", {})
            cached_url = snapshot.get("url", "")
        if cached_url:
            async with httpx.AsyncClient(follow_redirects=True, timeout=20) as client:
                r = await client.get(cached_url, headers=headers)
                if r.status_code == 200:
                    soup = BeautifulSoup(r.text, "html.parser")
                    for tag in soup(["script", "style", "nav", "footer", "header", "noscript"]):
                        tag.decompose()
                    wb_text = soup.get_text(separator="\n", strip=True)
                    if not is_blocked(wb_text):
                        print(f"  ✓ Got policy from Wayback Machine cache")
                        return wb_text[:120_000]
    except Exception as e:
        print(f"  ✗ Wayback Machine failed: {e}")

    print(f"  ⚠ Could not fetch policy ({policy_url}) — flagged for manual review")
    return ""


async def process_app(
    browser: Browser,
    scrape_sem: asyncio.Semaphore,
    app_url: str,
    existing_ids: set[str],
) -> None:
    # Check App Store ID from URL before even loading the page
    id_match = re.search(r"/id(\d+)", app_url)
    app_id = id_match.group(1) if id_match else None
    if app_id and app_id in existing_ids:
        print(f"  — Already ingested, skipping: {app_url}")
        return

    async with scrape_sem:
        print(f"\n→ Scraping: {app_url}")
        meta = await scrape_app_store_page(browser, app_url)

    if not meta:
        print(f"  ✗ Skipping (scrape failed): {app_url}")
        return

    # Double-check after scraping (ID now confirmed)
    if meta["app_store_id"] in existing_ids:
        print(f"  — Already ingested, skipping: {meta['slug']}")
        return

    slug = meta["slug"]
    print(f"  slug={slug}  policy={meta['policy_url'] or '(not found)'}")

    policy_text = await fetch_policy_text(meta["policy_url"], browser)
    if policy_text:
        print(f"  ✓ Policy fetched ({len(policy_text):,} chars)")
    else:
        print(f"  ⚠ No policy text — will be marked needs_review when parsed")

    # Save staging file
    STAGING_DIR.mkdir(parents=True, exist_ok=True)
    staging_file = STAGING_DIR / f"{slug}.json"
    staging_file.write_text(
        json.dumps({"meta": meta, "policy_text": policy_text}, indent=2, ensure_ascii=False)
    )
    print(f"  ✓ Staged: data/staging/{slug}.json")
    existing_ids.add(meta["app_store_id"])


async def main(input_urls: list[str]) -> None:
    existing = get_existing_ids()
    print(f"Already ingested or staged: {len(existing)} apps (tracked by App Store ID)")

    scrape_sem = asyncio.Semaphore(MAX_CONCURRENT_PAGES)

    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)

        all_app_urls: list[str] = []
        for url in input_urls:
            if ROOM_URL_RE.search(url) or "/story/" in url or "/collection/" in url:
                room_apps = await get_app_urls_from_room(browser, url)
                all_app_urls.extend(room_apps)
            elif APP_URL_RE.match(url.split("?")[0]):
                all_app_urls.append(url.split("?")[0])
            else:
                print(f"⚠ Unrecognised URL, skipping: {url}")

        if not all_app_urls:
            print("No app URLs found.")
            await browser.close()
            return

        print(f"\nTotal apps to process: {len(all_app_urls)}")

        tasks = [
            process_app(browser, scrape_sem, url, existing)
            for url in all_app_urls
        ]

        await asyncio.gather(*tasks, return_exceptions=True)
        await browser.close()

    staged = list(STAGING_DIR.glob("*.json")) if STAGING_DIR.exists() else []
    print(f"\n✓ Scraping complete. {len(staged)} app(s) staged in data/staging/")
    print("  Tell Claude Code: \"process the staged apps\" to parse and save them.")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    asyncio.run(main(sys.argv[1:]))
