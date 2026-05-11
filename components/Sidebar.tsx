import Link from "next/link";
import { ChevronRight, LayoutGrid } from "lucide-react";
import type { IndexEntry } from "@/lib/types";

type Props = {
  apps: IndexEntry[];
  categoryList?: string[];
};

export function Sidebar({ apps, categoryList }: Props) {
  const categories = categoryList ?? getUniqueCategories(apps);

  return (
    <aside className="hidden w-36 flex-shrink-0 lg:block">
      <nav className="fixed top-24 w-36 left-4 sm:left-6 lg:left-8">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-subtle">
          Categories
        </h2>

        {categories.length === 0 ? (
          // ✅ Empty state — no more blank gap
          <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-line py-6 text-center">
            <LayoutGrid className="h-5 w-5 text-ink-subtle" />
            <p className="text-xs text-ink-subtle">No categories yet</p>
          </div>
        ) : (
          <ul className="space-y-0.5">
            {categories.map((category) => (
              <li key={category}>
                {/* ✅ Added `group` so ChevronRight hover works */}
                <Link
                  href={`/categories`}
                  className="group flex items-center justify-between rounded-lg py-1.5 text-sm text-ink-muted transition-colors hover:bg-divider hover:text-ink"
                >
                  <span className="truncate">{category}</span>
                  <ChevronRight className="h-3.5 w-3.5 flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="my-3 h-px bg-line" />

        <Link
          href="/categories"
          className="group flex items-center justify-between rounded-lg py-1.5 text-sm font-medium text-brand transition-colors hover:bg-divider"
        >
          <span>All Categories</span>
          <ChevronRight className="h-4 w-4 flex-shrink-0" />
        </Link>
      </nav>
    </aside>
  );
}

function getUniqueCategories(apps: IndexEntry[]): string[] {
  const set = new Set<string>();
  for (const app of apps) {
    if (app.category) set.add(app.category);
  }
  return Array.from(set).sort();
}