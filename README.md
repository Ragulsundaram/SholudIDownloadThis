# ShouldIDownloadThis 📲

> Before you tap "Install" — know what you're agreeing to. 

**ShouldIDownloadThis** is a free, public web platform that reads the privacy policies and terms & conditions of apps so you don't have to. It gives every app a clear, visual, category-by-category privacy rating — in plain English — so any person can make an informed choice in under 30 seconds.

No sign-up. No account. Just answers.

---

## Why This Exists

The average privacy policy is **4,000 words long**, written at a **postgraduate reading level**, and **changes without notice**. Studies show over **91% of users never read them**. They tap "I Agree" and hand over camera access, location data, contacts, and behavioral history — without knowing it.

We believe privacy should be understandable by everyone, not just lawyers.

---

## What It Does

- Shows **per-category privacy ratings** for iOS apps
- Breaks down what each app accesses: camera, microphone, location, contacts, storage, identity, ad tracking, and more
- Gives each category a **risk level**: Safe / Caution / Risky / Dangerous
- Highlights **red flags** (e.g. sells your data) and **green flags** (e.g. supports data deletion) in plain-English card lists
- Shows a one-line **plain-English verdict** plus a recommendation ("Think twice before downloading")
- Works beautifully on **mobile and desktop**

---

## Documentation Index

| File | Purpose |
|------|---------|
| `docs/FEATURES.md` | Full feature list for v1 and future phases |
| `docs/DESIGN.md` | Visual design system, UI principles, color language, component specs |
| `docs/TECH-STACK.md` | Recommended tech stack with reasoning |
| `docs/DATA-SCHEMA.md` | JSON schema used to store each app's privacy data |
| `docs/CATEGORIES.md` | All tracked permission categories with risk rubrics and icons |
| `docs/CLAUDE-PARSER-PROMPT.md` | The exact prompt to give Claude to convert a raw policy into structured data |
| `docs/ROADMAP.md` | Phase-by-phase build plan |

---

## How the Data Pipeline Works (v1 — Manual Seeding)

```
Step 1  → Go to an iOS app's App Store page
Step 2  → Find both URLs: Privacy Policy + Terms & Conditions
Step 3  → Copy the full raw text of both documents
Step 4  → Open a Claude instance
Step 5  → Use the system prompt from docs/CLAUDE-PARSER-PROMPT.md
Step 6  → Paste raw policy text + app name, developer, App Store URL
Step 7  → Claude returns a .md file: JSON block at top + human-readable summary below
Step 8  → Save the full .md to /data/reviews/{slug}.md  ← audit trail
Step 9  → Extract only the JSON block → save to /data/apps/{slug}/app.json
Step 10 → Add a lightweight entry to /data/index.json for search and browse
Step 11 → The website reads from /data/apps/ and renders the page automatically
```

**File split rule:** `.md` files are for human review only — never read by the site. `.json` files are for the site — never contain markdown.

**Note on the output:** Claude's score in `verdict.score` and `scoring.final_score` will always match. If you notice a discrepancy, the `scoring.final_score` is the authoritative number — correct `verdict.score` to match before saving.

---

## Project Status

| Phase | Scope | Status |
|-------|-------|--------|
| 1 | iOS apps — manual DB via Claude | 🔄 Active |
| 2 | Paste-a-URL live analysis | 🔜 Planned |
| 3 | User watchlists & change alerts | 🔜 Planned |

---

## Guiding Principles

1. **Clarity over completeness** — a simple truth beats a complex one
2. **No jargon** — if a 14-year-old can't read it, rewrite it
3. **Public by default** — no login walls on information people need
4. **Honest ratings** — we do not accept money from app developers to change scores
5. **Human-verified** — every AI-generated analysis can be flagged and reviewed
