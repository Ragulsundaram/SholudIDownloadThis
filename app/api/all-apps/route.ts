import { NextResponse } from "next/server";
import { getAllApps } from "@/lib/getAllApps";

export async function GET() {
  const apps = await getAllApps();
  return NextResponse.json({ apps });
}
