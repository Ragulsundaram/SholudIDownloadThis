import Image from "next/image";
import { ExternalLink, Smartphone, ShieldCheck } from "lucide-react";
import type { RiskLevel } from "@/lib/types";
import type { TrustIndicator } from "@/lib/trustIndicators";
import { ThreatMeter } from "./ThreatMeter";

type Props = {
  name: string;
  developer: string;
  iconUrl: string;
  category: string;
  subCategory?: string;
  storeUrl?: string;
  storeLabel?: string;
  analyzedAt?: string;
  trustIndicators?: TrustIndicator[];
  risk?: RiskLevel;
};

export function AppHeader({
  name,
  developer,
  iconUrl,
  category,
  subCategory,
  storeUrl,
  storeLabel = "App Store",
  analyzedAt,
  trustIndicators = [],
  risk,
}: Props) {
  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-6">
      <AppIconLarge iconUrl={iconUrl} name={name} />

      <div className="min-w-0 flex-1">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {name}
        </h1>
        <p className="mt-1 text-base text-ink-muted">{developer}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {risk && <ThreatMeter risk={risk} />}
          <Tag>{category}</Tag>
          {subCategory && <Tag>{subCategory}</Tag>}
          <Tag>Free</Tag>
          {trustIndicators.map((t) => (
            <TrustTag key={t}>{t}</TrustTag>
          ))}
        </div>
      </div>

      {storeUrl && (
        <div className="flex flex-col items-stretch gap-2 sm:items-end">
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <ExternalLink className="h-4 w-4" />
            {storeLabel}
          </a>
          {analyzedAt && (
            <span className="text-xs text-ink-subtle">
              Analyzed {formatDate(analyzedAt)}
            </span>
          )}
        </div>
      )}
    </header>
  );
}

function AppIconLarge({ iconUrl, name }: { iconUrl: string; name: string }) {
  if (iconUrl) {
    return (
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border border-line">
        <Image
          src={iconUrl}
          alt={`${name} icon`}
          fill
          sizes="80px"
          className="object-cover"
          unoptimized
        />
      </div>
    );
  }
  return (
    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-divider">
      <Smartphone className="h-8 w-8 text-ink-subtle" />
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line px-2 py-0.5 text-[11px] font-medium text-ink-muted">
      {children}
    </span>
  );
}

function TrustTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-safe-line bg-safe-soft px-2 py-0.5 text-[11px] font-medium text-safe-ink">
      <ShieldCheck className="h-3 w-3" />
      {children}
    </span>
  );
}

function formatDate(value: string): string {
  if (!value || value === "unknown") return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
