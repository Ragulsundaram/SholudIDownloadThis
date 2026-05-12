"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GitCompareArrows, X, Trash2, ExternalLink } from "lucide-react";
import type { IndexEntry } from "@/lib/types";
import { useCompare, COMPARE_MAX } from "./CompareProvider";

type Props = { apps?: IndexEntry[] };

export function CompareBasket({ apps: initialApps = [] }: Props) {
  const { slugs, remove, clear, hydrated } = useCompare();
  const [open, setOpen] = useState(false);
  const [apps, setApps] = useState<IndexEntry[]>(initialApps);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (apps.length > 0) return;
    let cancelled = false;
    fetch("/api/all-apps")
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled) setApps(d.apps ?? []);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [apps.length]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const selected = slugs.map((slug) => ({
    slug,
    app: apps.find((a) => a.slug === slug),
  }));

  const count = hydrated ? slugs.length : 0;
  const compareHref = `/compare?apps=${slugs.join(",")}`;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Compare basket"
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-muted hover:bg-divider hover:text-ink"
      >
        <GitCompareArrows className="h-5 w-5" />
        {count > 0 && (
          <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-semibold text-white">
            {count}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-40 mt-2 w-80 overflow-hidden rounded-xl border border-line bg-surface shadow-lg">
          <div className="flex items-start justify-between px-4 pb-2 pt-4">
            <div>
              <h3 className="text-sm font-semibold text-ink">Compare apps</h3>
              <p className="text-xs text-ink-subtle">
                {count} {count === 1 ? "app" : "apps"} (max {COMPARE_MAX})
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="-mr-1 -mt-1 rounded-md p-1 text-ink-subtle hover:bg-divider hover:text-ink"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {count === 0 ? (
            <div className="px-4 py-8 text-center text-xs text-ink-subtle">
              Tap the compare icon on any app to add it here.
            </div>
          ) : (
            <ul className="max-h-72 overflow-auto border-t border-line">
              {selected.map(({ slug, app }) => {
                const name = app?.name ?? slug;
                return (
                <li key={slug} className="flex items-center gap-3 px-4 py-2.5">
                  <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-lg border border-line bg-divider">
                    {app?.icon_url && (
                      <Image
                        src={app.icon_url}
                        alt=""
                        fill
                        sizes="36px"
                        className="object-cover"
                        unoptimized
                      />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-ink">{name}</p>
                    <p className="truncate text-xs text-ink-subtle">{app?.category ?? "Loading…"}</p>
                  </div>
                  <Link
                    href={`/app/${slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-md p-1.5 text-ink-subtle hover:bg-divider hover:text-ink"
                    aria-label={`Open ${name}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => remove(slug)}
                    className="rounded-md p-1.5 text-ink-subtle hover:bg-divider hover:text-ink"
                    aria-label={`Remove ${name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
                );
              })}
            </ul>
          )}

          {count > 0 && (
            <div className="flex flex-col gap-2 border-t border-line p-3">
              <Link
                href={count >= 2 ? compareHref : "#"}
                onClick={(e) => {
                  if (count < 2) {
                    e.preventDefault();
                    return;
                  }
                  setOpen(false);
                }}
                aria-disabled={count < 2}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                  count < 2
                    ? "cursor-not-allowed bg-divider text-ink-subtle"
                    : "bg-brand text-white hover:opacity-90"
                }`}
              >
                <GitCompareArrows className="h-4 w-4" />
                Compare Now
              </Link>
              <button
                type="button"
                onClick={clear}
                className="inline-flex items-center justify-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium text-risky-ink hover:bg-risky-soft"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Clear all
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
