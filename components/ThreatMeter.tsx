import type { RiskLevel } from "@/lib/types";
import { RISK_LABEL } from "@/lib/risk";

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

const FILLED_COUNT: Record<RiskLevel, number> = {
  safe: 1,
  caution: 2,
  risky: 3,
  dangerous: 4,
  unknown: 0,
};

const TOTAL_SEGMENTS = 4;

export function ThreatMeter({ risk }: { risk: RiskLevel }) {
  const filled = FILLED_COUNT[risk];

  return (
    <div
      className="inline-flex items-center gap-3 rounded-full border border-line bg-surface px-3 py-1.5"
      role="img"
      aria-label={`Threat level: ${RISK_LABEL[risk]}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
        Threat
      </span>
      <div className="flex gap-1" aria-hidden>
        {Array.from({ length: TOTAL_SEGMENTS }).map((_, i) => {
          const isFilled = i < filled;
          return (
            <span
              key={i}
              className={`h-2 w-4 rounded-[2px] ${isFilled ? FILLED_BG[risk] : "bg-line"}`}
            />
          );
        })}
      </div>
      <span
        className={`text-[11px] font-semibold uppercase tracking-wider ${LABEL_TEXT[risk]}`}
      >
        {RISK_LABEL[risk]}
      </span>
    </div>
  );
}
