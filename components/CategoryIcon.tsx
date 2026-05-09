import {
  Camera,
  MapPin,
  BookUser,
  FolderOpen,
  Share2,
  UserCircle,
  BarChart2,
  Baby,
  Wifi,
  Smartphone,
  Heart,
  CreditCard,
  ShieldCheck,
  Bell,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Camera,
  MapPin,
  BookUser,
  FolderOpen,
  Share2,
  UserCircle,
  BarChart2,
  Baby,
  Wifi,
  Smartphone,
  Heart,
  CreditCard,
  ShieldCheck,
  Bell,
};

export function CategoryIcon({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? HelpCircle;
  return <Icon className={className} />;
}
