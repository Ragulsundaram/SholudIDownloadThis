import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { Flag, Severity } from "@/lib/types";

type Variant = "red" | "green";

const SEVERITY_RANK: Record<Severity, number> = {
  high: 3,
  medium: 2,
  low: 1,
  positive: 0,
};

export function FlagsList({
  variant,
  flags,
}: {
  variant: Variant;
  flags: Flag[];
}) {
  if (flags.length === 0) return null;

  const isRed = variant === "red";
  const sorted = [...flags].sort(
    (a, b) => SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity],
  );

  const Icon = isRed ? AlertTriangle : CheckCircle2;
  const heading = isRed ? "Red flags" : "Green flags";
  const headingClass = isRed ? "text-danger-ink" : "text-safe-ink";
  const accentBorder = isRed ? "border-l-danger" : "border-l-safe";
  const iconClass = isRed ? "text-danger" : "text-safe";

  return (
    <div>
      <h3 className={`text-base font-semibold ${headingClass}`}>{heading}</h3>
      <ul className="mt-3 space-y-3">
        {sorted.map((flag) => (
          <li
            key={flag.id}
            className={`flex gap-3 rounded-xl border border-l-4 border-line bg-surface p-4 ${accentBorder}`}
          >
            <Icon
              className={`mt-0.5 h-4 w-4 flex-shrink-0 ${iconClass}`}
              aria-hidden
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-snug text-ink">
                {flag.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                {flag.plain_english}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
