import type { IconName } from "@/components/ui/Icons";
import type { AccentName } from "@/lib/accents";
import { media, type Media } from "@/lib/media";

export type ExpertiseArea = {
  /** Also the URL segment: /expertise/<slug>. */
  slug: string;
  title: string;
  description: string;
  icon: IconName;
  accent: AccentName;
  image: Media;
};

/**
 * Single source of truth for the Areas of Expertise feature.
 *
 * The section cards, the detail pages and the page metadata all read from
 * here, so a title, description, image or URL can never drift apart.
 * Titles and descriptions are client-approved copy — edit with care.
 */
export const expertiseAreas: ExpertiseArea[] = [
  {
    slug: "general-paediatrics",
    title: "General Paediatrics",
    description:
      "Comprehensive care for infants, children and adolescents, including evaluation and management of common and complex childhood illnesses, with a focus on prevention, early diagnosis and holistic care.",
    icon: "stethoscope",
    accent: "brand",
    image: media.expertiseGeneralPaediatrics,
  },
  {
    slug: "neonatology-newborn-care",
    title: "Neonatology & Newborn Care",
    description:
      "Specialised care for newborns, including premature and high-risk babies, with expertise in the management of neonatal illnesses and support for families during the critical early days.",
    icon: "cradle",
    accent: "coral",
    image: media.expertiseNeonatology,
  },
  {
    slug: "acute-childhood-illnesses",
    title: "Acute Childhood Illnesses",
    description:
      "Evaluation and treatment of common childhood infections and acute conditions such as fever, cough, cold, respiratory infections, gastrointestinal illnesses and more.",
    icon: "thermometer",
    accent: "honey",
    image: media.expertiseAcuteIllnesses,
  },
  {
    slug: "growth-development",
    title: "Growth & Development",
    description:
      "Monitoring and support for physical growth, developmental milestones, nutrition and behaviour to ensure every child reaches their full potential.",
    icon: "growth",
    accent: "mint",
    image: media.expertiseGrowthDevelopment,
  },
  {
    slug: "allergies-respiratory-care",
    title: "Allergies & Respiratory Care",
    description:
      "Diagnosis and management of allergic conditions, asthma, recurrent respiratory infections and other chronic respiratory disorders in children.",
    icon: "breathing",
    accent: "teal",
    image: media.expertiseAllergiesRespiratory,
  },
  {
    slug: "adolescent-health",
    title: "Adolescent Health",
    description:
      "Care for adolescents including menstrual concerns, nutrition, lifestyle issues, mental health and overall wellbeing.",
    icon: "adolescent",
    accent: "lilac",
    image: media.expertiseAdolescentHealth,
  },
];

export const expertiseIntro =
  "Comprehensive care for every stage of childhood — from newborns to adolescents, with a focus on evidence-based, compassionate and family-centred care.";

export const expertiseTagline = "Healthy Children. Brighter Tomorrows.";

export function findExpertiseArea(slug: string): ExpertiseArea | undefined {
  return expertiseAreas.find((area) => area.slug === slug);
}
