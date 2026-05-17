import { getAllSlugs, getApp } from "./getApp";
import { CONCERNS } from "./concerns";
import type { Grade, IndexEntry, RiskLevel } from "./types";

export type ScoreBucket = { label: string; min: number; max: number; count: number };
export type RedFlag = { title: string; count: number };

export type AnalyticsData = {
  totalApps: number;
  avgScore: number;
  medianScore: number;
  riskCounts: Record<RiskLevel, number>;
  gradeCounts: Record<Grade, number>;
  topSafest: IndexEntry[];
  topRiskiest: IndexEntry[];
  categoryAvgs: { category: string; avg: number; count: number }[];
  concernStats: {
    id: string;
    label: string;
    counts: Record<RiskLevel, number>;
    total: number;
  }[];
  scoreBuckets: ScoreBucket[];
  topRedFlags: RedFlag[];
  // pre-computed callout facts
  pctAdTracking: number;       // % apps risky/dangerous for ad tracking
  pctThirdParty: number;       // % apps risky/dangerous for 3rd-party sharing
  pctRequiresAccount: number;  // % apps where account_identity is required_for_core_function
  pctBackgroundAccess: number; // % apps with any background_access category
};

export async function getAnalytics(): Promise<AnalyticsData> {
  const slugs = await getAllSlugs();

  const entries: IndexEntry[] = [];
  const concernAccum: Record<string, Record<RiskLevel, number>> = {};
  const categoryAccum: Record<string, { sum: number; count: number }> = {};
  const redFlagAccum: Record<string, number> = {};

  let requiresAccountCount = 0;
  let backgroundAccessCount = 0;

  for (const c of CONCERNS) {
    concernAccum[c.id] = { safe: 0, caution: 0, risky: 0, dangerous: 0, unknown: 0 };
  }

  await Promise.all(
    slugs.map(async (slug) => {
      const data = await getApp(slug);
      if (!data) return;

      const entry: IndexEntry = {
        slug,
        name: data.app.name,
        developer: data.app.developer,
        icon_url: data.app.icon_url,
        category: data.app.category,
        description: data.app.description,
        score: data.verdict.score,
        grade: data.verdict.grade,
        risk: data.verdict.overall_risk,
        analyzed_at: data.meta.analyzed_at,
        one_liner: data.verdict.one_liner,
      };
      entries.push(entry);

      const cat = data.app.category;
      if (!categoryAccum[cat]) categoryAccum[cat] = { sum: 0, count: 0 };
      categoryAccum[cat].sum += data.verdict.score;
      categoryAccum[cat].count += 1;

      let hasBackground = false;
      for (const category of data.categories) {
        if (concernAccum[category.id]) {
          const r = category.risk ?? "unknown";
          concernAccum[category.id][r] = (concernAccum[category.id][r] ?? 0) + 1;
        }
        if (category.id === "account_identity" && category.required_for_core_function) {
          requiresAccountCount++;
        }
        if (category.background_access) hasBackground = true;
      }
      if (hasBackground) backgroundAccessCount++;

      for (const flag of data.flags?.red ?? []) {
        redFlagAccum[flag.title] = (redFlagAccum[flag.title] ?? 0) + 1;
      }
    }),
  );

  const totalApps = entries.length;
  const avgScore =
    totalApps > 0
      ? Math.round(entries.reduce((sum, e) => sum + e.score, 0) / totalApps)
      : 0;

  const sortedScores = [...entries].map((e) => e.score).sort((a, b) => a - b);
  const medianScore =
    totalApps > 0
      ? totalApps % 2 === 0
        ? Math.round((sortedScores[totalApps / 2 - 1] + sortedScores[totalApps / 2]) / 2)
        : sortedScores[Math.floor(totalApps / 2)]
      : 0;

  const riskCounts: Record<RiskLevel, number> = { safe: 0, caution: 0, risky: 0, dangerous: 0, unknown: 0 };
  const gradeCounts: Record<Grade, number> = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  for (const e of entries) {
    riskCounts[e.risk] = (riskCounts[e.risk] ?? 0) + 1;
    gradeCounts[e.grade] = (gradeCounts[e.grade] ?? 0) + 1;
  }

  const sorted = [...entries].sort((a, b) => b.score - a.score);
  const topSafest = sorted.slice(0, 5);
  const topRiskiest = [...entries].sort((a, b) => a.score - b.score).slice(0, 5);

  const categoryAvgs = Object.entries(categoryAccum)
    .map(([category, { sum, count }]) => ({ category, avg: Math.round(sum / count), count }))
    .sort((a, b) => b.avg - a.avg);

  const concernStats = CONCERNS.map((c) => {
    const counts = concernAccum[c.id];
    const total = Object.values(counts).reduce((s, n) => s + n, 0);
    return { id: c.id, label: c.label, counts, total };
  }).sort((a, b) => {
    const aR = a.total > 0 ? (a.counts.dangerous + a.counts.risky) / a.total : 0;
    const bR = b.total > 0 ? (b.counts.dangerous + b.counts.risky) / b.total : 0;
    return bR - aR;
  });

  // Score buckets: 0-9, 10-19, ..., 90-100
  const BUCKETS: ScoreBucket[] = [
    { label: "0–9", min: 0, max: 9, count: 0 },
    { label: "10–19", min: 10, max: 19, count: 0 },
    { label: "20–29", min: 20, max: 29, count: 0 },
    { label: "30–39", min: 30, max: 39, count: 0 },
    { label: "40–49", min: 40, max: 49, count: 0 },
    { label: "50–59", min: 50, max: 59, count: 0 },
    { label: "60–69", min: 60, max: 69, count: 0 },
    { label: "70–79", min: 70, max: 79, count: 0 },
    { label: "80–89", min: 80, max: 89, count: 0 },
    { label: "90–100", min: 90, max: 100, count: 0 },
  ];
  for (const e of entries) {
    const idx = Math.min(Math.floor(e.score / 10), 9);
    BUCKETS[idx].count++;
  }

  const topRedFlags = Object.entries(redFlagAccum)
    .map(([title, count]) => ({ title, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  const adTracking = concernAccum["behavioural_ad_tracking"] ?? {};
  const pctAdTracking = totalApps > 0
    ? Math.round(((adTracking.dangerous ?? 0) + (adTracking.risky ?? 0)) / totalApps * 100)
    : 0;

  const thirdParty = concernAccum["data_sharing_third_parties"] ?? {};
  const pctThirdParty = totalApps > 0
    ? Math.round(((thirdParty.dangerous ?? 0) + (thirdParty.risky ?? 0)) / totalApps * 100)
    : 0;

  const pctRequiresAccount = totalApps > 0 ? Math.round(requiresAccountCount / totalApps * 100) : 0;
  const pctBackgroundAccess = totalApps > 0 ? Math.round(backgroundAccessCount / totalApps * 100) : 0;

  return {
    totalApps, avgScore, medianScore,
    riskCounts, gradeCounts,
    topSafest, topRiskiest,
    categoryAvgs, concernStats,
    scoreBuckets: BUCKETS,
    topRedFlags,
    pctAdTracking, pctThirdParty, pctRequiresAccount, pctBackgroundAccess,
  };
}
