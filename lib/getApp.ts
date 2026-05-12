import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import type { AppData } from "./types";

const APPS_DIR = path.join(process.cwd(), "data", "apps");

export async function getApp(slug: string): Promise<AppData | null> {
  try {
    const raw = await readFile(path.join(APPS_DIR, slug, "app.json"), "utf8");
    return JSON.parse(raw) as AppData;
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    const entries = await readdir(APPS_DIR, { withFileTypes: true });
    return entries
      .filter((e) => e.isDirectory() && !e.name.startsWith("."))
      .map((e) => e.name);
  } catch {
    return [];
  }
}
