import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-line bg-surface sm:mt-24">
      <div className="px-3 py-6 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-sm font-semibold text-ink">ShouldIDownloadThis</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
              We read the privacy policy so you don&rsquo;t have to. No accounts, no
              ads, no tracking - just answers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-2 md:gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                Site
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-ink-muted sm:gap-2.5">
                <li><Link href="/browse" className="hover:text-ink">Browse all apps</Link></li>
                <li><Link href="/request" className="hover:text-ink">Request an app</Link></li>
                <li><Link href="/compare" className="hover:text-ink">Compare apps</Link></li>
                <li><Link href="/insights" className="hover:text-ink">Privacy Insights</Link></li>
                <li><Link href="/disclaimer" className="hover:text-ink">Disclaimer</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                Principles
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-ink-muted sm:gap-2.5">
                <li>Clarity over completeness</li>
                <li>No jargon</li>
                <li>Public by default</li>
                <li>Honest ratings - no paid scores</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <p className="text-[11px] text-ink-subtle sm:text-xs">
            Ratings are AI-generated. Not legal advice.
          </p>
          <p className="text-[11px] text-ink-subtle sm:text-xs">
            © {new Date().getFullYear()} ShouldIDownloadThis
          </p>
        </div>
      </div>
    </footer>
  );
}
