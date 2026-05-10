# Design System

**Project:** ShouldIDownloadThis  
**Audience:** General public, non-technical users  
**Principle:** If your grandparent and your teenager both understand it instantly — it's working.

---

## Design Philosophy

1. **Clarity is kindness.** Every element earns its place. If it doesn't help the user decide, remove it.
2. **Colors carry meaning.** The risk color system is consistent everywhere — never use red for decorative purposes.
3. **Mobile-first.** Most users will be on their phones deciding whether to install an app. The phone experience is primary.
4. **No dark patterns.** No misleading UI, no buried important info, no confusing layouts.
5. **Accessible by default.** AA contrast minimum. Icon labels always present. Never rely on color alone.
6. **One pointer always.** Never display paragraphs of explanation on the page; one concise line per item. Expansion is opt-in via accordion only where structurally unavoidable (categories). Applies to flags (title only) and to the Overview tab (no summary paragraph; just score/grade metadata + recommendation_reason).

---

## Color System

### Risk Colors — Core Language of the Product

These four colors are used **exclusively** for risk ratings. Do not use them for decoration.

| Level | Name | Hex | Tailwind Class | Usage |
|-------|------|-----|----------------|-------|
| 🟢 | Safe | `#16a34a` | `green-600` | Low privacy risk |
| 🟡 | Caution | `#d97706` | `amber-600` | Moderate risk |
| 🟠 | Risky | `#ea580c` | `orange-600` | High risk |
| 🔴 | Dangerous | `#dc2626` | `red-600` | Severe risk |
| ⚪ | Unknown | `#6b7280` | `gray-500` | Not enough data |

Background tints for risk badges:

| Level | Background | Text |
|-------|-----------|------|
| Safe | `#dcfce7` (green-100) | `#15803d` (green-700) |
| Caution | `#fef9c3` (yellow-100) | `#a16207` (yellow-700) |
| Risky | `#ffedd5` (orange-100) | `#c2410c` (orange-700) |
| Dangerous | `#fee2e2` (red-100) | `#b91c1c` (red-700) |
| Unknown | `#f3f4f6` (gray-100) | `#4b5563` (gray-600) |

### Brand Colors

| Role | Hex | Tailwind |
|------|-----|----------|
| Primary (CTA buttons, links) | `#2563eb` | `blue-600` |
| Primary hover | `#1d4ed8` | `blue-700` |
| Background | `#f9fafb` | `gray-50` |
| Card background | `#ffffff` | `white` |
| Text primary | `#111827` | `gray-900` |
| Text secondary | `#6b7280` | `gray-500` |
| Border | `#e5e7eb` | `gray-200` |
| Divider | `#f3f4f6` | `gray-100` |

---

## Typography

**Font Stack:** `Inter` (Google Fonts) with system font fallback.

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Page title (H1) | 32px / 2rem | 700 | Homepage hero |
| Section heading (H2) | 24px / 1.5rem | 600 | |
| Card heading (H3) | 18px / 1.125rem | 600 | App name on cards |
| Body text | 16px / 1rem | 400 | All readable content |
| Small / meta | 14px / 0.875rem | 400 | Dates, labels |
| Tiny / caption | 12px / 0.75rem | 500 | Badge text |

Line height: `1.6` for body text, `1.2` for headings.

---

## Spacing System

Use Tailwind's default spacing scale. Key values:

| Token | Value | Use |
|-------|-------|-----|
| `p-4` | 16px | Card internal padding |
| `p-6` | 24px | Section padding on mobile |
| `p-8` | 32px | Section padding on desktop |
| `gap-4` | 16px | Grid gap |
| `gap-6` | 24px | Section gap |
| `mb-2` | 8px | Tight stacking |
| `mb-4` | 16px | Standard stacking |

---

## Dark Mode Rule

**Never hardcode hex values for risk or semantic colors.** Any hardcoded hex that maps to a risk level will break in dark mode — the color stays fixed while everything else inverts.

| Instead of | Use |
|-----------|-----|
| `background: #FFF7ED` (amber tint) | `background: var(--color-background-warning)` |
| `border-color: #FDBA74` | `border-color: var(--color-border-warning)` |
| `color: #D97706` | `color: var(--color-text-warning)` |
| `background: #FFF0E6` (orange tint) | custom CSS variable (no built-in orange token) |
| `color: #C2410C` | custom CSS variable |
| `background: #fee2e2` (red tint) | `background: var(--color-background-danger)` |
| `background: #dcfce7` (green tint) | `background: var(--color-background-success)` |

For the "Risky" (orange) level, define custom CSS variables since the design token system has no built-in orange semantic:
```css
:root {
  --color-background-risky: #FFF0E6;
  --color-border-risky: #FDBA74;
  --color-text-risky: #C2410C;
}
@media (prefers-color-scheme: dark) {
  :root {
    --color-background-risky: #3a1a08;
    --color-border-risky: #92400e;
    --color-text-risky: #fb923c;
  }
}
```

---

## Component Specifications

### 1. App Card (used on Browse and Homepage)

```
┌─────────────────────────────────────────┐
│  [App Icon 48x48]  WhatsApp Messenger   │
│                    [THREAT ■■■░ Risky]   │
└─────────────────────────────────────────┘
```

- App icon: 48x48px, rounded-xl, `border-line`
- App name: 16px, font-weight 600, `text-ink`, `leading-snug` — wraps instead of truncating
- ThreatMeter chip directly below the name; text column uses `items-start` so the `inline-flex` pill does not stretch horizontally
- **Removed from card:** developer name, category, one-liner description, platform pills
- Entire card is clickable (`cursor-pointer` on `<article>` with click handler) — goes to `/app/{slug}`
- Hover: `hover:border-brand/40 hover:bg-divider/30 hover:shadow-md`

### 2. Platform Switcher (used at top of App Detail page)

```
Platform  [● iOS]  [Android]  [Mac]  [Windows soon]  [Linux soon]
```

- Label "Platform" in 11px text-ink-subtle, uppercase, semibold, tracking-wider
- One rounded-xl pill per platform with Lucide icon:
  - iOS → `Apple`, Android → `Bot`, Mac → `Laptop`, Windows → `AppWindow`, Linux → `Terminal`
- **Active**: filled `bg-ink` / `text-page` pill with `border-ink/80` shadow
- **Available (not active)**: outlined `bg-surface` / `border-line` pill, hover `border-ink bg-divider`
- **Not yet analyzed**: dashed `border-line` + `bg-surface/40` + faded text + tiny "soon" suffix, `aria-disabled`
- Switching platform is a client-side `<Link>` — no page reload

### 3. Feature Tags (used in App header)

The tag row leads with the ThreatMeter chip, then category, sub-category, "Free", then trust-indicator pills:

```
[THREAT ■■■░ Risky]  [Social]  [Messaging]  [Free]  [E2E Encrypted]
```

- ThreatMeter chip: rounded-full, border-line, bg-surface (see ThreatMeter spec below)
- Standard tags: 11px, border-line, text-ink-muted, rounded-md
- Trust indicator tags (`E2E Encrypted`, `No Ads`, `Open Source`): auto-derived in `lib/trustIndicators.ts` via regex on green-flag titles. Rendered as green `border-safe-line` + `bg-safe-soft` + `text-safe-ink` pills with a small `ShieldCheck` icon
- **The active platform tag (e.g. "iOS") is gone from this row** — the active platform tab in the Platform Switcher carries that signal
- Never use tags for risk information — risk always uses the Risk Badge or ThreatMeter component

### 4. Category Card (used in App Detail Grid)

```
┌─────────────────────────────────────────┐  ← neutral border-line
│  [icon]  Location & GPS   [● RISKY]  ▼  │
│          On-demand only                 │
├─────────────────────────────────────────┤  ← visible only when expanded
│  Tracks your location only when you     │
│  share it in a chat. IP address still   │
│  infers approximate location.           │
│                                         │
│  "Location info collected only when     │
│   you choose to share it."              │
│                                         │
│  ⚠ IP address used to infer location   │
└─────────────────────────────────────────┘
```

- **Border is neutral `border-line`** — no colored card border. Risk signal lives only in the right-aligned `RiskBadge` chip
- Cards are mutually-exclusive accordions via native `<details name="category">` (zero-JS expansion, only one open at a time)
- Within the grid, cards are sorted by risk severity: `dangerous → risky → caution → safe → unknown`
- Icon: 36x36px rounded-lg box with `bg-divider` + `text-ink-muted`
- Category name: 14px, font-weight 600, `text-ink`
- Access type subtitle: 12px, `text-ink-subtle`, below the name (e.g. "On-demand · background access")
- Risk badge: right-aligned, small pill (`size="sm"`)
- ChevronDown icon rotates 180° when open via `group-open:rotate-180`
- Expanded body: `border-t border-divider` with `px-4 pb-4 pt-4` spacing
- Body contains only the `plain_english` paragraph (14px, `text-ink`, `leading-relaxed`)
- **No `detail`, no `policy_excerpt`, no `concerns` list** — one pointer always. The collapsed card shows the access type subtitle; the expanded card shows one plain-English sentence. That's it.

### 5. Risk Badge

```
● Safe       (success colors)
● Caution    (warning colors)
● Risky      (risky custom colors)
● Dangerous  (danger colors)
● Unknown    (secondary colors)
```

- Padding: 2px 8–10px
- Border radius: full (pill)
- Font: 10px, font-weight 500, letter-spacing 0.4px, uppercase
- Always includes a 4–5px colored dot before the label
- All colors from CSS variables — never hardcoded hex

### 6. Red Flag / Green Flag Items

Two cards side by side — one red card for all red flags, one green card for all green flags. Inside each card, flags are simple bullet-point titles only.

```
┌─────────────────────────────────────────┐  ┌─────────────────────────────────────────┐
│ ⚠ Red flags                             │  │ ✅ Green flags                          │
│                                         │  │                                         │
│ ● Your address book is uploaded         │  │ ● End-to-end encryption                 │
│ ● Your behavior powers ads              │  │ ● Messages not stored on servers        │
│ ● No real opt-out from Meta sharing     │  │ ● No third-party banner ads             │
│ ● Deep device fingerprinting            │  │ ● You can fully delete your account     │
│ ● Passive location from IP              │  │                                         │
└─────────────────────────────────────────┘  └─────────────────────────────────────────┘
```

- Red card: `rounded-xl border-danger-line bg-danger-soft p-5`
- Green card: `rounded-xl border-safe-line bg-safe-soft p-5`
- Card header: section icon (`AlertTriangle` / `CheckCircle2`) + heading text in matching risk ink
- Each flag is a bullet point: small colored dot (`bg-danger` / `bg-safe`) + title text (14px, `text-ink`, `leading-snug`)
- **No plain_english paragraph rendered** — one pointer always
- Sorted by severity inside each card: red flags `high → medium → low`, green flags `positive` first
- Two cards side-by-side on desktop (`md:grid-cols-2`), stacked on mobile
- Spacing between bullet items: `space-y-3`

### 7. Safer Alternative Block

```
┌──────────────────────────────────────────────────────┐  ← success border + bg
│  [icon]  Signal                                  91  │
│          Same encryption, no Meta, no ads.    ●Safe  │
└──────────────────────────────────────────────────────┘
```

- Only shown when overall_risk is "caution", "risky", or "dangerous"
- background-success, border-success
- App icon, name, one-line reason, score number + safe badge
- Entire block is clickable — goes to the alternative app's page

### 8. Meta Strip (bottom of App Detail page)

```
Policy source   Policy updated   Our analysis   Platform   Schema
whatsapp.com↗   October 2024     May 2025        iOS        v1.0
                                                       Flag this rating ⚑
```

- Horizontal row of small label + value pairs
- All text at 10–12px, text-secondary
- Policy source is a clickable external link
- "Flag this rating" right-aligned — opens a simple form or mailto

### 9. ThreatMeter (used in App header and cards)

```
[THREAT ■■■░░ Risky]
```

- Pill chip: `rounded-full border-line bg-surface px-3 py-1.5`
- Left label: "THREAT" in 10px uppercase, semibold, tracking-wider, `text-ink-subtle`
- Middle segments: **5 horizontal bars** (`h-2 w-4 rounded-[2px]`), each worth 20 points. Fill is calculated from the actual score:
  - Each segment is a `relative overflow-hidden rounded-[2px] bg-line` container
  - An inner `absolute inset-y-0 left-0` span fills it proportionally based on how many of the segment's 20 points the score covers
  - Example: score 53 → segments 1 and 2 full, segment 3 ~65% filled, segments 4 and 5 empty
  - Filled portion uses risk solid color (`bg-safe`, `bg-caution`, `bg-risky`, `bg-danger`)
  - Empty portion uses `bg-line`
- Right label: uppercase risk name (11px, semibold, tracking-wider) in matching risk ink color (`text-safe-ink`, `text-caution-ink`, etc.)
- `role="img"` with `aria-label` for accessibility

### 9b. SafetyRatingTooltip (next to app name)

```
Telegram Messenger [i]
```

- Small `Info` icon from Lucide, placed next to the app name (same row as the H1 or H3)
- Button: `rounded-full p-1 text-ink-subtle transition-colors hover:bg-divider hover:text-ink`
- **Tooltip card:** on hover, a card appears to the right of the icon (`left-full`, centered vertically, `ml-2`, `z-10`):
  - Card: `w-40 rounded-xl border border-line bg-surface p-4 shadow-lg`
  - Left-pointing arrow using CSS border triangles (`border-r-line` + inner `border-r-surface`)
  - Contains:
    - "Safety Rating" label (11px, uppercase, semibold, `text-ink-subtle`)
    - Circle progress: SVG circle with `stroke-dasharray`/`stroke-dashoffset`, colored by risk level (`text-safe`, `text-caution`, etc.)
    - Score number inside circle (11px, bold, centered with `dominantBaseline="central"`)
  - CSS-only hover (`group-hover/tooltip:opacity-100`)
- This is a separate component (`SafetyRatingTooltip`) used independently of ThreatMeter

### 10. VerdictHero (used below Platform Switcher on detail page)

Thin component, no card box:

```
┃ WhatsApp collects extensive metadata...
┃
┃ Think twice before downloading
```

- 2px risk-colored left bar (`border-l-2 border-l-{risk}`)
- `verdict.one_liner` in larger text: `text-xl sm:text-2xl font-medium leading-snug text-ink`
- Recommendation lead text below (`RECOMMENDATION_TITLE[recommendation]`): 14px, semibold, matching risk ink color
- Examples: "Recommended", "Probably fine", "Think twice before downloading", "Avoid if you can"

### 11. TabbedSections (used on App Detail page)

Chip-style rounded-full pill tabs in a row:

```
[Overview]  [Flags]  [Categories]  [Source]
```

- Active tab: `bg-ink text-page` contrast pill
- Inactive tab: `bg-divider text-ink-muted hover:text-ink`
- All tabs: `rounded-full px-4 py-2 text-sm font-medium`
- Tab labels are plain text — no counts
- **SSR-friendly**: all panels rendered in HTML; `hidden` attribute toggles visibility client-side
- Each panel is a `<section role="tabpanel">` with `aria-labelledby` pointing to its tab button
- SEO-friendly: crawlers see all panels since they are in the DOM

---

## Page Layouts

### Homepage

```
[Navbar]
[Hero — Search bar first, then smaller headline + one-line tagline + stats]
[Recently Analyzed — 3-col grid desktop, 2-col tablet, 1-col mobile]
[Browse by Concern — category icon grid]
[How It Works — 3-step row]
[Footer]
```

- Search bar is the first element in the hero, above the headline
- Headline: `text-2xl sm:text-3xl font-bold tracking-tight` — compact, no cutoff
- Subtext: one line only — "We read the privacy policy so you don't have to."
- Stats line: apps analyzed count + categories tracked count (no "0 ads served")

### App Overview Page (`/app/{slug}`)

```
[Navbar]
[Breadcrumb]
[App header — icon, name, developer]
[Platform grid — one card per available platform, each showing score + risk]
[Footer]
```

### App Detail Page (`/app/{slug}/{platform}`)

```
[Navbar]
[Breadcrumb — Home > Browse > {category} > {app name}]
[App header — icon, name, developer, feature-tag row (ThreatMeter · category · sub-category · Free · trust indicators), App Store button, "Analyzed {Month YYYY}"]
[Platform switcher — iOS / Android / Mac / Windows (soon) / Linux (soon)]
[VerdictHero — one_liner + recommendation lead text]
[TabbedSections — Overview · Flags · Categories · Source]
  ├─ Overview tab — Score · Grade metadata + recommendation_reason (no summary paragraph)
  ├─ Flags tab — Red card / Green card side-by-side with bullet-point titles
  ├─ Categories tab — Sorted by risk · tap to expand · 2-col masonry
  └─ Source tab — MetaStrip (policy URL, dates, platform, schema, flag link)
[Footer]
```

### Browse Page

```
[Navbar]
[Page title + result count]
[Filter bar — Platform / Risk Level / App Category / Sort]
[App Cards Grid — 1 col mobile, 2 col tablet, 3 col desktop]
[Pagination or infinite scroll]
[Footer]
```

---

## Iconography

Use **Lucide React** for all UI icons (consistent, open source, tree-shakeable).

### Category Icons

| Category | Lucide Icon |
|----------|-------------|
| Camera & Microphone | `Camera` |
| Location & GPS | `MapPin` |
| Contacts & Phonebook | `BookUser` |
| Storage & File Access | `FolderOpen` |
| Data Sharing with 3rd Parties | `Share2` |
| Account & Identity Data | `UserCircle` |
| Behavioural & Ad Tracking | `BarChart2` |
| Children's Data Handling | `Baby` |
| Network & Internet Activity | `Wifi` |
| Device Info & Fingerprinting | `Smartphone` |
| Health & Biometric Data | `Heart` |
| Financial & Payment Data | `CreditCard` |
| Data Deletion & User Rights | `ShieldCheck` |
| Policy Change Notification | `Bell` |

### Platform Icons (used in AppCard pills)

| Platform | Icon | Source |
|----------|------|--------|
| iOS | Apple logo | Custom SVG at `public/ios-icon.svg` |
| Android | `Bot` | Lucide React |
| Mac | `Laptop` | Lucide React |
| Windows | `AppWindow` | Lucide React |
| Linux | `Terminal` | Lucide React |

---

## Responsive Breakpoints

Using Tailwind defaults:

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| Mobile (default) | < 640px | 1 column, stacked |
| sm | 640px+ | 2 columns where applicable |
| md | 768px+ | Standard desktop layout begins |
| lg | 1024px+ | 3-column grids |
| xl | 1280px+ | Max content width applied |

Max content width: `1280px`, centered with `mx-auto`.

---

## Tone of Voice

- **Direct:** "This app sells your location data." not "Location data may be utilized by third-party partners."
- **Non-alarmist:** Flag real risks clearly but don't exaggerate safe apps.
- **Human:** Write like a knowledgeable friend, not a legal document.
- **Empowering:** End every verdict with what the user can do — not just what's wrong.

Examples of good copy:
- ✅ "Tracks your location even when the app is closed. This is a significant privacy concern."
- ✅ "You can delete your account and all data at any time. This is a strong user right."
- ❌ "This application leverages location services in background operational contexts."
- ❌ "DANGEROUS!!! This app is SPYING on you!!!"
