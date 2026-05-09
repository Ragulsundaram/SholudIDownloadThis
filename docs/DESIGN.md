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
│  [App Icon 48x48]  App Name             │
│                    Developer Name       │
│                    iOS · Social         │
│                                         │
│  [iOS ●RISKY 38]  [Android ●DANGER 31] │
│  "Shares data with Meta's ad network"   │
└─────────────────────────────────────────┘
```

- App icon: 48x48px, rounded-lg, 0.5px border
- App name: 13px, font-weight 500
- Developer + category: 11px, text-secondary
- Platform score badges: one per available platform, each shows platform name + risk dot + score number
- One-liner: 11px, text-secondary, italic
- Entire card is clickable — goes to `/app/{slug}`
- Individual platform badge is clickable — goes to `/app/{slug}/{platform}`

### 2. Platform Switcher (used at top of App Detail page)

```
Platform  [● iOS]  [Android]  [Mac]  [Windows soon]  [Linux soon]
```

- Label "Platform" in 11px text-tertiary
- One pill button per platform with Lucide platform icon
- Selected pill: background-secondary, border-primary, text-primary, font-weight 500
- Unselected pill: border-tertiary, text-secondary
- Unavailable platforms ("soon"): 35% opacity, not clickable, tiny "soon" suffix
- Switching platform updates: score block, verdict, recommendation, flags, and all category cards without a page reload

### 3. Feature Tags (used in App header)

Small pill tags that communicate quick facts about the app:

```
[iOS]  [Social]  [Messaging]  [Free]  [E2E Encrypted]
```

- Standard tags: 11px, border-tertiary, text-secondary
- Trust indicator tags (E2E Encrypted, Open Source, No Ads): green border + green text using success CSS vars
- Never use these for risk information — risk always uses the Risk Badge component

### 4. Category Card (used in App Detail Grid)

```
┌─────────────────────────────────────────┐  ← border color = risk level
│  [icon]  Location & GPS   [● RISKY]     │
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
├─────────────────────────────────────────┤
│  ▾ See details                          │
└─────────────────────────────────────────┘
```

- Card border color matches risk level: success border = Safe, warning border = Caution, risky border = Risky, danger border = Dangerous
- Icon: 30x30px rounded-8px box with background-secondary
- Category name: 12px, font-weight 500
- Access type: 10px, text-tertiary, below the name
- Risk badge: right-aligned, 10px pill
- Expanded body: max-height transition (0 → auto), smooth animation
- Body contains: description (11px), policy quote (10px italic, background-secondary), concerns (10px with warning icon)
- Toggle button: 11px, full-width, border-top only, chevron rotates on open

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

Each flag has two levels of content:

```
🚩  Your address book is uploaded to Meta servers
    WhatsApp regularly uploads all the phone numbers
    in your contacts — including people who don't use
    WhatsApp — to its servers.
```

- Container: background-danger (red) or background-success (green), rounded-md
- Icon: ti-alert-triangle (red) or ti-circle-check (green) at 12–13px
- **Title** (bold, 12px): short, max 10 words — shown on the card face
- **Plain English** (11–12px, text-secondary): 1–3 sentence expansion — shown always or on hover depending on implementation
- Max 5–6 flags per column

### 7. Privacy Score Block (top of App Detail page)

```
┌──────────────┬──────────────────────────────────────────┐
│   Score      │  Verdict                                  │
│              │                                           │
│    53        │  WhatsApp collects extensive metadata...  │
│   /100       │                                           │
│  ████░░░     │  ┌─────────────────────────────────────┐  │
│              │  │ ⚠ Think twice before downloading    │  │
│  Grade: D    │  │   Signal offers the same features   │  │
│  ● Risky     │  │   with a 91/100 privacy score.      │  │
│              │  └─────────────────────────────────────┘  │
└──────────────┴──────────────────────────────────────────┘
```

- Left column: score number (48px, risk color), "/100" label, progress bar (4px, risk color), grade text, risk badge
- Right column: verdict label (10px uppercase), verdict text (13px, line-height 1.7), recommendation callout box
- Recommendation callout: border + background from risk-level CSS vars (warning for Caution, danger for Risky/Dangerous, success for Safe/Recommended)
- Recommendation icon: ti-alert-circle (warning/danger) or ti-circle-check (success)

### 8. Safer Alternative Block

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

### 9. Meta Strip (bottom of App Detail page)

```
Policy source   Policy updated   Our analysis   Platform   Schema
whatsapp.com↗   October 2024     May 2025        iOS        v1.0
                                                       Flag this rating ⚑
```

- Horizontal row of small label + value pairs
- All text at 10–12px, text-secondary
- Policy source is a clickable external link
- "Flag this rating" right-aligned — opens a simple form or mailto

---

## Page Layouts

### Homepage

```
[Navbar]
[Hero — Search bar + tagline + stats (apps analyzed, categories tracked)]
[Recently Analyzed — 4-col grid desktop, 2-col mobile]
[Browse by Concern — category icon grid]
[How It Works — 3-step row]
[Footer]
```

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
[Breadcrumb — Home > Browse > Category > App Name]
[App header — icon, name, developer, feature tags, store button, analysis date]
[Platform switcher — iOS / Android / Mac / Windows (soon) / Linux (soon)]
[Privacy score block — score left, verdict + recommendation right]
[Red Flags / Green Flags — 2-col on desktop, stacked on mobile]
[Section title: "Category breakdown — Platform · tap to expand"]
[Category breakdown grid — 2 col always]
[Safer alternative block — only if risk is Caution or worse]
[Meta strip — policy source, dates, platform, schema, flag link]
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
