import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart2 } from "lucide-react";
import { ALL_CATEGORIES } from "@/app/categories/page";
import type { IndexEntry, RiskLevel } from "@/lib/types";

const ROW_CATEGORIES = ALL_CATEGORIES.slice(0, 6);

const SCORE_COLOR: Record<RiskLevel, string> = {
  safe: "bg-safe-soft text-safe-ink",
  caution: "bg-caution-soft text-caution-ink",
  risky: "bg-risky-soft text-risky-ink",
  dangerous: "bg-danger-soft text-danger-ink",
  unknown: "bg-divider text-ink-muted",
};

type Props = {
  topSafest: IndexEntry[];
  topRiskiest: IndexEntry[];
};

export function BrowseByCategory({ topSafest, topRiskiest }: Props) {
  return (
    <section className="mt-12 sm:mt-20">
      {/* Header */}
      <div className="mb-4 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">Browse by category</h2>
          <p className="mt-1 text-xs text-ink-muted sm:text-sm">
            See how privacy holds up across different types of apps.
          </p>
        </div>
        <Link
          href="/categories"
          className="flex items-center gap-1 text-sm text-ink-muted hover:text-ink"
        >
          All categories
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Category tiles — square, image centered */}
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
        {ROW_CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="group relative block aspect-[3/4] overflow-hidden rounded-xl transition-transform hover:scale-[1.02] sm:rounded-2xl"
            style={{ backgroundColor: cat.bgColor }}
          >
            {cat.imageUrl && (
              <Image
                src={cat.imageUrl}
                alt={cat.name}
                fill
                sizes="(min-width: 640px) 16vw, 33vw"
                className="object-cover object-right"
                unoptimized
              />
            )}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/50 to-transparent p-3">
              <span className="text-xs font-bold leading-tight text-white drop-shadow-sm">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Insights teaser — safest + riskiest */}
      <div className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
        <AppRankCard title="Safest apps" apps={topSafest} />
        <AppRankCard title="Riskiest apps" apps={topRiskiest} />
      </div>

      {/* CTA */}
      <Link
        href="/insights"
        className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-4 py-3 text-xs text-ink-muted transition-colors hover:border-brand/40 hover:bg-divider/30 hover:text-ink sm:mt-4 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-sm"
      >
        <BarChart2 className="h-4 w-4 text-brand" />
        <span>
          See the full breakdown across all apps -{" "}
          <span className="font-medium text-ink">Privacy Insights →</span>
        </span>
      </Link>
    </section>
  );
}

function AppRankCard({ title, apps }: { title: string; apps: IndexEntry[] }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-3.5 sm:rounded-2xl sm:p-5">
      <h3 className="mb-3 text-sm font-semibold text-ink">{title}</h3>
      <ol className="space-y-2">
        {apps.map((app, i) => (
          <li key={app.slug}>
            <Link
              href={`/app/${app.slug}`}
              className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition-colors hover:bg-divider"
            >
              <span className="w-4 shrink-0 text-center text-xs font-semibold text-ink-subtle">
                {i + 1}
              </span>
              <AppIcon name={app.name} iconUrl={app.icon_url} />
              <span className="flex-1 truncate text-sm text-ink">{app.name}</span>
              <span className={`shrink-0 rounded-md px-2 py-0.5 text-sm font-semibold ${SCORE_COLOR[app.risk]}`}>
                {app.score}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

function AppIcon({ name, iconUrl }: { name: string; iconUrl: string }) {
  if (iconUrl) {
    return (
      <Image
        src={iconUrl}
        alt={name}
        width={32}
        height={32}
        className="h-8 w-8 shrink-0 rounded-lg object-cover"
        unoptimized
      />
    );
  }
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-divider text-xs font-semibold text-ink-muted">
      {name.slice(0, 1).toUpperCase()}
    </div>
  );
}
