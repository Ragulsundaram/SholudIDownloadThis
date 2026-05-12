# Features Specification

**Project:** ShouldIDownloadThis  
**Last Updated:** 2026-05-10  
**Scope:** v1 (iOS apps, web only, no auth)

---

## V1 Feature Set — Must Have

### 1. App Search & Discovery

- **Search bar** on homepage — user types an app name and sees matching results
- One result per app — each result shows: app icon, app name, ThreatMeter chip, and the iOS score
- Tapping the card goes to `/app/{slug}`
- If an app is not in the database yet, show a "Request this app" option (stores in a queue)
- Search is fuzzy (e.g. "whatsap" still finds "WhatsApp")

### 2. App Detail Page

One URL per app: `/app/{slug}` (e.g. `/app/whatsapp`). v1 is iOS-only — no platform segment.

The detail page contains these sections in order:

**App header**
- App icon, name, developer name
- Feature tags: ThreatMeter chip, app category, sub-category, price (Free), and trust indicators (e.g. "E2E Encrypted") where applicable
- Direct link to the App Store
- Compare button — adds the app to the compare basket (top-right of the navbar)

**VerdictHero**
- Thin component with a 2px risk-colored left bar
- `verdict.one_liner` in large text (the plain-English headline)
- Recommendation lead text below (e.g. "Think twice before downloading")
- No card box, no score number, no progress bar — the score lives in the Overview tab

**Red flags / Green flags** — side by side
- Two cards: one red (`bg-danger-soft`) for all red flags, one green (`bg-safe-soft`) for all green flags
- Inside each card: bullet-point list of flag titles only — no expanded paragraphs
- Sorted by severity within each card

**Category breakdown grid** — 2 columns
- 14 category cards, each with: icon, category name, access type subtitle, risk badge
- **Card border is neutral** (`border-line`) — risk signal lives only in the right-aligned RiskBadge chip, not the card border
- Cards are mutually-exclusive accordions via native `<details name="category">` (only one open at a time, zero JS)
- Cards are sorted by risk severity: `dangerous → risky → caution → safe → unknown`
- Each card is expandable — tap to reveal plain-English description, policy excerpt quote, and specific concerns
**Safer alternative** — shown when overall risk is Caution or worse
- One recommended alternative app with its score and a one-line reason

**Meta strip** — bottom of page
- Policy source URL, policy last-updated date, our analysis date, schema version
- "Flag this rating" link for user corrections

### 3. Category Breakdown Grid

The core UI element. A 2-column grid of expandable cards — one per permission category — each showing:
- An **icon** representing the category (Lucide icon, see DESIGN.md)
- **Category name** and **access type** subtitle (e.g. "On-demand only", "Continuous · no opt-out")
- **Risk level badge** (Safe / Caution / Risky / Dangerous / Unknown) — right-aligned
- **Neutral card border** (`border-line`) — risk signal lives only in the RiskBadge chip, not the border
- Cards sorted by risk severity: `dangerous → risky → caution → safe → unknown`
- **Expandable body** — tap to reveal plain-English description, the relevant policy quote, and a list of specific concerns
- Cards are mutually-exclusive accordions via native `details name="category"` (only one open at a time, zero JS)

Categories tracked (see CATEGORIES.md for full definitions):
1. Camera & Microphone
2. Location & GPS
3. Contacts & Phonebook
4. Storage & File Access
5. Data Sharing with Third Parties
6. Account & Identity Data
7. Behavioural & Ad Tracking
8. Children's Data Handling
9. Network & Internet Activity
10. Device Info & Fingerprinting
11. Health & Biometric Data
12. Financial & Payment Data
13. Data Deletion & User Rights
14. Policy Change Notification

### 4. Overall Risk Score

Computed from category ratings using a **normalized weighted formula** (see DATA-SCHEMA.md). The score is always 0–100 where 100 = perfect privacy and 0 = worst possible.

Displayed as four elements together: large number, progress bar, letter grade, and risk badge:
- 🟢 **Safe** (80–100, A) — minimal privacy concerns
- 🟡 **Caution** (55–79, B/C) — moderate data collection, review before downloading
- 🟠 **Risky** (40–54, D) — significant data collection or sharing, think carefully
- 🔴 **Dangerous** (0–39, F) — severe privacy violations, data selling, or irreversible risks

### 5. Category Browsing

- Browse page at `/browse` — shows all apps in the DB, filterable by:
  - Overall risk level
  - App category (Social, Productivity, Health, Finance, Games, etc.)
- Sorted by: Most recently added / Highest risk / Alphabetical

### 6. Homepage

- Hero section with search bar and tagline
- "Recently Analyzed" apps carousel
- "Most Dangerous Apps" section (top 5 with Dangerous rating)
- "Surprisingly Safe" section (apps users expect to be bad but aren't)
- How it works — 3-step explainer
- Category icons as entry points to browse by concern (e.g. tap the location icon to see all apps that are risky for location)

### 7. Request an App

- Simple form on `/request` — user submits an app name and App Store URL
- Stored in a queue for manual processing
- Confirmation message: "We'll analyze this and add it within 48 hours"

### 8. Compare Page (Shipped in v1)

- Side-by-side comparison at `/compare?apps={slug1},{slug2},...` (max 4)
- Example: `/compare?apps=whatsapp,telegram`
- Compare button on every AppCard + AppHeader adds the app to a localStorage-backed basket; navbar surfaces the basket as a dropdown
- Table sections: app columns (with "Safest" trophy), verdict banner, at-a-glance grid, red/green flag titles, 14-category permissions grid (icon + label per row)

---

## V2 Feature Set — Planned

- **URL/text paste analyzer** — paste any policy URL or raw text for instant analysis
- **App version tracking** — alert when a policy changes and a re-analysis is needed
- **Browser extension** — shows a warning badge when visiting an app's App Store page
- **Shareable verdict cards** — image cards optimized for sharing on social media

## V3 Feature Set — Future

- **User accounts** — save apps to a watchlist, get notified of policy changes
- **Mac / Windows / Linux apps** support
- **Browser extension policies** support
- **API access** for developers to query the DB programmatically
- **Crowdsourced flagging** — users can flag incorrect ratings for review
- **Historical policy diffs** — see what changed between policy versions

---

## Non-Features (Explicitly Out of Scope for v1)

- No user login or accounts
- No paid tiers or paywalls — fully free and public
- No in-app purchases or monetization layer in v1
- No real-time policy fetching (all data is manually seeded)
- No user-generated content or comments
