import Link from "next/link";
import {
  ChevronRight,
  Home,
  LayoutGrid,
  Clapperboard,
  Users,
  Heart,
  Camera,
  BookOpen,
  Dumbbell,
  Briefcase,
  Building2,
  Palette,
  Gamepad2,
  ShoppingBag,
  Plane,
  Music,
  Newspaper,
  Code,
  type LucideIcon,
} from "lucide-react";
import type { IndexEntry } from "@/lib/types";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Entertainment: Clapperboard,
  "Social": Users,
  Lifestyle: Heart,
  "Photo & Video": Camera,
  Education: BookOpen,
  "Health & Fitness": Dumbbell,
  Productivity: Briefcase,
  Utilities: Code,
  Books: BookOpen,
  Sports: Gamepad2,
  Music: Music,
  Business: Building2,
  "Graphics & Design": Palette,
  Navigation: Plane,
  Reference: Newspaper,
  Games: Gamepad2,
  Shopping: ShoppingBag,
  Travel: Plane,
  News: Newspaper,
  Photo: Camera,
};

function getCategoryIcon(name: string): LucideIcon {
  return CATEGORY_ICONS[name] ?? LayoutGrid;
}

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "");
}

export type SidebarContentProps = {
  apps: IndexEntry[];
  categoryList?: string[];
  onNavigate?: () => void;
};

export function SidebarContent({ apps, categoryList, onNavigate }: SidebarContentProps) {
  const categories = (categoryList ?? getUniqueCategories(apps)).slice(0, 5);

  return (
    <>
      <ul className="space-y-0.5">
        <li>
          <Link
            href="/"
            onClick={onNavigate}
            className="group flex items-center gap-2 rounded-lg py-1.5 text-sm text-ink-muted transition-colors hover:bg-divider hover:text-ink"
          >
            <Home className="h-4 w-4 flex-shrink-0" />
            <span>Home</span>
          </Link>
        </li>
      </ul>

      <div className="my-3 h-px bg-line" />

      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-subtle">
        Categories
      </h2>

      {categories.length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-line py-6 text-center">
          <LayoutGrid className="h-5 w-5 text-ink-subtle" />
          <p className="text-xs text-ink-subtle">No categories yet</p>
        </div>
      ) : (
        <ul className="space-y-0.5">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category);
            return (
              <li key={category}>
                <Link
                  href={`/categories/${slugify(category)}`}
                  onClick={onNavigate}
                  className="group flex items-center gap-2 rounded-lg py-1.5 text-sm text-ink-muted transition-colors hover:bg-divider hover:text-ink"
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{category}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      <div className="my-3 h-px bg-line" />

      <Link
        href="/categories"
        onClick={onNavigate}
        className="group flex items-center gap-2 rounded-lg py-1.5 text-sm text-ink-muted transition-colors hover:bg-divider hover:text-ink"
      >
        <LayoutGrid className="h-4 w-4 flex-shrink-0" />
        <span>All Categories</span>
        <ChevronRight className="ml-auto h-3.5 w-3.5 flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
    </>
  );
}

function getUniqueCategories(apps: IndexEntry[]): string[] {
  const set = new Set<string>();
  for (const app of apps) {
    if (app.category) set.add(app.category);
  }
  return Array.from(set).sort();
}
