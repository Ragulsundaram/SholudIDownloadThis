# Data Schema

**Project:** ShouldIDownloadThis  
**Format:** JSON (folder-per-app in v1, Supabase rows in v2)  
**File location:** `/data/apps/{slug}/{platform}.json`

---

## File Structure Per App

Each app gets a folder. The folder contains a shared parent file and one JSON per platform:

```
/data/apps/whatsapp/
  _app.json       ← shared info: name, icon, developer, available platforms, scores index
  ios.json        ← full iOS policy analysis
  android.json    ← full Android policy analysis (when added)
  mac.json        ← full Mac policy analysis (when added)
```

The site reads `_app.json` for the overview page (`/app/whatsapp`) and the platform file for the detail page (`/app/whatsapp/ios`).

## `_app.json` — Shared Parent

```json
{
  "slug": "whatsapp",
  "name": "WhatsApp",
  "developer": "Meta Platforms, Inc.",
  "icon_url": "",
  "category": "Social",
  "sub_category": "Messaging",
  "description": "End-to-end encrypted messaging app owned by Meta.",
  "platforms": ["ios", "android", "mac"],
  "scores": {
    "ios":     { "score": 53, "grade": "D", "risk": "risky" },
    "android": { "score": 31, "grade": "F", "risk": "dangerous" },
    "mac":     { "score": 61, "grade": "C", "risk": "caution" }
  }
}
```

This file is auto-generated/updated whenever a platform file is saved. Never edit it directly.

---

## Naming Convention

- Folder slug: `{app-name-lowercase-hyphenated}` (e.g. `whatsapp`, `google-maps`, `cash-app`)
- Platform filenames: `ios.json`, `android.json`, `mac.json`, `windows.json`, `linux.json`
- Review files (in `/data/reviews/`): `{slug}-{platform}.md` (e.g. `whatsapp-ios.md`)

---

## Full Schema

```json
{
  "meta": {
    "schema_version": "1.0",
    "analyzed_at": "2025-05-08",
    "analyzed_by": "claude-sonnet-4",
    "policy_url": "https://www.whatsapp.com/legal/privacy-policy",
    "terms_url": "https://www.whatsapp.com/legal/terms-of-service",
    "policy_last_updated": "2024-10-15",
    "needs_review": false,
    "review_notes": ""
  },

  "app": {
    "slug": "whatsapp-ios",
    "name": "WhatsApp",
    "developer": "Meta Platforms, Inc.",
    "platform": "ios",
    "app_store_url": "https://apps.apple.com/app/whatsapp-messenger/id310633997",
    "app_store_id": "310633997",
    "icon_url": "",
    "category": "Social",
    "sub_category": "Messaging",
    "description": "Messaging and calling app owned by Meta."
  },

  "verdict": {
    "overall_risk": "risky",
    "score": 53,
    "grade": "D",
    "one_liner": "Extensive data collection linked to Meta's ad network, though messages are end-to-end encrypted.",
    "summary": "WhatsApp collects significant metadata about who you contact, how often, and from where — even though message content is encrypted. This data is shared with Meta's advertising network. You cannot opt out of data sharing without deleting your account.",
    "recommendation": "think_twice",
    "recommendation_reason": "If privacy is important to you, consider Signal for messaging. WhatsApp is acceptable for casual use if you understand your metadata is part of Meta's ad business."
  },

  "flags": {
    "red": [
      {
        "id": "red_meta_ad_sharing",
        "title": "Your behavior powers ads on Facebook and Instagram",
        "plain_english": "WhatsApp explicitly shares your usage data with Meta companies to improve ads and products on Facebook, Instagram, and other Meta apps. So using WhatsApp makes you a better ad target on other Meta platforms.",
        "severity": "high"
      },
      {
        "id": "red_contacts_upload",
        "title": "Your entire address book is uploaded to Meta servers",
        "plain_english": "WhatsApp regularly uploads all the phone numbers in your contacts — including people who don't use WhatsApp — to its servers. Those people never agreed to this.",
        "severity": "high"
      },
      {
        "id": "red_no_optout",
        "title": "No real opt-out from Meta data sharing for most users",
        "plain_english": "Unless you are in the EU or UK where GDPR gives you more rights, there is no meaningful way to use WhatsApp without your data feeding into Meta's advertising system.",
        "severity": "high"
      }
    ],
    "green": [
      {
        "id": "green_e2e_encryption",
        "title": "End-to-end encryption on all messages and calls",
        "plain_english": "WhatsApp cannot read your messages or listen to your calls. The content of your conversations is encrypted so only you and the person you're talking to can see it.",
        "severity": "positive"
      },
      {
        "id": "green_account_deletion",
        "title": "You can fully delete your account and data",
        "plain_english": "WhatsApp has a built-in Delete My Account feature that wipes your account data, removes you from groups, and deletes your messages from their servers.",
        "severity": "positive"
      }
    ]
  },

  "categories": [
    {
      "id": "camera_microphone",
      "label": "Camera & Microphone",
      "icon": "Camera",
      "risk": "caution",
      "access_type": "on_demand",
      "required_for_core_function": true,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Only accesses camera and microphone when you actively use them for a photo or call.",
      "detail": "Camera and microphone are accessed only when you initiate a video call or take a photo. No background access is claimed.",
      "policy_excerpt": "We access your camera and microphone only when you actively use these features.",
      "concerns": [],
      "score_impact": 0
    },
    {
      "id": "location_gps",
      "label": "Location & GPS",
      "icon": "MapPin",
      "risk": "caution",
      "access_type": "on_demand",
      "required_for_core_function": false,
      "optional_access": true,
      "background_access": false,
      "plain_english": "Location is optional and only used when you share your location in a chat.",
      "detail": "Precise location is only accessed when you explicitly share it in a conversation. No continuous or background tracking is claimed.",
      "policy_excerpt": "Location information is only collected when you choose to share it.",
      "concerns": [],
      "score_impact": 0
    },
    {
      "id": "contacts_phonebook",
      "label": "Contacts & Phonebook",
      "icon": "BookUser",
      "risk": "risky",
      "access_type": "continuous",
      "required_for_core_function": true,
      "optional_access": false,
      "background_access": true,
      "plain_english": "Reads your full contact list and uploads it to Meta's servers to find other users.",
      "detail": "WhatsApp requires access to your full contact list to function and regularly syncs this list to Meta servers. This means the phone numbers of everyone in your contacts — including non-WhatsApp users — are uploaded.",
      "policy_excerpt": "We collect information from your device's address book, with your permission, to help identify contacts who use WhatsApp.",
      "concerns": [
        "Contacts who don't use WhatsApp have no say in their number being uploaded",
        "Contact data is shared with Meta's broader data infrastructure"
      ],
      "score_impact": -15
    },
    {
      "id": "storage_file_access",
      "label": "Storage & File Access",
      "icon": "FolderOpen",
      "risk": "caution",
      "access_type": "on_demand",
      "required_for_core_function": false,
      "optional_access": true,
      "background_access": false,
      "plain_english": "Accesses your photos and files only when you choose to share them in a chat.",
      "detail": "Storage access is only requested when you actively choose to share a file or photo. Media you receive may be saved to your device with your permission.",
      "policy_excerpt": "",
      "concerns": [],
      "score_impact": 0
    },
    {
      "id": "data_sharing_third_parties",
      "label": "Data Sharing with 3rd Parties",
      "icon": "Share2",
      "risk": "dangerous",
      "access_type": "continuous",
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": true,
      "plain_english": "Your usage data and metadata are shared with Meta's advertising companies and hundreds of third-party partners.",
      "detail": "WhatsApp shares data with Meta Platforms and its family of companies (Facebook, Instagram), as well as third-party service providers. This includes metadata about your activity used to build advertising profiles.",
      "policy_excerpt": "We share information within the Meta family of companies.",
      "concerns": [
        "Data shared with Meta's ad network which includes hundreds of advertising partners",
        "You cannot opt out of sharing with Meta while keeping your account",
        "Shared data is used to build targeted advertising profiles across all Meta products"
      ],
      "score_impact": -25
    },
    {
      "id": "account_identity",
      "label": "Account & Identity Data",
      "icon": "UserCircle",
      "risk": "risky",
      "access_type": "continuous",
      "required_for_core_function": true,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Collects your phone number, profile name, and links it to your broader Meta identity.",
      "detail": "Your phone number is your account identifier. Meta links this to your Facebook and Instagram identity if you use those services.",
      "policy_excerpt": "",
      "concerns": [
        "Identity linked across all Meta products",
        "Phone number permanently associated with your Meta advertising profile"
      ],
      "score_impact": -10
    },
    {
      "id": "behavioural_ad_tracking",
      "label": "Behavioural & Ad Tracking",
      "icon": "BarChart2",
      "risk": "dangerous",
      "access_type": "continuous",
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": true,
      "plain_english": "Tracks your usage patterns and shares this data with Meta's advertising systems.",
      "detail": "WhatsApp collects detailed metadata: who you contact, when, how often, your IP address, device identifiers, and usage patterns. This is fed into Meta's advertising profile for you.",
      "policy_excerpt": "We collect information about how you interact with others on our services.",
      "concerns": [
        "Cannot opt out",
        "Data fed into Meta's global advertising targeting system",
        "Behavioral profile built even if you never use Facebook or Instagram"
      ],
      "score_impact": -20
    },
    {
      "id": "childrens_data",
      "label": "Children's Data Handling",
      "icon": "Baby",
      "risk": "caution",
      "access_type": null,
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "The app requires users to be 13+ (16+ in some regions) and claims not to knowingly collect children's data.",
      "detail": "WhatsApp states users must be 13+ (or 16+ in the EU). There are no robust age verification mechanisms however.",
      "policy_excerpt": "You must be at least 13 years old to use our Services.",
      "concerns": [
        "No real age verification — relies on self-reporting"
      ],
      "score_impact": -5
    },
    {
      "id": "network_internet_activity",
      "label": "Network & Internet Activity",
      "icon": "Wifi",
      "risk": "caution",
      "access_type": "continuous",
      "required_for_core_function": true,
      "optional_access": false,
      "background_access": true,
      "plain_english": "Requires constant internet access to work. Logs your IP address and connection timestamps.",
      "detail": "Standard for a messaging app. IP address logging is used for security and to infer approximate location even when GPS is not shared.",
      "policy_excerpt": "",
      "concerns": [
        "IP address used to infer location even without GPS access"
      ],
      "score_impact": -5
    },
    {
      "id": "device_fingerprinting",
      "label": "Device Info & Fingerprinting",
      "icon": "Smartphone",
      "risk": "risky",
      "access_type": "continuous",
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": true,
      "plain_english": "Collects detailed information about your device to build a unique identifier for advertising.",
      "detail": "Collects device model, OS version, battery level, signal strength, app version, browser info, and identifiers that can be combined to create a persistent device fingerprint.",
      "policy_excerpt": "Hardware model, operating system information, battery level, signal strength, app version, browser information, mobile network, connection information.",
      "concerns": [
        "Device fingerprint persists even if you delete and reinstall the app"
      ],
      "score_impact": -10
    },
    {
      "id": "health_biometric",
      "label": "Health & Biometric Data",
      "icon": "Heart",
      "risk": "safe",
      "access_type": null,
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Does not collect health or biometric data.",
      "detail": "No health or biometric data is collected or referenced in the privacy policy.",
      "policy_excerpt": "",
      "concerns": [],
      "score_impact": 0
    },
    {
      "id": "financial_payment",
      "label": "Financial & Payment Data",
      "icon": "CreditCard",
      "risk": "caution",
      "access_type": "on_demand",
      "required_for_core_function": false,
      "optional_access": true,
      "background_access": false,
      "plain_english": "Payment data only collected if you use WhatsApp Pay (not available in all countries).",
      "detail": "WhatsApp Pay is a feature in some markets. If used, payment details are processed. If you don't use this feature, no financial data is collected.",
      "policy_excerpt": "",
      "concerns": [],
      "score_impact": 0
    },
    {
      "id": "data_deletion_user_rights",
      "label": "Data Deletion & User Rights",
      "icon": "ShieldCheck",
      "risk": "caution",
      "access_type": null,
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "You can delete your account and request data deletion, but some data is retained and shared with Meta.",
      "detail": "Users can delete their account. WhatsApp states they will delete your information, but some may be retained for legal reasons, and Meta's broader profile may persist.",
      "policy_excerpt": "",
      "concerns": [
        "Deleting WhatsApp account does not delete your Meta advertising profile",
        "Some data retained after deletion for undefined legal purposes"
      ],
      "score_impact": -5
    },
    {
      "id": "policy_change_notification",
      "label": "Policy Change Notification",
      "icon": "Bell",
      "risk": "caution",
      "access_type": null,
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Notifies users of policy changes but continued use counts as acceptance — you can't reject changes without deleting your account.",
      "detail": "WhatsApp will notify users of policy changes via in-app notification. However, continuing to use the app constitutes acceptance. There is no way to reject changes and keep your account.",
      "policy_excerpt": "",
      "concerns": [
        "Continued use = automatic acceptance of any new terms"
      ],
      "score_impact": -5
    }
  ],

  "scoring": {
    "base_score": 100,
    "max_possible_deductions": 205,
    "deductions": [
      { "category": "data_sharing_third_parties", "risk": "risky",   "max": 30, "rate": 0.65, "deduction": 19.5 },
      { "category": "behavioural_ad_tracking",    "risk": "risky",   "max": 25, "rate": 0.65, "deduction": 16.25 },
      { "category": "contacts_phonebook",         "risk": "risky",   "max": 20, "rate": 0.65, "deduction": 13.0 },
      { "category": "account_identity",           "risk": "risky",   "max": 15, "rate": 0.65, "deduction": 9.75 },
      { "category": "device_fingerprinting",      "risk": "risky",   "max": 15, "rate": 0.65, "deduction": 9.75 },
      { "category": "camera_microphone",          "risk": "caution", "max": 15, "rate": 0.30, "deduction": 4.5 },
      { "category": "location_gps",               "risk": "caution", "max": 15, "rate": 0.30, "deduction": 4.5 },
      { "category": "health_biometric",           "risk": "safe",    "max": 15, "rate": 0.00, "deduction": 0 },
      { "category": "financial_payment",          "risk": "caution", "max": 15, "rate": 0.30, "deduction": 4.5 },
      { "category": "childrens_data",             "risk": "caution", "max": 10, "rate": 0.30, "deduction": 3.0 },
      { "category": "storage_file_access",        "risk": "caution", "max": 10, "rate": 0.30, "deduction": 3.0 },
      { "category": "data_deletion_user_rights",  "risk": "caution", "max": 10, "rate": 0.30, "deduction": 3.0 },
      { "category": "network_internet_activity",  "risk": "risky",   "max": 5,  "rate": 0.65, "deduction": 3.25 },
      { "category": "policy_change_notification", "risk": "caution", "max": 5,  "rate": 0.30, "deduction": 1.5 }
    ],
    "total_deductions": 95.5,
    "final_score": 53,
    "grade": "D"
  }
}
```

---

## Field Reference

### `meta`

| Field | Type | Description |
|-------|------|-------------|
| `schema_version` | string | Schema version for future migrations |
| `analyzed_at` | date string | When Claude analyzed this policy |
| `analyzed_by` | string | Claude model used |
| `policy_url` | string | Direct URL to the privacy policy |
| `terms_url` | string | Direct URL to the terms of service (if separate) |
| `policy_last_updated` | date string | When the policy itself was last updated |
| `needs_review` | boolean | Flag if human review is needed |
| `review_notes` | string | Notes for reviewer |

### `app`

| Field | Type | Description |
|-------|------|-------------|
| `slug` | string | Platform-specific slug: `{app-name}-{platform}` (used inside file; folder uses app name only) |
| `name` | string | Display name |
| `developer` | string | Developer or company name |
| `platform` | enum | `ios`, `android`, `mac`, `windows`, `linux` |
| `app_store_url` | string | Direct link to download |
| `app_store_id` | string | Platform-specific app ID |
| `icon_url` | string | URL to app icon image |
| `category` | string | App Store category |
| `sub_category` | string | More specific category |
| `description` | string | One-line description |

### `verdict`

| Field | Type | Description |
|-------|------|-------------|
| `overall_risk` | enum | `safe`, `caution`, `risky`, `dangerous` — derived from score |
| `score` | number | **Must equal `scoring.final_score`** — always copy from there, never estimate separately |
| `grade` | string | **Must equal `scoring.grade`** — always copy from there |
| `one_liner` | string | Max 15 words, shown on app cards and VerdictHero |
| `summary` | string | 2–3 sentences — stored for completeness, **not displayed on the page** (Overview tab uses `recommendation_reason`) |
| `recommendation` | enum | `highly_recommended`, `recommended`, `think_twice`, `avoid` |
| `recommendation_reason` | string | 1–2 sentences explaining the recommendation — shown in Overview tab |

### `flags.red[n]` and `flags.green[n]`

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique snake_case identifier (e.g. `red_contacts_upload`) |
| `title` | string | Short title, max 10 words — shown in the flag card |
| `plain_english` | string | 1–3 sentence explanation — stored for trust-indicator derivation and audit trail, **not displayed on the page** |
| `severity` | enum | Red: `high`, `medium`, `low` · Green: `positive` |

### `categories[n]`

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique category ID (snake_case) |
| `label` | string | Display label |
| `icon` | string | Lucide icon component name |
| `risk` | enum | `safe`, `caution`, `risky`, `dangerous`, `unknown` |
| `access_type` | enum | `on_demand`, `continuous`, `never`, null |
| `required_for_core_function` | boolean | Is this needed for the app to work? |
| `optional_access` | boolean | Can the user opt out of this? |
| `background_access` | boolean | Does this happen when app is not open? |
| `plain_english` | string | One concise sentence, no jargon — **the only text displayed in the expanded card** |
| `detail` | string | 2–3 sentence expanded explanation — **stored for audit trail, not displayed** |
| `policy_excerpt` | string | Direct quote from the policy (keep under 20 words) — **stored for audit trail, not displayed** |
| `concerns` | array of strings | Specific bullet concerns — **stored for audit trail, not displayed** |
| `score_impact` | number | Raw point deduction — stored for reference/debugging, **not displayed** |

### `scoring`

| Field | Type | Description |
|-------|------|-------------|
| `base_score` | number | Always 100 |
| `max_possible_deductions` | number | Always 205 — fixed normalization denominator |
| `deductions` | array | Per-category objects: `{ category, risk, max, rate, deduction }` |
| `total_deductions` | number | Sum of all deduction values |
| `final_score` | number | `round((1 − total_deductions / 205) × 100)`, clamped 0–100 |
| `grade` | string | Derived from final_score threshold |

---

## Scoring Formula

```
final_score = round( (1 − total_deductions / 205) × 100 )
final_score = max(0, min(100, final_score))
```

**205** is the fixed denominator — the sum of all category max deductions. Never change it.

---

## Grade Thresholds

| Score | Grade | Risk Level |
|-------|-------|------------|
| 85–100 | A | Safe |
| 70–84 | B | Caution |
| 55–69 | C | Caution |
| 40–54 | D | Risky |
| 0–39 | F | Dangerous |

---

## Lightweight Index Entry

Each app has a folder-level entry in `/data/index.json` for fast search and browse. Shows all platform scores together.

```json
{
  "slug": "whatsapp",
  "name": "WhatsApp",
  "developer": "Meta Platforms, Inc.",
  "icon_url": "",
  "category": "Social",
  "description": "End-to-end encrypted messaging app owned by Meta.",
  "platforms": [
    { "platform": "ios",     "score": 53, "grade": "D", "risk": "risky",     "analyzed_at": "2025-05-08" },
    { "platform": "android", "score": 31, "grade": "F", "risk": "dangerous", "analyzed_at": "2025-05-08" },
    { "platform": "mac",     "score": 61, "grade": "C", "risk": "caution",   "analyzed_at": "2025-05-08" }
  ],
  "worst_risk": "dangerous",
  "one_liner": "Extensive data collection linked to Meta's ad network, though messages are end-to-end encrypted."
}
```
