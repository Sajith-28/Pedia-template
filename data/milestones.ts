export type MilestoneStage = {
  id: string;
  tabLabel: string;
  ageRange: string;
  iconName: string;
  accent: "coral" | "teal" | "honey" | "mint" | "lilac" | "brand";
  summary: string;
  keyMilestones: string[];
  vaccineSchedule: string;
  doctorTip: string;
  whatsappPrompt: string;
};

export const milestoneStages: MilestoneStage[] = [
  {
    id: "newborn",
    tabLabel: "Newborn",
    ageRange: "0 – 6 Months",
    iconName: "cradle",
    accent: "teal",
    summary:
      "Laying the crucial foundation for bonding, feeding rhythms, weight gain, and early immune protection.",
    keyMilestones: [
      "Head control and tracking faces/objects with eyes",
      "First social smiles around 6–8 weeks",
      "Rolling from tummy to back by 4–5 months",
      "Babbling vowel sounds (cooing) and grasping soft rattles",
    ],
    vaccineSchedule: "BCG, Hep-B, OPV/IPV, Pentavalent (6, 10, 14 weeks), Rotavirus, PCV",
    doctorTip:
      "Daily tummy time (2–3 minutes, 3 times a day) while baby is awake builds essential neck, shoulder, and core muscles.",
    whatsappPrompt: "Hi Dr. Aarav, I have a query regarding newborn feeding / 6-week vaccination.",
  },
  {
    id: "infant",
    tabLabel: "Infant",
    ageRange: "6 – 12 Months",
    iconName: "rattle",
    accent: "coral",
    summary:
      "Transitioning to wholesome solid foods, active exploration, teething comfort, and interactive play.",
    keyMilestones: [
      "Sitting unassisted and starting to crawl or scoot",
      "Pincer grasp (picking up small soft finger foods)",
      "Responding to their own name and saying 'mama/dada'",
      "Stranger awareness and peek-a-boo joy",
    ],
    vaccineSchedule: "Flu vaccine, Typhoid conjugate, Measles / MMR-1 (at 9 months)",
    doctorTip:
      "Introduce single-ingredient purees or soft finger foods one at a time over 3 days to easily observe digestive tolerance.",
    whatsappPrompt: "Hi Dr. Aarav, I would like guidance on weaning solids and the 9-month immunization.",
  },
  {
    id: "toddler",
    tabLabel: "Toddler",
    ageRange: "1 – 3 Years",
    iconName: "blocks",
    accent: "honey",
    summary:
      "Explosive language development, independent walking, behavioral coaching, and balanced toddler nutrition.",
    keyMilestones: [
      "Steady walking, running, and climbing stairs",
      "Speaking 50+ words, forming 2-word sentences by age 2",
      "Imitative play and stacking 4–6 blocks",
      "Showing early independence and self-feeding with spoons",
    ],
    vaccineSchedule: "MMR booster, Varicella (Chickenpox), Hep-A (2 doses), DTP Booster at 18 months",
    doctorTip:
      "Picky eating is common at this age — keep offering colorful veggies without pressure. Routine and patience work wonders.",
    whatsappPrompt: "Hi Dr. Aarav, I'd like to consult regarding toddler speech development and booster shots.",
  },
  {
    id: "childhood",
    tabLabel: "Young Child",
    ageRange: "4 – 8 Years",
    iconName: "teddy",
    accent: "mint",
    summary:
      "School readiness, vision & hearing screenings, seasonal allergy management, and immune resilience.",
    keyMilestones: [
      "Riding a tricycle/bicycle, hopping on one foot",
      "Telling imaginative stories and fluent conversations",
      "Dressing independently and fine-motor drawing skills",
      "Understanding rules, cooperative play, and empathy",
    ],
    vaccineSchedule: "DTP booster (4–5 yrs), MMR booster 2, annual Influenza",
    doctorTip:
      "Limit screen time to 1 hour daily of high-quality content; encourage at least 60 minutes of active outdoor free play.",
    whatsappPrompt: "Hi Dr. Aarav, I'd like to book a pre-school health & vision screening consultation.",
  },
  {
    id: "adolescent",
    tabLabel: "Adolescent",
    ageRange: "9 – 18 Years",
    iconName: "balloon",
    accent: "lilac",
    summary:
      "Pubertal growth spurts, postural & spine health, sports physicals, and emotional wellness.",
    keyMilestones: [
      "Rapid pubertal physical growth and skeletal maturation",
      "Developing abstract reasoning and strong personal identity",
      "Healthy sleep hygiene (8–10 hours/night)",
      "Sports endurance and nutritional energy balance",
    ],
    vaccineSchedule: "Tdap booster (10–12 yrs), HPV (2/3 doses), Meningococcal",
    doctorTip:
      "Open, non-judgmental communication at home promotes healthy emotional resilience and body confidence.",
    whatsappPrompt: "Hi Dr. Aarav, I'd like to schedule an adolescent growth & wellness consultation.",
  },
];
