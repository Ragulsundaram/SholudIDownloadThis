# Messenger — Privacy Review

**Analyzed:** 2026-06-01  
**Policy URL:** https://www.facebook.com/about/privacy/  
**Terms URL:** (not specified in policy)  
**Policy Last Updated:** 2025-12-16  
**Needs Review:** No  

---

## Summary Card

**App:** Messenger  
**Developer:** Meta Platforms, Inc.  
**Overall Risk:** Dangerous  
**Score:** 29 / 100 (Grade F)

### Red Flags
- **Messages scanned for ads and AI training.** Unless you turn on end-to-end encryption for every chat, Meta can read your message content and uses it for AI training, ad personalization, and safety review.
- **Tracks your activity across apps and websites.** Meta receives data about what you do on other apps and sites through its pixels, social plugins, and business tools — even if you don't have a Meta account.
- **Follows you with ads across the internet.** Through Meta Audience Network, your Messenger activity is used to show you personalized ads on thousands of third-party apps and websites.
- **Shares your data with hundreds of partners.** Meta shares information with advertisers, analytics firms, measurement vendors, marketing vendors, external researchers, AI integrations, service providers, and integrated partners.
- **Monitors what your device is doing in real time.** Meta collects whether the app is in the foreground, if your mouse is moving, your exact device model, operating system, network details, and unique identifiers.
- **Uploads your entire phonebook.** When you sync contacts, Meta copies and stores your full address book to suggest friends and build connection maps.
- **Scans your camera roll.** Messenger can access your full photo library, and Meta analyzes the content and metadata of images you share.
- **Collects sensitive personal information.** Meta asks for and stores information with special legal protections, including religious views, sexual orientation, political opinions, health details, and racial or ethnic origin.
- **Weak protections for young users.** Rated 12+ with the same extensive tracking applied to teenagers as adults.
- **Keeps data indefinitely.** Broad legal, safety, and integrity exceptions allow Meta to retain information for extended periods even after account deletion.

### Green Flags
- **End-to-end encryption available for some chats.** You can enable encryption for individual chats, meaning only you and the recipient can read the messages.
- **Disappearing messages in encrypted chats.** Encrypted conversations support self-destructing messages.
- **Edit and unsend messages.** You can edit a message for up to 15 minutes after sending, or remove it entirely.

### Verdict
Messenger is a widely used messaging app, but it operates within Meta's all-encompassing surveillance ecosystem. Every message, photo, call, contact, and interaction is collected, analyzed, and shared across Meta's products and with a vast network of advertisers and partners. The default mode does not protect message content from Meta's review systems. If privacy matters to you, use Signal or another end-to-end encrypted alternative instead.

---

## Scoring Breakdown

| Category | Risk | Max Deduction | Rate | Deduction |
|----------|------|---------------|------|-----------|
| Camera & Microphone | Risky | 15 | 65% | 9.75 |
| Location & GPS | Risky | 15 | 65% | 9.75 |
| Contacts & Phonebook | Risky | 20 | 65% | 13.00 |
| Storage & File Access | Risky | 10 | 65% | 6.50 |
| Data Sharing with 3rd Parties | Dangerous | 30 | 100% | 30.00 |
| Account & Identity Data | Risky | 15 | 65% | 9.75 |
| Behavioural & Ad Tracking | Dangerous | 25 | 100% | 25.00 |
| Children's Data Handling | Risky | 10 | 65% | 6.50 |
| Network & Internet Activity | Risky | 5 | 65% | 3.25 |
| Device Info & Fingerprinting | Risky | 15 | 65% | 9.75 |
| Health & Biometric Data | Caution | 15 | 30% | 4.50 |
| Financial & Payment Data | Risky | 15 | 65% | 9.75 |
| Data Deletion & User Rights | Risky | 10 | 65% | 6.50 |
| Policy Change Notification | Caution | 5 | 30% | 1.50 |

**Total Deductions:** 145.5  
**Final Score:** `round((1 - 145.5 / 205) * 100) = 29`  
**Grade:** F

---

## Review Notes

- This review is based on Meta's unified Privacy Policy (effective 16 December 2025), which applies to all Meta Products including Messenger, Facebook, Instagram, and AI at Meta.
- Messenger's end-to-end encryption is **opt-in per conversation**, not the default. Most users never enable it, leaving message content accessible to Meta's systems.
- Meta explicitly states it does **not sell information**, but the definition of "selling" is narrow. The sheer volume of data sharing with advertisers, partners, and integrated services achieves similar commercial outcomes.
- **Off-Meta activity tracking** is particularly concerning: Meta receives data about users who do not even have accounts, via pixels and social plugins embedded on other websites.
- The **device fingerprinting** is among the most invasive reviewed: monitoring foreground/background status, mouse movement, and extensive device signals goes far beyond standard diagnostics.
- **Children's data**: The 12+ rating is at odds with the extensive behavioral profiling and message scanning. No COPPA-like reduced data collection regime is described.
- **Data retention**: The policy explicitly states "In some instances and for specific reasons, we'll keep information for an extended period of time" — a deliberately vague carve-out.
- The policy's comprehensiveness is actually a positive in one sense: it is unusually transparent about how much data is collected. The problem is the volume and purposes, not the disclosure quality.
