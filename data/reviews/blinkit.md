# Blinkit iOS — Privacy Policy Re-Analysis

**Reviewed:** 2026-05-16
**Policy:** https://grofers.com/privacy
**Terms:** (not provided)
**Platform:** iOS
**Score:** 57/100 (Grade C, Caution)

---

## Summary

Blinkit (Blink Commerce Private Limited) is a quick-commerce grocery delivery app with broad data collection and sharing practices. It collects real-time GPS location, device identifiers, and detailed usage data for deliveries and advertising. Data is shared widely across the Zomato group and with advertisers, sellers, and service providers.

Key concerns: tailored ads served via third-party ad networks, applications may access file metadata on your phone, contacts may be uploaded, data shared across Zomato affiliates, and device IDs are used for advertising tracking.

Key positives: payment data is encrypted with PCI-compliant processors, account deletion is available, and the app states it does not knowingly collect data from children under 18.

The policy is silent on in-app camera/microphone access and on health/biometric data, so these categories are marked as unknown.

---

## Methodology

This re-analysis was conducted with strict legal-safe rules: every claim is backed by a direct verbatim quote, cautious language is used, and categories not addressed by the policy are marked as unknown with needs_review.

### Data Collection Observed

- **Personal:** Name, address, email, postal code, gender, mobile phone number, date of birth, anniversary date, user bio
- **Contacts:** Option to provide contacts including friends; applications may access address book information
- **Files:** Applications may access metadata of files on device, including photographs, audio, video clips
- **Location:** Real-time GPS (latitude, longitude, altitude) collected for location-based services
- **Device:** Device type, unique device identifier, mobile network info, telephone number, IDFA, other device IDs
- **Behavioral:** Search terms, browsing info, ads clicked, activity on services; tailored ads via third-party ad networks
- **Financial:** Payment card info encrypted and shared with PCI-compliant payment processors
- **Other:** Application presence/absence on mobile phone gathered for personalization

### Notable Excerpts

> "Our applications may also access metadata and other information associated with files stored on your mobile device. This may include, for example, photographs, audio and video clips."

> "You have the option to provide contacts including that of your friends or other parties to avail certain Services."

> "Our applications collect real-time information about the location of your device... we collect and process information about your mobile device's GPS location (including the latitude, longitude or altitude of your mobile device)"

> "To our subsidiaries and affiliates, which are entities under common ownership or control of our ultimate parent company Zomato Limited."

> "Advertising companies may use device IDs to track your use of our applications, track the number of advertisements displayed, measure advertising performance and display advertisements that are more relevant to you."

> "When you submit credit or payment card information, we encrypt the information using industry standard technologies... shared with third-parties which assist in processing and fulfilling your requests, including PCI compliant payment gateway processors."

> "The Services are not intended for users under the age of 18, unless permitted under applicable local laws. We do not knowingly collect any personal information from users or market to or solicit information from anyone under the Permissible Age."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | unknown | 15 | 0.00 | 0 |
| Location & GPS | caution | 15 | 0.30 | 4.5 |
| Contacts & Phonebook | risky | 20 | 0.65 | 13.0 |
| Storage & File Access | risky | 10 | 0.65 | 6.5 |
| Data Sharing with 3rd Parties | risky | 30 | 0.65 | 19.5 |
| Account & Identity | caution | 15 | 0.30 | 4.5 |
| Behavioural & Ad Tracking | risky | 25 | 0.65 | 16.25 |
| Children's Data | caution | 10 | 0.30 | 3.0 |
| Network & Internet Activity | caution | 5 | 0.30 | 1.5 |
| Device Fingerprinting | risky | 15 | 0.65 | 9.75 |
| Health & Biometric | unknown | 15 | 0.00 | 0 |
| Financial & Payment | caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3.0 |
| Policy Change Notification | caution | 5 | 0.30 | 1.5 |

**Total deductions:** 87.5
**Final score:** round((1 − 87.5/205) × 100) = 57
**Grade:** C
**Risk:** Caution

---

## Strict Rules Applied

- **Camera & Microphone** marked as **unknown** because the policy mentions CCTV/event images but does not address in-app camera or microphone access.
- **Health & Biometric** marked as **unknown** because the policy does not mention this category.
- **Tailored ads** red flag severity downgraded from high to **medium** under the rule that high-severity flags require explicit, unambiguous backing.
- All plain-english summaries use cautious language ("states that," "may," "claims to") and are backed by verbatim quotes.
