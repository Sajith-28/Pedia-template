/**
 * Doctor profile — the single source of truth for identity across the site.
 *
 * Every statement here comes from client-approved copy. Nothing may be added
 * that the client has not supplied: no experience figures, patient counts,
 * registration number, awards, hospital affiliations or consultation timings.
 */

export type CredentialRow = {
  label: string;
  value: string;
};

export const doctor = {
  name: "Dr. Ushapriya Sudhakar",
  shortName: "Dr. Ushapriya",
  title: "Paediatrician & Neonatologist",
  shortTitle: "Paediatrician & Neonatologist",
  eyebrow: "Paediatrician & Neonatologist",
  qualifications: "MBBS, MD Paediatrics and Neonatology",
  city: "Chennai",

  headline: {
    lineOne: "Compassionate care for",
    lineTwo: "newborns, children & adolescents.",
  },

  intro:
    "Paediatrician and Neonatologist in Chennai, providing evidence-based, personalised care for newborns, infants, children and adolescents.",

  /** Client-approved profile. Used in full on the About section. */
  bio: [
    "Dr. Ushapriya Sudhakar is a Paediatrician and Neonatologist with expertise in the comprehensive care of newborns, infants, children, and adolescents. She has a particular interest and strong clinical experience in General Paediatrics, providing diagnosis and management for a wide range of acute and chronic childhood illnesses.",
    "Her practice encompasses everything from common childhood infections, respiratory and gastrointestinal illnesses, allergies, nutritional concerns, growth and developmental assessment, and adolescent health to the evaluation and management of more complex paediatric conditions.",
    "With additional expertise in Neonatology, Dr. Ushapriya Sudhakar also provides care for newborns, including premature and high-risk babies, and supports families through the early stages of their child’s life.",
    "Currently practising in Chennai, she believes in providing evidence-based, personalised, and compassionate care, while ensuring that parents understand their child’s condition and feel confident in every step of their child’s healthcare journey.",
  ],

  credentials: [
    { label: "Qualifications", value: "MBBS, MD Paediatrics and Neonatology" },
    { label: "Specialisation", value: "Paediatrics & Neonatology" },
    { label: "Care for", value: "Newborns, infants, children and adolescents" },
    { label: "Currently practising in", value: "Chennai" },
  ] satisfies CredentialRow[],

  /** Professional focus, as supplied by the client. */
  interests: [
    "General Paediatrics",
    "Child Health",
    "Growth & Development",
    "Neonatology",
    "Newborn Care",
  ],

  /**
   * Drawn from the closing line of the client profile: evidence-based,
   * personalised and compassionate care, with parents kept informed.
   */
  philosophy: {
    heading: "Care that keeps parents informed at every step.",
    statement:
      "Evidence-based, personalised, and compassionate care — with parents who understand their child’s condition and feel confident in every step of their child’s healthcare journey.",
    body: [
      "Every child is seen as an individual, and care is shaped around their age, their history and the concerns their family brings to the consultation.",
      "Parents are partners in that care. Explaining what is happening, and why a particular approach is being taken, is treated as part of the treatment rather than an afterthought.",
    ],
    pillars: [
      {
        title: "Evidence-based",
        description:
          "Diagnosis and management guided by current paediatric evidence rather than habit.",
      },
      {
        title: "Personalised",
        description:
          "Care shaped around the individual child, from newborns through to adolescents.",
      },
      {
        title: "Compassionate",
        description:
          "An unhurried, family-centred approach that supports parents as well as the child.",
      },
    ],
  },
} as const;
