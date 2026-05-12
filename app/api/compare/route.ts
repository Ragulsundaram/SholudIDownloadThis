import { NextResponse } from "next/server";
import { getAppParent, getAppPlatform } from "@/lib/getApp";
import type { AppData, AppParent, Platform } from "@/lib/types";

const PLATFORM_PREFERENCE: Platform[] = ["ios", "android", "mac", "windows", "linux"];

export type CompareEntry = {
  slug: string;
  platform: Platform;
  parent: AppParent;
  data: AppData;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const appsParam = searchParams.get("apps") ?? "";
  const slugs = appsParam
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 4);

  const entries: CompareEntry[] = [];
  for (const slug of slugs) {
    const parent = await getAppParent(slug);
    if (!parent) continue;
    const platform =
      PLATFORM_PREFERENCE.find((p) => parent.platforms.includes(p)) ??
      parent.platforms[0];
    if (!platform) continue;
    const data = await getAppPlatform(slug, platform);
    if (!data) continue;
    entries.push({ slug, platform, parent, data });
  }

  return NextResponse.json({ entries });
}
