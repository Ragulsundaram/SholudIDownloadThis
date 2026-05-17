# Privacy Review — ELSA Speak - English Learning

**Analyzed:** 2026-05-18
**Policy URL:** http://www.elsanow.io/privacy
**Policy Last Updated:** March 2025
**Analyst:** Claude Kimi K2.6
**Status:** Complete

---

## App Metadata

| Field | Value |
|-------|-------|
| **Name** | ELSA Speak - English Learning |
| **Developer** | ELSA, Corp. |
| **Category** | Education |
| **App Store** | https://apps.apple.com/in/app/elsa-speak---english-learning/id1083804886 |
| **App Store ID** | 1083804886 |

---

## Summary Card

### ELSA Speak - English Learning
**Overall Risk:** Caution (Score: 61 / Grade: C)

**Red Flags:**
- **Admits to "selling" your data for ads** — The privacy policy explicitly states they have "sold" or "shared" personal information under California privacy laws for targeted advertising. You have to email them to opt out.
- **Voice recordings stored on external servers** — ELSA records your voice to check your pronunciation. These recordings are stored on AWS servers in multiple countries and may be shared with transcription and analysis service providers.
- **Shares data with many third parties including advertisers** — They share your data with a long list of companies including marketing services, social networks, content enrichment providers, event sponsors, and advertising networks—not just essential service providers.
- **Tracks your device for targeted advertising** — ELSA collects your device ID, browser type, and other technical details using cookies and SDKs. They use this to track you and share it with advertising partners.
- **Data deletion isn't guaranteed** — If you ask them to delete your personal data, they may deny your request or keep some of it if they decide it's necessary for them or their service providers.

**Green Flags:**
- **Provides GDPR and CCPA data rights** — You can request to see, correct, delete, or export your personal data. They have a dedicated privacy email and a Data Protection Officer to handle these requests.
- **Voice recording is needed for the app to work** — Recording your voice is necessary for the app's main purpose—helping you improve your English pronunciation. This isn't data collection just for the sake of it.
- **Transparent about data practices** — The privacy policy clearly explains what data is collected, why it's collected, and with whom it's shared. They also disclose CCPA categories and provide contact details for their Data Protection Officer.
- **Doesn't target kids and deletes minor data** — They say the app is for ages 16 and up, and if they find out a minor is using the service, they will try to block the account and delete the data.

**Verdict:** ELSA Speak offers genuine educational value for English pronunciation, but its privacy practices raise significant concerns. The app explicitly admits to "selling" personal data for targeted advertising under US privacy laws, and shares data with a wide range of third parties including advertising networks. While users have GDPR/CCPA rights and the voice recording is core to the app's purpose, the broad data monetization and storage of voice data on external servers across multiple countries mean users should think twice before downloading if privacy is a priority.

---

## Category-by-Category Assessment

### Camera & Microphone — Caution
ELSA needs to record your voice to check your pronunciation—this is the app's main feature. They store these recordings and may share them with service providers for transcription and analysis.

**Access Type:** On-demand | **Required for Core Feature:** Yes | **Background Access:** No
**Score Impact:** -4.5

**Policy Excerpt:**
> "We may collect the following data about Organic Users: User-generated content: prompts, text input, pictures, audio and video recordings, feedback, scenarios."

**Concerns:**
- Voice recordings stored on external AWS servers
- Audio data may be shared with transcription and analysis service providers
- Video recordings also collected

---

### Location & GPS — Caution
ELSA doesn't collect your precise GPS location, but they do record your IP address and explicitly list "Geolocation Data" as collected and shared under California privacy laws.

**Access Type:** Continuous | **Required for Core Feature:** No | **Background Access:** No
**Score Impact:** -4.5

**Policy Excerpt:**
> "In the last 12 months, we have disclosed... Geolocation Data... In the last 12 months, we have 'sold' or 'shared'... Geolocation Data... for targeted advertising."

**Concerns:**
- Geolocation Data explicitly collected and shared under CCPA
- IP addresses collected and used for marketing

---

### Contacts & Phonebook — Safe
There's no indication that ELSA accesses your phone's contact list or address book.

**Access Type:** Never | **Required for Core Feature:** No | **Background Access:** No
**Score Impact:** 0

---

### Storage & File Access — Caution
The app may access your photos or files when you choose to upload them, like for a profile picture. This is optional and only happens when you specifically select something.

**Access Type:** On-demand | **Required for Core Feature:** No | **Optional Access:** Yes | **Background Access:** No
**Score Impact:** -3

**Policy Excerpt:**
> "User-generated content: prompts, text input, pictures, audio and video recordings"

**Concerns:**
- Photo uploads mentioned but context is unclear

---

### Data Sharing with 3rd Parties — Risky
ELSA shares your data with many third parties including advertising networks, marketing services, social networks, content enrichment providers, event sponsors, and affiliates. They explicitly state they've "sold" data under California privacy laws for targeted advertising.

**Access Type:** Continuous | **Required for Core Feature:** No | **Background Access:** No
**Score Impact:** -19.5

**Policy Excerpt:**
> "We engage selected third-party companies and individuals... including... marketing services, social and advertising networks, content and data enrichment providers... In the last 12 months, we have 'sold' or 'shared'... for targeted advertising."

**Concerns:**
- Data sold/shared for targeted advertising
- Many third-party recipients including ad networks and event sponsors
- Hard to opt out—requires emailing privacy@elsanow.io
- Data shared with affiliates and in corporate transactions

---

### Account & Identity Data — Risky
You need an account to use ELSA. They collect your name, email, phone, age, and workplace information, and they explicitly share these "Identifiers" with advertising networks for targeted ads.

**Access Type:** On-demand | **Required for Core Feature:** Yes | **Background Access:** No
**Score Impact:** -9.75

**Policy Excerpt:**
> "Contact and business details: name, email, phone number, age range, position, workplace and professional information... In the last 12 months, we have disclosed... Identifiers... In the last 12 months, we have 'sold' or 'shared'... Identifiers... for targeted advertising."

**Concerns:**
- Identity data linked to advertising profile
- Identifiers sold/shared under CCPA for targeted ads
- Professional information collected and shared

---

### Behavioural & Ad Tracking — Risky
ELSA uses cookies, device identifiers, SDKs, and pixels to analyze your behavior and show you targeted ads. They share this tracking data with advertising partners and admit to selling it under US privacy laws.

**Access Type:** Continuous | **Required for Core Feature:** No | **Background Access:** No
**Score Impact:** -16.25

**Policy Excerpt:**
> "We and our service providers utilize third-party software development kits (SDKs), cookies, pixels and similar technologies... to analyse our performance and marketing activities... In the last 12 months, we have 'sold' or 'shared'... for targeted advertising."

**Concerns:**
- Cross-app tracking via advertising partners
- Device identifiers used for ad targeting
- Opt-out requires emailing privacy@elsanow.io

---

### Children's Data Handling — Caution
ELSA says their app isn't for kids under 16, but they don't actually check your age when you sign up. They just trust that users tell the truth.

**Access Type:** N/A | **Required for Core Feature:** No | **Background Access:** No
**Score Impact:** -3

**Policy Excerpt:**
> "Any individual who provides their personal data to us through the Services represents that they are 16 years of age or older. If we learn that a person who is considered as a minor according to applicable law is interacting with our Services... we will attempt to prohibit and block such use."

**Concerns:**
- No age verification mechanism
- Reactive rather than proactive protection

---

### Network & Internet Activity — Caution
ELSA logs your IP address and activity on the app to deliver the service and for security. This is fairly standard, but this data is also used for marketing and advertising purposes.

**Access Type:** Continuous | **Required for Core Feature:** Yes | **Background Access:** No
**Score Impact:** -1.5

**Policy Excerpt:**
> "Connectivity, technical and aggregated usage data: IP addresses, device data... activity logs, session recordings, inferred or presumed data generated from the Services"

**Concerns:**
- IP data used for marketing and advertising
- Activity logs shared with third parties

---

### Device Info & Fingerprinting — Risky
ELSA collects your device ID, browser type, operating system, and other technical details. They use this to track you across sessions and share it with advertising partners for targeted ads.

**Access Type:** Continuous | **Required for Core Feature:** No | **Background Access:** No
**Score Impact:** -9.75

**Policy Excerpt:**
> "IP addresses, device data (like type, OS, device id, browser version, locale and language settings used)... We and our service providers utilize third-party software development kits (SDKs), cookies, pixels and similar technologies"

**Concerns:**
- Device ID used for tracking
- Shared with advertising networks
- Used for targeted advertising

---

### Health & Biometric Data — Caution
Your voice is technically a biometric. ELSA records and analyzes your voice to check pronunciation. While this is necessary for the app, your voice data is stored on their servers and may be shared with transcription providers.

**Access Type:** On-demand | **Required for Core Feature:** Yes | **Background Access:** No
**Score Impact:** -4.5

**Policy Excerpt:**
> "User-generated content: prompts, text input, pictures, audio and video recordings, feedback, scenarios"

**Concerns:**
- Voice biometric data stored externally
- May be shared with service providers for transcription/analysis

---

### Financial & Payment Data — Safe
When you pay for ELSA Premium, your payment is processed by Apple through in-app purchases. ELSA doesn't directly handle your credit card information.

**Access Type:** N/A | **Required for Core Feature:** No | **Background Access:** No
**Score Impact:** 0

**Policy Excerpt:**
> "If we receive a refund request for an in-app purchase, we may provide Apple with information about the user's in-app purchase activity... This could include details such as time since app installation, total app usage time, an anonymous account identifier"

**Concerns:**
- Limited purchase activity shared with Apple for refunds

---

### Data Deletion & User Rights — Caution
You can ask ELSA to delete or export your data, but they may deny your request or keep some of your information if they decide they need it for legal or business reasons.

**Access Type:** N/A | **Required for Core Feature:** No | **Background Access:** No
**Score Impact:** -3

**Policy Excerpt:**
> "If you request deletion of your personal data, we may deny your request or may retain certain elements of your personal data if it is necessary for us or our service providers."

**Concerns:**
- Deletion requests may be denied
- Some data may be retained after deletion request

---

### Policy Change Notification — Caution
ELSA can change their privacy policy and will post the updated version. They say they'll give notice for "substantial changes" but continuing to use the app means you accept the changes.

**Access Type:** N/A | **Required for Core Feature:** No | **Background Access:** No
**Score Impact:** -1.5

**Policy Excerpt:**
> "We may update and amend this Privacy Notice from time to time by posting an amended version... We will provide prior notice if we believe any substantial changes are involved... After such notice period, all amendments shall be deemed accepted by you."

**Concerns:**
- Opt-out by stopping use rather than active consent for changes
- Substantial changes definition is vague

---

## Scoring Details

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | Caution | 15 | 30% | 4.5 |
| Location & GPS | Caution | 15 | 30% | 4.5 |
| Contacts & Phonebook | Safe | 20 | 0% | 0 |
| Storage & File Access | Caution | 10 | 30% | 3.0 |
| Data Sharing with 3rd Parties | Risky | 30 | 65% | 19.5 |
| Account & Identity Data | Risky | 15 | 65% | 9.75 |
| Behavioural & Ad Tracking | Risky | 25 | 65% | 16.25 |
| Children's Data Handling | Caution | 10 | 30% | 3.0 |
| Network & Internet Activity | Caution | 5 | 30% | 1.5 |
| Device Info & Fingerprinting | Risky | 15 | 65% | 9.75 |
| Health & Biometric Data | Caution | 15 | 30% | 4.5 |
| Financial & Payment Data | Safe | 15 | 0% | 0 |
| Data Deletion & User Rights | Caution | 10 | 30% | 3.0 |
| Policy Change Notification | Caution | 5 | 30% | 1.5 |

**Total Deductions:** 80.75
**Final Score:** round((1 - 80.75/205) * 100) = 61 (Grade: C)

---

## Review Notes

- The privacy policy is comprehensive and well-structured, making it easy to assess most categories.
- The explicit CCPA "sale" and "sharing" disclosures for Identifiers, Geolocation Data, and Internet Activity are significant red flags.
- Voice data collection is justified by the core feature but storage on external servers and broad third-party sharing is concerning.
- The international data storage (US, Europe, Japan, India, Vietnam, Singapore) increases exposure to varying privacy regimes.
- No age verification is a moderate concern given the app is education-focused and likely attracts younger users.
- GDPR/CCPA compliance mechanisms are present and well-documented, which is a positive.
- Key corrections from previous version: Location & GPS upgraded from Safe to Caution (explicit Geolocation Data collected and shared); Account & Identity upgraded from Caution to Risky (Identifiers explicitly sold/shared for ads); Data Deletion downgraded from Safe to Caution (policy states deletion may be denied or partial).
