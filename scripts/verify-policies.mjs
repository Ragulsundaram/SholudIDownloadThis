#!/usr/bin/env node
// verify-policies.mjs — Re-scrape App Store pages and privacy policies
// to verify existing data/apps/ entries against live sources.
//
// Usage: node scripts/verify-policies.mjs
//
// Reads data/apps/{slug}/app.json for app_store_url and policy_url,
// re-fetches both, saves fresh data to data/verification/{slug}.json

import { chromium } from "playwright";
import fs from "fs/promises";
import path from "path";

const ROOT = process.cwd();
const APPS_DIR = path.join(ROOT, "data", "apps");
const VERIFICATION_DIR = path.join(ROOT, "data", "verification");

const PLAYWRIGHT_TIMEOUT = 45_000;
const MAX_CONCURRENT = 3;

async function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchWithRetry(url, browser, retries = 2) {
  let lastErr;
  for (let i = 0; i <= retries; i++) {
    const context = await browser.newContext({
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) " +
        "AppleWebKit/537.36 (KHTML, like Gecko) " +
        "Chrome/124.0.0.0 Safari/537.36",
      locale: "en-US",
      viewport: { width: 1280, height: 900 },
    });
    const page = await context.newPage();
    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: PLAYWRIGHT_TIMEOUT });
      await delay(2000);

      const text = await page.evaluate(() => {
        document.querySelectorAll("script,style,nav,footer,header,noscript").forEach((el) => el.remove());
        return document.body ? document.body.innerText : "";
      });

      await context.close();
      return text || "";
    } catch (e) {
      lastErr = e;
      try { await context.close(); } catch {}
      if (i < retries) await delay(3000);
    }
  }
  console.error(`  ✗ Failed after ${retries + 1} attempts: ${url} — ${lastErr.message}`);
  return "";
}

async function scrapeAppStore(browser, url) {
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) " +
      "AppleWebKit/537.36 (KHTML, like Gecko) " +
      "Chrome/124.0.0.0 Safari/537.36",
    locale: "en-US",
    viewport: { width: 1280, height: 900 },
  });
  const page = await context.newPage();

  let result = {
    app_store_url: url,
    policy_url: "",
    developer: "",
    category: "",
  };

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: PLAYWRIGHT_TIMEOUT });
    await delay(1500);

    const selectors = [
      "a[href*='privacy']",
      "a:text-matches('privacy policy', 'i')",
    ];
    for (const sel of selectors) {
      try {
        const href = await page.getAttribute(sel, "href", { timeout: 3000 });
        if (href && !href.includes("apple.com")) {
          result.policy_url = href;
          break;
        }
      } catch {}
    }

    if (!result.policy_url) {
      await page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.7)");
      await delay(1000);
      for (const sel of selectors) {
        try {
          const href = await page.getAttribute(sel, "href", { timeout: 3000 });
          if (href && !href.includes("apple.com")) {
            result.policy_url = href;
            break;
          }
        } catch {}
      }
    }

    try {
      const pairs = await page.evaluate(() => {
        const p = {};
        document.querySelectorAll("dt").forEach((dt) => {
          const dd = dt.nextElementSibling;
          if (dd) p[dt.innerText.trim()] = dd.innerText.trim();
        });
        return p;
      });
      result.developer = pairs["Provider"] || pairs["Developer"] || "";
      result.category = pairs["Category"] || "";
    } catch {}
  } catch (e) {
    console.error(`  ✗ App Store scrape failed (${url}): ${e.message}`);
  } finally {
    try { await context.close(); } catch {}
  }

  return result;
}

async function processApp(browser, slug, existing) {
  console.log(`\n→ ${slug}`);
  console.log(`  App Store: ${existing.app.app_store_url}`);

  const freshAppStore = await scrapeAppStore(browser, existing.app.app_store_url);
  console.log(`  Fresh policy URL: ${freshAppStore.policy_url || "(not found)"}`);

  let freshPolicyText = "";
  if (freshAppStore.policy_url) {
    freshPolicyText = await fetchWithRetry(freshAppStore.policy_url, browser);
    console.log(`  Fresh policy text: ${freshPolicyText.length.toLocaleString()} chars`);
  } else {
    console.log(`  ⚠ No policy URL found on App Store page`);
  }

  const existingPolicyUrl = existing.meta?.policy_url || "";

  const result = {
    slug,
    existing: {
      policy_url: existingPolicyUrl,
      developer: existing.app?.developer || "",
      category: existing.app?.category || "",
      name: existing.app?.name || "",
    },
    fresh: {
      policy_url: freshAppStore.policy_url,
      developer: freshAppStore.developer,
      category: freshAppStore.category,
      policy_text: freshPolicyText,
    },
    comparison: {
      policy_url_match: existingPolicyUrl === freshAppStore.policy_url,
      developer_match: (existing.app?.developer || "").toLowerCase().trim() === (freshAppStore.developer || "").toLowerCase().trim(),
      category_match: (existing.app?.category || "").toLowerCase().trim() === (freshAppStore.category || "").toLowerCase().trim(),
      policy_text_length: freshPolicyText.length,
    },
  };

  const outPath = path.join(VERIFICATION_DIR, `${slug}.json`);
  await fs.writeFile(outPath, JSON.stringify(result, null, 2), "utf-8");
  console.log(`  ✓ Saved: ${outPath}`);

  return result;
}

async function main() {
  await fs.mkdir(VERIFICATION_DIR, { recursive: true });

  const entries = await fs.readdir(APPS_DIR, { withFileTypes: true });
  const apps = [];
  for (const ent of entries) {
    if (!ent.isDirectory()) continue;
    const appJsonPath = path.join(APPS_DIR, ent.name, "app.json");
    try {
      const text = await fs.readFile(appJsonPath, "utf-8");
      const data = JSON.parse(text);
      apps.push({ slug: ent.name, data });
    } catch (e) {
      console.error(`  ✗ Failed to read ${appJsonPath}: ${e.message}`);
    }
  }

  console.log(`Found ${apps.length} apps to verify`);

  const browser = await chromium.launch({ headless: true });

  for (let i = 0; i < apps.length; i += MAX_CONCURRENT) {
    const batch = apps.slice(i, i + MAX_CONCURRENT);
    console.log(`\n=== Batch ${Math.floor(i / MAX_CONCURRENT) + 1}/${Math.ceil(apps.length / MAX_CONCURRENT)} ===`);
    await Promise.all(batch.map((a) => processApp(browser, a.slug, a.data)));
  }

  await browser.close();
  console.log(`\n✓ Verification complete. ${apps.length} apps checked.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
