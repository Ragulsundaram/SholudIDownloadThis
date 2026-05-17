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
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <MobileSidebar apps={apps} categoryList={categoryList} />
          <Link href="/" className="flex items-center gap-2 text-ink hover:opacity-80">
            <ShieldQuestion className="h-6 w-6 text-brand" />
            <span className="text-base font-semibold tracking-tight">
              ShouldIDownloadThis
            </span>
          </Link>
        </div>
        <nav className="flex items-center gap-1 text-sm">
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
