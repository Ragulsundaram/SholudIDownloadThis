"use client";

import { GitCompareArrows, Check } from "lucide-react";
import { useCompare, COMPARE_MAX } from "./CompareProvider";

type Props = {
  slug: string;
  variant?: "icon" | "pill";
  className?: string;
};

export function CompareButton({ slug, variant = "icon", className = "" }: Props) {
  const { has, toggle, isFull, hydrated } = useCompare();
  const active = hydrated && has(slug);
  const disabled = hydrated && !active && isFull;

  const handle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    toggle(slug);
  };

  const title = disabled
    ? `Compare list full (max ${COMPARE_MAX})`
    : active
      ? "Remove from compare"
      : "Add to compare";

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handle}
        aria-pressed={active}
        aria-label={title}
        title={title}
        disabled={disabled}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
          active
            ? "border-brand bg-brand text-white"
            : "border-line bg-surface text-ink-muted hover:border-brand/40 hover:text-ink"
        } ${disabled ? "cursor-not-allowed opacity-40" : ""} ${className}`}
      >
        {active ? <Check className="h-4 w-4" /> : <GitCompareArrows className="h-4 w-4" />}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handle}
      aria-pressed={active}
      disabled={disabled}
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? "border-brand bg-brand text-white"
          : "border-line bg-surface text-ink hover:border-brand hover:text-brand"
      } ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className}`}
    >
      {active ? <Check className="h-4 w-4" /> : <GitCompareArrows className="h-4 w-4" />}
      {active ? "In compare" : "Compare"}
    </button>
  );
}
