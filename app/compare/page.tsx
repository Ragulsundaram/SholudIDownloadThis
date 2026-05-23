import { Suspense } from "react";
import ComparePageClient from "./ComparePageClient";

export const metadata = {
  title: "Compare apps - ShouldIDownloadThis",
};

export default function ComparePage() {
  return (
    <Suspense
      fallback={
        <div className="mt-16 flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-divider border-t-brand" />
          <p className="text-sm text-ink-muted">Loading comparison…</p>
        </div>
      }
    >
      <ComparePageClient />
    </Suspense>
  );
}
