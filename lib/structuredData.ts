import { clinic } from "@/data/clinic";
import { doctor } from "@/data/doctor";
import { media } from "@/lib/media";

export const SITE_URL = "https://littlebloomclinic.example";

/**
 * Local healthcare structured data.
 * Emitted once in the root layout as a single @graph.
 */
export function buildStructuredData() {
  const clinicId = `${SITE_URL}/#clinic`;
  const physicianId = `${SITE_URL}/#physician`;

  const address = {
    "@type": "PostalAddress",
    streetAddress: clinic.address.line1,
    addressLocality: clinic.address.city,
    addressRegion: clinic.address.region,
    postalCode: clinic.address.postalCode,
    addressCountry: clinic.address.country,
  };

  const openingHours = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "16:00",
      closes: "20:00",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": clinicId,
        name: clinic.name,
        url: SITE_URL,
        telephone: clinic.phone.display,
        email: clinic.email.display,
        image: media.doctorPortrait.src,
        address,
        geo: {
          "@type": "GeoCoordinates",
          latitude: clinic.coordinates.lat,
          longitude: clinic.coordinates.lng,
        },
        openingHoursSpecification: openingHours,
        medicalSpecialty: "Pediatric",
        areaServed: clinic.address.city,
        employee: { "@id": physicianId },
      },
      {
        "@type": "Physician",
        "@id": physicianId,
        name: doctor.name,
        jobTitle: doctor.title,
        url: SITE_URL,
        image: media.doctorPortrait.src,
        telephone: clinic.phone.display,
        medicalSpecialty: "Pediatric",
        knowsLanguage: doctor.languages,
        address,
        worksFor: { "@id": clinicId },
        availableService: doctor.interests.map((name) => ({
          "@type": "MedicalTherapy",
          name,
        })),
      },
    ],
  };
}
