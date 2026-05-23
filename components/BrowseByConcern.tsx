import Link from "next/link";
import { CONCERNS } from "@/lib/concerns";

export function BrowseByConcern() {
  return (
    <section className="mt-12 sm:mt-20">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">Browse by concern</h2>
        <p className="mt-1 text-xs text-ink-muted sm:text-sm">
          Worried about one specific permission? Jump straight to apps that handle it best - or worst.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-7">
        {CONCERNS.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.id}
              href={`/browse?concern=${c.id}`}
              className="group flex flex-col items-center gap-1.5 rounded-xl border border-line bg-surface p-3 text-center transition-all hover:border-brand hover:shadow-sm sm:gap-2 sm:p-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-divider group-hover:bg-brand/10">
                <Icon className="h-5 w-5 text-ink-muted group-hover:text-brand" />
              </span>
              <span className="text-xs font-medium text-ink">{c.label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
