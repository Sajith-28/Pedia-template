import type { AccentName } from "@/lib/accents";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  accent: AccentName;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Dr. Mehta took the time to understand our concerns and explained everything clearly. We felt comfortable from the very first consultation.",
    name: "Priya R.",
    role: "Parent of a 4-year-old",
    accent: "coral",
  },
  {
    quote:
      "Our son is anxious around doctors, and this was the first visit that did not end in tears. Nothing felt rushed, and every question was answered properly.",
    name: "Karthik S.",
    role: "Parent of a 7-year-old",
    accent: "brand",
  },
  {
    quote:
      "We came in worried about our daughter's weight and left with a plan we could actually follow at home. The follow-up advice made a real difference.",
    name: "Anitha M.",
    role: "Parent of a 2-year-old",
    accent: "mint",
  },
  {
    quote:
      "The immunisation schedule was written out for us and explained dose by dose. For first-time parents that clarity was worth a great deal.",
    name: "Deepak & Meera V.",
    role: "Parents of a 9-month-old",
    accent: "honey",
  },
  {
    quote:
      "My daughter's asthma had been managed reactively for years. We finally have a plan for the seasons when it flares, and far fewer bad nights.",
    name: "Shalini T.",
    role: "Parent of an 11-year-old",
    accent: "lilac",
  },
  {
    quote:
      "What stood out was being told what did not need treating. He is careful about medication, and explains the reasoning rather than just prescribing.",
    name: "Rahul N.",
    role: "Parent of a 5-year-old",
    accent: "teal",
  },
];
