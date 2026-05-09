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
  const cardBorder = isRed ? "border-danger-line" : "border-safe-line";
  const cardBg = isRed ? "bg-danger-soft" : "bg-safe-soft";
  const headingClass = isRed ? "text-danger-ink" : "text-safe-ink";
  const dotClass = isRed ? "bg-danger" : "bg-safe";

  return (
    <div
      className={`rounded-xl border ${cardBorder} ${cardBg} p-5`}
    >
      <div className="mb-4 flex items-center gap-2">
        <Icon className={`h-5 w-5 ${headingClass}`} aria-hidden />
        <h3 className={`text-base font-semibold ${headingClass}`}>{heading}</h3>
      </div>

      <ul className="space-y-3">
        {sorted.map((flag) => (
          <li key={flag.id} className="flex items-start gap-2.5">
            <span
              className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${dotClass}`}
              aria-hidden
            />
            <span className="text-sm leading-snug text-ink">
              {flag.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
