"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CompareView } from "@/components/CompareView";
import { useCompare } from "@/components/CompareProvider";
import { CompareEmpty } from "@/components/CompareEmpty";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { CompareEntry } from "@/app/api/compare/route";
import type { IndexEntry } from "@/lib/types";

export default function ComparePageClient() {
  const searchParams = useSearchParams();
  const { slugs: basketSlugs, hydrated } = useCompare();
  const [entries, setEntries] = useState<CompareEntry[] | null>(null);
  const [apps, setApps] = useState<IndexEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const urlSlugs = (searchParams.get("apps") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const effectiveSlugs = urlSlugs.length > 0 ? urlSlugs : hydrated ? basketSlugs : [];
  const slugsKey = effectiveSlugs.join(",");

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (!hydrated && urlSlugs.length === 0) return;
    if (effectiveSlugs.length < 2) {
      setEntries([]);
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    fetch(`/api/compare?apps=${slugsKey}`)
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled) {
          setEntries(d.entries ?? []);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setEntries([]);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugsKey, hydrated]);

  return (
    <>
      <Navbar apps={apps} />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {loading ? (
            <LoadingState />
          ) : entries && entries.length >= 2 ? (
            <CompareView entries={entries} />
          ) : (
            <CompareEmpty count={effectiveSlugs.length} basketCount={basketSlugs.length} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function LoadingState() {
  return (
    <div className="mt-16 flex flex-col items-center gap-3">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-divider border-t-brand" />
      <p className="text-sm text-ink-muted">Loading comparison…</p>
    </div>
  );
}
