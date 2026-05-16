#!/usr/bin/env node
// update-index-from-apps.mjs — Rebuild data/index.json from all app.json files.
//
// Usage: node scripts/update-index-from-apps.mjs
//
// Reads every data/apps/{slug}/app.json and produces a fresh index.json
// with the current score, grade, risk, and analyzed_at values.

import fs from "fs";
import path from "path";

const APPS_DIR = path.join(process.cwd(), "data", "apps");
const INDEX_PATH = path.join(process.cwd(), "data", "index.json");

function readJson(p) {
  try {
    return JSON.parse(fs.readFileSync(p, "utf-8"));
  } catch {
    return null;
  }
}

function buildIndex() {
  const entries = [];
  const dirs = fs.readdirSync(APPS_DIR, { withFileTypes: true });

  for (const ent of dirs) {
    if (!ent.isDirectory()) continue;
    const appJsonPath = path.join(APPS_DIR, ent.name, "app.json");
    const data = readJson(appJsonPath);
    if (!data) continue;

    const app = data.app || {};
    const meta = data.meta || {};
    const verdict = data.verdict || {};

    entries.push({
      slug: app.slug || ent.name,
      name: app.name || "",
      developer: app.developer || "",
      icon_url: app.icon_url || "",
      category: app.category || "",
      description: app.description || "",
      one_liner: verdict.one_liner || "",
      score: verdict.score ?? 0,
      grade: verdict.grade || "F",
      risk: verdict.overall_risk || "unknown",
      analyzed_at: meta.analyzed_at || "",
      needs_review: meta.needs_review || false,
    });
  }

  entries.sort((a, b) => a.name.localeCompare(b.name));
  fs.writeFileSync(INDEX_PATH, JSON.stringify(entries, null, 2), "utf-8");
  console.log(`✓ Updated ${INDEX_PATH} with ${entries.length} apps`);

  const reviewApps = entries.filter((e) => e.needs_review);
  if (reviewApps.length > 0) {
    console.log(`\n⚠ ${reviewApps.length} app(s) marked needs_review:`);
    for (const a of reviewApps) {
      console.log(`  - ${a.name} (${a.slug})`);
    }
  }
}

buildIndex();
