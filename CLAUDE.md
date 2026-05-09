# CLAUDE.md

Orientation for any Claude session working in this repo. Read this before doing anything else.

## What this project is

**ShouldIDownloadThis** is a free, public web platform that reads app privacy policies and terms, then renders a per-category privacy rating (Safe / Caution / Risky / Dangerous) for each app. Users land here from Google searches like "Is Instagram safe to download?" — so SEO and static rendering are first-class concerns. No login, no paywall.

The product overview, principles, and roadmap live in `README.md`. Read it first if you haven't.

## Phase / scope

We are in **v1**: iOS apps only, manually seeded JSON files, no backend, no auth. Do not add features beyond v1 without explicit user direction. The full v1/v2/v3 split is in `docs/FEATURES.md` ("Non-Features (Explicitly Out of Scope for v1)" is load-bearing).

## Where the truth lives — read the relevant doc before writing code

| Task | Doc to read |
|------|-------------|
| Adding/changing a UI component, color, or layout | `docs/DESIGN.md` |
| Adding/changing a feature, page, or route | `docs/FEATURES.md` |
| Touching JSON data, scoring, or schema validation | `docs/DATA-SCHEMA.md` |
| Picking a library or restructuring the project | `docs/TECH-STACK.md` |
| Generating a new app's data from a privacy policy | `docs/CLAUDE-PARSER-PROMPT.md` |

These are the source of truth. Do not duplicate their contents here — link out.

## Tech stack — what actually got installed

`docs/TECH-STACK.md` was written assuming Next 14 / Tailwind 3. The scaffold pulled in newer majors. **Trust the installed versions, not the doc:**

- **Next.js 16** (App Router) — APIs and conventions differ from Next 14. `AGENTS.md` (auto-generated) reminds you to consult `node_modules/next/dist/docs/` before writing route/server code.
- **React 19** — server components by default in `app/`.
- **Tailwind v4** — CSS-first config (no `tailwind.config.js`); theme tokens live in `app/globals.css` via `@theme`. Do not generate a v3-style config.
- **TypeScript**, **ESLint**, **lucide-react**, **fuse.js** — installed.
- **shadcn/ui** — not yet initialized. Run `npx shadcn@latest init` when you first need a component (`Card`, `Badge`, `Accordion`, `Button`, `Input`, `Sheet` are the ones the spec calls for).

If you're tempted to update the docs to match the new versions, ask first — the user may want the docs preserved as design intent.

## Repo layout

```
/                       Next.js project root
  app/                  App Router pages (see docs/TECH-STACK.md "Project Structure")
  components/           Empty — components from docs/DESIGN.md go here
  lib/                  Empty — getApp.ts, getAllApps.ts, scoring.ts, types.ts go here
  data/
    apps/{slug}/_app.json + {platform}.json   ← read by the site
    reviews/{slug}-{platform}.md              ← human audit trail, NEVER read by site
    index.json                                ← search/browse index
  docs/                 Design intent (see table above)
  public/icons/         App icon fallbacks
```

## Hard rules / invariants — easy to break, don't

1. **`.md` files are human-only. `.json` files are site-only.** Never have the site `fs.readFileSync` a `.md`. Never put markdown inside a `.json`. (`README.md` "File split rule".)
2. **`verdict.score` must equal `scoring.final_score`.** The `scoring.final_score` is authoritative — if they diverge, fix `verdict.score`. Same for `verdict.grade` ↔ `scoring.grade`.
3. **`scoring.max_possible_deductions` is always 205.** That's the fixed normalization denominator. Never change it.
4. **Score formula:** `final_score = clamp(0, 100, round((1 − total_deductions / 205) × 100))`. See `docs/DATA-SCHEMA.md` "Scoring Formula".
5. **Grade thresholds are fixed:** A 85–100, B 70–84, C 55–69, D 40–54, F 0–39.
6. **`_app.json` is auto-derived** from the platform files — never hand-edit; regenerate from the platform JSONs.
7. **Risk colors (green/amber/orange/red) carry meaning only.** Never use them as decoration. Never hardcode their hex — use the CSS variables defined in `globals.css` (so dark mode works). See `docs/DESIGN.md` "Dark Mode Rule".
8. **Plain-English copy must pass the 14-year-old test.** No legalese, no jargon, no "may be utilized." See `docs/DESIGN.md` "Tone of Voice".
9. **Score is per-platform.** Same app, different platform → different JSON, potentially different score. URLs reflect this: `/app/{slug}/{platform}`.

## Data pipeline (v1, manual)

Adding a new app means producing two artifacts from one Claude run:

1. Use the system prompt in `docs/CLAUDE-PARSER-PROMPT.md` against the raw policy + terms text.
2. Save the full markdown response to `data/reviews/{slug}-{platform}.md` (audit trail).
3. Extract just the JSON block to `data/apps/{slug}/{platform}.json`.
4. Update `data/apps/{slug}/_app.json` (regen from all platform files for that slug).
5. Add/refresh the slug's entry in `data/index.json`.

Steps 3–5 should be a script eventually (`scripts/ingest.ts` or similar) but it doesn't exist yet.

## Workflow

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build (also the SEO/static-gen check)
- `npm run lint` — ESLint

Test UI changes in a real browser before declaring them done — type checks aren't enough.

## What's already done vs. not

**Done:**
- Repo scaffolded; deps installed; `docs/`, `data/` skeleton.
- Design tokens in `app/globals.css` (CSS vars + Tailwind v4 `@theme` — `bg-page`, `bg-surface`, `text-ink-muted`, risk classes like `bg-safe-soft text-safe-ink border-safe-line`, etc.). Use these instead of raw hex or vanilla Tailwind colors.
- `lib/types.ts`, `lib/risk.ts` (`riskFromScore`, `gradeFromScore`, `worstRisk`, label maps), `lib/getAllApps.ts`.
- Components: `RiskBadge`, `AppCard`, `Navbar`, `Footer`, `SearchBar` (client; Fuse.js fuzzy search), `BrowseByConcern`, `HowItWorks`, `AppHeader`, `PlatformSwitcher`, `ScoreBlock`, `FlagsList`, `CategoryCard` (uses native `<details>` for zero-JS expansion), `MetaStrip`, `CategoryIcon` (Lucide icon-name → component map).
- Pages: `/` (homepage), `/app/[slug]` (platform picker), `/app/[slug]/[platform]` (full detail — header, switcher, score block, red/green flags, 14-category grid, meta strip). Both detail routes use `generateStaticParams` driven by `getAllSlugs()` so SEO/SSG works.
- `lib/getApp.ts` reads `_app.json` + `{platform}.json`; `lib/trustIndicators.ts` derives feature tags ("E2E Encrypted", "No Ads", "Open Source") from green-flag titles via regex.
- WhatsApp iOS seeded as the first real app: `data/apps/whatsapp/{ios.json,_app.json}` + entry in `data/index.json`.
- `next.config.ts` allows `*-ssl.mzstatic.com` for App Store icon URLs in `next/image`.

**Not yet done — likely next steps:**
- `/browse`, `/compare`, `/request` pages
- `SaferAlternative` block (needs at least one safer alternative app analyzed for a given category before it can render — skipped for now since only WhatsApp is in the DB)
- `lib/scoring.ts` (validation + recompute helper that confirms `verdict.score === scoring.final_score` and `total_deductions / 205 → final_score`)
- A small ingest script (`scripts/ingest.ts`) that takes a parser-output `.md`, splits the JSON to `data/apps/{slug}/{platform}.json`, regenerates `_app.json`, and refreshes the index entry — currently this is manual.
