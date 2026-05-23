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
    title: "Privacy Insights - ShouldIDownloadThis",
    description: "Trends and statistics across all app privacy ratings on ShouldIDownloadThis.",
  };
}

const GRADE_COLOR: Record<Grade, string> = {
  A: "bg-safe", B: "bg-safe", C: "bg-caution", D: "bg-risky", F: "bg-danger",
};
const RISK_BAR: Record<RiskLevel, string> = {
  safe: "bg-safe", caution: "bg-caution", risky: "bg-risky", dangerous: "bg-danger", unknown: "bg-divider",
};
const RISK_LABEL: Record<RiskLevel, string> = {
  safe: "Safe", caution: "Caution", risky: "Risky", dangerous: "Dangerous", unknown: "Unknown",
};
const SCORE_BADGE: Record<RiskLevel, string> = {
  safe: "bg-safe-soft text-safe-ink",
  caution: "bg-caution-soft text-caution-ink",
  risky: "bg-risky-soft text-risky-ink",
  dangerous: "bg-danger-soft text-danger-ink",
  unknown: "bg-divider text-ink-muted",
};

const GRADE_ORDER: Grade[] = ["A", "B", "C", "D", "F"];
const RISK_ORDER: RiskLevel[] = ["safe", "caution", "risky", "dangerous"];

export default async function InsightsPage() {
  const [apps, analytics] = await Promise.all([getAllApps(), getAnalytics()]);
  const {
    totalApps, avgScore, medianScore,
    riskCounts, gradeCounts,
    topSafest, topRiskiest,
    categoryAvgs, concernStats,
    scoreBuckets, topRedFlags,
    pctAdTracking, pctThirdParty, pctRequiresAccount, pctBackgroundAccess,
  } = analytics;

  const riskyOrWorse = totalApps > 0
    ? Math.round((riskCounts.risky + riskCounts.dangerous) / totalApps * 100) : 0;
  const safeApps = (gradeCounts.A ?? 0) + (gradeCounts.B ?? 0);
  const maxBucket = Math.max(...scoreBuckets.map((b) => b.count), 1);

  return (
    <>
      <Navbar apps={apps} />
      <main className="mx-auto max-w-5xl px-3 py-8 sm:px-6 sm:py-12">

        {/* Heading */}
        <div className="mb-6 sm:mb-10">
          <h1 className="text-2xl font-bold text-ink sm:text-3xl">Privacy Insights</h1>
          <p className="mt-1 text-xs text-ink-muted sm:mt-2 sm:text-base">
            Trends and statistics across all {totalApps} app privacy ratings.
          </p>
        </div>

        {/* ── A. Hero stat cards ── */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:mb-8 sm:grid-cols-4 sm:gap-4">
          <StatCard label="Apps reviewed" value={String(totalApps)} />
          <StatCard label="Avg score" value={`${avgScore}/100`} />
          <StatCard label="Median score" value={`${medianScore}/100`} />
          <StatCard label="Risky or worse" value={`${riskyOrWorse}%`} valueClass="text-danger" />
        </div>

        {/* ── B. Callout facts ── */}
        <div className="mb-6 grid gap-3 sm:mb-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          <FactCard
            value={`${pctThirdParty}%`}
            label="of apps share your data with third parties"
            color="text-danger"
          />
          <FactCard
            value={`${pctAdTracking}%`}
            label="track you for behavioural advertising"
            color="text-risky"
          />
          <FactCard
            value={`${pctRequiresAccount}%`}
            label="require you to create an account"
            color="text-caution-ink"
          />
          <FactCard
            value={`${safeApps}`}
            label={`out of ${totalApps} apps score above 80 (Safe)`}
            color="text-safe"
          />
        </div>

        {/* ── C. Score distribution histogram ── */}
        <section className="mb-6 rounded-xl border border-line bg-surface p-4 sm:mb-8 sm:rounded-2xl sm:p-6">
          <h2 className="mb-1 text-base font-semibold text-ink">Score distribution</h2>
          <p className="mb-5 text-sm text-ink-muted">
            How privacy scores are spread across all reviewed apps.
          </p>
          <div className="flex items-end gap-2">
            {scoreBuckets.map((b) => {
              const heightPct = Math.round((b.count / maxBucket) * 100);
              const risk: RiskLevel =
                b.min >= 80 ? "safe"
                : b.min >= 55 ? "caution"
                : b.min >= 40 ? "risky"
                : "dangerous";
              return (
                <div key={b.label} className="flex flex-1 flex-col items-center gap-1">
                  {b.count > 0 && (
                    <span className="text-xs text-ink-subtle">{b.count}</span>
                  )}
                  <div className="w-full rounded-t-md bg-divider" style={{ height: "80px" }}>
                    <div
                      className={`w-full rounded-t-md ${RISK_BAR[risk]} transition-all`}
                      style={{ height: `${heightPct}%`, marginTop: `${100 - heightPct}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-ink-subtle">{b.label}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            {RISK_ORDER.map((r) => (
              <span key={r} className="flex items-center gap-1.5 text-xs text-ink-muted">
                <span className={`h-2.5 w-2.5 rounded-full ${RISK_BAR[r]}`} />
                {RISK_LABEL[r]}
              </span>
            ))}
          </div>
        </section>

        {/* ── D. Grade + Risk distribution ── */}
        <div className="mb-6 grid gap-4 sm:mb-8 sm:grid-cols-2 sm:gap-6">
          <section className="rounded-xl border border-line bg-surface p-4 sm:rounded-2xl sm:p-6">
            <h2 className="mb-4 text-base font-semibold text-ink">Grade distribution</h2>
            <div className="space-y-3">
              {GRADE_ORDER.map((grade) => {
                const count = gradeCounts[grade] ?? 0;
                const pct = totalApps > 0 ? (count / totalApps) * 100 : 0;
                return (
                  <div key={grade} className="flex items-center gap-3">
                    <span className="w-4 shrink-0 text-sm font-semibold text-ink">{grade}</span>
                    <div className="flex-1 overflow-hidden rounded-full bg-divider">
                      <div className={`h-3 rounded-full ${GRADE_COLOR[grade]}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="w-6 shrink-0 text-right text-sm text-ink-muted">{count}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="rounded-xl border border-line bg-surface p-4 sm:rounded-2xl sm:p-6">
            <h2 className="mb-4 text-base font-semibold text-ink">Risk distribution</h2>
            <div className="space-y-3">
              {RISK_ORDER.map((risk) => {
                const count = riskCounts[risk] ?? 0;
                const pct = totalApps > 0 ? (count / totalApps) * 100 : 0;
                return (
                  <div key={risk} className="flex items-center gap-3">
                    <span className="w-16 shrink-0 text-sm text-ink">{RISK_LABEL[risk]}</span>
                    <div className="flex-1 overflow-hidden rounded-full bg-divider">
                      <div className={`h-3 rounded-full ${RISK_BAR[risk]}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="w-6 shrink-0 text-right text-sm text-ink-muted">{count}</span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* ── E. Concern breakdown ── */}
        <section className="mb-6 rounded-xl border border-line bg-surface p-4 sm:mb-8 sm:rounded-2xl sm:p-6">
          <h2 className="mb-1 text-base font-semibold text-ink">Biggest privacy risks</h2>
          <p className="mb-5 text-sm text-ink-muted">
            How each permission category rates across all reviewed apps - sorted worst first.
          </p>
          <div className="space-y-3">
            {concernStats.map((cs) => {
              const riskyPct = cs.total > 0
                ? Math.round((cs.counts.dangerous + cs.counts.risky) / cs.total * 100) : 0;
              return (
                <div key={cs.id} className="flex items-center gap-3">
                  <span className="w-24 shrink-0 truncate text-xs text-ink sm:w-36 sm:text-sm">{cs.label}</span>
                  <div className="flex flex-1 overflow-hidden rounded-full">
                    {(["dangerous", "risky", "caution", "safe"] as RiskLevel[]).map((r) => {
                      const count = cs.counts[r] ?? 0;
                      const pct = cs.total > 0 ? (count / cs.total) * 100 : 0;
                      if (pct === 0) return null;
                      return (
                        <div
                          key={r}
                          className={`h-3 ${RISK_BAR[r]}`}
                          style={{ width: `${pct}%` }}
                          title={`${RISK_LABEL[r]}: ${count}`}
                        />
                      );
                    })}
                  </div>
                  <span className="w-14 shrink-0 text-right text-xs text-ink-muted">{riskyPct}% risky</span>
                </div>
              );
            })}
          </div>
          <div className="mt-5 flex flex-wrap gap-4">
            {RISK_ORDER.map((r) => (
              <span key={r} className="flex items-center gap-1.5 text-xs text-ink-muted">
                <span className={`h-2.5 w-2.5 rounded-full ${RISK_BAR[r]}`} />
                {RISK_LABEL[r]}
              </span>
            ))}
          </div>
        </section>

        {/* ── F. Top 5 safest + riskiest ── */}
        <div className="mb-6 grid gap-4 sm:mb-8 sm:grid-cols-2 sm:gap-6">
          <RankCard title="Safest apps" apps={topSafest} badgeColor={SCORE_BADGE} />
          <RankCard title="Riskiest apps" apps={topRiskiest} badgeColor={SCORE_BADGE} />
        </div>

        {/* ── G. Most common red flags ── */}
        {topRedFlags.length > 0 && (
          <section className="mb-6 rounded-xl border border-line bg-surface p-4 sm:mb-8 sm:rounded-2xl sm:p-6">
            <h2 className="mb-1 text-base font-semibold text-ink">Most common red flags</h2>
            <p className="mb-5 text-sm text-ink-muted">
              Issues that appear most frequently across reviewed apps.
            </p>
            <div className="space-y-2">
              {topRedFlags.map((flag) => {
                const pct = Math.round(flag.count / totalApps * 100);
                return (
                  <div key={flag.title} className="flex items-center gap-3">
                    <span className="flex-1 text-sm text-ink">{flag.title}</span>
                    <div className="w-24 overflow-hidden rounded-full bg-divider">
                      <div className="h-2 rounded-full bg-danger" style={{ width: `${Math.max(pct, 2)}%` }} />
                    </div>
                    <span className="w-16 shrink-0 text-right text-xs text-ink-muted">
                      {flag.count} app{flag.count !== 1 ? "s" : ""}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ── H. Category averages ── */}
        <section className="rounded-xl border border-line bg-surface p-4 sm:rounded-2xl sm:p-6">
          <h2 className="mb-1 text-base font-semibold text-ink">Average score by category</h2>
          <p className="mb-5 text-sm text-ink-muted">
            Mean privacy score across all apps in each category.
          </p>
          <div className="space-y-3">
            {categoryAvgs.map(({ category, avg, count }) => {
              const risk: RiskLevel = avg >= 80 ? "safe" : avg >= 55 ? "caution" : avg >= 40 ? "risky" : "dangerous";
              return (
                <div key={category} className="flex items-center gap-3">
                  <span className="w-24 shrink-0 truncate text-xs text-ink sm:w-36 sm:text-sm">{category}</span>
                  <div className="flex-1 overflow-hidden rounded-full bg-divider">
                    <div className={`h-3 rounded-full ${RISK_BAR[risk]}`} style={{ width: `${avg}%` }} />
                  </div>
                  <span className="w-20 shrink-0 text-right text-sm text-ink-muted">
                    {avg}/100
                    <span className="ml-1 text-xs text-ink-subtle">({count})</span>
                  </span>
                </div>
              );
            })}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

function StatCard({ label, value, valueClass = "text-ink" }: { label: string; value: string; valueClass?: string }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-3.5 sm:rounded-2xl sm:p-5">
      <p className="text-[10px] font-medium uppercase tracking-wide text-ink-subtle sm:text-xs">{label}</p>
      <p className={`mt-1.5 text-2xl font-bold sm:mt-2 sm:text-3xl ${valueClass}`}>{value}</p>
    </div>
  );
}

function FactCard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-3.5 sm:rounded-2xl sm:p-5">
      <p className={`text-2xl font-bold sm:text-4xl ${color}`}>{value}</p>
      <p className="mt-1.5 text-xs leading-snug text-ink-muted sm:mt-2 sm:text-sm">{label}</p>
    </div>
  );
}

function RankCard({ title, apps, badgeColor }: {
  title: string;
  apps: import("@/lib/types").IndexEntry[];
  badgeColor: Record<RiskLevel, string>;
}) {
  return (
    <section className="rounded-xl border border-line bg-surface p-4 sm:rounded-2xl sm:p-6">
      <h2 className="mb-4 text-base font-semibold text-ink">{title}</h2>
      <ol className="space-y-3">
        {apps.map((app, i) => (
          <li key={app.slug}>
            <Link href={`/app/${app.slug}`} className="flex items-center gap-3 rounded-xl px-2 py-1.5 hover:bg-divider">
              <span className="w-5 shrink-0 text-center text-sm font-semibold text-ink-subtle">{i + 1}</span>
              <AppIcon name={app.name} iconUrl={app.icon_url} />
              <span className="flex-1 truncate text-sm text-ink">{app.name}</span>
              <span className={`shrink-0 rounded-md px-2 py-0.5 text-sm font-semibold ${badgeColor[app.risk]}`}>
                {app.score}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

function AppIcon({ name, iconUrl }: { name: string; iconUrl: string }) {
  if (iconUrl) {
    return (
      <Image src={iconUrl} alt={name} width={32} height={32}
        className="h-8 w-8 shrink-0 rounded-lg object-cover" unoptimized />
    );
  }
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-divider text-xs font-semibold text-ink-muted">
      {name.slice(0, 1).toUpperCase()}
    </div>
  );
}
