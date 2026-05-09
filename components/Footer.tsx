import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-ink">ShouldIDownloadThis</p>
            <p className="mt-2 max-w-xs text-sm text-ink-muted">
              We read the privacy policy so you don&rsquo;t have to. No accounts, no
              ads, no tracking &mdash; just answers.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
              Site
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li><Link href="/browse" className="hover:text-ink">Browse all apps</Link></li>
              <li><Link href="/request" className="hover:text-ink">Request an app</Link></li>
              <li><Link href="/compare" className="hover:text-ink">Compare apps</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
              Principles
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li>Clarity over completeness</li>
              <li>No jargon</li>
              <li>Public by default</li>
              <li>Honest ratings &mdash; no paid scores</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-ink-subtle">
          Privacy ratings are produced by an automated analysis of each app&rsquo;s
          published privacy policy and terms. Every rating can be flagged for review.
        </p>
      </div>
    </footer>
  );
}
