"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Fuse from "fuse.js";
import { Search, X, ArrowRight } from "lucide-react";
import type { IndexEntry } from "@/lib/types";
import { riskFromScore } from "@/lib/risk";

type Props = {
  apps: IndexEntry[];
};

export function NavbarSearch({ apps }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
        setExpanded(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (expanded) {
      inputRef.current?.focus();
    }
  }, [expanded]);

  const showDropdown = expanded && query.trim().length > 0;

  return (
    <div ref={containerRef} className="relative flex items-center">
      {!expanded ? (
        <button
          onClick={() => setExpanded(true)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-divider hover:text-ink"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
      ) : (
        <div className="flex items-center">
          <div className="relative">
            <div className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 shadow-sm focus-within:border-brand">
              <Search className="h-4 w-4 flex-shrink-0 text-ink-subtle" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search apps…"
                className="w-48 bg-transparent text-sm text-ink placeholder:text-ink-subtle focus:outline-none sm:w-64"
                aria-label="Search apps"
              />
            </div>

            {showDropdown && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-xl border border-line bg-surface shadow-lg">
                {results.length === 0 ? (
                  <div className="p-5 text-center">
                    <p className="text-sm text-ink-muted">
                      We haven&rsquo;t analyzed &ldquo;{query}&rdquo; yet.
                    </p>
                    <Link
                      href={`/request?name=${encodeURIComponent(query)}`}
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover"
                      onClick={() => { setExpanded(false); setQuery(""); }}
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
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-divider/60"
                          onClick={() => { setExpanded(false); setQuery(""); }}
                        >
                          <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl border border-line">
                            {app.icon_url ? (
                              <Image
                                src={app.icon_url}
                                alt={`${app.name} icon`}
                                fill
                                sizes="40px"
                                className="object-cover"
                                unoptimized
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-divider">
                                <span className="text-[10px] text-ink-subtle">?</span>
                              </div>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-ink">
                              {app.name}
                            </p>
                            <p className="truncate text-xs text-ink-muted">
                              {app.developer}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <SmallCircleScore score={app.score} />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
          <button
            onClick={() => { setExpanded(false); setQuery(""); }}
            className="ml-1 flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle transition-colors hover:bg-divider hover:text-ink"
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}

function SmallCircleScore({ score }: { score: number }) {
  const risk = riskFromScore(score);
  const color =
    risk === "safe"
      ? "text-safe"
      : risk === "caution"
        ? "text-caution"
        : risk === "risky"
          ? "text-risky"
          : risk === "dangerous"
            ? "text-danger"
            : "text-unknown";

  const radius = 14;
  const stroke = 3;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className={color}>
      <circle
        stroke="currentColor"
        fill="transparent"
        strokeWidth={stroke}
        strokeOpacity={0.15}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="currentColor"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-ink text-[8px] font-bold"
      >
        {score}
      </text>
    </svg>
  );
}

