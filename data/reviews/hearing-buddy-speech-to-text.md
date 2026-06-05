# Hearing Buddy - Speech To Text — Privacy Policy Analysis

**Reviewed:** 2026-06-01
**Policy:** https://kragerlabs.com/privacy.html
**Terms:** (not found — standard Apple EULA applies to in-app purchases)
**Platform:** iOS
**Score:** 58/100 (Grade C, Caution)

---

## Summary

Hearing Buddy is a speech-to-text captioning app designed for deaf and hard of hearing users, developed by Krager Labs LLC. The App Store description makes strong privacy claims: everything stays on your device, no cloud processing, and your conversations are nobody else's business.

However, the actual privacy policy is a generic WordPress-style template originally written for a website. It discusses blog commenters, cookies, Akismet spam prevention, and advertising partners — but never mentions the app's microphone access, speech transcripts, transcript history, or Apple Health integration. This creates a significant transparency gap for a medical app whose entire purpose is recording sensitive personal conversations.

Key concerns: the privacy policy does not address the app's core data practices, does not explain how health data from Apple Health is handled, and includes a business transfers clause allowing user data to be transferred if the company is acquired.

Key positives: the developer explicitly states they do not rent or sell personal information, and provides a support email for data deletion questions.

---

## Methodology

This analysis was conducted with strict legal-safe rules: every claim is backed by a direct verbatim quote from the privacy policy, cautious language is used for uncertain areas, and categories not addressed by the policy are marked as unknown with needs_review.

### Data Collection Observed

- **Website visitors:** Browser type, language preference, referring site, date/time of visit (non-personally-identifying)
- **Logged-in users:** IP addresses, username, email address
- **Transactions:** Personal and financial information for purchases (described in context of website services like Akismet)
- **App-specific data:** The policy does not specifically describe what data the Hearing Buddy app collects

### Notable Excerpts

> "Your privacy is critically important to us. At kragerlabs.com we have a few fundamental principles: We don't ask you for personal information unless we truly need it."

> "We don't share your personal information with anyone except to comply with the law, develop our products, or protect our rights."

> "kragerlabs.com will not rent or sell potentially personally-identifying and personally-identifying information to anyone."

> "If you have questions about deleting or correcting your personal data please contact our support team (support@kragerlabs.com)."

> "If kragerlabs.com, or substantially all of its assets, were acquired, or in the unlikely event that kragerlabs.com goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party."

> "Ads appearing on any of our websites may be delivered to users by advertising partners, who may set cookies."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | unknown | 15 | 0.50 | 7.5 |
| Location & GPS | unknown | 15 | 0.50 | 7.5 |
| Contacts & Phonebook | unknown | 20 | 0.50 | 10.0 |
| Storage & File Access | unknown | 10 | 0.50 | 5.0 |
| Data Sharing with 3rd Parties | caution | 30 | 0.30 | 9.0 |
| Account & Identity | unknown | 15 | 0.50 | 7.5 |
| Behavioural & Ad Tracking | caution | 25 | 0.30 | 7.5 |
| Children's Data | unknown | 10 | 0.50 | 5.0 |
| Network & Internet Activity | caution | 5 | 0.30 | 1.5 |
| Device Info & Fingerprinting | unknown | 15 | 0.50 | 7.5 |
| Health & Biometric Data | unknown | 15 | 0.50 | 7.5 |
| Financial & Payment Data | caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3.0 |
| Policy Change Notification | unknown | 5 | 0.50 | 2.5 |

**Total deductions:** 85.5
**Final score:** round((1 − 85.5 / 205) × 100) = **58** (Grade C, Caution)

---

## Summary Card

**App:** Hearing Buddy - Speech To Text
**Overall Risk:** Caution — 58/100 (Grade C)

### Red Flags
- **Generic privacy policy that doesn't address the app.** The policy is a WordPress-style template that talks about blog commenters and cookies but never mentions how the app handles your microphone, speech transcripts, or health data.
- **No explanation of how sensitive audio is handled.** The app's entire purpose is to record and transcribe your conversations, yet the privacy policy is completely silent on microphone access, audio recording, and transcript storage.
- **No mention of health data despite Apple Health access.** The app can read hearing test data from Apple Health for its Buddy Boost sound amplifier, but the policy says nothing about health or biometric data.
- **Your data could be transferred if the company is sold.** The policy includes a business transfers clause that treats user information as a transferable asset in an acquisition or bankruptcy.

### Green Flags
- **Developer says they don't sell personal information.** The policy explicitly states that Krager Labs will not rent or sell your personal information to anyone.
- **Support contact for data questions.** You can email support@kragerlabs.com to ask about deleting or correcting your personal data.
- **Claims to only collect what's necessary.** The policy states they don't ask for personal information unless they truly need it.

### Verdict
Hearing Buddy's App Store listing promises on-device speech-to-text with no cloud uploading, which would be excellent for privacy. But its actual legal privacy policy is a generic website template that never addresses the app's core data practices. For a medical app built around recording your conversations, this lack of a specific, transparent privacy policy is a serious gap. The developer should publish an app-specific privacy policy that clearly explains how microphone data, transcripts, and health information are handled.
