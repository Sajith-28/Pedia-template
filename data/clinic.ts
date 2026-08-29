/**
 * DEMO DATA — Fictional clinic.
 *
 * The address and coordinates below are placeholder values for this template.
 * Swap them for the real practice details before going live.
 */

export const clinic = {
  name: "Little Bloom Children's Clinic",
  shortName: "Little Bloom",
  tagline: "Pediatric care in Chennai",

  address: {
    line1: "No. 24, Anna Nagar Main Road",
    line2: "Chennai, Tamil Nadu 600040",
    city: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600040",
    country: "IN",
  },

  /** Demo coordinates — Anna Nagar, Chennai. Replace with the real location. */
  coordinates: { lat: 13.0878, lng: 80.2101 },

  phone: {
    display: "+91 90000 00000",
    href: "tel:+919000000000",
  },

  whatsapp: {
    /** International format without + or spaces, as required by wa.me links. */
    number: "919000000000",
    /** Pre-filled greeting the patient sees in their WhatsApp chat box. */
    message:
      "Hi, I'd like to book an appointment at Little Bloom Children's Clinic.",
    get href() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },

  email: {
    display: "care@littlebloomclinic.in",
    href: "mailto:care@littlebloomclinic.in",
  },

  hours: {
    days: "Monday – Saturday",
    shortDays: "Mon – Sat",
    morning: "9:00 AM – 1:00 PM",
    evening: "4:00 PM – 8:00 PM",
    summary: "9:00 AM – 8:00 PM",
    closed: "Sunday — Closed",
  },

  consultationSlots: [
    { label: "Morning", value: "9:00 AM – 1:00 PM" },
    { label: "Evening", value: "4:00 PM – 8:00 PM" },
  ],

  emergencyNotice:
    "For urgent medical emergencies, please contact your nearest emergency facility.",

  /**
   * Keyless OpenStreetMap embed — no API key, no tracking script.
   * Swap for a Google Maps / Mapbox embed if the practice prefers one.
   */
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=80.1971%2C13.0808%2C80.2231%2C13.0948&layer=mapnik&marker=13.0878%2C80.2101",

  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=13.0878%2C80.2101",

  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
} as const;
