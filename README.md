## Shivalik College Experience Site

A bespoke Next.js (App Router + TypeScript) experience for **shivalikcollege.edu.in** showcasing academics, admissions, research, placements, campus life, IQAC, and the CBII/iHUB innovation hub.

### Highlights

- **Secondary header** with compact shortcuts to About, Blogs, Students, Alumni, and Contact desks.
- **Main header** with responsive mega-dropdowns for Academics, Admissions, Placement, Campus, Research, and IQAC. Academics includes a fully nested three-level navigation structure.
- **Apply Now CTA** persists in the main navigation plus a dedicated admissions call-to-action section.
- **Hero + campus storytelling** featuring CBII/iHUB spotlight, campus highlights, blogs, services for students/alumni, and contact forms.
- Built with Tailwind CSS v4, Geist font stack, and mobile-first layout primitives.

### Tech Stack

- Next.js 16 (App Router, TypeScript)
- React 19
- Tailwind CSS v4 (`@tailwindcss/postcss` pipeline)

## Getting Started

Install dependencies once:

```bash
npm install
```

Run the development server (http://localhost:3000):

```bash
npm run dev
```

### Quality Gates

- Lint: `npm run lint`
- Production build: `npm run build`

## Project Structure

- `src/app/page.tsx` – Landing page content (hero, campus, blogs, services, contact, CTAs).
- `src/components/navigation/SecondaryHeader.tsx` – Compact top ribbon with quick links.
- `src/components/navigation/MainHeader.tsx` – Responsive mega-navigation with dropdown logic and mobile drawer.
- `src/data/navigation.ts` – Declarative navigation tree powering dropdown menus.

## Deployment

Deploy via any Next.js-compatible platform (Vercel, Netlify, etc.). Ensure `npm run build` succeeds before pushing to production.
