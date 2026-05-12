import { readFile } from "node:fs/promises";
import path from "node:path";
import type { IndexEntry } from "./types";
import { compareRisk } from "./risk";

const INDEX_PATH = path.join(process.cwd(), "data", "index.json");

export async function getAllApps(): Promise<IndexEntry[]> {
  try {
    const raw = await readFile(INDEX_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as IndexEntry[]) : [];
  } catch {
    return [];
  }
}

export async function getRecentlyAnalyzed(limit = 100): Promise<IndexEntry[]> {
  const apps = await getAllApps();
  return [...apps]
    .sort((a, b) => (b.analyzed_at ?? "").localeCompare(a.analyzed_at ?? ""))
    .slice(0, limit);
}

export async function getMostDangerous(limit = 4): Promise<IndexEntry[]> {
  const apps = await getAllApps();
  return [...apps]
    .sort((a, b) => compareRisk(a.risk, b.risk))
    .filter((a) => a.risk === "dangerous" || a.risk === "risky")
    .slice(0, limit);
}

export async function getAppsByCategory(category: string): Promise<IndexEntry[]> {
  const apps = await getAllApps();
  return apps.filter((a) => a.category === category);
}
