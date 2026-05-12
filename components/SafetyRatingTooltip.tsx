"use client";

import { useRef, useState, useEffect, useCallback } from "react";
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
  const [placement, setPlacement] = useState<"right" | "bottom">("right");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const checkPlacement = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const tooltipWidth = 160; // w-40
    const spaceOnRight = window.innerWidth - rect.right;
    if (spaceOnRight < tooltipWidth + 16) {
      setPlacement("bottom");
    } else {
      setPlacement("right");
    }
  }, []);

  useEffect(() => {
    checkPlacement();
    window.addEventListener("resize", checkPlacement);
    return () => window.removeEventListener("resize", checkPlacement);
  }, [checkPlacement]);

  const isRight = placement === "right";

  return (
    <span className="group/tooltip relative ml-1 inline-flex align-middle">
      <button
        ref={buttonRef}
        type="button"
        className="rounded-full p-0.5 text-ink-subtle transition-colors hover:bg-divider hover:text-ink"
        aria-label="Show safety rating details"
        onMouseEnter={checkPlacement}
      >
        <Info className="h-3.5 w-3.5" />
      </button>

      <div
        className={`pointer-events-none absolute z-10 w-40 rounded-xl border border-line bg-surface p-4 opacity-0 shadow-lg transition-all group-hover/tooltip:opacity-100 ${
          isRight
            ? "left-full top-1/2 ml-2 -translate-y-1/2"
            : "left-1/2 top-full mt-2 -translate-x-1/2"
        }`}
      >
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
            Safety Rating
          </p>
          <div className="mt-2 flex justify-center">
            <CircleProgress score={score} color={CIRCLE_COLOR[effectiveRisk]} />
          </div>
        </div>
        {isRight ? (
          <span className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 border-4 border-transparent border-r-line">
            <span className="absolute -left-[3px] top-1/2 -translate-y-1/2 border-[3px] border-transparent border-r-surface" />
          </span>
        ) : (
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-line">
            <span className="absolute -top-[3px] left-1/2 -translate-x-1/2 border-[3px] border-transparent border-b-surface" />
          </span>
        )}
      </div>
    </span>
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
