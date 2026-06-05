# Tide Guide: Charts & Tables — Privacy Policy Analysis

**Reviewed:** 2026-06-01
**Policy:** https://tideguide.app/privacy (iubenda-generated, hosted at iubenda.com/privacy-policy/8105729)
**Terms:** https://tideguide.com/terms (iubenda-generated, hosted at iubenda.com/terms-and-conditions/8105729)
**Platform:** iOS
**Score:** 77/100 (Grade B, Caution)

---

## Summary

Tide Guide is an award-winning tide and marine weather app developed by Condor Digital LLC. Its privacy policy is an iubenda-generated boilerplate that explicitly states the only personal data collected is "Usage Data."

The app appears to have a genuinely minimal data footprint: no account creation, no contact access, no camera or microphone, no health data, and all payments handled entirely by Apple. However, the policy is so minimal that it fails to address several app-specific concerns.

Key concerns: the policy does not define what "Usage Data" includes, is completely silent on location access (essential for a tide app), lacks a specific data deletion process, and broadly allows data to be shared with unspecified "external parties."

Key positives: minimal claimed data collection, all payments through Apple, no advertising described, security measures mentioned, and contact email provided (hello@tideguide.app).

---

## Methodology

This analysis was conducted with strict legal-safe rules: every claim is backed by a direct verbatim quote from the privacy policy or terms, cautious language is used for uncertain areas, and categories not addressed by the policy are marked as unknown with needs_review.

### Data Collection Observed

- **Usage Data:** The only type of Personal Data explicitly mentioned as collected
- **Payments:** Handled entirely by Apple App Store; developer only receives success notification
- **Platform hosting:** App Store Connect by Apple Inc.
- **Location:** Not mentioned in policy despite being core to app functionality
- **Device data:** Not explicitly mentioned; possibly included in "Usage Data"

### Notable Excerpts

> "Among the types of Personal Data that Tide Guide &amp; Buoy Weather collects, by itself or through third parties, there are: Usage Data."

> "The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data."

> "Tide Guide &amp; Buoy Weather isn't involved in the collection and processing of such information: instead, it will only receive a notification by the relevant payment service provider as to whether payment has been successfully completed."

> "The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located. Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own."

> "Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as required by the purpose they have been collected for and may be retained for longer due to applicable legal obligation or based on the Users' consent."

> "The continued use of the Service will signify the User's acceptance of the revised Terms."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | safe | 15 | 0.00 | 0 |
| Location & GPS | unknown | 15 | 0.50 | 7.5 |
| Contacts & Phonebook | safe | 20 | 0.00 | 0 |
| Storage & File Access | unknown | 10 | 0.50 | 5.0 |
| Data Sharing with 3rd Parties | caution | 30 | 0.30 | 9.0 |
| Account & Identity | safe | 15 | 0.00 | 0 |
| Behavioural & Ad Tracking | caution | 25 | 0.30 | 7.5 |
| Children's Data | unknown | 10 | 0.50 | 5.0 |
| Network & Internet Activity | caution | 5 | 0.30 | 1.5 |
| Device Info & Fingerprinting | unknown | 15 | 0.50 | 7.5 |
| Health & Biometric Data | safe | 15 | 0.00 | 0 |
| Financial & Payment Data | safe | 15 | 0.00 | 0 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3.0 |
| Policy Change Notification | caution | 5 | 0.30 | 1.5 |

**Total deductions:** 47.5
**Final score:** round((1 − 47.5 / 205) × 100) = **77** (Grade B, Caution)

---

## Summary Card

**App:** Tide Guide: Charts & Tables
**Overall Risk:** Caution — 77/100 (Grade B)

### Red Flags
- **"Usage Data" is never defined.** The privacy policy only says it collects "Usage Data" but never explains what that includes. It could mean anything from basic app launch counts to detailed location and behavior logs.
- **No mention of location for a location-based app.** A tide app needs to know where you are to show accurate tide charts, yet the privacy policy doesn't mention location access at all.
- **No specific data deletion or export process.** The policy says data is kept "as long as required" but doesn't explain how you can request deletion or how long it takes.
- **Data may be transferred internationally.** The policy states data may be transferred to countries other than your own without specifying which countries or what safeguards apply.

### Green Flags
- **Minimal data collection claimed.** The privacy policy explicitly says the only personal data collected is "Usage Data" — it does not claim to collect your name, email, contacts, photos, or other sensitive information.
- **Payments handled entirely by Apple.** All in-app purchases and subscriptions are processed through the Apple App Store. The app developer never sees your credit card or payment details.
- **Security measures mentioned.** The policy states the owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or destruction of data.
- **No advertising or ad tracking described.** The privacy policy does not mention advertising networks, ad SDKs, or behavioral tracking for ads within the app.

### Verdict
Tide Guide appears to be a genuinely low-data app with all payments handled by Apple and no invasive data collection described. However, the privacy policy is an iubenda boilerplate so minimal that it fails to explain how your location is handled for tide lookups — a basic transparency gap for a location-dependent weather app. If you need a tide chart app and privacy is a concern, Tide Guide is likely one of the safer options, but the developer should publish a more specific privacy policy that explains what "Usage Data" means and how location is handled.
