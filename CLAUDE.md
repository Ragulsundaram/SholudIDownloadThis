# CLAUDE.md

Orientation for any Claude session working in this repo. Read this before doing anything else.

## What this project is

**ShouldIDownloadThis** is a free, public web platform that reads app privacy policies and terms, then renders a per-category privacy rating (Safe / Caution / Risky / Dangerous) for each app. Users land here from Google searches like "Is Instagram safe to download?" — so SEO and static rendering are first-class concerns. No login, no paywall.

The product overview, principles, and roadmap live in `README.md`. Read it first if you haven't.

## Phase / scope

We are in **v1**: iOS apps only, manually seeded JSON files, no backend, no auth. **There is no multi-platform concept in code or data — every app has exactly one `app.json` and one App Store listing.** Do not add features beyond v1 without explicit user direction. The full v1/v2/v3 split is in `docs/FEATURES.md`.

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

- **Next.js 16** (App Router) — APIs and conventions differ from Next 14. `AGENTS.md` reminds you to consult `node_modules/next/dist/docs/` before writing route/server code.
- **React 19** — server components by default in `app/`.
- **Tailwind v4** — CSS-first config (no `tailwind.config.js`); theme tokens live in `app/globals.css` via `@theme`.
- **TypeScript**, **ESLint**, **lucide-react**, **fuse.js** — installed.

## Repo layout

```
/                       Next.js project root
  app/                  App Router pages
    app/[slug]/         App detail page (single, no platform segment)
    compare/            Compare page (client; reads ?apps= or basket)
    api/compare/        Returns merged comparison JSON for a list of slugs
    api/all-apps/       Returns the index for client components
  components/           UI components
  lib/                  types.ts, risk.ts, getApp.ts, getAllApps.ts, trustIndicators.ts
  data/
    apps/{slug}/app.json    ← read by the site
    reviews/{slug}.md       ← human audit trail, NEVER read by site
    index.json              ← flat search/browse index
  docs/                 Design intent (see table above)
  public/icons/         App icon fallbacks
```

## Hard rules / invariants — easy to break, don't

1. **`.md` files are human-only. `.json` files are site-only.** Never have the site `fs.readFileSync` a `.md`. Never put markdown inside a `.json`.
2. **`verdict.score` must equal `scoring.final_score`.** Same for `verdict.grade` ↔ `scoring.grade`.
3. **`scoring.max_possible_deductions` is always 205.** Fixed normalization denominator.
4. **Score formula:** `final_score = clamp(0, 100, round((1 − total_deductions / 205) × 100))`. See `docs/DATA-SCHEMA.md`.
5. **Grade thresholds are fixed:** A 85–100, B 70–84, C 55–69, D 40–54, F 0–39.
6. **Risk colors (green/amber/orange/red) carry meaning only.** Never use them as decoration. Never hardcode their hex — use the CSS variables in `globals.css`.
7. **Plain-English copy must pass the 14-year-old test.** No legalese, no jargon.
8. **One app, one rating.** No platform fan-out. URL is `/app/{slug}`.

## Data pipeline (v1, manual)

Adding a new app means producing two artifacts from one Claude run:

1. Use the system prompt in `docs/CLAUDE-PARSER-PROMPT.md` against the raw policy + terms text.
2. Save the full markdown response to `data/reviews/{slug}.md` (audit trail).
3. Extract just the JSON block to `data/apps/{slug}/app.json`.
4. Add/refresh the slug's entry in `data/index.json` with `score`, `grade`, `risk`, `analyzed_at`.

## Workflow

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build (also the SEO/static-gen check)
- `npm run lint` — ESLint

Test UI changes in a real browser before declaring them done — type checks aren't enough.
