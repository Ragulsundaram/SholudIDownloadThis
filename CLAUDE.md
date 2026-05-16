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
5. **Grade thresholds are fixed:** A 80–100, B 70–79, C 55–69, D 40–54, F 0–39.
6. **Risk colors (green/amber/orange/red) carry meaning only.** Never use them as decoration. Never hardcode their hex — use the CSS variables in `globals.css`.
7. **Plain-English copy must pass the 14-year-old test.** No legalese, no jargon.
8. **One app, one rating.** No platform fan-out. URL is `/app/{slug}`.
9. **Any overlay, modal, drawer, or dropdown MUST use `createPortal(content, document.body)`.** The Navbar has `backdrop-filter` which breaks `fixed` positioning for any child element. Never nest a `fixed`-positioned overlay inside the Navbar or any element with `backdrop-filter`/`transform`/`filter`. See the "Layout & Overlay Rules" section in `docs/DESIGN.md` for the required pattern.

## Environment setup — new machine / fresh clone

Before doing anything else on a new machine, check whether the Python dependencies are ready:

```bash
python3 -c "import scrapling; print('ok')"
```

If that prints `ok`, the environment is ready — skip to the workflow below.

If it errors (ModuleNotFoundError, browser not found, etc.), YOU must run the bootstrap script first:

```bash
bash setup.sh
```

`setup.sh` installs everything unattended: Homebrew (macOS), Python 3, scrapling, the Patchright Chromium binary, Node.js, and `npm install`. It is idempotent — safe to run more than once. After it completes, proceed normally. **Do not ask the user to run it — run it yourself via Bash.**

---

## Adding a new app — AUTOMATIC workflow

**Trigger:** The user's message is (or contains) an App Store URL (`apps.apple.com/...`).

**Do NOT ask any questions. Do NOT wait for confirmation. Execute every step below yourself using your Bash tool.** The user's only input is the URL.

### Step 1 — YOU run the scraper
```bash
python3 scrape_privacy.py <app_store_url>
```
Run this via your Bash tool. The script does everything automatically:
- Calls the iTunes API → gets app name, developer, category, icon URL
- Finds the "developer's privacy policy" link on the App Store page
- Scrapes the full policy (handles JS, accordions, annotation popups, subpages)
- Saves `{slug}_policy.md` in the project root with an App Metadata header

If it errors with a ModuleNotFoundError or browser/playwright message, run `bash setup.sh` first (see "Environment setup" above), then retry.

### Step 2 — Derive the slug
The output filename tells you: `instagram_policy.md` → slug is `instagram`.
Formula if needed: lowercase, spaces/special chars → hyphens, strip leading/trailing hyphens.

### Step 3 — YOU parse the policy
Read `docs/CLAUDE-PARSER-PROMPT.md` — it contains the full system prompt, schema, and scoring rules.
Read the scraped `.md` file from step 1 — it contains the policy text and app metadata at the top.
Apply the parser prompt logic to produce the full JSON + summary card. Do not deviate from the schema.

### Step 4 — YOU save the two artifacts
- Create `data/apps/{slug}/` if it doesn't exist, then write `data/apps/{slug}/app.json` — JSON block only
- Write `data/reviews/{slug}.md` — full markdown output including summary card (audit trail, never read by site)
- Use the icon URL from the App Metadata section of the scraped file for the `icon` field in `app.json`

### Step 5 — YOU update the index
Add or refresh the app's entry in `data/index.json`. Required fields: `slug`, `name`, `score`, `grade`, `risk`, `category`, `analyzed_at` (today's date, `YYYY-MM-DD`), `icon` (from the scraped metadata).

### Step 6 — YOU clean up
Delete the temporary `{slug}_policy.md` file from the project root.

### Step 7 — YOU verify
Run this via Bash:
```bash
npm run build
```
If it fails, fix the issue before reporting done. Do not tell the user it's done until this passes.

---

## Dev workflow

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build (also the SEO/static-gen check)
- `npm run lint` — ESLint

Test UI changes in a real browser before declaring them done — type checks aren't enough.
