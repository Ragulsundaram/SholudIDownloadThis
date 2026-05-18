import { getAllApps, getRecentlyAnalyzed } from "@/lib/getAllApps";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SortableAppGrid } from "@/components/SortableAppGrid";
import { BrowseByConcern } from "@/components/BrowseByConcern";
import { BrowseByCategory } from "@/components/BrowseByCategory";
import { HowItWorks } from "@/components/HowItWorks";
import { Sidebar } from "@/components/Sidebar";
import { ALL_CATEGORIES } from "./categories/page";

export default async function HomePage() {
  const [allApps, recent] = await Promise.all([getAllApps(), getRecentlyAnalyzed()]);
  const sidebarCategories = ALL_CATEGORIES.map((c) => c.name);

  const topSafest = [...allApps].sort((a, b) => b.score - a.score).slice(0, 5);
  const topRiskiest = [...allApps].sort((a, b) => a.score - b.score).slice(0, 5);

  return (
    <>
      <Navbar apps={allApps} categoryList={sidebarCategories} />

      <main className="flex-1">
        <div className="flex gap-5 px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
          <Sidebar apps={allApps} categoryList={sidebarCategories} />

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
                <SortableAppGrid apps={recent} />
              </section>
            )}
            <BrowseByConcern />
            <BrowseByCategory topSafest={topSafest} topRiskiest={topRiskiest} />
            <HowItWorks />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
