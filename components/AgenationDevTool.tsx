"use client";

import { Agentation } from "agentation";

export function AgenationDevTool() {
  if (process.env.NODE_ENV !== "development") return null;
  return <Agentation />;
}
