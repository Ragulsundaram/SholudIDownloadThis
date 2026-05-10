import type { RiskLevel } from "@/lib/types";
import { RISK_LABEL, riskFromScore } from "@/lib/risk";

const FILLED_BG: Record<RiskLevel, string> = {
  safe: "bg-safe",
  caution: "bg-caution",
  risky: "bg-risky",
  dangerous: "bg-danger",
  unknown: "bg-unknown",
};

const LABEL_TEXT: Record<RiskLevel, string> = {
  safe: "text-safe-ink",
  caution: "text-caution-ink",
  risky: "text-risky-ink",
  dangerous: "text-danger-ink",
  unknown: "text-unknown-ink",
};

const TOTAL_SEGMENTS = 5;
const POINTS_PER_SEGMENT = 100 / TOTAL_SEGMENTS;

export function ThreatMeter({
  score,
  risk,
}: {
  score: number;
  risk?: RiskLevel;
}) {
  const effectiveRisk = risk ?? riskFromScore(score);

  return (
    <div
      className="inline-flex items-center gap-3 rounded-full border border-line bg-surface px-3 py-1.5"
      role="img"
      aria-label={`Privacy score: ${score} out of 100, ${RISK_LABEL[effectiveRisk]}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
        Threat
      </span>
      <div className="flex gap-1" aria-hidden>
        {Array.from({ length: TOTAL_SEGMENTS }).map((_, i) => {
          const fill = segmentFill(score, i);
          return (
            <span
              key={i}
              className="relative h-2 w-4 overflow-hidden rounded-[2px] bg-line"
            >
              {fill > 0 && (
                <span
                  className={`absolute inset-y-0 left-0 ${FILLED_BG[effectiveRisk]}`}
                  style={{ width: `${fill * 100}%` }}
                />
              )}
            </span>
          );
        })}
      </div>
      <span
        className={`text-[11px] font-semibold uppercase tracking-wider ${LABEL_TEXT[effectiveRisk]}`}
      >
        {RISK_LABEL[effectiveRisk]}
      </span>
    </div>
  );
}

function segmentFill(score: number, index: number): number {
  const start = index * POINTS_PER_SEGMENT;
  const end = start + POINTS_PER_SEGMENT;
  if (score <= start) return 0;
  if (score >= end) return 1;
  return (score - start) / POINTS_PER_SEGMENT;
}
