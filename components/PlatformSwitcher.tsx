import Link from "next/link";
import {
  Apple,
  Bot,
  Laptop,
  AppWindow,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import type { Platform } from "@/lib/types";
import { PLATFORM_LABEL } from "@/lib/risk";

const ALL_PLATFORMS: Platform[] = ["ios", "android", "mac", "windows", "linux"];

const PLATFORM_ICON: Record<Platform, LucideIcon> = {
  ios: Apple,
  android: Bot,
  mac: Laptop,
  windows: AppWindow,
  linux: Terminal,
};

type Props = {
  slug: string;
  available: Platform[];
  current: Platform;
};

export function PlatformSwitcher({ slug, available, current }: Props) {
  return (
    <nav
      aria-label="Platforms"
      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
        Platform
      </span>
      <div className="flex flex-wrap gap-2">
        {ALL_PLATFORMS.map((p) => {
          const Icon = PLATFORM_ICON[p];
          const isAvailable = available.includes(p);
          const isCurrent = p === current;

          if (isCurrent) {
            return (
              <span
                key={p}
                className="inline-flex items-center gap-2 rounded-xl border border-ink/80 bg-ink px-4 py-2.5 text-sm font-semibold text-page shadow-sm"
                aria-current="page"
              >
                <Icon className="h-4 w-4" />
                {PLATFORM_LABEL[p]}
              </span>
            );
          }

          if (isAvailable) {
            return (
              <Link
                key={p}
                href={`/app/${slug}/${p}`}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-divider"
              >
                <Icon className="h-4 w-4" />
                {PLATFORM_LABEL[p]}
              </Link>
            );
          }

          return (
            <span
              key={p}
              className="inline-flex items-center gap-2 rounded-xl border border-dashed border-line bg-surface/40 px-4 py-2.5 text-sm font-medium text-ink-subtle"
              aria-disabled="true"
            >
              <Icon className="h-4 w-4 opacity-60" />
              {PLATFORM_LABEL[p]}
              <span className="ml-1 text-[10px] font-semibold uppercase tracking-wider opacity-70">
                soon
              </span>
            </span>
          );
        })}
      </div>
    </nav>
  );
}
