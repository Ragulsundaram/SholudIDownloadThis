"use client";

import { useState, useMemo } from "react";
import type { IndexEntry, RiskLevel } from "@/lib/types";
import { PaginatedAppGrid } from "./PaginatedAppGrid";

type SortKey = "recent" | "az";
type RiskFilter = RiskLevel | "all";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "recent", label: "Newest" },
  { key: "az", label: "A–Z" },
];

const RISK_FILTERS: { key: RiskFilter; label: string; dot: string }[] = [
  { key: "all", label: "All", dot: "" },
  { key: "dangerous", label: "Dangerous", dot: "bg-danger" },
  { key: "risky", label: "Risky", dot: "bg-risky" },
  { key: "caution", label: "Caution", dot: "bg-caution" },
  { key: "safe", label: "Safe", dot: "bg-safe" },
];

export function SortableAppGrid({ apps }: { apps: IndexEntry[] }) {
  const [sort, setSort] = useState<SortKey>("recent");
  const [riskFilter, setRiskFilter] = useState<RiskFilter>("all");

  const filtered = useMemo(() => {
    let list = riskFilter === "all" ? apps : apps.filter((a) => a.risk === riskFilter);

    switch (sort) {
      case "az":
        return [...list].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return [...list].sort((a, b) =>
          (b.analyzed_at ?? "").localeCompare(a.analyzed_at ?? ""),
        );
    }
  }, [apps, sort, riskFilter]);

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        {/* Risk filter chips — horizontal scroll on mobile */}
        <div className="-mx-3 overflow-x-auto scrollbar-hide px-3 sm:mx-0 sm:overflow-visible sm:px-0">
          <div className="flex gap-2 pb-1 sm:flex-wrap sm:pb-0">
            {RISK_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setRiskFilter(f.key)}
                className={`flex flex-shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  riskFilter === f.key
                    ? "border-ink/30 bg-ink/10 text-ink"
                    : "border-line bg-surface text-ink-muted hover:border-ink/20 hover:text-ink"
                }`}
              >
                {f.dot && (
                  <span className={`h-1.5 w-1.5 rounded-full ${f.dot}`} />
                )}
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort options */}
        <div className="flex items-center gap-1 self-start rounded-full border border-line bg-surface p-1 sm:self-auto">
          {SORT_OPTIONS.map((o) => (
            <button
              key={o.key}
              onClick={() => setSort(o.key)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                sort === o.key
                  ? "bg-ink/10 text-ink"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm text-ink-subtle">
          No apps match this filter.
        </p>
      ) : (
        <PaginatedAppGrid apps={filtered} />
      )}
    </div>
  );
}
