import { AlertTriangle, CheckCircle2, ChevronDown } from "lucide-react";
import type { Flag, Severity } from "@/lib/types";

type Variant = "red" | "green";

type Props = {
  variant: Variant;
  flags: Flag[];
};

const SEVERITY_RANK: Record<Severity, number> = {
  high: 3,
  medium: 2,
  low: 1,
  positive: 0,
};

export function FlagsList({ variant, flags }: Props) {
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
  const detailsName = isRed ? "redflag" : "greenflag";

  return (
    <div>
      <h3 className={`text-base font-semibold ${headingClass}`}>{heading}</h3>
      <ul className="mt-3 space-y-2">
        {sorted.map((flag) => (
          <li key={flag.id}>
            <details
              name={detailsName}
              className={`group rounded-xl border border-l-4 border-line bg-surface ${accentBorder}`}
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3 [&::-webkit-details-marker]:hidden">
                <Icon className={`h-4 w-4 flex-shrink-0 ${iconClass}`} />
                <span className="flex-1 text-sm font-medium leading-snug text-ink">
                  {flag.title}
                </span>
                <ChevronDown className="h-4 w-4 flex-shrink-0 text-ink-subtle transition-transform group-open:rotate-180" />
              </summary>
              <p className="border-t border-divider px-4 py-4 text-sm leading-relaxed text-ink-muted">
                {flag.plain_english}
              </p>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
