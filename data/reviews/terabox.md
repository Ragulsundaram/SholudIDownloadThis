# TeraBox iOS — Privacy Policy Review

**Reviewed:** 2026-05-12
**Policy:** https://www.terabox.com/terms/privacy?lang=en
**Terms:** https://www.terabox.com/terms/duty?lang=en
**Platform:** iOS
**Score:** 49/100 (Grade D, Risky)

---

## Summary

TeraBox is a cloud storage app from Flextech Inc. offering up to 1TB of free storage. While it provides useful features like AI photo categorization and audio transcription, its privacy practices raise significant concerns.

Key concerns: explicit behavioral profiling for automated marketing decisions, AI scanning of all uploaded photos, audio sent to Google for transcription, collection of contacts and clipboard data, and facial recognition requirements for some features.

Key positives: encryption at rest, two-factor authentication, in-app account deletion, and opt-out for automated decision-making.

---

## Methodology

This review was conducted by analyzing the TeraBox Privacy Policy and Terms of Service, accessed via jina.ai text extraction on 2026-05-12.

### Data Collection Observed

- **Account:** Email, phone number, SNS profile data (nickname, profile image)
- **User Data:** All files stored on TeraBox (documents, photos, videos, audio)
- **Contacts:** Phone contacts, email addresses, Facebook/Twitter contacts
- **Device:** IP address, browser type, device identifiers, OS, location
- **Behavioral:** All operations (editing, viewing, creating, moving files), search queries, clipboard contents
- **Biometric:** Facial recognition information for account authentication
- **Identity:** Real name, identity document number

### Notable Excerpts

> "We can aggregate, integrate, identify, analyze, portray, or further process the personal information... to form a variety of label information with different degrees of granularity that reflect your operation habits, interests, or credit. We will use label information for automated decision-making in specific scenarios and applications, so as to send you personalized information and/or marketing information."

> "To provide transcription and note generation services, your audio content is transmitted to Google, our third-party AI service provider, for processing."

> "When you register a Terabox account using someone's invitation code, access file links shared by other users, add friends through passwords, or obtain membership services through redemption codes, we will read your clipboard information."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | caution | 15 | 0.30 | 4.5 |
| Location & GPS | caution | 15 | 0.30 | 4.5 |
| Contacts & Phonebook | risky | 20 | 0.65 | 13.0 |
| Storage & File Access | caution | 10 | 0.30 | 3.0 |
| Data Sharing with 3rd Parties | risky | 30 | 0.65 | 19.5 |
| Account & Identity | risky | 15 | 0.65 | 9.75 |
| Behavioural & Ad Tracking | risky | 25 | 0.65 | 16.25 |
| Children's Data | caution | 10 | 0.30 | 3.0 |
| Network & Internet Activity | risky | 5 | 0.65 | 3.25 |
| Device Fingerprinting | risky | 15 | 0.65 | 9.75 |
| Health & Biometric | risky | 15 | 0.65 | 9.75 |
| Financial & Payment | caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3.0 |
| Policy Change Notification | caution | 5 | 0.30 | 1.5 |

**Total deductions:** 104.75
**Final score:** round((1 − 104.75/205) × 100) = 49
**Grade:** D
**Risk:** Risky
