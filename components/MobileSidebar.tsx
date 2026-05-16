"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import type { IndexEntry } from "@/lib/types";
import { SidebarContent } from "./SidebarContent";

type Props = {
  apps?: IndexEntry[];
  categoryList?: string[];
};

export function MobileSidebar({ apps = [], categoryList }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const overlay = isOpen ? (
    <div className="fixed inset-0 z-[200] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={close}
        aria-hidden="true"
      />
      {/* Panel */}
      <div
        className="absolute inset-y-0 left-0 flex w-64 flex-col border-r border-line shadow-2xl"
        style={{ backgroundColor: "var(--card)" }}
      >
        <div className="flex h-16 flex-shrink-0 items-center justify-between border-b border-line px-4">
          <span className="text-sm font-semibold text-ink">Menu</span>
          <button
            type="button"
            onClick={close}
            className="inline-flex items-center justify-center rounded-md p-2 text-ink-muted transition-colors hover:bg-divider hover:text-ink"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <SidebarContent
            apps={apps}
            categoryList={categoryList}
            onNavigate={close}
          />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center rounded-md p-2 text-ink-muted transition-colors hover:bg-divider hover:text-ink lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
