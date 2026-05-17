"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { IndexEntry } from "@/lib/types";
import { AppCard } from "./AppCard";

// xl breakpoint = 3 columns → 5 rows × 3 = 15; otherwise 16
function useItemsPerPage() {
  const [items, setItems] = useState(16);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const update = (e: MediaQueryListEvent | MediaQueryList) => {
      setItems(e.matches ? 15 : 16);
    };
    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return items;
}

function getPageFromUrl(): number {
  if (typeof window === "undefined") return 1;
  const params = new URLSearchParams(window.location.search);
  const p = parseInt(params.get("page") ?? "1", 10);
  return Number.isNaN(p) ? 1 : Math.max(1, p);
}

function setUrlPage(page: number) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (page === 1) {
    url.searchParams.delete("page");
  } else {
    url.searchParams.set("page", String(page));
  }
  window.history.replaceState(null, "", url.toString());
}

export function PaginatedAppGrid({ apps }: { apps: IndexEntry[] }) {
  const itemsPerPage = useItemsPerPage();
  const totalPages = Math.max(1, Math.ceil(apps.length / itemsPerPage));

  const getValidPage = useCallback(
    () => Math.min(getPageFromUrl(), totalPages),
    [totalPages],
  );

  const [currentPage, setCurrentPage] = useState(getValidPage);

  // Sync state when user navigates back/forward via browser buttons
  useEffect(() => {
    const onPopState = () => {
      const p = getValidPage();
      setCurrentPage(p);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [getValidPage]);

  // If the app list shrinks and current page is now out of bounds, clamp it
  useEffect(() => {
    if (currentPage > totalPages) {
      const clamped = Math.max(1, totalPages);
      setUrlPage(clamped);
      setCurrentPage(clamped);
    }
  }, [currentPage, totalPages]);

  const start = (currentPage - 1) * itemsPerPage;
  const pageApps = apps.slice(start, start + itemsPerPage);

  const goTo = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages) return;
      setUrlPage(page);
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [totalPages],
  );

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {pageApps.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>

      {totalPages > 1 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goTo}
        />
      )}
    </>
  );
}

function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages = getVisiblePages(currentPage, totalPages);

  return (
    <div className="mt-8 flex items-center justify-center gap-1.5">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-divider hover:text-ink disabled:opacity-30 disabled:hover:bg-transparent"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((page, i) =>
        page === null ? (
          <span key={`ellipsis-${i}`} className="px-2 text-sm text-ink-subtle">
            &hellip;
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-ink/10 text-ink"
                : "text-ink-muted hover:bg-divider hover:text-ink"
            }`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        ),
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-divider hover:text-ink disabled:opacity-30 disabled:hover:bg-transparent"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function getVisiblePages(current: number, total: number): (number | null)[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | null)[] = [1];

  if (current > 3) {
    pages.push(null);
  }

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) {
    pages.push(null);
  }

  if (total > 1) {
    pages.push(total);
  }

  return pages;
}
