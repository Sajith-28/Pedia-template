import type { AccentName } from "@/lib/accents";
import type { IconName } from "@/components/ui/Icons";

export type Stat = {
  value: string;
  label: string;
  icon: IconName;
  accent: AccentName;
};

export const stats: Stat[] = [
  { value: "18+", label: "Years of Experience", icon: "award", accent: "brand" },
  { value: "10,000+", label: "Children Consulted", icon: "cradle", accent: "coral" },
  { value: "MBBS · MD", label: "Qualified Specialist", icon: "clipboard", accent: "mint" },
  { value: "Mon – Sat", label: "Consultation Available", icon: "clock", accent: "honey" },
];
