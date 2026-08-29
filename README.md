# Little Bloom Children's Clinic — Pediatrician Website Template

A complete, production-quality single-page website for a private pediatric practice.
Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4**.

> **This is a demo build.** The doctor, clinic, address, phone number and
> registration number are fictional. Everything is structured so the real
> practice details can be dropped in without touching the design.

---

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

---

## Swapping in the real practice

All copy lives in `/data`. Editing these files is the whole job — no component
contains hard-coded doctor or clinic text.

| File | What it holds |
| --- | --- |
| `data/doctor.ts` | Name, title, headline, biography, credentials, areas of interest, care philosophy |
| `data/clinic.ts` | Clinic name, address, phone, email, hours, map embed, social links |
| `data/services.ts` | The eight expertise cards (each picks an icon by name) |
| `data/experience.ts` | Timeline entries |
| `data/faqs.ts` | Accordion questions and answers |
| `data/testimonials.ts` | Parent quotes |
| `data/stats.ts` | The credential strip under the hero |
| `data/navigation.ts` | Header and footer link lists |

Two more files complete the swap:

- **`lib/media.ts`** — photography. Images are currently served from Unsplash so
  the demo works out of the box. To use real photos, drop them in `/public` and
  change each `src` to e.g. `"/images/doctor-portrait.jpg"`. Every consumer uses
  `next/image`, so nothing else changes. (If you stop using Unsplash you can also
  drop the `remotePatterns` entry in `next.config.ts`.)
- **`lib/structuredData.ts`** — the `MedicalClinic` + `Physician` JSON-LD graph and
  the canonical `SITE_URL`. Set `SITE_URL` to the real domain before launch; it
  also feeds `metadataBase` and the Open Graph tags in `app/layout.tsx`.

---

## Architecture

```
app/
  layout.tsx          Fonts, SEO metadata, Open Graph, JSON-LD, <html> shell
  page.tsx            Composes the sections in order
  globals.css         Design tokens, base layer, motion primitives
  icon.svg            Favicon (the brand mark)
components/
  layout/             Header, MobileNav, Footer
  sections/           One file per page section
  ui/                 Button, Container, Reveal, SectionHeading, Field,
                      ExpandableText, Logo, Icons
hooks/
  useScrollProgress   Scroll-linked 0..1 value for the timeline fill
  useActiveSection    Scroll-spy for the header
data/                 All editable content
lib/                  Media, structured data, class-name helper
```

### Design system

Tokens are defined once in `app/globals.css` under `@theme`, which is what
generates the Tailwind utilities:

- **Colour** — warm-white canvas (`canvas`, `canvas-soft`), deep medical blue
  (`brand-50…950`), charcoal ink (`ink`, `ink-muted`, `ink-soft`), hairlines
  (`line`, `line-strong`), and status colours (`danger`, `notice`).
- **Accents** — six desaturated pediatric hues (`teal`, `coral`, `honey`,
  `mint`, `lilac`, plus `brand`) defined in `lib/accents.ts`. Each exposes
  `chip` / `solid` / `text` / `bar` / `ring` / `wash` class strings, so a
  component picks an accent by name and every surface stays consistent. They
  colour icon chips, statistics, quote marks and the open FAQ row — accents
  only, never large fills. Change a service's colour by editing its `accent`
  field in `data/services.ts`.
- **Type** — Manrope for display, Inter for text, both self-hosted through
  `next/font` (no external font requests).
- **Motion** — `--ease-premium: cubic-bezier(0.22, 1, 0.36, 1)`, 400–800ms, plus
  named loops (`animate-float-slow`, `animate-drift-a/b`) for the floating cards
  and the slow background washes.
- **Elevation** — four wide, low-opacity shadows: `soft`, `float`, `lift`, `panel`.

**Everything that moves stays on the compositor** — transform and opacity only.
`background-position` panning was removed once Lighthouse flagged it as the
page's one non-composited animation.

> **One rule worth knowing:** never put two utilities for the same CSS property
> on one element (e.g. a base `bg-canvas` plus a conditional `bg-brand-600`).
> They have equal specificity, so the stylesheet order wins rather than the class
> order. Put each state's value in its own branch instead.

### Motion

Scroll reveals are opt-in via the `<Reveal>` component, which toggles a
`data-reveal` attribute. The hidden state is scoped to a `.js` class set by an
inline script, so **the page renders completely with JavaScript disabled**.
Only `opacity` and `transform` are animated. Anything already level with or
above the viewport is shown immediately, so anchor jumps and fast scrolling can
never strand a block at zero opacity.

A shared, throttled scroll listener backs the observer up: a fling scroll or an
End keypress can move an element from below the fold to above it inside one
frame, which produces no threshold crossing and would otherwise strand it at
zero opacity forever. It runs at most 5x/second with one trailing pass, and
unhooks itself once every reveal has fired.

`prefers-reduced-motion: reduce` collapses every transition to 1ms, disables
smooth scrolling, stops the drifting washes and the floating cards, and makes
the statistics show their final value instead of counting up.

Beyond the scroll reveals: the headline enters word by word, the portrait takes
a capped 42px scroll parallax, the credential figures count up on first view,
a reading-progress rule fills across the bottom of the header, and the
testimonials run as an auto-advancing carousel that pauses on hover and focus.

---

## Notable implementation details

- **Appointment form** (`components/sections/AppointmentForm.tsx`) validates on
  submit, moves focus to the first invalid field, and rejects past dates and
  Sundays. There is no backend: the `setSubmitted(true)` call marks where to POST
  to a booking endpoint.
- **Map** is click-to-load. No third-party iframe is requested on first paint,
  which keeps the page fast and private; the placeholder is a drawn abstract
  street plan so the section always looks finished. Point `clinic.mapEmbedUrl` at
  a Google Maps or Mapbox embed if preferred.
- **Timeline** is one `<ol>` that reads horizontally on large screens and
  vertically below. The fill is a `scaleX`/`scaleY` transform driven by scroll
  position — no layout properties animate.
- **Testimonials carousel** shows 1/2/3 cards by breakpoint, auto-advances every
  6s, and pauses on hover, on focus and under reduced motion. Arrow keys work,
  and the dots expose `aria-current`.
- **Icons** are a purpose-built thin-line set in `components/ui/Icons.tsx`, so
  there is no icon-library dependency and the stroke weight matches the type.
- **Accordions** collapse with the `grid-template-rows: 0fr → 1fr` technique and
  set `visibility: hidden` when closed, keeping collapsed answers out of the
  accessibility tree and tab order.
- **Mobile drawer** uses `inert` when closed, locks body scroll when open, traps
  Tab, closes on Escape, and returns focus to the trigger.

---

## Verified results

Lighthouse, against `npm run build && npm run start`:

| | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| Desktop | **100** | **100** | **100** | **100** |
| Mobile | **92–93** | **100** | **100** | **100** |

Desktop LCP 0.7s · CLS 0 · TBT 0ms. Mobile LCP 3.0s · CLS 0 (the mobile score
moves a point or two between runs on TBT). Checked at 1440 / 1280 / 1024 / 768 /
390 / 360 px with no horizontal overflow at any width.

Runtime dependencies: `next`, `react`, `react-dom`. Nothing else.
