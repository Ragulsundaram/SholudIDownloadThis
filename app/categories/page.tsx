import Link from "next/link";
import Image from "next/image";
import { getAllApps } from "@/lib/getAllApps";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";

type CategoryDef = {
  name: string;
  slug: string;
  imageUrl?: string;
  bgColor: string;
  featuredLabel?: string;
};

// Apple App Store categories with scraped images (where available) + solid colors
export const ALL_CATEGORIES: CategoryDef[] = [
  {
    name: "Entertainment",
    slug: "entertainment",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/1e/45/b0/1e45b04b-a733-cd2b-776e-0ef6b3e34df4/610ba54c-a266-4401-bad3-3d24f9e1ba3b.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#f2a2a2",
  },
  {
    name: "Social",
    slug: "social-networking",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/02/d6/f6/02d6f6d0-3c68-6b0d-ed22-9c612324e78e/237dff3d-be47-410b-b7ac-8847815c5b89.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#a8a0f0",
    featuredLabel: "Essential Social Apps",
  },
  {
    name: "Lifestyle",
    slug: "lifestyle",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/67/61/5d/67615dc9-d99e-fd1b-3011-2e7c9913d71c/937115ab-29c3-40dd-b1b0-c7f5a8b245d8.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#f5a28e",
  },
  {
    name: "Photo & Video",
    slug: "photo-video",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/62/7f/69/627f69ea-05f4-c3e8-2080-f4b8521dd86e/46035b49-4cde-4757-abca-57c75ac1a477.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#f5d48e",
  },
  {
    name: "Education",
    slug: "education",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/f4/a4/c6/f4a4c68b-6e31-e782-bf19-0b78af5f4fbf/81b45e52-7497-41e3-83c5-52933ccda25d.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#f5b76e",
  },
  {
    name: "Health & Fitness",
    slug: "health-fitness",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/81/03/df/8103df25-0ce8-e8f3-f0de-08291a3a7bab/09929277-0008-404f-b855-ee90662ecd8b.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#8ee0a8",
  },
  {
    name: "Productivity",
    slug: "productivity",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/ea/4e/d4/ea4ed47c-1478-221b-002b-4a5401982cb2/51c3b41f-0337-4141-8c8b-59bad5a55252.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#8ec8f5",
  },
  {
    name: "Utilities",
    slug: "utilities",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/57/8c/d4/578cd451-f101-9d9a-cf75-a0fdabb9afba/c2fe5e74-a8b2-4999-8fdf-eff053ea3b8e.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#f5b28e",
    featuredLabel: "Essential Utility Apps",
  },
  {
    name: "Books",
    slug: "books",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/57/e3/3d/57e33df1-81a0-0f23-7acd-7d287f461ec2/8ad1613d-f053-4a6b-bfc5-23c43d655465.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#f5c88e",
  },
  {
    name: "Sports",
    slug: "sports",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e9/b2/7e/e9b27e48-342c-3c0c-914d-f1e5b1e9e205/f067e0e5-9d2d-4bdf-b50b-5cbd480ca8a0.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#e8d88e",
    featuredLabel: "Essential Sports Apps",
  },
  {
    name: "Music",
    slug: "music",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/ca/bf/a4/cabfa4eb-8628-499e-6acf-ac83aa88b4c7/3a712f62-94f8-4334-b2c2-2a91f214f3f0.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#8ed8e8",
  },
  {
    name: "Business",
    slug: "business",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/90/4f/67/904f67a8-3d8c-1de6-1283-c30f510e0b12/e9748160-5c02-4b30-9398-b0e87954811e.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#8ec8e0",
  },
  {
    name: "Graphics & Design",
    slug: "graphics-design",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/8e/d1/7a/8ed17ace-bc9c-633a-4ac4-fd8b24a32334/8a047b1a-e580-4b9e-b3b8-c164e8915d2c.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#f5c86e",
  },
  {
    name: "Navigation",
    slug: "navigation",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/e8/a4/f0/e8a4f04d-baf2-c5e8-221a-8d4ecdae6b5b/e204d604-e293-4c2e-8f47-90e630cfc448.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#8eb8f5",
  },
  {
    name: "Reference",
    slug: "reference",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/9f/0b/17/9f0b1739-3e18-d99f-8438-871805e3135c/6f740fae-b2f3-4188-91e9-7b84bee7e8db.png/600x338SCB.ApSCBL01-60.jpg",
    bgColor: "#f5b86e",
    featuredLabel: "Essential Reference Apps",
  },
];

export default async function CategoriesPage() {
  const apps = await getAllApps();
  const sidebarCategories = ALL_CATEGORIES.map((c) => c.name);

  return (
    <>
      <Navbar apps={apps} categoryList={sidebarCategories} />

      <main className="flex-1">
        <div className="flex gap-5 px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
          <Sidebar apps={apps} categoryList={sidebarCategories} />
          <div className="min-w-0 flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-ink">
                Categories
              </h1>
              <p className="mt-1 text-sm text-ink-muted">
                Browse apps by category to see how they handle your privacy.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              {ALL_CATEGORIES.map((cat) => (
                <CategoryCard key={cat.slug} category={cat} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function CategoryCard({ category }: { category: CategoryDef }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative block aspect-[16/9] overflow-hidden rounded-2xl transition-transform hover:scale-[1.02]"
      style={{ backgroundColor: category.bgColor }}
    >
      {category.imageUrl && (
        <Image
          src={category.imageUrl}
          alt={category.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          unoptimized
        />
      )}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        {category.featuredLabel && (
          <span className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-white/85">
            Featured
          </span>
        )}
        <span className="text-sm font-bold text-white drop-shadow-sm sm:text-xl">
          {category.featuredLabel ?? category.name}
        </span>
      </div>
    </Link>
  );
}

export function categorySlugToName(slug: string): string | undefined {
  return ALL_CATEGORIES.find((c) => c.slug === slug)?.name;
}

export function categoryNameToSlug(name: string): string | undefined {
  return ALL_CATEGORIES.find((c) => c.name === name)?.slug;
}
