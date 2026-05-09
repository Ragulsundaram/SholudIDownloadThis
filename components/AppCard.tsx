import Link from "next/link";
import Image from "next/image";
import { Smartphone } from "lucide-react";
import type { IndexEntry, IndexPlatformEntry, RiskLevel } from "@/lib/types";
import { PLATFORM_LABEL } from "@/lib/risk";

const PLATFORM_PILL: Record<RiskLevel, string> = {
  safe: "border-safe-line text-safe-ink hover:bg-safe-soft",
  caution: "border-caution-line text-caution-ink hover:bg-caution-soft",
  risky: "border-risky-line text-risky-ink hover:bg-risky-soft",
  dangerous: "border-danger-line text-danger-ink hover:bg-danger-soft",
  unknown: "border-unknown-line text-unknown-ink hover:bg-unknown-soft",
};

const PLATFORM_DOT: Record<RiskLevel, string> = {
  safe: "bg-safe",
  caution: "bg-caution",
  risky: "bg-risky",
  dangerous: "bg-danger",
  unknown: "bg-unknown",
};

export function AppCard({ app }: { app: IndexEntry }) {
  return (
    <article className="group relative flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5 transition-shadow hover:shadow-md">
      <Link href={`/app/${app.slug}`} className="absolute inset-0 z-0" aria-label={app.name} />

      <header className="flex items-start gap-4">
        <AppIcon iconUrl={app.icon_url} name={app.name} />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-ink">{app.name}</h3>
          <p className="truncate text-sm text-ink-muted">{app.developer}</p>
          <p className="mt-0.5 truncate text-xs text-ink-subtle">{app.category}</p>
        </div>
      </header>

      <div className="relative z-10 flex flex-wrap gap-2">
        {app.platforms.map((p) => (
          <PlatformPill key={p.platform} slug={app.slug} platform={p} />
        ))}
      </div>

      <p className="text-xs italic text-ink-muted">&ldquo;{app.one_liner}&rdquo;</p>
    </article>
  );
}

function AppIcon({ iconUrl, name }: { iconUrl: string; name: string }) {
  if (iconUrl) {
    return (
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-line">
        <Image src={iconUrl} alt={`${name} icon`} fill sizes="48px" className="object-cover" unoptimized />
      </div>
    );
  }
  return (
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-divider">
      <Smartphone className="h-5 w-5 text-ink-subtle" />
    </div>
  );
}

function PlatformPill({ slug, platform }: { slug: string; platform: IndexPlatformEntry }) {
  return (
    <Link
      href={`/app/${slug}/${platform.platform}`}
      className={`inline-flex items-center gap-1.5 rounded-full border bg-surface px-2.5 py-1 text-[11px] font-medium transition-colors ${PLATFORM_PILL[platform.risk]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${PLATFORM_DOT[platform.risk]}`} aria-hidden />
      <span>{PLATFORM_LABEL[platform.platform] ?? platform.platform}</span>
      <span className="tabular-nums opacity-70">·</span>
      <span className="tabular-nums">{platform.score}</span>
    </Link>
  );
}
