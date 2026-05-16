# ChatGPT — Privacy Policy Review (Strict Re-Analysis)

**Reviewed:** 2026-05-16
**Policy:** https://openai.com/policies/privacy-policy
**Terms:** https://openai.com/terms
**Platform:** iOS
**Score:** 53/100 (Grade D, Risky)

---

## Summary

ChatGPT collects extensive data including all user Content (prompts, files, images, audio, video), device identifiers, and interaction logs. By default, OpenAI may use this Content to train its AI models unless the user opts out. OpenAI discloses data to a broad set of vendors, service providers, marketing partners, affiliates, and government authorities. Business account administrators may access employee Content. Positives include opt-out controls for model training, Temporary Chat mode, deletion and export rights, and a commitment not to re-identify de-identified data.

Key concerns: Content used for training by default; full address book uploaded via Contact Sync; data shared with marketing partners for targeted advertising; business admin access to Content; content monitored for policy enforcement.

Key positives: opt-out of model training available; Temporary Chat not saved or used for training; deletion and export tools; de-identified data not re-identified.

---

## Methodology

This review was conducted by analyzing the OpenAI Privacy Policy text extracted on 2026-05-16. Strict legal-safe rules were applied: every claim is backed by a direct verbatim quote; no strong verbs are used without explicit support; silent topics are marked unknown.

### Data Collection Observed

- **Account:** Name, contact info, account credentials, date of birth, payment info, transaction history
- **User Content:** All prompts, files, images, audio, video, connected services data, social interactions
- **Contacts:** Full device address book uploaded via optional Contact Sync
- **Log Data:** IP address, browser type/settings, date/time, interaction patterns
- **Usage Data:** Content viewed, features used, actions taken, feedback, people interacted with, timezone, country, access dates/times, user agent, device type
- **Device:** Device name, OS, device identifiers, browser
- **Location:** General area from IP; optional precise GPS
- **Cookies:** Session maintenance, authentication, customer support
- **Other Sources:** Security partners, marketing vendors, publicly available internet data

### Notable Excerpts

> "As noted above, we may use Content you provide us to improve our Services, for example to train the models that power ChatGPT."

> "If you choose to connect your device contacts, we upload information from your device address books and check which of your contacts also use our Services."

> "We also share limited information with select marketing partners who are not service providers in order to promote our products and services on third-party properties and help us assess the effectiveness of those efforts."

> "When you join a ChatGPT Enterprise or business account, the administrators of that account may access and control your OpenAI account, including being able to access your Content."

> "To prevent fraud, illegal activity, or misuses of our Services, and to protect the security of our systems and Services, including by monitoring any Content submitted or exchanged on our platforms."

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
| Health & Biometric | unknown | 15 | 0.00 | 0 |
| Financial & Payment | caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3.0 |
| Policy Change Notification | caution | 5 | 0.30 | 1.5 |

**Total deductions:** 95.5
**Final score:** round((1 − 95.5/205) × 100) = 53
**Grade:** D
**Risk:** Risky

---

## Changes Since Last Review

- Removed unsupported red flag about advertisers sharing purchase data (no direct quote).
- Removed unsupported claim that "Free users" get personalized ads (policy does not explicitly segment by plan type in the reviewed text).
- Removed unsupported green flag about owning Output (not mentioned in privacy policy text).
- Changed Health & Biometric risk from safe to unknown because the policy is silent on this category.
- Corrected scoring math (previous total was 92.5; actual total is 95.5), lowering the score from 55 to 53.
- Added verbatim quotes to all categories and flags.
