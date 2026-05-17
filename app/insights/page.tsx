import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getAllApps } from "@/lib/getAllApps";
import { getAnalytics } from "@/lib/analytics";
import type { Grade, RiskLevel } from "@/lib/types";

export const dynamic = "force-dynamic";

export function generateMetadata() {
  return {
    title: "Privacy Insights — ShouldIDownloadThis",
    description:
      "Trends and statistics across all app privacy ratings on ShouldIDownloadThis.",
  };
}

// ── helpers ────────────────────────────────────────────────────────────────

const GRADE_COLOR: Record<Grade, string> = {
  A: "bg-safe",
  B: "bg-safe",
  C: "bg-caution",
  D: "bg-risky",
  F: "bg-danger",
};

const RISK_BAR_COLOR: Record<RiskLevel, string> = {
  safe: "bg-safe",
  caution: "bg-caution",
  risky: "bg-risky",
  dangerous: "bg-danger",
  unknown: "bg-unknown",
};

const RISK_LABEL: Record<RiskLevel, string> = {
  safe: "Safe",
  caution: "Caution",
  risky: "Risky",
  dangerous: "Dangerous",
  unknown: "Unknown",
};

const GRADE_ORDER: Grade[] = ["A", "B", "C", "D", "F"];
const RISK_ORDER: RiskLevel[] = ["safe", "caution", "risky", "dangerous"];

// ── page ───────────────────────────────────────────────────────────────────

export default async function InsightsPage() {
  const [apps, analytics] = await Promise.all([getAllApps(), getAnalytics()]);

  const {
    totalApps,
    avgScore,
    riskCounts,
    gradeCounts,
    topSafest,
    topRiskiest,
    categoryAvgs,
    concernStats,
  } = analytics;

  const riskyOrWorse =
    totalApps > 0
      ? Math.round(
          ((riskCounts.risky + riskCounts.dangerous) / totalApps) * 100,
        )
      : 0;
  const safeApps = (gradeCounts.A ?? 0) + (gradeCounts.B ?? 0);

  return (
    <>
      <Navbar apps={apps} />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        {/* Page heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-ink">Privacy Insights</h1>
          <p className="mt-2 text-base text-ink-muted">
            Trends and statistics across all {totalApps} app privacy ratings.
          </p>
        </div>

        {/* ── A. Hero stat cards ─────────────────────────────────────────── */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard label="Apps reviewed" value={String(totalApps)} />
          <StatCard label="Avg privacy score" value={`${avgScore}/100`} />
          <StatCard
            label="Risky or worse"
            value={`${riskyOrWorse}%`}
            valueClass="text-danger"
          />
          <StatCard
            label="Safe apps (A or B)"
            value={String(safeApps)}
            valueClass="text-safe"
          />
        </div>

        {/* ── B. Score breakdown ─────────────────────────────────────────── */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2">
          {/* Grade distribution */}
          <section className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="mb-4 text-base font-semibold text-ink">
              Grade distribution
            </h2>
            <div className="space-y-3">
              {GRADE_ORDER.map((grade) => {
                const count = gradeCounts[grade] ?? 0;
                const pct = totalApps > 0 ? (count / totalApps) * 100 : 0;
                return (
                  <div key={grade} className="flex items-center gap-3">
                    <span className="w-4 shrink-0 text-sm font-semibold text-ink">
                      {grade}
                    </span>
                    <div className="flex-1 overflow-hidden rounded-full bg-divider">
                      <div
                        className={`h-3 rounded-full ${GRADE_COLOR[grade]}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-6 shrink-0 text-right text-sm text-ink-muted">
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Risk distribution */}
          <section className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="mb-4 text-base font-semibold text-ink">
              Risk distribution
            </h2>
            <div className="space-y-3">
              {RISK_ORDER.map((risk) => {
                const count = riskCounts[risk] ?? 0;
                const pct = totalApps > 0 ? (count / totalApps) * 100 : 0;
                return (
                  <div key={risk} className="flex items-center gap-3">
                    <span className="w-16 shrink-0 text-sm text-ink">
                      {RISK_LABEL[risk]}
                    </span>
                    <div className="flex-1 overflow-hidden rounded-full bg-divider">
                      <div
                        className={`h-3 rounded-full ${RISK_BAR_COLOR[risk]}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-6 shrink-0 text-right text-sm text-ink-muted">
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* ── C. Concern breakdown ───────────────────────────────────────── */}
        <section className="mb-8 rounded-2xl border border-line bg-surface p-6">
          <h2 className="mb-1 text-base font-semibold text-ink">
            Biggest privacy risks
          </h2>
          <p className="mb-5 text-sm text-ink-muted">
            How each concern category rates across all reviewed apps.
          </p>
          <div className="space-y-3">
            {concernStats.map((cs) => {
              const riskyPct =
                cs.total > 0
                  ? Math.round(
                      ((cs.counts.dangerous + cs.counts.risky) / cs.total) *
                        100,
                    )
                  : 0;
              return (
                <div key={cs.id} className="flex items-center gap-3">
                  <span className="w-36 shrink-0 truncate text-sm text-ink">
                    {cs.label}
                  </span>
                  <div className="flex flex-1 overflow-hidden rounded-full">
                    {(
                      [
                        "dangerous",
                        "risky",
                        "caution",
                        "safe",
                      ] as RiskLevel[]
                    ).map((r) => {
                      const count = cs.counts[r] ?? 0;
                      const pct =
                        cs.total > 0 ? (count / cs.total) * 100 : 0;
                      if (pct === 0) return null;
                      return (
                        <div
                          key={r}
                          className={`h-3 ${RISK_BAR_COLOR[r]}`}
                          style={{ width: `${pct}%` }}
                          title={`${RISK_LABEL[r]}: ${count}`}
                        />
                      );
                    })}
                  </div>
                  <span className="w-12 shrink-0 text-right text-xs text-ink-muted">
                    {riskyPct}% risky
                  </span>
                </div>
              );
            })}
          </div>
          {/* Legend */}
          <div className="mt-5 flex flex-wrap gap-4">
            {RISK_ORDER.map((r) => (
              <span key={r} className="flex items-center gap-1.5 text-xs text-ink-muted">
                <span className={`h-2.5 w-2.5 rounded-full ${RISK_BAR_COLOR[r]}`} />
                {RISK_LABEL[r]}
              </span>
            ))}
          </div>
        </section>

        {/* ── D. Top 5 safest & riskiest ─────────────────────────────────── */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2">
          <section className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="mb-4 text-base font-semibold text-ink">
              Safest apps
            </h2>
            <ol className="space-y-3">
              {topSafest.map((app, i) => (
                <li key={app.slug}>
                  <Link
                    href={`/app/${app.slug}`}
                    className="flex items-center gap-3 rounded-xl px-2 py-1.5 hover:bg-divider"
                  >
                    <span className="w-5 shrink-0 text-center text-sm font-semibold text-ink-subtle">
                      {i + 1}
                    </span>
                    <AppIcon name={app.name} iconUrl={app.icon_url} />
                    <span className="flex-1 truncate text-sm text-ink">
                      {app.name}
                    </span>
                    <ScoreBadge score={app.score} risk={app.risk} />
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="mb-4 text-base font-semibold text-ink">
              Riskiest apps
            </h2>
            <ol className="space-y-3">
              {topRiskiest.map((app, i) => (
                <li key={app.slug}>
                  <Link
                    href={`/app/${app.slug}`}
                    className="flex items-center gap-3 rounded-xl px-2 py-1.5 hover:bg-divider"
                  >
                    <span className="w-5 shrink-0 text-center text-sm font-semibold text-ink-subtle">
                      {i + 1}
                    </span>
                    <AppIcon name={app.name} iconUrl={app.icon_url} />
                    <span className="flex-1 truncate text-sm text-ink">
                      {app.name}
                    </span>
                    <ScoreBadge score={app.score} risk={app.risk} />
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* ── E. Category averages ───────────────────────────────────────── */}
        <section className="rounded-2xl border border-line bg-surface p-6">
          <h2 className="mb-1 text-base font-semibold text-ink">
            Average score by category
          </h2>
          <p className="mb-5 text-sm text-ink-muted">
            Mean privacy score across all apps in each category.
          </p>
          <div className="space-y-3">
            {categoryAvgs.map(({ category, avg, count }) => (
              <div key={category} className="flex items-center gap-3">
                <span className="w-40 shrink-0 truncate text-sm text-ink">
                  {category}
                </span>
                <div className="flex-1 overflow-hidden rounded-full bg-divider">
                  <div
                    className="h-3 rounded-full bg-brand"
                    style={{ width: `${avg}%` }}
                  />
                </div>
                <span className="w-16 shrink-0 text-right text-sm text-ink-muted">
                  {avg}/100
                  <span className="ml-1 text-xs text-ink-subtle">
                    ({count})
                  </span>
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ── sub-components (co-located; no client state needed) ────────────────────

function StatCard({
  label,
  value,
  valueClass = "text-ink",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5">
      <p className="text-xs font-medium uppercase tracking-wide text-ink-subtle">
        {label}
      </p>
      <p className={`mt-2 text-3xl font-bold ${valueClass}`}>{value}</p>
    </div>
  );
}

function AppIcon({ name, iconUrl }: { name: string; iconUrl: string }) {
  if (iconUrl) {
    return (
      <Image
        src={iconUrl}
        alt={name}
        width={32}
        height={32}
        className="h-8 w-8 shrink-0 rounded-lg object-cover"
        unoptimized
      />
    );
  }
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-divider text-xs font-semibold text-ink-muted">
      {name.slice(0, 1).toUpperCase()}
    </div>
  );
}

const SCORE_BADGE_COLOR: Record<RiskLevel, string> = {
  safe: "bg-safe-soft text-safe-ink",
  caution: "bg-caution-soft text-caution-ink",
  risky: "bg-risky-soft text-risky-ink",
  dangerous: "bg-danger-soft text-danger-ink",
  unknown: "bg-unknown-soft text-unknown-ink",
};

function ScoreBadge({ score, risk }: { score: number; risk: RiskLevel }) {
  return (
    <span
      className={`shrink-0 rounded-md px-2 py-0.5 text-sm font-semibold ${SCORE_BADGE_COLOR[risk]}`}
    >
      {score}
    </span>
  );
}
