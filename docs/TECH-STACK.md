# Tech Stack

**Project:** ShouldIDownloadThis  
**Recommended Stack:** Next.js 14 + Tailwind CSS + shadcn/ui + JSON flat files (v1) → Supabase (v2)

---

## Why This Stack

The two most important technical facts about this product are:

1. **SEO is critical.** Users will search Google for "Is Instagram safe to download?" or "WhatsApp privacy policy rating." You need server-rendered, indexable pages — not a single-page app that Google can't read properly.
2. **v1 has no backend.** Data is manually seeded JSON files. The stack should make it trivial to read JSON and render a page, with a clear upgrade path to a real database later.

Next.js satisfies both. It generates static pages from JSON files at build time (blazing fast, perfectly SEO'd), and seamlessly upgrades to database-backed dynamic routes when you're ready.

---

## Full Stack Breakdown

### Frontend Framework — Next.js 14 (App Router)

**Why:** Server-side rendering + static generation built in. Each app gets its own static page generated at build time from its JSON file. When you search "WhatsApp privacy rating" — your page loads instantly and Google has fully indexed it.

- Static Site Generation (SSG) for all app detail pages
- Incremental Static Regeneration (ISR) later when moving to a DB
- File-based routing matches perfectly with the `/app/[slug]` URL structure
- API routes available for the request queue form

### Styling — Tailwind CSS

**Why:** Utility-first CSS that's fast to write, easy to maintain, and produces tiny production CSS bundles. The design system in DESIGN.md maps directly to Tailwind classes.

### Component Library — shadcn/ui

**Why:** Built on Radix UI (fully accessible) + Tailwind. Components are copied into your project — you own the code, no black box. Gives you cards, badges, dialogs, accordions out of the box. No paid tier.

Install only what you need: Badge, Card, Accordion, Button, Input, Sheet (for mobile filters).

### Data Layer v1 — JSON Flat Files

For v1, each app's data lives in `/data/apps/{slug}/app.json`. Next.js reads these at build time and generates static pages. Zero infrastructure, zero cost, zero complexity.

```
/data
  /apps
    /whatsapp
      app.json           ← iOS policy analysis (full schema)
    /instagram
      app.json
    ...
  /reviews               ← human-readable .md audit files (not read by site)
    whatsapp.md
    ...
  /index.json            ← lightweight list of all apps (for browse + search)
```

### Data Layer v2 — Supabase (Postgres)

When the DB grows beyond ~100 apps or you need dynamic features (search, filtering, change alerts), migrate to Supabase. It's Postgres under the hood, has a generous free tier, and integrates with Next.js in a few lines. The JSON schema defined in `DATA-SCHEMA.md` maps directly to Supabase table columns.

Migration path: replace `fs.readFileSync(...)` with `supabase.from('apps').select(...)`. No other changes needed.

### Search (v1) — Fuse.js

Client-side fuzzy search over the `/data/index.json` file. Fast enough for hundreds of apps. Zero server cost.

### Search (v2) — Supabase Full Text Search or Algolia

When the catalog grows, switch to Postgres full-text search (free) or Algolia (better UX, has free tier).

### Hosting — Vercel

**Why:** Built by the same team as Next.js. Zero-config deployment. Free tier is generous. Automatic preview deployments on every PR. Custom domain support. CDN built in.

### Icons — Lucide React

Open source, consistent design, tree-shakeable, maps perfectly to the categories in CATEGORIES.md.

### Image Handling — next/image

Automatic optimization for app icons. Lazy loading built in. Critical for mobile performance.

---

## Project Structure

```
shouldidownloadthis/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage
│   ├── browse/
│   │   └── page.tsx              # Browse all apps
│   ├── app/
│   │   └── [slug]/
│   │       └── page.tsx          # App detail page
│   ├── compare/
│   │   └── page.tsx              # Compare apps (client; reads ?apps= or basket)
│   ├── request/
│   │   └── page.tsx              # Request an app form
│   └── api/
│       ├── compare/route.ts      # Merged comparison data for a list of slugs
│       └── all-apps/route.ts     # Index for client components
├── components/
│   ├── AppCard.tsx               # App card: icon + name + ThreatMeter + compare button
│   ├── AppHeader.tsx             # App icon, name, developer, tags, store link, compare pill
│   ├── CompareProvider.tsx       # localStorage-backed compare basket context
│   ├── CompareButton.tsx         # Icon/pill button — toggles slug in/out of basket
│   ├── CompareBasket.tsx         # Navbar dropdown (count + list + Compare Now)
│   ├── CompareView.tsx           # Side-by-side comparison table
│   ├── ThreatMeter.tsx           # Threat-level pill chip with segments
│   ├── VerdictHero.tsx           # Thin verdict headline + recommendation
│   ├── TabbedSections.tsx        # Rounded pill tabs (Overview · Flags · Categories · Source)
│   ├── CategoryCard.tsx          # Expandable category rating card
│   ├── CategoryIcon.tsx          # Lucide icon name → component map
│   ├── RiskBadge.tsx             # Reusable risk pill badge
│   ├── FlagsList.tsx             # Red card / Green card with bullet-point flags
│   ├── SaferAlternative.tsx      # Green recommendation block
│   ├── MetaStrip.tsx             # Policy source, dates, flag link
│   ├── SearchBar.tsx             # Fuzzy search input
│   ├── BrowseByConcern.tsx       # Category icon grid for homepage
│   ├── HowItWorks.tsx            # 3-step explainer section
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   ├── getApp.ts                 # Read app.json for a slug
│   ├── getAllApps.ts             # Read index.json for browse/search
│   ├── scoring.ts                # Normalized score calculation (÷205)
│   └── types.ts                  # TypeScript types (mirrors DATA-SCHEMA.md)
├── data/
│   ├── apps/                     # One folder per app
│   │   ├── whatsapp/
│   │   │   └── app.json          # iOS policy analysis (full schema)
│   │   └── signal/
│   │       └── app.json
│   ├── reviews/                  # Human-readable .md audit files (not read by site)
│   │   ├── whatsapp.md
│   │   └── signal.md
│   └── index.json                # Lightweight list of all apps for search + browse
├── public/
│   └── icons/                    # App icons (fallback if icon_url is empty)
├── docs/                         # This documentation
└── ...config files
```

---

## Development Setup

```bash
# Install dependencies
npx create-next-app@latest shouldidownloadthis --typescript --tailwind --app

# Add shadcn/ui
npx shadcn-ui@latest init

# Add components you need
npx shadcn-ui@latest add card badge accordion button input

# Add Lucide icons
npm install lucide-react

# Add Fuse.js for search
npm install fuse.js

# Run dev server
npm run dev
```

---

## Environment Variables

v1 requires none. Everything is static.

v2 (when Supabase is added):
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance (mobile) | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3s |
| Core Web Vitals | All green |

Static generation + Vercel CDN makes these very achievable with no special effort.
