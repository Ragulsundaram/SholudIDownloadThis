# Features Specification

**Project:** ShouldIDownloadThis  
**Last Updated:** 2026-05-10  
**Scope:** v1 (iOS apps, web only, no auth)

---

## V1 Feature Set — Must Have

### 1. App Search & Discovery

- **Search bar** on homepage — user types an app name and sees matching results
- One result per app (not per platform) — each result shows: app icon, app name, ThreatMeter chip, and platform pills with Lucide icons + scores (e.g. `[🍎 53]` `[🤖 53]`)
- Tapping a platform pill goes directly to `/app/{slug}/{platform}`
- Tapping the card body goes to `/app/{slug}` (the platform overview/picker page)
- If an app is not in the database yet, show a "Request this app" option (stores in a queue)
- Search is fuzzy (e.g. "whatsap" still finds "WhatsApp")

### 2. App Detail Page

Each app has two URL levels:
- `/app/{slug}` — overview page, shows all available platforms and lets the user pick
- `/app/{slug}/{platform}` — the full detail page for a specific platform (e.g. `/app/whatsapp/ios`)

Tapping a platform badge in search results goes directly to the platform-specific URL.

The detail page contains these sections in order:

**App header**
- App icon, name, developer name
- Feature tags: ThreatMeter chip, app category, sub-category, price (Free), and trust indicators (e.g. "E2E Encrypted") where applicable. The active platform is **not** shown here — it lives in the Platform Switcher below
- Direct link to the App Store / Play Store / platform store

**Platform switcher**
- Pill buttons for each available platform: iOS · Android · Mac · Windows · Linux
- Currently unavailable platforms shown as greyed-out "soon" pills
- Switching platform reloads the score, verdict, flags, and category cards for that platform — same URL slug, different platform segment
- Some category ratings and scores legitimately differ per platform (e.g. Mac has stricter OS sandbox, Android has additional Play Store permissions)

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
- Platform-specific categories (e.g. "App Sandbox" for Mac, "Play Store Permissions" for Android) only appear on the relevant platform

**Safer alternative** — shown when overall risk is Caution or worse
- One recommended alternative app with its score and a one-line reason

**Meta strip** — bottom of page
- Policy source URL, policy last-updated date, our analysis date, platform, schema version
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

Platform-exclusive categories (e.g. Mac App Sandbox, Android Play Store Permissions) are only shown on the relevant platform page.

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

The score is **per platform** — the same app can score differently on iOS vs Android vs Mac because each platform has its own policy analysis.

### 5. Platform & Category Browsing

- Browse page at `/browse` — shows all apps in the DB, filterable by:
  - Platform (iOS — more added later)
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

### 8. Compare Page (Stretch Goal for v1)

- Side-by-side comparison at `/compare?a={slug}/{platform}&b={slug}/{platform}`
- Example: `/compare?a=whatsapp/ios&b=signal/ios`
- Same category grid shown for both apps in columns with per-category diff indicators
- Useful for "WhatsApp vs Signal" and "WhatsApp iOS vs WhatsApp Android" type decisions

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
