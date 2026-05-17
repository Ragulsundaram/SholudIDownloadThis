import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight, TriangleAlert } from "lucide-react";

import { getApp, getAllSlugs } from "@/lib/getApp";
import { getAllApps } from "@/lib/getAllApps";
import { compareRisk } from "@/lib/risk";
import { deriveTrustIndicators } from "@/lib/trustIndicators";
import { categoryNameToSlug } from "@/app/categories/page";
import type { Category, Flags, Verdict } from "@/lib/types";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AppHeader } from "@/components/AppHeader";
import { VerdictHero } from "@/components/VerdictHero";
import { TabbedSections, type Tab } from "@/components/TabbedSections";
import { FlagsList } from "@/components/FlagsList";
import { CategoryCard } from "@/components/CategoryCard";
import { MetaStrip } from "@/components/MetaStrip";
import { SaferAlternatives } from "@/components/SaferAlternatives";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getApp(slug);
  if (!data) return { title: "App not found" };
  return {
    title: `${data.app.name} — privacy rating ${data.verdict.score}/100 | ShouldIDownloadThis`,
    description: data.verdict.one_liner,
  };
}

export default async function AppPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const [data, allApps] = await Promise.all([getApp(slug), getAllApps()]);
  if (!data) notFound();

  const trust = deriveTrustIndicators(data.flags.green);
  const categoriesByRisk = [...data.categories].sort((a, b) =>
    compareRisk(a.risk, b.risk),
  );

  const alternatives = allApps
    .filter(
      (a) =>
        a.slug !== slug &&
        a.category === data.app.category &&
        a.score > data.verdict.score,
    )
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const tabs: Tab[] = [
    {
      id: "overview",
      label: "Overview",
      content: <OverviewTab verdict={data.verdict} />,
    },
    {
      id: "flags",
      label: "Flags",
      content: <FlagsTab flags={data.flags} />,
    },
    {
      id: "categories",
      label: "Categories",
      content: <CategoriesTab categories={categoriesByRisk} />,
    },
    {
      id: "source",
      label: "Source",
      content: <MetaStrip meta={data.meta} appName={data.app.name} />,
    },
  ];

  return (
    <>
      <Navbar apps={allApps} />

      <main className="flex-1">
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <Breadcrumb name={data.app.name} category={data.app.category} />

          <div className="mt-6">
            <AppHeader
              slug={slug}
              name={data.app.name}
              developer={data.app.developer}
              iconUrl={data.app.icon_url}
              category={data.app.category}
              subCategory={data.app.sub_category}
              storeUrl={data.app.app_store_url}
              analyzedAt={data.meta.analyzed_at}
              trustIndicators={trust}
              risk={data.verdict.overall_risk}
              score={data.verdict.score}
            />
          </div>

          <div className="mt-8">
            <VerdictHero verdict={data.verdict} />
          </div>

          <div className="mt-3 mx-auto flex w-fit items-center gap-2 rounded-xl border border-caution-line bg-caution-soft px-4 py-3">
            <TriangleAlert className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-caution-ink" />
            <p className="text-xs leading-relaxed text-caution-ink">
              AI-generated from the published privacy policy as of {data.meta.analyzed_at}. Not legal advice.{" "}
              <Link href="/disclaimer" className="underline underline-offset-2 hover:opacity-80">
                Full disclaimer
              </Link>
            </p>
          </div>

          <div className="mt-10">
            <TabbedSections tabs={tabs} />
          </div>

          <SaferAlternatives alternatives={alternatives} />
        </div>
      </main>

      <Footer />
    </>
  );
}

function OverviewTab({ verdict }: { verdict: Verdict }) {
  return (
    <div className="space-y-4">
      <p className="text-xs uppercase tracking-wider text-ink-subtle">
        Score{" "}
        <span className="font-semibold text-ink">{verdict.score}/100</span>
        <span className="mx-2">·</span>
        Grade <span className="font-semibold text-ink">{verdict.grade}</span>
      </p>
      <p className="text-sm leading-relaxed text-ink-muted">
        {verdict.recommendation_reason}
      </p>
    </div>
  );
}

function FlagsTab({ flags }: { flags: Flags }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <FlagsList variant="red" flags={flags.red} />
      <FlagsList variant="green" flags={flags.green} />
    </div>
  );
}

function CategoriesTab({ categories }: { categories: Category[] }) {
  return (
    <div>
      <p className="mb-4 text-xs text-ink-subtle">
        Sorted by risk · tap to expand
      </p>
      <div className="md:columns-2 md:gap-x-3">
        {categories.map((category) => (
          <div key={category.id} className="mb-3 break-inside-avoid last:mb-0">
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Breadcrumb({ name, category }: { name: string; category: string }) {
  const catSlug = categoryNameToSlug(category);
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-subtle">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
        </li>
        <ChevronRight className="h-3.5 w-3.5" />
        <li>
          <Link href="/categories" className="hover:text-ink">
            Browse
          </Link>
        </li>
        <ChevronRight className="h-3.5 w-3.5" />
        <li>
          {catSlug ? (
            <Link href={`/categories/${catSlug}`} className="hover:text-ink">
              {category}
            </Link>
          ) : (
            <span>{category}</span>
          )}
        </li>
        <ChevronRight className="h-3.5 w-3.5" />
        <li className="font-medium text-ink">{name}</li>
      </ol>
    </nav>
  );
}
