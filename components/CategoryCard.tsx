import { ChevronDown, AlertTriangle } from "lucide-react";
import type { Category } from "@/lib/types";
import { RiskBadge } from "./RiskBadge";
import { CategoryIcon } from "./CategoryIcon";

export function CategoryCard({ category }: { category: Category }) {
  const subtitle = formatSubtitle(category);

  return (
    <details
      name="category"
      className="group rounded-xl border border-line bg-surface"
    >
      <summary className="flex cursor-pointer list-none items-center gap-3 p-4 [&::-webkit-details-marker]:hidden">
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-divider text-ink-muted">
          <CategoryIcon name={category.icon} className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-ink">
            {category.label}
          </p>
          {subtitle && (
            <p className="truncate text-xs text-ink-subtle">{subtitle}</p>
          )}
        </div>
        <RiskBadge risk={category.risk} size="sm" />
        <ChevronDown className="h-4 w-4 flex-shrink-0 text-ink-subtle transition-transform group-open:rotate-180" />
      </summary>

      <div className="space-y-4 border-t border-divider px-4 pb-4 pt-4">
        <p className="text-sm leading-relaxed text-ink">
          {category.plain_english}
        </p>

        {category.detail && category.detail !== category.plain_english && (
          <p className="text-sm leading-relaxed text-ink-muted">
            {category.detail}
          </p>
        )}

        {category.policy_excerpt && (
          <blockquote className="rounded-lg border-l-2 border-line bg-divider/50 px-3 py-2 text-xs italic leading-relaxed text-ink-muted">
            &ldquo;{category.policy_excerpt}&rdquo;
          </blockquote>
        )}

        {category.concerns.length > 0 && (
          <ul className="space-y-1.5">
            {category.concerns.map((concern, i) => (
              <li key={i} className="flex gap-2 text-xs text-ink-muted">
                <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-caution" />
                <span>{concern}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </details>
  );
}

function formatSubtitle(c: Category): string | null {
  const parts: string[] = [];
  switch (c.access_type) {
    case "on_demand":
      parts.push("On-demand");
      break;
    case "continuous":
      parts.push("Continuous");
      break;
    case "never":
      parts.push("Not accessed");
      break;
    case null:
      break;
  }
  if (c.background_access) parts.push("background access");
  if (c.access_type === "continuous" && !c.optional_access)
    parts.push("no opt-out");
  return parts.length > 0 ? parts.join(" · ") : null;
}
