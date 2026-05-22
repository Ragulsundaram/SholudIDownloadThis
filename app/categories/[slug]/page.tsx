import { notFound } from "next/navigation";
import { getAllApps, getAppsByCategory } from "@/lib/getAllApps";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { PaginatedAppGrid } from "@/components/PaginatedAppGrid";
import { ALL_CATEGORIES, categorySlugToName } from "../page";

export async function generateStaticParams() {
  return ALL_CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryName = categorySlugToName(slug);
  if (!categoryName) notFound();

  const [allApps, apps] = await Promise.all([
    getAllApps(),
    getAppsByCategory(categoryName),
  ]);

  const sidebarCategories = ALL_CATEGORIES.map((c) => c.name);

  return (
    <>
      <Navbar apps={allApps} categoryList={sidebarCategories} />
      <main className="flex-1">
        <div className="flex gap-5 px-3 pt-4 sm:px-6 sm:pt-8 lg:px-8">
          <Sidebar apps={allApps} categoryList={sidebarCategories} />
          <div className="min-w-0 flex-1">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {categoryName}
              </h1>
              <p className="mt-1 text-xs text-ink-muted sm:text-sm">
                {apps.length === 0
                  ? "No apps analyzed in this category yet."
                  : `${apps.length} app${apps.length > 1 ? "s" : ""} analyzed.`}
              </p>
            </div>

            {apps.length > 0 ? (
              <PaginatedAppGrid apps={apps} />
            ) : (
              <div className="rounded-xl border border-line bg-surface p-6 text-center sm:rounded-2xl sm:p-8">
                <p className="text-ink-muted">
                  We haven&rsquo;t analyzed any {categoryName.toLowerCase()} apps yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
