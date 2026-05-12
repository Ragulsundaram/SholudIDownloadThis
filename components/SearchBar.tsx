"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { Search, ArrowRight } from "lucide-react";
import type { IndexEntry } from "@/lib/types";

type Props = {
  apps: IndexEntry[];
  placeholder?: string;
};

const RISK_DOT: Record<string, string> = {
  safe: "bg-safe",
  caution: "bg-caution",
  risky: "bg-risky",
  dangerous: "bg-danger",
  unknown: "bg-unknown",
};

export function SearchBar({ apps, placeholder = "Search any app — e.g. WhatsApp, TikTok, Spotify" }: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const fuse = useMemo(
    () => new Fuse(apps, { keys: ["name", "developer", "category"], threshold: 0.4 }),
    [apps],
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).slice(0, 6).map((r) => r.item);
  }, [fuse, query]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const showDropdown = open && query.trim().length > 0;

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 shadow-sm transition-shadow focus-within:border-brand focus-within:shadow-md">
        <Search className="h-5 w-5 flex-shrink-0 text-ink-subtle" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-base text-ink placeholder:text-ink-subtle focus:outline-none"
          aria-label="Search apps"
        />
      </div>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 overflow-hidden rounded-2xl border border-line bg-surface shadow-lg">
          {results.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-sm text-ink-muted">
                We haven&rsquo;t analyzed &ldquo;{query}&rdquo; yet.
              </p>
              <Link
                href={`/request?name=${encodeURIComponent(query)}`}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover"
              >
                Request this app <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-divider">
              {results.map((app) => (
                <li key={app.slug}>
                  <Link
                    href={`/app/${app.slug}`}
                    className="flex items-center justify-between gap-4 px-5 py-3 hover:bg-divider/60"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-ink">
                        {app.name}
                      </p>
                      <p className="truncate text-xs text-ink-muted">
                        {app.developer} &middot; {app.category}
                      </p>
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5 text-[10px] font-medium text-ink-muted">
                        <span className={`h-1.5 w-1.5 rounded-full ${RISK_DOT[app.risk] ?? RISK_DOT.unknown}`} />
                        <span className="tabular-nums">{app.score}</span>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
