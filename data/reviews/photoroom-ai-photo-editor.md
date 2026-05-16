# PhotoRoom AI Photo Editor Re-Analysis — 2026-05-16

**Policy analyzed:** https://photoroom.com/legal/privacy/ (updated March 2026)

## Strict-rule changes

### Red flag removed
- **"Your purchases and device ID are tracked for ads"** — REMOVED.
  - This was supported by the App Store privacy label in the previous analysis, but the privacy policy text does **not** explicitly state that purchases or device IDs are used for advertising. Under strict legal-safe rules, no claim can be made without a direct policy quote.

### Category risk downgrades
- **Behavioural & Ad Tracking**: Changed from `risky` to `caution`.
  - The policy mentions "social network and audience measurement Cookies" and "user tracking" as a third-party processor purpose, but it does **not** explicitly state that this tracking is used for behavioral advertising. The word "advertising" does not appear in the main policy body in this context.
- **Device Info & Fingerprinting**: Changed from `risky` to `caution`.
  - The policy collects "Data relating to devices and equipment used" for functional purposes. It does **not** explicitly mention unique device identifiers or device fingerprinting for advertising.
- **Data Sharing with 3rd Parties**: Changed from `risky` to `caution`.
  - The policy discloses sharing with Apple, RevenueCat, Dub, and other service providers, but explicitly states it does not "sell" or "share" data under CCPA meanings and does not disclose personal information to third parties for their own direct marketing.

### Categories marked unknown (policy silent)
- **Location & GPS** — No explicit mention of GPS or precise location. IP address is collected for cookies.
- **Contacts & Phonebook** — No mention of contacts or address book access.

### Scoring
- Total deductions: **63.5** (down from 78.5)
- Final score: **69** (Grade **C**, risk **caution**)
- Previous score: **62** (Grade C)

## Key policy excerpts
- "By using Photoroom, you acknowledge that Photoroom processes and uses the images you upload to improve, train and develop Photoroom's products, services and models."
- "Social network and audience measurement Cookies preserve IP address, pages viewed, etc. for up to twenty-five months with consent."
- "Your Personal data may be transmitted to third-party processors involved in the provision of the Services"
- "Please note that credit card or other payment methods data are not processed and kept by Photoroom but only by the Payment Services Provider"
- "Photoroom does not 'sell' or 'share' Personal Data as those terms are defined by the CCPA."

## Flags summary
**Red (4):**
1. Your uploaded photos may train AI models by default — **high** (explicit text)
2. Cookie data kept for up to 25 months — **medium** (explicit text)
3. Data may be transferred outside Europe — **medium** (explicit text)
4. Purchase records kept for 10 years — **low** (explicit text)

**Green (4):**
1. You can opt out of AI model training — **positive**
2. Extensive GDPR rights available — **positive**
3. Does not sell or share data under CCPA meanings — **positive**
4. No direct advertising to third parties — **positive**

## Cautious language applied
All plain-english descriptions use "states that," "may," or "claims to" where appropriate. No invented purposes. No "sells your data" or "tracks you across apps" claims made without explicit text.
