import Link from "next/link";
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
  type LucideIcon,
} from "lucide-react";

type Concern = { id: string; label: string; icon: LucideIcon };

const CONCERNS: Concern[] = [
  { id: "camera_microphone", label: "Camera & Mic", icon: Camera },
  { id: "location_gps", label: "Location", icon: MapPin },
  { id: "contacts_phonebook", label: "Contacts", icon: BookUser },
  { id: "storage_file_access", label: "Storage", icon: FolderOpen },
  { id: "data_sharing_third_parties", label: "3rd-Party Sharing", icon: Share2 },
  { id: "account_identity", label: "Identity", icon: UserCircle },
  { id: "behavioural_ad_tracking", label: "Ad Tracking", icon: BarChart2 },
  { id: "childrens_data", label: "Children's Data", icon: Baby },
  { id: "network_internet_activity", label: "Network", icon: Wifi },
  { id: "device_fingerprinting", label: "Fingerprinting", icon: Smartphone },
  { id: "health_biometric", label: "Health", icon: Heart },
  { id: "financial_payment", label: "Payments", icon: CreditCard },
  { id: "data_deletion_user_rights", label: "Data Rights", icon: ShieldCheck },
  { id: "policy_change_notification", label: "Policy Updates", icon: Bell },
];

export function BrowseByConcern() {
  return (
    <section className="mt-20">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Browse by concern</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Worried about one specific permission? Jump straight to apps that handle it best &mdash; or worst.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {CONCERNS.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.id}
              href={`/browse?concern=${c.id}`}
              className="group flex flex-col items-center gap-2 rounded-xl border border-line bg-surface p-4 text-center transition-all hover:border-brand hover:shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-divider group-hover:bg-brand/10">
                <Icon className="h-5 w-5 text-ink-muted group-hover:text-brand" />
              </span>
              <span className="text-xs font-medium text-ink">{c.label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
