"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Smartphone } from "lucide-react";
import type { IndexEntry } from "@/lib/types";
import { ThreatMeter } from "./ThreatMeter";
import { SafetyRatingTooltip } from "./SafetyRatingTooltip";
import { CompareButton } from "./CompareButton";

type Props = {
  alternatives: IndexEntry[];
};

export function SaferAlternatives({ alternatives }: Props) {
  if (alternatives.length === 0) return null;

  return (
    <section className="mt-10">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-ink">Safer alternatives</h2>
        <p className="mt-0.5 text-sm text-ink-muted">
          Apps in the same category with a better privacy score.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {alternatives.map((app) => (
          <AlternativeCard key={app.slug} app={app} />
        ))}
      </div>
    </section>
  );
}

function AlternativeCard({ app }: { app: IndexEntry }) {
  const router = useRouter();

  return (
    <article
      className="group relative flex cursor-pointer items-center gap-3 rounded-2xl border border-line bg-surface p-4 transition-all hover:border-brand/40 hover:bg-divider/30 hover:shadow-sm"
      onClick={() => router.push(`/app/${app.slug}`)}
    >
      <div className="absolute right-3 top-3">
        <CompareButton slug={app.slug} />
      </div>

      <AppIcon iconUrl={app.icon_url} name={app.name} />

      <div className="min-w-0 flex-1 pr-8">
        <p className="truncate text-sm font-semibold text-ink">{app.name}</p>
        <div className="mt-1.5 flex items-center gap-2">
          <ThreatMeter score={app.score} />
          <SafetyRatingTooltip score={app.score} risk={app.risk} />
        </div>
      </div>
    </article>
  );
}

function AppIcon({ iconUrl, name }: { iconUrl: string; name: string }) {
  if (iconUrl) {
    return (
      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl border border-line">
        <Image
          src={iconUrl}
          alt={`${name} icon`}
          fill
          sizes="40px"
          className="object-cover"
          unoptimized
        />
      </div>
    );
  }
  return (
    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-divider">
      <Smartphone className="h-4 w-4 text-ink-subtle" />
    </div>
  );
}
