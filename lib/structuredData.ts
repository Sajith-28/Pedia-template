import { contact } from "@/data/contact";
import { doctor } from "@/data/doctor";
import { expertiseAreas } from "@/data/expertise";

/** Current deployment. Update when the practice's own domain is live. */
export const SITE_URL = "https://pedia-template.vercel.app";

/**
 * Physician structured data, emitted once in the root layout.
 *
 * Only client-confirmed facts are published: no clinic name, street address,
 * geo-coordinates, opening hours, email or registration number, because none
 * has been supplied. Telephone appears only once a number is configured.
 */
export function buildStructuredData() {
  const physicianId = `${SITE_URL}/#physician`;

  const physician: Record<string, unknown> = {
    "@type": "Physician",
    "@id": physicianId,
    name: doctor.name,
    jobTitle: doctor.title,
    url: SITE_URL,
    medicalSpecialty: ["Pediatric", "Neonatal"],
    areaServed: doctor.city,
    description: doctor.bio[0],
    hasCredential: doctor.qualifications,
    availableService: expertiseAreas.map((area) => ({
      "@type": "MedicalTherapy",
      name: area.title,
      description: area.description,
      url: `${SITE_URL}/expertise/${area.slug}`,
    })),
  };

  if (contact.isConfigured) {
    physician.telephone = contact.display;
  }

  return {
    "@context": "https://schema.org",
    "@graph": [physician],
  };
}
