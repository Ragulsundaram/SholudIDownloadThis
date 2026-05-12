import { NextResponse } from "next/server";
import { getApp } from "@/lib/getApp";
import type { AppData } from "@/lib/types";

export type CompareEntry = {
  slug: string;
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
    const data = await getApp(slug);
    if (!data) continue;
    entries.push({ slug, data });
  }

  return NextResponse.json({ entries });
}
