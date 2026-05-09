export type Platform = "ios" | "android" | "mac" | "windows" | "linux";

export type RiskLevel = "safe" | "caution" | "risky" | "dangerous" | "unknown";

export type Grade = "A" | "B" | "C" | "D" | "F";

export type IndexPlatformEntry = {
  platform: Platform;
  score: number;
  grade: Grade;
  risk: RiskLevel;
  analyzed_at: string;
};

export type IndexEntry = {
  slug: string;
  name: string;
  developer: string;
  icon_url: string;
  category: string;
  description: string;
  platforms: IndexPlatformEntry[];
  worst_risk: RiskLevel;
  one_liner: string;
};
