import Link from "next/link";
import { ShieldQuestion } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-page/80 backdrop-blur supports-[backdrop-filter]:bg-page/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-ink hover:opacity-80">
          <ShieldQuestion className="h-6 w-6 text-brand" />
          <span className="text-base font-semibold tracking-tight">
            ShouldIDownloadThis
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            href="/browse"
            className="rounded-md px-3 py-2 text-ink-muted hover:bg-divider hover:text-ink"
          >
            Browse
          </Link>
          <Link
            href="/request"
            className="rounded-md px-3 py-2 text-ink-muted hover:bg-divider hover:text-ink"
          >
            Request an app
          </Link>
        </nav>
      </div>
    </header>
  );
}
