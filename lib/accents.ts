/**
 * Accent system.
 *
 * Six hues that give the page warmth and variety while the base stays
 * white + deep blue. Class strings are written out in full because Tailwind
 * only ships classes it can see literally in the source.
 */
export type AccentName = "brand" | "teal" | "coral" | "honey" | "mint" | "lilac";

type Accent = {
  /** Icon chip: tint, icon colour, and the deeper tint on hover. */
  chip: string;
  /** Filled state for a selected control. White glyph clears 3:1 on every hue. */
  solid: string;
  /** Hover ring for the surrounding card. */
  ring: string;
  /** Foreground-only use, e.g. a number or a rule. */
  text: string;
  /** Solid fill for small marks such as a rule or dot. */
  bar: string;
  /** Soft radial wash. */
  wash: string;
};

export const accents: Record<AccentName, Accent> = {
  brand: {
    chip: "bg-brand-100 text-brand-600 group-hover:bg-brand-200",
    solid: "bg-brand-600 text-white",
    ring: "group-hover:ring-brand-200",
    text: "text-brand-600",
    bar: "bg-brand-400",
    wash: "bg-brand-100",
  },
  teal: {
    chip: "bg-teal-100 text-teal-600 group-hover:bg-teal-200",
    solid: "bg-teal-600 text-white",
    ring: "group-hover:ring-teal-200",
    text: "text-teal-600",
    bar: "bg-teal-400",
    wash: "bg-teal-100",
  },
  coral: {
    chip: "bg-coral-100 text-coral-600 group-hover:bg-coral-200",
    solid: "bg-coral-600 text-white",
    ring: "group-hover:ring-coral-200",
    text: "text-coral-600",
    bar: "bg-coral-500",
    wash: "bg-coral-100",
  },
  honey: {
    chip: "bg-honey-100 text-honey-600 group-hover:bg-honey-200",
    solid: "bg-honey-600 text-white",
    ring: "group-hover:ring-honey-200",
    text: "text-honey-600",
    bar: "bg-honey-500",
    wash: "bg-honey-100",
  },
  mint: {
    chip: "bg-mint-100 text-mint-600 group-hover:bg-mint-200",
    solid: "bg-mint-600 text-white",
    ring: "group-hover:ring-mint-200",
    text: "text-mint-600",
    bar: "bg-mint-500",
    wash: "bg-mint-100",
  },
  lilac: {
    chip: "bg-lilac-100 text-lilac-600 group-hover:bg-lilac-200",
    solid: "bg-lilac-600 text-white",
    ring: "group-hover:ring-lilac-200",
    text: "text-lilac-600",
    bar: "bg-lilac-500",
    wash: "bg-lilac-100",
  },
};
