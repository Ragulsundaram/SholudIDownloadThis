import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

import { getAppParent, getAppPlatform, getAllSlugs } from "@/lib/getApp";
import { PLATFORM_LABEL, compareRisk } from "@/lib/risk";
import { deriveTrustIndicators } from "@/lib/trustIndicators";
import type { Category, Flags, Platform, Verdict, AppMeta } from "@/lib/types";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AppHeader } from "@/components/AppHeader";
import { PlatformSwitcher } from "@/components/PlatformSwitcher";
import { VerdictHero } from "@/components/VerdictHero";
import { TabbedSections, type Tab } from "@/components/TabbedSections";
import { FlagsList } from "@/components/FlagsList";
import { CategoryCard } from "@/components/CategoryCard";
import { MetaStrip } from "@/components/MetaStrip";

const PLATFORMS: Platform[] = ["ios", "android", "mac", "windows", "linux"];

type Params = { slug: string; platform: string };

function isPlatform(value: string): value is Platform {
  return (PLATFORMS as string[]).includes(value);
}

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getAllSlugs();
  const out: Params[] = [];
  for (const slug of slugs) {
    const parent = await getAppParent(slug);
    if (!parent) continue;
    for (const platform of parent.platforms) {
      out.push({ slug, platform });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, platform } = await params;
  if (!isPlatform(platform)) return { title: "App not found" };
  const data = await getAppPlatform(slug, platform);
  if (!data) return { title: "App not found" };
  return {
    title: `${data.app.name} on ${PLATFORM_LABEL[platform]} — privacy rating ${data.verdict.score}/100 | ShouldIDownloadThis`,
    description: data.verdict.one_liner,
  };
}

export default async function AppPlatformPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, platform } = await params;
  if (!isPlatform(platform)) notFound();

  const [parent, data] = await Promise.all([
    getAppParent(slug),
    getAppPlatform(slug, platform),
  ]);
  if (!parent || !data) notFound();

  const trust = deriveTrustIndicators(data.flags.green);
  const categoriesByRisk = [...data.categories].sort((a, b) =>
    compareRisk(a.risk, b.risk),
  );

  const tabs: Tab[] = [
    {
      id: "overview",
      label: "Overview",
      content: <OverviewTab verdict={data.verdict} />,
    },
    {
      id: "flags",
      label: `Flags · ${data.flags.red.length + data.flags.green.length}`,
      content: <FlagsTab flags={data.flags} />,
    },
    {
      id: "categories",
      label: `Categories · ${data.categories.length}`,
      content: (
        <CategoriesTab
          categories={categoriesByRisk}
          platform={platform}
        />
      ),
    },
    {
      id: "source",
      label: "Source",
      content: (
        <MetaStrip
          meta={data.meta}
          platform={platform}
          appName={data.app.name}
        />
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <Breadcrumb name={data.app.name} category={data.app.category} />

          <div className="mt-6">
            <AppHeader
              name={data.app.name}
              developer={data.app.developer}
              iconUrl={data.app.icon_url || parent.icon_url}
              category={data.app.category}
              subCategory={data.app.sub_category}
              storeUrl={data.app.app_store_url}
              analyzedAt={data.meta.analyzed_at}
              trustIndicators={trust}
              risk={data.verdict.overall_risk}
            />
          </div>

          <div className="mt-8">
            <PlatformSwitcher
              slug={slug}
              available={parent.platforms}
              current={platform}
            />
          </div>

          <div className="mt-8">
            <VerdictHero verdict={data.verdict} />
          </div>

          <div className="mt-10">
            <TabbedSections tabs={tabs} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function OverviewTab({ verdict }: { verdict: Verdict }) {
  return (
    <div className="max-w-3xl space-y-5">
      <p className="text-xs uppercase tracking-wider text-ink-subtle">
        Score{" "}
        <span className="font-semibold text-ink">{verdict.score}/100</span>
        <span className="mx-2">·</span>
        Grade <span className="font-semibold text-ink">{verdict.grade}</span>
      </p>
      <p className="text-base leading-relaxed text-ink">{verdict.summary}</p>
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

function CategoriesTab({
  categories,
  platform,
}: {
  categories: Category[];
  platform: Platform;
}) {
  return (
    <div>
      <p className="mb-4 text-xs text-ink-subtle">
        {PLATFORM_LABEL[platform]} · sorted by risk · tap to expand
      </p>
      <div className="md:columns-2 md:gap-x-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="mb-3 break-inside-avoid last:mb-0"
          >
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Breadcrumb({ name, category }: { name: string; category: string }) {
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
          <Link href="/browse" className="hover:text-ink">
            Browse
          </Link>
        </li>
        <ChevronRight className="h-3.5 w-3.5" />
        <li>
          <Link
            href={`/browse?category=${encodeURIComponent(category)}`}
            className="hover:text-ink"
          >
            {category}
          </Link>
        </li>
        <ChevronRight className="h-3.5 w-3.5" />
        <li className="font-medium text-ink">{name}</li>
      </ol>
    </nav>
  );
}
