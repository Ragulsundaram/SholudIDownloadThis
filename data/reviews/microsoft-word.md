# Microsoft Word — Privacy Policy Audit

**Date:** 2026-05-13
**Analyzed by:** claude-opus-4-7
**App:** Microsoft Word (iOS)
**Developer:** Microsoft Corporation
**App Store URL:** https://apps.apple.com/in/app/microsoft-word/id586447913
**Privacy Policy URL:** https://privacy.microsoft.com/en-us/privacystatement
**Terms of Use URL:** https://www.microsoft.com/en-us/servicesagreement
**Policy Last Updated:** March 2026

---

## Sources Analyzed

1. Microsoft Privacy Statement (https://www.microsoft.com/en-us/privacy/privacystatement)
2. Microsoft Services Agreement (https://www.microsoft.com/en-us/servicesagreement)
3. Apple App Store privacy label for Microsoft Word
4. Microsoft 365 Privacy Controls documentation (learn.microsoft.com)

---

## Summary

Microsoft Word is a widely-used document editor, but its privacy practices are governed by Microsoft's comprehensive privacy statement, which covers the entire Microsoft ecosystem. The app collects a significant amount of personal data — email, name, phone number, contacts, device identifiers, product interaction data, and crash diagnostics — all linked to your identity (not anonymized).

### Key Concerns

- **Data shared with third-party advertising platforms**: Microsoft explicitly states that data "may be shared with third party advertising platforms and advertisers to facilitate the delivery and measurement of ads."
- **AI training on user data**: Microsoft "may use your data to develop and train our AI models," and connected experiences (like Translator in Word) send document content to Microsoft's servers for processing.
- **Extensive device tracking**: Unique device identifiers, hardware/software info, and the MUID cookie track users across sessions and devices.
- **Policy changes without active consent**: Microsoft can update its privacy policy at any time, and continued use means acceptance — no need to re-agree.
- **Contacts linked to identity**: Your contacts are collected and linked to your Microsoft account, not anonymized.

### Key Positives

- **No content-based ad targeting**: Microsoft explicitly states it does not use email, chat, documents, or photos for ad targeting.
- **Privacy dashboard available**: Users can view, clear, and manage data through Microsoft's privacy dashboard.
- **Account deletion offered**: You can delete your account and data, with a 60-day waiting period.
- **Opt-out of personalized ads**: Users can opt out of personalized advertising through privacy settings.

---

## Category-by-Category Analysis

### Camera & Microphone — Safe
Word does not need camera or microphone access as a core feature. These are only requested for user-initiated actions (inserting photos, dictation). The App Store privacy label does not list camera or microphone data collection.

### Location & GPS — Caution
Coarse location data is collected via IP address for analytics and linked to your identity. Not precise GPS, but your general area is known to Microsoft.

### Contacts & Phonebook — Caution
Contacts are collected for the sharing feature and linked to your identity. Microsoft's privacy statement says it collects "data from sharing, contact management, and communication features."

### Storage & File Access — Caution
File access is core to Word's function. Documents stored in OneDrive are synced to Microsoft's cloud, where they may be processed for connected experiences (Translator, Editor, etc.). While this is expected for a cloud-connected word processor, it means Microsoft has access to your document content.

### Data Sharing with 3rd Parties — Risky
Microsoft shares data with: affiliates and subsidiaries, vendors/agents, third-party advertising platforms, and potentially law enforcement. Vendors are contractually restricted, but advertising platforms use your data for targeted ad delivery. Data may also be shared during corporate transactions (mergers, asset sales).

### Account & Identity Data — Caution
A Microsoft account is required, collecting email, name, phone number, and user ID. This data is shared across Microsoft's entire ecosystem (Office, OneDrive, Outlook, etc.). If you use a work/school account, your organization can access your data.

### Behavioural & Ad Tracking — Risky
Microsoft tracks product interactions, browsing behavior, and interests across its properties. It builds advertising profiles using data from "interactions and first-party and third-party properties." The MUID cookie and advertising ID enable cross-device tracking. While you can opt out of personalized ads, data collection for other purposes continues.

### Children's Data — Caution
The App Store rates Word as 4+ (suitable for all ages), but a Microsoft account requires users to be 13+. This inconsistency means younger users could access the app without proper age verification. Microsoft provides parental controls but relies on account creation honesty.

### Network & Internet Activity — Caution
IP addresses are collected for security and location inference. On non-Windows devices, push notification data may be sent to third-party notification providers.

### Device Info & Fingerprinting — Risky
Microsoft collects device identifiers, hardware/software info, product keys, and creates unique tracking IDs. The MUID cookie and advertising ID track you across devices. Diagnostic data includes which apps are running, error reports, and performance data — all linked to a unique ID.

### Health & Biometric Data — Caution
On iOS, Word may use Face ID for app lock, but biometric data stays on-device in the Secure Enclave. Microsoft's broader statement mentions collecting biometrics (Windows Hello) with consent, but this doesn't apply to Word on iOS.

### Financial & Payment Data — Caution
In-app purchases for Microsoft 365 subscriptions go through Apple's payment system, so Apple handles card details. However, Microsoft still collects subscription and licensing data. Microsoft's privacy statement mentions collecting "payment instrument numbers and security codes" more broadly.

### Data Deletion & User Rights — Caution
Microsoft provides a privacy dashboard for managing data and account deletion, but: there's a 60-day waiting period, some data is retained for legal/business purposes, and not all data types can be deleted through the dashboard. Data export is available for some services.

### Policy Change Notification — Risky
Microsoft can change its privacy policy at any time. Users are "encouraged to review it periodically." There is no requirement for advance notice or active re-consent — continued use after changes constitutes acceptance. The only option if you disagree is to stop using the services and close your account.

---

## Score Calculation

| Category | Risk | Max Deduction | Rate | Deduction |
|----------|------|---------------|------|-----------|
| Data Sharing with 3rd Parties | Risky | 30 | 65% | 19.5 |
| Behavioural & Ad Tracking | Risky | 25 | 65% | 16.25 |
| Contacts & Phonebook | Caution | 20 | 30% | 6.0 |
| Account & Identity Data | Caution | 15 | 30% | 4.5 |
| Device Info & Fingerprinting | Risky | 15 | 65% | 9.75 |
| Location & GPS | Caution | 15 | 30% | 4.5 |
| Camera & Microphone | Safe | 15 | 0% | 0 |
| Health & Biometric Data | Caution | 15 | 30% | 4.5 |
| Financial & Payment Data | Caution | 15 | 30% | 4.5 |
| Children's Data | Caution | 10 | 30% | 3.0 |
| Storage & File Access | Caution | 10 | 30% | 3.0 |
| Data Deletion & User Rights | Caution | 10 | 30% | 3.0 |
| Network & Internet Activity | Caution | 5 | 30% | 1.5 |
| Policy Change Notification | Risky | 5 | 65% | 3.25 |

**Total Deductions:** 83.25
**Final Score:** round((1 - 83.25/205) × 100) = round(59.39) = **59**
**Grade:** C (Caution)