import type { Grade, RiskLevel } from "./types";

const RISK_RANK: Record<RiskLevel, number> = {
  unknown: 0,
  safe: 1,
  caution: 2,
  risky: 3,
  dangerous: 4,
};

export function riskFromScore(score: number): RiskLevel {
  if (score >= 85) return "safe";
  if (score >= 55) return "caution";
  if (score >= 40) return "risky";
  return "dangerous";
}

export function gradeFromScore(score: number): Grade {
  if (score >= 85) return "A";
  if (score >= 70) return "B";
  if (score >= 55) return "C";
  if (score >= 40) return "D";
  return "F";
}

export function worstRisk(levels: RiskLevel[]): RiskLevel {
  if (levels.length === 0) return "unknown";
  return levels.reduce((a, b) => (RISK_RANK[a] >= RISK_RANK[b] ? a : b));
}

export function compareRisk(a: RiskLevel, b: RiskLevel): number {
  return RISK_RANK[b] - RISK_RANK[a];
}

export const RISK_LABEL: Record<RiskLevel, string> = {
  safe: "Safe",
  caution: "Caution",
  risky: "Risky",
  dangerous: "Dangerous",
  unknown: "Unknown",
};

export const PLATFORM_LABEL: Record<string, string> = {
  ios: "iOS",
  android: "Android",
  mac: "Mac",
  windows: "Windows",
  linux: "Linux",
};
