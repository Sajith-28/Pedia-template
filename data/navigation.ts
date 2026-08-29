export type NavLink = {
  label: string;
  href: string;
  /** Element id used for scroll-spy highlighting in the header. */
  sectionId: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About Doctor", href: "#about", sectionId: "about" },
  { label: "Expertise", href: "#expertise", sectionId: "expertise" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Clinic", href: "#clinic", sectionId: "clinic" },
  { label: "FAQs", href: "#faqs", sectionId: "faqs" },
];

export const footerLinks: NavLink[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Expertise", href: "#expertise", sectionId: "expertise" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Clinic", href: "#clinic", sectionId: "clinic" },
  { label: "FAQs", href: "#faqs", sectionId: "faqs" },
];
