import type { AccentName } from "@/lib/accents";
import type { IconName } from "@/components/ui/Icons";

export type CredentialHighlight = {
  value: string;
  label: string;
  icon: IconName;
  accent: AccentName;
};

/**
 * The strip beneath the hero.
 *
 * Deliberately non-numeric: the client has supplied no years of experience,
 * patient counts or consultation timings, so none are shown. Every line below
 * restates approved profile facts.
 */
export const credentialHighlights: CredentialHighlight[] = [
  {
    value: "5 Years",
    label: "Clinical Paediatric Experience",
    icon: "award",
    accent: "brand",
  },
  {
    value: "Sri Ramachandra",
    label: "Medical College and Hospital",
    icon: "clipboard",
    accent: "coral",
  },
  {
    value: "MBBS, MD",
    label: "Paediatrics and Neonatology",
    icon: "stethoscope",
    accent: "mint",
  },
  {
    value: "Chennai",
    label: "Currently practising in",
    icon: "mapPin",
    accent: "honey",
  },
];
