# Picsart AI Photo Editor, Video — Strict Re-Analysis

**Date:** 2026-05-16  
**Analyst:** kimi-k2.6  
**Policy URL:** https://picsart.com/privacy-policy  
**Policy Last Updated:** 2024-09-12  
**Methodology:** Strict legal-safe rules applied. Every claim requires a direct verbatim quote. No strong verbs from weak evidence. Silent categories marked `unknown` with `needs_review: true`.

---

## Policy Summary

Picsart's privacy policy describes a photo/video editor that collects account data, location, contacts, visual content, and detailed log data. It shares data with ad networks and analytics providers (Google, Facebook), performs interest-based advertising, and stores facial geometry data for up to three years.

---

## Key Verbatim Quotes

> "With your permission (on download or within one of our apps), we may access and store your device's contact list to help you find your friends on Picsart"

> "Picsart may use facial geometry or other facial data to produce the image or effect you request... within 3 years of the date your account becomes inactive."

> "Our Ad Network may serve ads on behalf of Picsart and others on our platform and non-affiliated platforms."

> "Our systems do not recognize 'Do Not Track' signals"

> "We collect and combine data about the devices you use to access Picsart, and data about your device usage and activity."

> "If you have an Apple iOS device and use the camera function with our services, we may automatically collect data about the spatial positioning of a person's head or face within an image frame using Apple's TrueDepth API."

> "None of the data collected via TrueDepth API ever leaves your device, it isn't persistently stored on your device, and it isn't shared with third parties."

---

## Changes from Previous Analysis

### Red Flags (Revised for Strict Rules)

1. **Contact list uploaded to servers**  
   - Plain-english now uses the verbatim phrase "access and store your device's contact list" instead of the stronger paraphrase "uploads your entire phonebook."

2. **Facial geometry stored for years**  
   - Plain-english now directly quotes the retention clause and avoids overstating by using "will destroy... within 3 years of account inactivity at the latest."

3. **Interest-based ads use cross-platform data** (was "Extensive ad tracking across apps")  
   - Removed the strong verb "tracks you across apps." Now attributes cross-platform collection to the Ad Network using the policy's own language: "collect information about your use of Picsart and other websites or apps over time."

4. **Broad third-party data sharing**  
   - Kept as medium severity. Plain-english now directly names the third parties mentioned in the policy.

5. **Ignores Do Not Track signals**  
   - Plain-english now directly quotes: "Our systems do not recognize 'Do Not Track' signals."

### Categories (Revised for Strict Rules)

- **Camera & Microphone:** Removed unsupported claim that the app "may use your microphone for certain features." The policy mentions camera and TrueDepth but is silent on microphone. Fixed `score_impact` sign from positive `4.5` to negative `-4.5`.
- **Account & Identity:** Downgraded from `risky` to `caution` because the policy does not explicitly link identity data to advertising profiles. The general marketing purpose is stated, but the specific link to account data is not explicit.
- **Device Fingerprinting:** Removed claim "advertising identifiers" (not in text) and removed "track you across apps." Now states what is collected and notes the cross-app purpose is not clearly explained.
- **Network & Internet Activity:** Removed conflation of log data with ad targeting. Now states the policy's explicit purposes: "operate services and improve your experience."
- **Financial & Payment:** Changed from `caution` to `unknown` because the policy is silent on payment data handling.
- **Data Deletion:** Softened language to avoid inventing what partners might retain.

---

## Category-by-Category Assessment

| Category | Risk | Deduction |
|----------|------|-----------|
| Camera & Microphone | Caution | 4.5 |
| Location & GPS | Caution | 4.5 |
| Contacts & Phonebook | Risky | 13.0 |
| Storage & File Access | Caution | 3.0 |
| Data Sharing with 3rd Parties | Risky | 19.5 |
| Account & Identity Data | Caution | 4.5 |
| Behavioural & Ad Tracking | Risky | 16.25 |
| Children's Data Handling | Caution | 3.0 |
| Network & Internet Activity | Caution | 1.5 |
| Device Info & Fingerprinting | Risky | 9.75 |
| Health & Biometric Data | Risky | 9.75 |
| Financial & Payment Data | Unknown | 0 |
| Data Deletion & User Rights | Caution | 3.0 |
| Policy Change Notification | Caution | 1.5 |

---

## Scoring

- Base score: 100
- Total deductions: 93.75
- **Final score: 54**
- **Grade: D**
- Overall risk: **Risky**

### Score Change

Previous score: **50** (D)  
New score: **54** (D)

The +4 point change comes from two strict-rule adjustments:
1. **Account & Identity** downgraded from `risky` (9.75) to `caution` (4.5) because the policy does not explicitly link identity data to advertising.
2. **Financial & Payment** changed from `caution` (4.5) to `unknown` (0) because the policy is silent on payment data. Under strict rules, silent categories receive no deduction but are flagged for review.

---

## Review Notes

`needs_review: true` because the policy is silent on:
- **financial_payment**
