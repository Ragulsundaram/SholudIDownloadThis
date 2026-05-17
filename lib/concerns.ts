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

export type Concern = { id: string; label: string; icon: LucideIcon };

export const CONCERNS: Concern[] = [
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

export function getConcern(id: string): Concern | undefined {
  return CONCERNS.find((c) => c.id === id);
}
