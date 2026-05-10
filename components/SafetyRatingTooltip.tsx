"use client";

import { Info } from "lucide-react";
import type { RiskLevel } from "@/lib/types";
import { riskFromScore } from "@/lib/risk";

const CIRCLE_COLOR: Record<RiskLevel, string> = {
  safe: "text-safe",
  caution: "text-caution",
  risky: "text-risky",
  dangerous: "text-danger",
  unknown: "text-unknown",
};

export function SafetyRatingTooltip({
  score,
  risk,
}: {
  score: number;
  risk?: RiskLevel;
}) {
  const effectiveRisk = risk ?? riskFromScore(score);

  return (
    <div className="group/tooltip relative flex flex-shrink-0 items-center">
      <button
        type="button"
        className="rounded-full p-1 text-ink-subtle transition-colors hover:bg-divider hover:text-ink"
        aria-label="Show safety rating details"
      >
        <Info className="h-3.5 w-3.5" />
      </button>

      <div className="pointer-events-none absolute left-full top-1/2 z-10 ml-2 w-40 -translate-y-1/2 rounded-xl border border-line bg-surface p-4 opacity-0 shadow-lg transition-all group-hover/tooltip:opacity-100">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
            Safety Rating
          </p>
          <div className="mt-2 flex justify-center">
            <CircleProgress
              score={score}
              color={CIRCLE_COLOR[effectiveRisk]}
            />
          </div>
        </div>
        <span className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 border-4 border-transparent border-r-line">
          <span className="absolute -left-[3px] top-1/2 -translate-y-1/2 border-[3px] border-transparent border-r-surface" />
        </span>
      </div>
    </div>
  );
}

function CircleProgress({ score, color }: { score: number; color: string }) {
  const radius = 18;
  const stroke = 4;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className={color}>
      <circle
        stroke="currentColor"
        fill="transparent"
        strokeWidth={stroke}
        strokeOpacity={0.15}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="currentColor"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-ink text-[11px] font-bold"
      >
        {score}
      </text>
    </svg>
  );
}
