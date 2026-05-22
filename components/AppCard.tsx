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
      className="group relative flex cursor-pointer flex-col rounded-xl border border-line bg-surface p-3.5 transition-all hover:border-brand/40 hover:bg-divider/30 hover:shadow-md sm:rounded-2xl sm:p-5"
      onClick={() => router.push(`/app/${app.slug}`)}
    >
      <div className="absolute right-2.5 top-2.5 sm:right-3 sm:top-3">
        <CompareButton slug={app.slug} />
      </div>
      <div className="flex items-start gap-3 pr-8 sm:gap-4 sm:pr-10">
        <AppIcon iconUrl={app.icon_url} name={app.name} />
        <div className="flex min-w-0 flex-1 flex-col items-start gap-1.5 sm:gap-2">
          <h3 className="truncate text-sm font-semibold leading-snug text-ink sm:text-base">
            {app.name}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <ThreatMeter score={app.score} />
            <SafetyRatingTooltip score={app.score} risk={app.risk} />
          </div>
        </div>
      </div>
    </article>
  );
}

function AppIcon({ iconUrl, name }: { iconUrl: string; name: string }) {
  if (iconUrl) {
    return (
      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-line sm:h-12 sm:w-12 sm:rounded-xl">
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
    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-divider sm:h-12 sm:w-12 sm:rounded-xl">
      <Smartphone className="h-4 w-4 text-ink-subtle sm:h-5 sm:w-5" />
    </div>
  );
}
