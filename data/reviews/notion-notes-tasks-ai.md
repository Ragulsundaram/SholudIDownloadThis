# Privacy Review: Notion: Notes, Tasks, AI

**App:** Notion: Notes, Tasks, AI  
**Developer:** Notion Labs, Incorporated  
**Platform:** iOS  
**Analyzed:** 2026-05-18  
**Policy URL:** https://www.notion.so/Terms-and-Privacy-28ffdd083dc3473e9c2da6ec011b58ac

---

## Summary Card

**Overall Risk:** Caution  
**Score:** 74/100 (Grade B)  
**Recommendation:** Recommended with awareness

### Red Flags
- **AI features send content to third parties** — When you use Notion AI, your content is sent to companies like OpenAI and Anthropic to generate responses. While they don't train models on your data, your information leaves Notion's servers.
- **Usage data collected and linked to you** — Notion collects usage data that's linked to your identity, including how you interact with the app and workspace metadata.
- **30-day recovery window for deleted content** — When you delete something, it stays recoverable for 30 days before being permanently removed.

### Green Flags
- **You own your data** — Notion explicitly states that you own all content you create or upload. They act only as a processor, not an owner, of your data.
- **Your data won't train AI models** — Notion contractually prohibits AI providers from using your content to train or improve their machine learning models.
- **SOC 2 and ISO 27001 certified** — Notion has passed independent security audits and maintains industry-recognized security certifications.
- **Easy data export available** — You can export your workspace data in multiple formats including PDF, Markdown, and HTML whenever you want.
- **Strong encryption in transit** — Your data is protected with TLS 1.2 or higher when traveling between your device and Notion's servers.

### Verdict
Notion offers robust privacy protections including user data ownership, encryption, and compliance certifications. However, AI features require sending content to subprocessors (OpenAI, Anthropic), and some analytics data collection occurs. The app is recommended for most users, but be aware that AI features share your content with third parties. Consider whether you need AI features or can use Notion's core note-taking and organization tools without them.

---

## Category Breakdown

### Camera & Microphone — Safe
- **Access:** On-demand only
- **Usage:** Camera and microphone are only used when you actively choose to upload photos, scan documents, or record audio notes.
- **Concerns:** None

### Location & GPS — Safe
- **Access:** Not collected
- **Usage:** Notion does not appear to collect or use your precise location data.
- **Concerns:** None

### Contacts & Phonebook — Safe
- **Access:** Not collected
- **Usage:** Notion does not request access to your contacts or phonebook.
- **Concerns:** None

### Storage & File Access — Caution
- **Access:** On-demand, user-initiated
- **Usage:** You can choose to upload files to your workspace. Notion stores these files on their servers to sync across devices.
- **Concerns:** Files stored on third-party servers

### Data Sharing with 3rd Parties — Risky
- **Access:** On-demand (for AI features)
- **Usage:** When you use AI features, your content is sent to OpenAI and Anthropic. Regular data is shared with subprocessors under strict contracts.
- **Concerns:** Content sent to AI providers, subprocessors involved in service delivery
- **Policy Excerpt:** "Notion AI uses subprocessors including OpenAI and Anthropic. Data shared only when necessary for AI features."

### Account & Identity Data — Caution
- **Access:** Required for service
- **Usage:** Notion collects your name, email, and account details to provide the service.
- **Policy Excerpt:** "Account Information includes names, usernames, passwords, phone numbers, email addresses, billing information, and workspace metadata."
- **Concerns:** Workspace metadata collected

### Behavioural & Ad Tracking — Caution
- **Access:** Continuous
- **Usage:** Notion collects usage data and analytics to understand how people use the app. They don't show ads or sell data to advertisers.
- **Policy Excerpt:** "Usage data collected and linked to identity. Used for analytics and product improvement, not advertising."
- **Concerns:** Usage data linked to identity

### Children's Data Handling — Caution
- **Access:** N/A
- **Usage:** Notion is intended for users 13 and older.
- **Concerns:** No detailed COPPA compliance measures stated

### Network & Internet Activity — Caution
- **Access:** Continuous
- **Usage:** Notion logs IP addresses and network activity for security and service operation.
- **Policy Excerpt:** "IP addresses, browser type, device info, and log files collected for security and analytics."
- **Concerns:** IP addresses logged

### Device Info & Fingerprinting — Caution
- **Access:** On-demand
- **Usage:** Notion collects basic device information like browser type and device type for compatibility.
- **Concerns:** None significant

### Health & Biometric Data — Safe
- **Access:** Not collected
- **Usage:** Notion does not collect health or biometric data. Face ID/Touch ID handled locally by iOS.
- **Concerns:** None

### Financial & Payment Data — Caution
- **Access:** On-demand (if purchasing)
- **Usage:** Payment processing handled by third-party processors.
- **Concerns:** Billing information stored

### Data Deletion & User Rights — Caution
- **Access:** User-controlled
- **Usage:** You can export and delete your data. Deleted items recoverable for 30 days.
- **Concerns:** 30-day recovery window before permanent deletion

### Policy Change Notification — Caution
- **Access:** N/A
- **Usage:** Policy updates posted on website.
- **Concerns:** No explicit advance notification method specified

---

## Scoring Calculation

| Category | Risk Level | Max Deduction | Rate | Deduction |
|----------|------------|---------------|------|-----------|
| Data Sharing with 3rd Parties | Risky | 30 | 65% | 19.5 |
| Behavioural & Ad Tracking | Caution | 25 | 30% | 7.5 |
| Account & Identity Data | Caution | 15 | 30% | 4.5 |
| Device Info & Fingerprinting | Caution | 15 | 30% | 4.5 |
| Financial & Payment Data | Caution | 15 | 30% | 4.5 |
| Data Deletion & User Rights | Caution | 10 | 30% | 3.0 |
| Children's Data Handling | Caution | 10 | 30% | 3.0 |
| Storage & File Access | Caution | 10 | 30% | 3.0 |
| Network & Internet Activity | Caution | 5 | 30% | 1.5 |
| Policy Change Notification | Caution | 5 | 30% | 1.5 |

**Total Deductions:** 52.5  
**Final Score:** 74 (B Grade)  
**Calculation:** `round((1 - 52.5/205) × 100) = 74`

---

## Sources

- [Notion Help Center - Privacy Practices](https://www.notion.com/help/privacy)
- [Notion AI Security & Privacy Practices](https://notion.com/help/notion-ai-security-practices)
- [App Store Privacy Nutrition Labels](https://apps.apple.com/in/app/notion-notes-tasks-ai/id1232780281)
- Notion Terms and Privacy Policy (notion.so)

---

## Review Notes

This review was compiled from Notion's Help Center documentation, public security disclosures, and App Store privacy labels. Notion maintains strong security practices and clearly states user data ownership. The primary privacy consideration is the AI feature integration, which requires sending content to third-party LLM providers (OpenAI, Anthropic). Users who do not use AI features will have less data exposure.

Notion's enterprise plans offer additional privacy protections including zero-retention AI processing and advanced security features not available on personal/free plans.
