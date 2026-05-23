import { notFound } from "next/navigation";
import { getAllSlugs, getApp } from "@/lib/getApp";
import { getConcern } from "@/lib/concerns";
import { compareRisk } from "@/lib/risk";
import { RISK_LABEL } from "@/lib/risk";
import type { RiskLevel } from "@/lib/types";
import type { IndexEntry } from "@/lib/types";
import type { Category } from "@/lib/types";
import { ConcernAppCard } from "@/components/ConcernAppCard";

type Props = {
  searchParams: Promise<{ concern?: string }>;
};

const RISK_ORDER: RiskLevel[] = ["dangerous", "risky", "caution", "safe", "unknown"];

const RISK_DOT: Record<RiskLevel, string> = {
  dangerous: "bg-danger",
  risky: "bg-risky",
  caution: "bg-caution",
  safe: "bg-safe",
  unknown: "bg-unknown",
};

export default async function BrowseConcernPage({ searchParams }: Props) {
  const { concern: concernId } = await searchParams;

  if (!concernId) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-2xl font-semibold text-ink">Browse by concern</h1>
        <p className="mt-2 text-sm text-ink-muted">
          Select a concern from the home page to see how apps handle it.
        </p>
      </main>
    );
  }

  const concern = getConcern(concernId);
  if (!concern) notFound();

  const slugs = await getAllSlugs();
  const results: { entry: IndexEntry; category: Category | null }[] = [];

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
      const category =
        data.categories.find((c) => c.id === concernId) ?? null;
      results.push({ entry, category });
    }),
  );

  results.sort((a, b) => {
    const aRisk = a.category?.risk ?? "unknown";
    const bRisk = b.category?.risk ?? "unknown";
    return compareRisk(aRisk, bRisk);
  });

  const riskCounts = results.reduce<Record<RiskLevel, number>>(
    (acc, { category }) => {
      const r = category?.risk ?? "unknown";
      acc[r] = (acc[r] ?? 0) + 1;
      return acc;
    },
    { dangerous: 0, risky: 0, caution: 0, safe: 0, unknown: 0 },
  );

  const Icon = concern.icon;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8 flex items-start gap-4">
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-divider">
          <Icon className="h-6 w-6 text-ink" />
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-ink">{concern.label}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <span className="text-sm text-ink-muted">
              {results.length} app{results.length !== 1 ? "s" : ""} reviewed
            </span>
            <span className="text-ink-subtle">·</span>
            <div className="flex items-center gap-3">
              {RISK_ORDER.filter((r) => riskCounts[r] > 0).map((r) => (
                <span key={r} className="flex items-center gap-1.5 text-xs text-ink-muted">
                  <span className={`h-2 w-2 rounded-full ${RISK_DOT[r]}`} />
                  {riskCounts[r]} {RISK_LABEL[r]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {results.map(({ entry, category }) => (
          <ConcernAppCard
            key={entry.slug}
            app={entry}
            category={category}
            concernId={concernId}
          />
        ))}
      </div>
    </main>
  );
}

export function generateMetadata() {
  return {
    title: "Browse by concern - ShouldIDownloadThis",
  };
}

export const dynamic = "force-dynamic";
