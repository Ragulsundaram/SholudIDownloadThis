import type { RiskLevel } from "@/lib/types";
import { RISK_LABEL } from "@/lib/risk";

const STYLES: Record<RiskLevel, { bg: string; text: string; dot: string }> = {
  safe: {
    bg: "bg-safe-soft",
    text: "text-safe-ink",
    dot: "bg-safe",
  },
  caution: {
    bg: "bg-caution-soft",
    text: "text-caution-ink",
    dot: "bg-caution",
  },
  risky: {
    bg: "bg-risky-soft",
    text: "text-risky-ink",
    dot: "bg-risky",
  },
  dangerous: {
    bg: "bg-danger-soft",
    text: "text-danger-ink",
    dot: "bg-danger",
  },
  unknown: {
    bg: "bg-unknown-soft",
    text: "text-unknown-ink",
    dot: "bg-unknown",
  },
};

const SIZE = {
  sm: "text-[10px] px-2 py-0.5 gap-1",
  md: "text-xs px-2.5 py-1 gap-1.5",
} as const;

const DOT_SIZE = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
} as const;

type Props = {
  risk: RiskLevel;
  size?: "sm" | "md";
  className?: string;
};

export function RiskBadge({ risk, size = "sm", className = "" }: Props) {
  const s = STYLES[risk];
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium uppercase tracking-wider ${s.bg} ${s.text} ${SIZE[size]} ${className}`}
    >
      <span className={`rounded-full ${s.dot} ${DOT_SIZE[size]}`} aria-hidden />
      {RISK_LABEL[risk]}
    </span>
  );
}
