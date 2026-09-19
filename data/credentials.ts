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
    value: "MBBS, MD",
    label: "Paediatrics and Neonatology",
    icon: "clipboard",
    accent: "brand",
  },
  {
    value: "Neonatal Care",
    label: "Including premature and high-risk babies",
    icon: "cradle",
    accent: "coral",
  },
  {
    value: "Newborn to Adolescent",
    label: "Care at every stage of childhood",
    icon: "growth",
    accent: "mint",
  },
  {
    value: "Chennai",
    label: "Currently practising in",
    icon: "mapPin",
    accent: "honey",
  },
];
