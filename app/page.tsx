import { getAllApps, getRecentlyAnalyzed } from "@/lib/getAllApps";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PaginatedAppGrid } from "@/components/PaginatedAppGrid";
import { BrowseByConcern } from "@/components/BrowseByConcern";
import { HowItWorks } from "@/components/HowItWorks";
import { Sidebar } from "@/components/Sidebar";

export default async function HomePage() {
  const [allApps, recent] = await Promise.all([getAllApps(), getRecentlyAnalyzed()]);

  return (
    <>
      <Navbar apps={allApps} />

      <main className="flex-1">
        <div className="flex gap-5 px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <Sidebar apps={allApps} />

          <div className="min-w-0 flex-1">
            {recent.length > 0 && (
              <section>
                <div className="mb-6 flex items-end justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-ink">Recently analyzed</h2>
                    <p className="mt-1 text-sm text-ink-muted">
                      Latest apps we&rsquo;ve put through the policy parser.
                    </p>
                  </div>
                </div>
                <PaginatedAppGrid apps={recent} />
              </section>
            )}
            <BrowseByConcern />
            <HowItWorks />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
