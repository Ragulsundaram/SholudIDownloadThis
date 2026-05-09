import type { RiskLevel, Verdict } from "@/lib/types";
import { RECOMMENDATION_TITLE } from "@/lib/risk";

const ACCENT: Record<RiskLevel, string> = {
  safe: "border-l-safe",
  caution: "border-l-caution",
  risky: "border-l-risky",
  dangerous: "border-l-danger",
  unknown: "border-l-unknown",
};

const RECOMMENDATION_TEXT: Record<RiskLevel, string> = {
  safe: "text-safe-ink",
  caution: "text-caution-ink",
  risky: "text-risky-ink",
  dangerous: "text-danger-ink",
  unknown: "text-unknown-ink",
};

export function VerdictHero({ verdict }: { verdict: Verdict }) {
  return (
    <div className={`border-l-2 pl-5 ${ACCENT[verdict.overall_risk]}`}>
      <p className="text-xl font-medium leading-snug text-ink sm:text-2xl">
        {verdict.one_liner}
      </p>
      <p
        className={`mt-3 text-sm font-semibold ${RECOMMENDATION_TEXT[verdict.overall_risk]}`}
      >
        {RECOMMENDATION_TITLE[verdict.recommendation]}
      </p>
    </div>
  );
}
