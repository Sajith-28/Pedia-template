/**
 * DEMO DATA — Fictional practitioner.
 *
 * Replace the values in this file to launch the template with a real doctor.
 * No component reads hard-coded doctor copy; everything flows from here.
 */

export type CredentialRow = {
  label: string;
  value: string;
};

export const doctor = {
  name: "Dr. Aarav Mehta",
  shortName: "Dr. Mehta",
  title: "Consultant Pediatrician & Child Health Specialist",
  shortTitle: "Consultant Pediatrician",
  eyebrow: "Consultant Pediatrician",
  experienceYears: "18+",
  experienceLabel: "18+ Years Experience",
  registrationNumber: "TN-MED-48291",
  qualifications: "MBBS, MD (Pediatrics)",
  languages: ["English", "Tamil", "Hindi"],
  childrenConsulted: "10,000+",

  headline: {
    lineOne: "Compassionate care for",
    lineTwo: "every stage of childhood.",
  },

  intro:
    "Personalized pediatric care focused on helping children grow healthier, stronger, and happier.",

  bio: [
    "Dr. Aarav Mehta is a consultant pediatrician dedicated to providing thoughtful, evidence-based care for infants, children, and adolescents. His approach combines clinical expertise with a calm, family-centered philosophy — one that treats every consultation as a conversation rather than a checklist.",
    "Over eighteen years of practice across leading child health centres in Chennai and Bengaluru, he has developed a particular interest in early childhood development, nutrition, and preventive care. He believes the most valuable outcome of a visit is a parent who leaves feeling informed and reassured.",
    "At Little Bloom, consultations are unhurried by design. Families are given the time to describe what they are seeing at home, and every plan is explained in plain language before anyone leaves the room.",
  ],

  credentials: [
    { label: "Education", value: "MBBS, MD (Pediatrics)" },
    { label: "Medical Registration", value: "TN-MED-48291" },
    { label: "Experience", value: "18+ Years in Pediatric Practice" },
    { label: "Languages", value: "English • Tamil • Hindi" },
  ] satisfies CredentialRow[],

  interests: [
    "Neonatal & Newborn Care",
    "Developmental Pediatrics",
    "Childhood Nutrition",
    "Pediatric Allergy & Asthma",
    "Immunisation Planning",
    "Adolescent Wellbeing",
  ],

  philosophy: {
    heading: "Care that looks beyond the symptoms.",
    statement:
      "A child is not a smaller adult. They grow, adapt, and communicate differently — and their care should reflect that.",
    body: [
      "Every consultation begins with listening. Understanding a child's routine, appetite, sleep, and temperament often reveals more than any single test result, and it is what allows a treatment plan to fit the family rather than fight it.",
      "Parents leave with a clear explanation of what is happening, what to watch for at home, and exactly when to come back — because confident parents make the biggest difference to a child's recovery.",
    ],
    pillars: [
      {
        title: "Unhurried consultations",
        description:
          "Appointments are scheduled with enough time to ask questions and understand the answers.",
      },
      {
        title: "Evidence-based decisions",
        description:
          "Investigations and prescriptions are recommended only when they genuinely change the plan of care.",
      },
      {
        title: "Continuity of care",
        description:
          "The same doctor follows your child's growth over the years, not a different face each visit.",
      },
    ],
  },
} as const;
