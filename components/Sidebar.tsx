import type { IndexEntry } from "@/lib/types";
import { SidebarContent } from "./SidebarContent";

type Props = {
  apps: IndexEntry[];
  categoryList?: string[];
};

export function Sidebar({ apps, categoryList }: Props) {
  return (
    <aside className="hidden w-36 flex-shrink-0 lg:block">
      <nav className="sticky top-24 w-36">
        <SidebarContent apps={apps} categoryList={categoryList} />
      </nav>
    </aside>
  );
}
