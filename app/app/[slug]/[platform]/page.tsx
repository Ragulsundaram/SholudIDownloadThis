import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

import { getAppParent, getAppPlatform, getAllSlugs } from "@/lib/getApp";
import { PLATFORM_LABEL } from "@/lib/risk";
import { deriveTrustIndicators } from "@/lib/trustIndicators";
import type { Platform } from "@/lib/types";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AppHeader } from "@/components/AppHeader";
import { PlatformSwitcher } from "@/components/PlatformSwitcher";
import { ScoreBlock } from "@/components/ScoreBlock";
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
            <ScoreBlock verdict={data.verdict} />
          </div>

          <section className="mt-12 grid gap-8 md:grid-cols-2">
            <FlagsList variant="red" flags={data.flags.red} />
            <FlagsList variant="green" flags={data.flags.green} />
          </section>

          <section className="mt-12">
            <div className="mb-5 flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                Category breakdown
              </h2>
              <p className="text-xs text-ink-subtle">
                {PLATFORM_LABEL[platform]} · tap to expand
              </p>
            </div>
            <div className="md:columns-2 md:gap-x-3">
              {data.categories.map((category) => (
                <div
                  key={category.id}
                  className="mb-3 break-inside-avoid last:mb-0"
                >
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>
          </section>

          <MetaStrip
            meta={data.meta}
            platform={platform}
            appName={data.app.name}
          />
        </div>
      </main>

      <Footer />
    </>
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
