# Google Gemini — Privacy Review

**Reviewed:** 2026-05-16
**Policy:** https://support.google.com/gemini/answer/13594961
**Terms:** https://policies.google.com/terms
**Platform:** iOS
**Score:** 60/100 (Grade C, Caution)

---

## Summary

Google Gemini collects your prompts, file uploads, and Gemini Live recordings. A subset of chats are reviewed by human reviewers and kept for up to three years. Temporary chats are retained for 72 hours. Gemini shares data with Connected Apps and third-party services, which process it under their own privacy policies. You can adjust auto-deletion settings and delete threads manually.

Key concerns: human review of chats, long retention of reviewed chats, data sharing with Connected Apps and third parties, and accidental audio activation.

Key positives: temporary chats are not used to train AI models, Gemini Live streams are not used for improvement by default, and you can export and delete your data.

---

## Methodology

This review was conducted by analyzing the Gemini Apps Privacy Notice (May 5, 2026) and the Google Privacy Policy (April 2, 2026), accessed via verification files and WebFetch on 2026-05-16.

### Data Collection Observed

- **Chats & Prompts:** Everything you type or say to Gemini
- **File Uploads:** Images, videos, documents you upload
- **Gemini Live:** Audio, video, and screenshare recordings and transcripts
- **Device:** Unique identifiers, browser type, device type, OS, carrier, application version
- **Activity:** Interaction logs, performance metrics, crash and debug information
- **Connected Apps:** Data from linked Google and third-party apps
- **Location:** General area from IP address or Home/Work addresses

### Notable Excerpts

> "A subset of chats are reviewed by human reviewers (including trained reviewers from our service providers) to help improve Google services... Please don't enter confidential information that you wouldn't want a reviewer to see or Google to use to improve our services."

> "Chats reviewed by human reviewers (and related data like your language, device type, location info, or feedback) are not deleted when you delete your activity. Instead, they are retained for up to three years."

> "Temporary chats and chats you have when Keep Activity is off are retained with your account for 72 hours and used to: respond to you, using the last 24 hours of your chat as context, and protect Google, our users, and the public."

> "Gemini Apps work with Connected Apps... Third-party apps use data from Gemini consistent with their own privacy policies and terms."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | caution | 15 | 0.30 | 4.50 |
| Location & GPS | caution | 15 | 0.30 | 4.50 |
| Contacts & Phonebook | unknown | 20 | 0.50 | 10.00 |
| Storage & File Access | caution | 10 | 0.30 | 3.00 |
| Data Sharing with 3rd Parties | risky | 30 | 0.65 | 19.50 |
| Account & Identity | caution | 15 | 0.30 | 4.50 |
| Behavioural & Ad Tracking | caution | 25 | 0.30 | 7.50 |
| Children's Data | safe | 10 | 0.00 | 0.00 |
| Network & Internet Activity | risky | 5 | 0.65 | 3.25 |
| Device Fingerprinting | risky | 15 | 0.65 | 9.75 |
| Health & Biometric | unknown | 15 | 0.50 | 7.50 |
| Financial & Payment | caution | 15 | 0.30 | 4.50 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3.00 |
| Policy Change Notification | caution | 5 | 0.30 | 1.50 |

**Total deductions:** 83.0
**Final score:** round((1 − 83.0/205) × 100) = 60
**Grade:** C
**Risk:** Caution
