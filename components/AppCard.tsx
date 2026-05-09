"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Smartphone,
  Bot,
  Laptop,
  AppWindow,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import type { IndexEntry, Platform } from "@/lib/types";
import { ThreatMeter } from "./ThreatMeter";

const PLATFORM_ICON: Record<Platform, LucideIcon | null> = {
  ios: null,
  android: Bot,
  mac: Laptop,
  windows: AppWindow,
  linux: Terminal,
};

export function AppCard({ app }: { app: IndexEntry }) {
  const router = useRouter();

  return (
    <article
      className="group flex cursor-pointer flex-col rounded-2xl border border-line bg-surface p-5 transition-all hover:border-brand/40 hover:bg-divider/30 hover:shadow-md"
      onClick={() => router.push(`/app/${app.slug}`)}
    >
      <div className="flex items-start gap-4">
        <AppIcon iconUrl={app.icon_url} name={app.name} />
        <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
          <h3 className="text-base font-semibold leading-snug text-ink">
            {app.name}
          </h3>
          <ThreatMeter risk={app.worst_risk} />
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        {app.platforms.map((p) => {
          const Icon = PLATFORM_ICON[p.platform];
          return (
            <button
              key={p.platform}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-1 text-xs font-medium text-ink-muted transition-colors hover:border-ink hover:text-ink"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/app/${app.slug}/${p.platform}`);
              }}
            >
              {p.platform === "ios" ? (
                <img
                  src="/ios-icon.svg"
                  alt="iOS"
                  className="h-3.5 w-3.5"
                  aria-hidden
                />
              ) : (
                Icon && <Icon className="h-3.5 w-3.5" aria-hidden />
              )}
              <span className="tabular-nums">{p.score}</span>
            </button>
          );
        })}
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
