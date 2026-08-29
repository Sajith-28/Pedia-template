export type NavLink = {
  label: string;
  href: string;
  /** Element id used for scroll-spy highlighting in the header. */
  sectionId: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Child Care", href: "#child-friendly", sectionId: "child-friendly" },
  { label: "About Doctor", href: "#about", sectionId: "about" },
  { label: "Expertise", href: "#expertise", sectionId: "expertise" },
  { label: "Milestones", href: "#milestones", sectionId: "milestones" },
  { label: "Clinic", href: "#clinic", sectionId: "clinic" },
  { label: "FAQs", href: "#faqs", sectionId: "faqs" },
];

export const footerLinks: NavLink[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Child-Friendly Care", href: "#child-friendly", sectionId: "child-friendly" },
  { label: "About Doctor", href: "#about", sectionId: "about" },
  { label: "Pediatric Services", href: "#expertise", sectionId: "expertise" },
  { label: "Milestone Guide", href: "#milestones", sectionId: "milestones" },
  { label: "Clinic Location", href: "#clinic", sectionId: "clinic" },
  { label: "FAQs", href: "#faqs", sectionId: "faqs" },
];
