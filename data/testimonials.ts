import type { AccentName } from "@/lib/accents";

export type Testimonial = {
  quote: string;
  name: string;
  rating: number;
  accent: AccentName;
};

/**
 * Client-supplied parent reviews, quoted verbatim.
 *
 * Names appear exactly as the families gave them. No relationship, child age
 * or location is shown, because none was supplied — only the quote, the name
 * and the rating are ours to publish.
 */
export const testimonialsHeading = "Parent Experiences";

export const testimonialsSubtitle =
  "Kind words from parents and families who have experienced Dr. Ushapriya’s care.";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Excellent paediatrician. Extremely gentle and kind towards kids. Patiently listened to our concerns and examined the child thoroughly. Very satisfied with the consultation. ❤️",
    name: "Aswin Balaji",
    rating: 5,
    accent: "coral",
  },
  {
    quote:
      "Dr. Ushapriya was incredibly kind and attentive. She listened carefully to my child’s health concerns and provided the proper solution. She is very friendly and easily reachable. Highly recommended paediatrician. 👍🏻❤️",
    name: "Kamsi Rose",
    rating: 5,
    accent: "brand",
  },
  {
    quote:
      "Dr. Usha is one of the best paediatricians I have seen. From the way she initially interacts with children to the treatment she provides, everything has been excellent. Truly one of the best doctors in town. ❤️",
    name: "SUDAN ENTERPRISES",
    rating: 5,
    accent: "mint",
  },
  {
    quote:
      "Dr. Usha is very kind and patient. She did not prescribe unnecessary antibiotics for my child. She is very friendly and caring. Highly recommended! ❤️",
    name: "Hari Haran",
    rating: 5,
    accent: "honey",
  },
  {
    quote:
      "I took my grandchild to this doctor and was very impressed by how calmly and maturely she handled the child. She examined and treated my grandchild with proper medication, and I am very happy that my grandchild recovered quickly from a cold. Thank you! ❤️",
    name: "GAJALAKSHMI Swamy",
    rating: 5,
    accent: "lilac",
  },
];
