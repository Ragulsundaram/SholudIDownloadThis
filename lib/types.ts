export type Platform = "ios" | "android" | "mac" | "windows" | "linux";

export type RiskLevel = "safe" | "caution" | "risky" | "dangerous" | "unknown";

export type Grade = "A" | "B" | "C" | "D" | "F";

export type AccessType = "on_demand" | "continuous" | "never" | null;

export type RecommendationLevel =
  | "highly_recommended"
  | "recommended"
  | "think_twice"
  | "avoid";

export type Severity = "high" | "medium" | "low" | "positive";

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

export type AppParent = {
  slug: string;
  name: string;
  developer: string;
  icon_url: string;
  category: string;
  sub_category: string;
  description: string;
  platforms: Platform[];
  scores: Partial<
    Record<Platform, { score: number; grade: Grade; risk: RiskLevel }>
  >;
};

export type AppMeta = {
  schema_version: string;
  analyzed_at: string;
  analyzed_by: string;
  policy_url: string;
  terms_url: string;
  policy_last_updated: string;
  needs_review: boolean;
  review_notes: string;
};

export type AppInfo = {
  slug: string;
  name: string;
  developer: string;
  platform: Platform;
  app_store_url: string;
  app_store_id: string;
  icon_url: string;
  category: string;
  sub_category: string;
  description: string;
};

export type Verdict = {
  overall_risk: RiskLevel;
  score: number;
  grade: Grade;
  one_liner: string;
  summary: string;
  recommendation: RecommendationLevel;
  recommendation_reason: string;
};

export type Flag = {
  id: string;
  title: string;
  plain_english: string;
  severity: Severity;
};

export type Flags = {
  red: Flag[];
  green: Flag[];
};

export type Category = {
  id: string;
  label: string;
  icon: string;
  risk: RiskLevel;
  access_type: AccessType;
  required_for_core_function: boolean;
  optional_access: boolean;
  background_access: boolean;
  plain_english: string;
  detail: string;
  policy_excerpt: string;
  concerns: string[];
  score_impact: number;
};

export type ScoringDeduction = {
  category: string;
  risk: RiskLevel;
  max: number;
  rate: number;
  deduction: number;
};

export type Scoring = {
  base_score: number;
  max_possible_deductions?: number;
  deductions: ScoringDeduction[];
  total_deductions: number;
  final_score: number;
  grade: Grade;
};

export type AppData = {
  meta: AppMeta;
  app: AppInfo;
  verdict: Verdict;
  flags: Flags;
  categories: Category[];
  scoring: Scoring;
};
