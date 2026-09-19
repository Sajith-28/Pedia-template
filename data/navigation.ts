export type NavLink = {
  label: string;
  href: string;
  /** Element id used for scroll-spy highlighting in the header. */
  sectionId: string;
};

/** Ordered to match the sections as they appear down the page. */
export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Expertise", href: "#expertise", sectionId: "expertise" },
  { label: "Testimonials", href: "#testimonials", sectionId: "testimonials" },
  { label: "Appointments", href: "#appointment", sectionId: "appointment" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
  { label: "FAQs", href: "#faqs", sectionId: "faqs" },
];

export const footerLinks: NavLink[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About Doctor", href: "#about", sectionId: "about" },
  { label: "Areas of Expertise", href: "#expertise", sectionId: "expertise" },
  { label: "Parent Experiences", href: "#testimonials", sectionId: "testimonials" },
  { label: "Book an Appointment", href: "#appointment", sectionId: "appointment" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
  { label: "FAQs", href: "#faqs", sectionId: "faqs" },
];
