# X — Privacy Policy Analysis

**Reviewed:** 2026-06-01
**Policy:** https://x.com/privacy
**Terms:** https://x.com/tos
**Platform:** iOS
**Score:** 40/100 (Grade D, Risky)

---

## Summary

X (formerly Twitter) is a global social media platform operated by X Corp. Its privacy policy is comprehensive and transparent about extensive data collection and sharing practices.

X collects virtually everything you do on the platform — your posts, likes, reposts, bookmarks, DMs, viewing history, Spaces participation, search terms (even unsubmitted ones), and device details including what other apps you have installed and your battery level. It then uses this data to build a profile of you across all your devices and browsers, targets you with ads on X and across the internet, and shares data with advertisers, business partners, and third-party collaborators.

The most concerning practices: your public data is sold through APIs to other companies; third-party collaborators may use your data to train their own AI models (unless you opt out); X infers your identity across devices even when you're signed out; and the policy explicitly allows your data to be sold in a company acquisition or bankruptcy.

Key positives: X provides data download/export tools, account deactivation with 30-day restore window, and some privacy controls for ad personalization and data sharing.

---

## Methodology

This analysis was conducted with strict legal-safe rules: every claim is backed by a direct verbatim quote from the X Privacy Policy (effective January 15, 2026), cautious language is used for uncertain areas.

### Data Collection Observed

- **Identity:** Display name, username, password, email/phone number, date of birth, third-party SSO info, professional account info, inferred identity across devices
- **Biometric:** Face/fingerprint data (with consent) for safety/security
- **Content:** All posts, photos, videos, bookmarks, lists, communities, broadcasts/Spaces
- **Interactions:** Likes, reposts, shares, downloads, replies, mentions, DMs (content and recipients), viewing/listening history
- **Location:** Approximate location by default; precise location optional
- **Device:** IP address, browser type, OS, carrier, language, memory, apps installed, battery level, device and advertising IDs
- **Financial:** Card number, expiration, CVV, billing address for paid products
- **Behavioral:** All platform interactions, ads viewed/clicked, search terms (including unsubmitted), links clicked
- **Third-party:** Cookie IDs, device IDs, hashed emails, demographics from ad partners

### Notable Excerpts

> "We also use this information to measure the effectiveness of ads and to help recognize your devices to serve you ads on and off of X."

> "If you do not opt out, in some instances the recipients of the information may use it for their own independent purposes in addition to those stated in X's Privacy Policy, including, for example, to train their artificial intelligence models, whether generative or otherwise."

> "When you access X and are not signed in, we may infer your identity based on the information we collect."

> "We may share, sell, or transfer information about you in connection with a merger, acquisition, reorganization, sale of assets, or bankruptcy."

> "Information about your device and its settings, such as device and advertising ID, operating system, carrier, language, memory, apps installed, and battery level."

> "Biometric information. Based on your consent, we may collect and use your biometric information for safety, security, and identification purposes."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | caution | 15 | 0.30 | 4.5 |
| Location & GPS | caution | 15 | 0.30 | 4.5 |
| Contacts & Phonebook | risky | 20 | 0.65 | 13.0 |
| Storage & File Access | caution | 10 | 0.30 | 3.0 |
| Data Sharing with 3rd Parties | dangerous | 30 | 1.00 | 30.0 |
| Account & Identity | risky | 15 | 0.65 | 9.75 |
| Behavioural & Ad Tracking | dangerous | 25 | 1.00 | 25.0 |
| Children's Data | caution | 10 | 0.30 | 3.0 |
| Network & Internet Activity | risky | 5 | 0.65 | 3.25 |
| Device Info & Fingerprinting | risky | 15 | 0.65 | 9.75 |
| Health & Biometric Data | risky | 15 | 0.65 | 9.75 |
| Financial & Payment Data | caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3.0 |
| Policy Change Notification | caution | 5 | 0.30 | 1.5 |

**Total deductions:** 123.5
**Final score:** round((1 − 123.5 / 205) × 100) = **40** (Grade D, Risky)

---

## Summary Card

**App:** X (formerly Twitter)
**Overall Risk:** Risky — 40/100 (Grade D)

### Red Flags
- **Extensive ad tracking on and off X.** X tracks which ads you see and click, then shares this with advertisers so they can show you ads on other apps and websites too. It also uses your device ID to recognize you across different apps and browsers.
- **Your data may train other companies' AI models.** If you don't opt out, X may share your information with third-party collaborators who can use it to train their own artificial intelligence models — not just X's.
- **X links your identity across all your devices and browsers.** Even when you're not signed in, X tries to figure out who you are by matching your device, browser, and email information.
- **Your public posts are sold through APIs.** X makes your public posts, profile, and interactions available to other companies through APIs. These companies pay X for large-scale access.
- **Your data can be sold in a company sale or bankruptcy.** The policy explicitly says X may "share, sell, or transfer information about you" if the company is sold, merges with another, or goes bankrupt.
- **May collect your biometric data.** With your consent, X may collect and use your biometric information for safety, security, and identification purposes.

### Green Flags
- **You can download your data and request access.** X lets you download a copy of your posts and other data. You can also request access to additional information X has collected about you.
- **Account deactivation and deletion available.** You can deactivate your account, which queues your data for deletion. You have up to 30 days to restore it if you change your mind.
- **Some privacy settings are available.** X offers settings to control data sharing with business partners, ad personalization, and whether your content is public or protected.

### Verdict
X is designed as a public platform where your content is broadly visible and your behavior is extensively tracked for advertising. The privacy policy is transparent about this, but the data practices are extensive: cross-device identity inference, third-party AI training, public data sold through APIs, and biometric data collection. If privacy is important to you, consider whether you need an account at all, or use it with strict privacy settings and minimal personal information.
