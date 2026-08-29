export type KidFeature = {
  id: string;
  icon: string;
  badge: string;
  title: string;
  description: string;
  accent: "coral" | "teal" | "honey" | "mint" | "lilac" | "brand";
  funFact: string;
};

export const kidFriendlyFeatures: KidFeature[] = [
  {
    id: "tear-free",
    icon: "sparkle",
    badge: "Gentle Care",
    title: "Tear-Free Immunizations",
    description:
      "We utilize proven pediatric distraction toys, sweet-taste comfort techniques, and ultra-fine needles so vaccinations are quick and stress-free.",
    accent: "coral",
    funFact: "9 out of 10 little ones leave with a high-five and a sticker!",
  },
  {
    id: "play-corner",
    icon: "blocks",
    badge: "Play & Relax",
    title: "Sanitized Play & Story Corner",
    description:
      "A clean, cheerful waiting zone stocked with picture books, soft puzzles, and building blocks to keep kids curious and calm before their turn.",
    accent: "honey",
    funFact: "Every toy is sanitized with medical-grade non-toxic wipes between visits.",
  },
  {
    id: "child-paced",
    icon: "stethoscope-heart",
    badge: "No Rush",
    title: "Child-Paced Consultations",
    description:
      "We never rush examinations. Dr. Aarav starts with a warm greeting, gentle games, and stethoscope demos on teddy bears to build trusting smiles.",
    accent: "teal",
    funFact: "Kids get to listen to their own heartbeat with the warm stethoscope!",
  },
  {
    id: "sensory-soothe",
    icon: "sun",
    badge: "Calm Atmosphere",
    title: "Sensory-Conscious Clinic",
    description:
      "Gentle natural lighting, soft pastel artwork, and calm soundscapes designed specifically for sensitive infants, toddlers, and neurodivergent children.",
    accent: "mint",
    funFact: "No harsh fluorescent lights or jarring alarm sounds.",
  },
];
