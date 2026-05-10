"use client";

import { Info } from "lucide-react";
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

const CIRCLE_COLOR: Record<RiskLevel, string> = {
  safe: "text-safe",
  caution: "text-caution",
  risky: "text-risky",
  dangerous: "text-danger",
  unknown: "text-unknown",
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
      className="inline-flex items-center gap-2"
      role="img"
      aria-label={`Privacy score: ${score} out of 100, ${RISK_LABEL[effectiveRisk]}`}
    >
      <div className="inline-flex items-center gap-3 rounded-full border border-line bg-surface px-3 py-1.5">
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

      <div className="group/tooltip relative flex items-center">
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
            <p className="mt-2 text-sm font-semibold text-ink">
              {score}
              <span className="text-ink-subtle">{"/100"}</span>
            </p>
          </div>
          <span className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 border-4 border-transparent border-r-line">
            <span className="absolute -left-[3px] top-1/2 -translate-y-1/2 border-[3px] border-transparent border-r-surface">
            </span>
          </span>
        </div>
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
    <svg
      height={radius * 2}
      width={radius * 2}
      className={color}
    >
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
        dy="0.1em"
        textAnchor="middle"
        className="fill-ink text-[11px] font-bold"
      >
        {score}
      </text>
    </svg>
  );
}

function segmentFill(score: number, index: number): number {
  const start = index * POINTS_PER_SEGMENT;
  const end = start + POINTS_PER_SEGMENT;
  if (score <= start) return 0;
  if (score >= end) return 1;
  return (score - start) / POINTS_PER_SEGMENT;
}
