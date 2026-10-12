# Gartentraum Schröder – Homepage

Premium one-page website for **Gartentraum Schröder**, a garden &
landscape construction company (Garten- & Landschaftsbau) in
Westoverledingen, Ostfriesland.

Built with **Next.js 14 (App Router)**, **React 18**, **TypeScript** and
**Tailwind CSS**.

## Features

- Sticky, transparent-to-solid navigation with an animated mobile hamburger menu
- Full-screen hero with a slow Ken-Burns zoom and layered gradients
- Services, 5-step process timeline, filterable project gallery, "why us" and
  testimonial sections
- Conversion-focused contact section with an inquiry form
- Scroll-reveal animations (dependency-free `IntersectionObserver`), image
  hover effects and smooth micro-interactions
- Fully responsive, mobile-first and accessible (skip link, focus states,
  `prefers-reduced-motion` support, semantic landmarks, alt text)
- SEO: metadata, Open Graph / Twitter cards, `LocalBusiness` JSON-LD,
  `sitemap.xml` and `robots.txt`

## Brand & design

A nature-inspired palette (deep garden greens, warm sand/beige, natural stone
tones) paired with an elegant serif (Playfair Display) / clean sans (Inter)
type pairing, generous whitespace and organic accents. Colours and tone match
the company's existing social presence (Instagram / Facebook).

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## Things to customise before launch

All placeholders live in [`lib/site.ts`](./lib/site.ts):

- **Phone & e-mail** – currently placeholders.
- **Logo** – a leaf glyph stands in for the brand mark; drop the real logo into
  `components/Navbar.tsx` / `components/Footer.tsx`.
- **Project photos** – hero and gallery use high-quality Unsplash placeholders
  (configured in `next.config.mjs`). Replace with the company's own photography
  / Instagram images.
- **Reviews** – testimonial cards are intentionally empty placeholders
  ("Google Bewertung hier einfügen"); no reviews are fabricated.
- **Impressum / Datenschutz** – footer links are stubs; add the legally
  required German pages.

## Target SEO keywords

Gartenbau Westoverledingen · Garten Landschaftsbau Westoverledingen ·
3D Gartenplanung Ostfriesland · Poolbau Westoverledingen ·
Gartengestaltung Ostfriesland
