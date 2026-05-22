"use client";

import Link from "next/link";
import { useCompare } from "./CompareProvider";
import { GitCompareArrows } from "lucide-react";

type Props = { count: number; basketCount: number };

export function CompareEmpty({ count, basketCount }: Props) {
  const { slugs } = useCompare();

  if (basketCount >= 2 && count < 2) {
    const href = `/compare?apps=${slugs.join(",")}`;
    return (
      <Card>
        <GitCompareArrows className="h-10 w-10 text-brand" />
        <h2 className="text-lg font-semibold text-ink">
          {basketCount} apps ready to compare
        </h2>
        <p className="max-w-md text-sm text-ink-muted">
          Tap below to view them side-by-side.
        </p>
        <Link
          href={href}
          className="mt-2 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          <GitCompareArrows className="h-4 w-4" />
          Compare {basketCount} apps
        </Link>
      </Card>
    );
  }

  return (
    <Card dashed>
      <GitCompareArrows className="h-10 w-10 text-ink-subtle" />
      <h2 className="text-lg font-semibold text-ink">
        {count === 0 ? "Nothing to compare yet" : "Pick at least 2 apps"}
      </h2>
      <p className="max-w-md text-sm text-ink-muted">
        Tap the compare icon on any app card to add it to your basket. Add 2 to 4 apps, then come back here.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
      >
        Browse apps
      </Link>
    </Card>
  );
}

function Card({ children, dashed }: { children: React.ReactNode; dashed?: boolean }) {
  return (
    <div
      className={`mt-10 flex flex-col items-center gap-3 rounded-xl border bg-surface p-6 text-center sm:rounded-2xl sm:p-12 ${
        dashed ? "border-dashed border-line" : "border-line"
      }`}
    >
      {children}
    </div>
  );
}
