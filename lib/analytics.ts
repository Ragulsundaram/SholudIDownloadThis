import { getAllSlugs, getApp } from "./getApp";
import { CONCERNS } from "./concerns";
import type { Grade, IndexEntry, RiskLevel } from "./types";

export type AnalyticsData = {
  totalApps: number;
  avgScore: number;
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
};

export async function getAnalytics(): Promise<AnalyticsData> {
  const slugs = await getAllSlugs();

  const entries: IndexEntry[] = [];
  const concernAccum: Record<string, Record<RiskLevel, number>> = {};
  const categoryAccum: Record<string, { sum: number; count: number }> = {};

  // Initialize concern accumulators
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

      // Category average
      const cat = data.app.category;
      if (!categoryAccum[cat]) categoryAccum[cat] = { sum: 0, count: 0 };
      categoryAccum[cat].sum += data.verdict.score;
      categoryAccum[cat].count += 1;

      // Concern risk counts
      for (const category of data.categories) {
        if (concernAccum[category.id]) {
          const r = category.risk ?? "unknown";
          concernAccum[category.id][r] = (concernAccum[category.id][r] ?? 0) + 1;
        }
      }
    }),
  );

  const totalApps = entries.length;
  const avgScore =
    totalApps > 0
      ? Math.round(entries.reduce((sum, e) => sum + e.score, 0) / totalApps)
      : 0;

  const riskCounts: Record<RiskLevel, number> = {
    safe: 0,
    caution: 0,
    risky: 0,
    dangerous: 0,
    unknown: 0,
  };
  const gradeCounts: Record<Grade, number> = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  for (const e of entries) {
    riskCounts[e.risk] = (riskCounts[e.risk] ?? 0) + 1;
    gradeCounts[e.grade] = (gradeCounts[e.grade] ?? 0) + 1;
  }

  const sorted = [...entries].sort((a, b) => b.score - a.score);
  const topSafest = sorted.slice(0, 5);
  const topRiskiest = [...entries].sort((a, b) => a.score - b.score).slice(0, 5);

  const categoryAvgs = Object.entries(categoryAccum)
    .map(([category, { sum, count }]) => ({
      category,
      avg: Math.round(sum / count),
      count,
    }))
    .sort((a, b) => b.avg - a.avg);

  const concernStats = CONCERNS.map((c) => {
    const counts = concernAccum[c.id];
    const total = Object.values(counts).reduce((s, n) => s + n, 0);
    return { id: c.id, label: c.label, counts, total };
  }).sort((a, b) => {
    const aRatio =
      a.total > 0 ? (a.counts.dangerous + a.counts.risky) / a.total : 0;
    const bRatio =
      b.total > 0 ? (b.counts.dangerous + b.counts.risky) / b.total : 0;
    return bRatio - aRatio;
  });

  return {
    totalApps,
    avgScore,
    riskCounts,
    gradeCounts,
    topSafest,
    topRiskiest,
    categoryAvgs,
    concernStats,
  };
}
