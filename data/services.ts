import type { IconName } from "@/components/ui/Icons";
import type { AccentName } from "@/lib/accents";

export type Service = {
  title: string;
  description: string;
  icon: IconName;
  accent: AccentName;
};

export const services: Service[] = [
  {
    title: "Newborn & Infant Care",
    description:
      "Feeding, sleep, weight gain and early screening support through the first, most delicate months.",
    icon: "cradle",
    accent: "coral",
  },
  {
    title: "Childhood Fever & Infections",
    description:
      "Careful assessment of fever, coughs and common infections, with treatment only where it is needed.",
    icon: "thermometer",
    accent: "honey",
  },
  {
    title: "Growth & Development",
    description:
      "Structured tracking of height, weight and milestones so concerns are caught early, not late.",
    icon: "growth",
    accent: "brand",
  },
  {
    title: "Nutrition & Healthy Growth",
    description:
      "Practical, realistic diet guidance for fussy eaters, picky phases and growth-related worries.",
    icon: "nutrition",
    accent: "mint",
  },
  {
    title: "Vaccination Guidance",
    description:
      "Clear immunisation schedules explained in full, including optional vaccines and catch-up plans.",
    icon: "shield",
    accent: "lilac",
  },
  {
    title: "Adolescent Health",
    description:
      "Confidential, respectful consultations covering puberty, nutrition, sleep and emotional wellbeing.",
    icon: "adolescent",
    accent: "teal",
  },
  {
    title: "Allergy & Asthma Care",
    description:
      "Identifying triggers and building long-term control plans for wheezing, eczema and allergies.",
    icon: "breathing",
    accent: "coral",
  },
  {
    title: "Preventive Pediatric Care",
    description:
      "Routine well-child visits that focus on prevention, screening and long-term health habits.",
    icon: "clipboard",
    accent: "honey",
  },
];
