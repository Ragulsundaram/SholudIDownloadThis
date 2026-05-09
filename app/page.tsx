import { getAllApps, getRecentlyAnalyzed } from "@/lib/getAllApps";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { AppCard } from "@/components/AppCard";
import { BrowseByConcern } from "@/components/BrowseByConcern";
import { HowItWorks } from "@/components/HowItWorks";

const TOTAL_CATEGORIES = 14;

export default async function HomePage() {
  const [allApps, recent] = await Promise.all([getAllApps(), getRecentlyAnalyzed(8)]);

  return (
    <>
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand/5 via-transparent to-transparent" />
          <div className="mx-auto max-w-3xl px-4 pb-12 pt-12 text-center sm:px-6 sm:pt-16 lg:px-8">
            <div className="mx-auto max-w-xl">
              <SearchBar apps={allApps} />
            </div>

            <h1 className="mt-6 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Before you tap <span className="text-brand">Install</span>,
              know what you&rsquo;re agreeing to.
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
              We read the privacy policy so you don&rsquo;t have to.
            </p>

            <p className="mt-5 text-xs text-ink-subtle">
              {allApps.length} app{allApps.length === 1 ? "" : "s"} analyzed
              <span className="mx-2">&middot;</span>
              {TOTAL_CATEGORIES} privacy categories tracked
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {recent.length > 0 && <RecentlyAnalyzed apps={recent} />}
          <BrowseByConcern />
          <HowItWorks />
        </div>
      </main>

      <Footer />
    </>
  );
}

function RecentlyAnalyzed({ apps }: { apps: Awaited<ReturnType<typeof getRecentlyAnalyzed>> }) {
  return (
    <section className="mt-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Recently analyzed</h2>
          <p className="mt-1 text-sm text-ink-muted">
            Latest apps we&rsquo;ve put through the policy parser.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>
    </section>
  );
}
