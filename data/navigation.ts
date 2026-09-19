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
  { label: "Appointments", href: "#appointment", sectionId: "appointment" },
  { label: "FAQs", href: "#faqs", sectionId: "faqs" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export const footerLinks: NavLink[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About Doctor", href: "#about", sectionId: "about" },
  { label: "Areas of Expertise", href: "#expertise", sectionId: "expertise" },
  { label: "Book an Appointment", href: "#appointment", sectionId: "appointment" },
  { label: "FAQs", href: "#faqs", sectionId: "faqs" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];
