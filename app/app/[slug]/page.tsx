import { notFound, redirect } from "next/navigation";
import { getAppParent, getAllSlugs } from "@/lib/getApp";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function AppRedirectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const parent = await getAppParent(slug);
  if (!parent || parent.platforms.length === 0) notFound();
  redirect(`/app/${slug}/${parent.platforms[0]}`);
}
