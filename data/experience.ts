export type ExperienceEntry = {
  period: string;
  /** Short label used for the timeline axis on desktop. */
  year: string;
  organisation: string;
  role: string;
  location: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    period: "2019 — Present",
    year: "2019",
    organisation: "Little Bloom Children's Clinic",
    role: "Consultant Pediatrician & Clinical Director",
    location: "Chennai",
    description:
      "Founded a dedicated child health practice built around unhurried consultations and long-term family relationships.",
  },
  {
    period: "2015 — 2019",
    year: "2015",
    organisation: "Marina Crest Children's Medical Centre",
    role: "Senior Pediatrician",
    location: "Chennai",
    description:
      "Led the outpatient pediatric service and developed the centre's structured growth and immunisation programme.",
  },
  {
    period: "2011 — 2015",
    year: "2011",
    organisation: "Silverleaf Institute of Child Health",
    role: "Pediatric Consultant",
    location: "Bengaluru",
    description:
      "Managed inpatient and neonatal care while supervising resident training across the department.",
  },
  {
    period: "2008 — 2011",
    year: "2008",
    organisation: "Coromandel Medical College & Hospital",
    role: "Residency — MD (Pediatrics)",
    location: "Chennai",
    description:
      "Completed postgraduate specialisation in pediatrics with rotations in neonatology and pediatric intensive care.",
  },
];
