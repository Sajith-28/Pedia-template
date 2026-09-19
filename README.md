# Dr. Ushapriya Sudhakar — Paediatrician & Neonatologist Website

A production-quality medical website for **Dr. Ushapriya Sudhakar**, Paediatrician and Neonatologist (MBBS, MD Paediatrics and Neonatology) practising in Chennai.
Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4**.

---

## Key Features

- **Responsive Auto-Changing Hero Carousel**: Full-width dual-banner system with mobile and desktop-optimized photographic assets, smooth crossfade transitions, touch-swipe support, keyboard navigation, and pause on hover/focus.
- **Light Blue & Soft Pink Pediatric Design System**: Soothing clinical color palette (`#EAF6FB`, `#FCECF3`, `#183B4A`, deep medical teal) with abstract pediatric accents and WCAG AA contrast.
- **Appointment & Direct WhatsApp Integration**: Streamlined booking form that validates client details and opens a structured, emoji-inclusive enquiry in WhatsApp targeted to the practice number (`+91 77080 31169`).
- **Comprehensive Clinical Scope**: In-depth coverage of General Paediatrics, Neonatology, Acute Childhood Illnesses, Growth & Development, Allergies & Respiratory Health, and Adolescent Health.
- **SEO & Schema.org**: Fully integrated `Physician` JSON-LD structured data, canonical tags, and Open Graph metadata.

---

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

---

## Content & Practice Configuration

All practice information lives centrally in `/data`:

| File | What it holds |
| --- | --- |
| `data/doctor.ts` | Name, title, qualifications, biography, banners, care philosophy, areas of interest |
| `data/contact.ts` | Appointment WhatsApp number (`APPOINTMENT_NUMBER`), clinic address, coordinates, Google Maps links |
| `data/expertise.ts` | Six clinical expertise areas, deep dive descriptions, and associated metadata |
| `data/faqs.ts` | Frequently asked clinical and practice questions and answers |
| `data/testimonials.ts` | Patient and parent feedback |
| `data/credentials.ts` | Highlights strip under the hero |
| `data/navigation.ts` | Header and footer link lists |

---

## Technical Stack & Performance

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 with custom `@theme` variables in `app/globals.css`
- **Typography**: Inter (Body) & Manrope (Display)
- **Runtime Dependencies**: `next`, `react`, `react-dom`
