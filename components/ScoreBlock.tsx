import { AlertCircle, AlertTriangle, CheckCircle2 } from "lucide-react";
import type { RiskLevel, Verdict } from "@/lib/types";
import { RiskBadge } from "./RiskBadge";

const BAR_COLOR: Record<RiskLevel, string> = {
  safe: "bg-safe",
  caution: "bg-caution",
  risky: "bg-risky",
  dangerous: "bg-danger",
  unknown: "bg-unknown",
};

const SCORE_TEXT: Record<RiskLevel, string> = {
  safe: "text-safe-ink",
  caution: "text-caution-ink",
  risky: "text-risky-ink",
  dangerous: "text-danger-ink",
  unknown: "text-unknown-ink",
};

const CALLOUT: Record<
  RiskLevel,
  { bg: string; border: string; ink: string; Icon: typeof AlertCircle }
> = {
  safe: {
    bg: "bg-safe-soft",
    border: "border-safe-line",
    ink: "text-safe-ink",
    Icon: CheckCircle2,
  },
  caution: {
    bg: "bg-caution-soft",
    border: "border-caution-line",
    ink: "text-caution-ink",
    Icon: AlertTriangle,
  },
  risky: {
    bg: "bg-risky-soft",
    border: "border-risky-line",
    ink: "text-risky-ink",
    Icon: AlertTriangle,
  },
  dangerous: {
    bg: "bg-danger-soft",
    border: "border-danger-line",
    ink: "text-danger-ink",
    Icon: AlertCircle,
  },
  unknown: {
    bg: "bg-unknown-soft",
    border: "border-unknown-line",
    ink: "text-unknown-ink",
    Icon: AlertCircle,
  },
};

const RECOMMENDATION_TITLE: Record<Verdict["recommendation"], string> = {
  highly_recommended: "Recommended",
  recommended: "Probably fine",
  think_twice: "Think twice before downloading",
  avoid: "Avoid if you can",
};

export function ScoreBlock({ verdict }: { verdict: Verdict }) {
  const callout = CALLOUT[verdict.overall_risk];
  const Icon = callout.Icon;
  const pct = Math.max(0, Math.min(100, verdict.score));

  return (
    <section className="grid gap-6 rounded-2xl border border-line bg-surface p-6 md:grid-cols-[minmax(0,200px)_1fr] md:gap-10 md:p-8">
      <div className="flex flex-col items-start">
        <div className="flex items-baseline gap-1">
          <span
            className={`text-6xl font-bold tabular-nums leading-none ${SCORE_TEXT[verdict.overall_risk]}`}
          >
            {verdict.score}
          </span>
          <span className="text-lg font-medium text-ink-subtle">/100</span>
        </div>

        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-divider">
          <div
            className={`h-full rounded-full ${BAR_COLOR[verdict.overall_risk]}`}
            style={{ width: `${pct}%` }}
          />
        </div>

        <p className="mt-4 text-sm text-ink-muted">
          Grade <span className="font-semibold text-ink">{verdict.grade}</span>
        </p>
        <div className="mt-2">
          <RiskBadge risk={verdict.overall_risk} size="md" />
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
          Verdict
        </span>
        <p className="mt-2 text-base font-medium leading-relaxed text-ink">
          {verdict.one_liner}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {verdict.summary}
        </p>

        <div
          className={`mt-5 flex gap-3 rounded-xl border p-4 ${callout.bg} ${callout.border}`}
        >
          <Icon className={`h-5 w-5 flex-shrink-0 ${callout.ink}`} />
          <div>
            <p className={`text-sm font-semibold ${callout.ink}`}>
              {RECOMMENDATION_TITLE[verdict.recommendation]}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">
              {verdict.recommendation_reason}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
