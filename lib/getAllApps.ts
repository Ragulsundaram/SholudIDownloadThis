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

export async function getRecentlyAnalyzed(limit = 8): Promise<IndexEntry[]> {
  const apps = await getAllApps();
  return [...apps]
    .sort((a, b) => latestAnalyzedAt(b).localeCompare(latestAnalyzedAt(a)))
    .slice(0, limit);
}

export async function getMostDangerous(limit = 4): Promise<IndexEntry[]> {
  const apps = await getAllApps();
  return [...apps]
    .sort((a, b) => compareRisk(a.worst_risk, b.worst_risk))
    .filter((a) => a.worst_risk === "dangerous" || a.worst_risk === "risky")
    .slice(0, limit);
}

function latestAnalyzedAt(entry: IndexEntry): string {
  return entry.platforms
    .map((p) => p.analyzed_at)
    .sort()
    .at(-1) ?? "";
}
