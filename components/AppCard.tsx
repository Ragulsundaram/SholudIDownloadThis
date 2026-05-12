"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Smartphone } from "lucide-react";
import type { IndexEntry } from "@/lib/types";
import { ThreatMeter } from "./ThreatMeter";
import { SafetyRatingTooltip } from "./SafetyRatingTooltip";
import { CompareButton } from "./CompareButton";

export function AppCard({ app }: { app: IndexEntry }) {
  const router = useRouter();

  return (
    <article
      className="group relative flex cursor-pointer flex-col rounded-2xl border border-line bg-surface p-5 transition-all hover:border-brand/40 hover:bg-divider/30 hover:shadow-md"
      onClick={() => router.push(`/app/${app.slug}`)}
    >
      <div className="absolute right-3 top-3">
        <CompareButton slug={app.slug} />
      </div>
      <div className="flex items-start gap-4 pr-10">
        <AppIcon iconUrl={app.icon_url} name={app.name} />
        <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
          <h3 className="text-base font-semibold leading-snug text-ink">
            {app.name}
            <SafetyRatingTooltip score={app.score} risk={app.risk} />
          </h3>
          <ThreatMeter score={app.score} />
        </div>
      </div>
    </article>
  );
}

function AppIcon({ iconUrl, name }: { iconUrl: string; name: string }) {
  if (iconUrl) {
    return (
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-line">
        <Image
          src={iconUrl}
          alt={`${name} icon`}
          fill
          sizes="48px"
          className="object-cover"
          unoptimized
        />
      </div>
    );
  }
  return (
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-divider">
      <Smartphone className="h-5 w-5 text-ink-subtle" />
    </div>
  );
}
