import Link from "next/link";
import { ShieldQuestion } from "lucide-react";
import type { IndexEntry } from "@/lib/types";
import { NavbarSearch } from "./NavbarSearch";
import { CompareBasket } from "./CompareBasket";
import { MobileSidebar } from "./MobileSidebar";

type Props = {
  apps?: IndexEntry[];
  categoryList?: string[];
};

export function Navbar({ apps = [], categoryList }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-page/80 backdrop-blur supports-[backdrop-filter]:bg-page/60">
      <div className="flex h-14 items-center justify-between gap-2 px-3 sm:h-16 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <MobileSidebar apps={apps} categoryList={categoryList} />
          <Link href="/" className="flex min-w-0 items-center gap-1.5 text-ink hover:opacity-80 sm:gap-2">
            <ShieldQuestion className="h-5 w-5 flex-shrink-0 text-brand sm:h-6 sm:w-6" />
            <span className="truncate text-sm font-semibold tracking-tight sm:text-base">
              ShouldIDownloadThis
            </span>
          </Link>
        </div>
        <nav className="flex flex-shrink-0 items-center gap-0.5 text-sm sm:gap-1">
          <NavbarSearch apps={apps} />
          <CompareBasket apps={apps} />
          <Link
            href="/categories"
            className="hidden rounded-md px-3 py-2 text-ink-muted hover:bg-divider hover:text-ink lg:block"
          >
            Browse
          </Link>
          <Link
            href="/request"
            className="hidden rounded-md px-3 py-2 text-ink-muted hover:bg-divider hover:text-ink lg:block"
          >
            Request an app
          </Link>
        </nav>
      </div>
    </header>
  );
}
