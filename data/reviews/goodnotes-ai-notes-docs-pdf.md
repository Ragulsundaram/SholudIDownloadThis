# Privacy Review: Goodnotes: AI Notes, Docs, PDF

**Developer:** Goodnotes Limited
**Analyzed:** 2026-05-18
**Policy URL:** https://goodnotes.com/privacy-policy/
**Policy Last Updated:** March 2026

---

## Summary Card

**App:** Goodnotes: AI Notes, Docs, PDF
**Overall Risk:** Caution
**Score:** 66 / 100
**Grade:** C

### Red Flags
- **Data shared with many third-party companies.** Goodnotes shares your data with more than 20 outside companies for analytics, advertising, cloud storage, customer support, and AI features. Some of these companies may be located in countries with weaker privacy laws.
- **Targeted ads based on your activity.** Goodnotes tracks how you use the app and website to show you personalized ads. They also share your data with Google to find people similar to you for marketing purposes. They claim a legal basis of legitimate interests for the actual ad targeting, which means you may not have a clear way to fully opt out.
- **AI features can access your notebook content.** If you use Goodnotes AI, your notes, conversation history, and inputs may be shared with AI providers like Amazon and Microsoft to train and improve their models. You must explicitly opt in, but once you do, your content leaves the app.
- **Your location is tracked automatically.** Goodnotes automatically collects your device's location and IP address, which can be used to figure out roughly where you are. This is used for analytics and marketing, not for the core note-taking features.
- **Policy can change without clear re-consent.** Goodnotes can change its privacy policy at any time. They say they will try to notify you, but they do not guarantee you will get a clear alert or need to agree again before the changes apply.

### Green Flags
- **They promise not to sell your notes.** Goodnotes explicitly says they never sell or rent your data or notebook content to third parties. This is a strong and clear commitment.
- **Your notes stay on your device by default.** Unless you back up to their cloud or iCloud, your notes and documents are stored only on your device and not on Goodnotes servers. They also say they will not access your notebooks without your permission.
- **You have real data rights.** They give you GDPR rights like accessing, deleting, and exporting your data. Some of these actions can be done directly in the app without needing to email them.
- **No sensitive health or biometric data collected.** Goodnotes specifically says they do not collect special category data like health information or biometric data from your handwriting. They also do not create individual profiles from your handwriting style.

### Verdict
Goodnotes makes a clear commitment never to sell your notebook content and keeps your notes on your device by default, which is excellent. However, the app shares user data with over 20 third-party companies for analytics, marketing, cloud infrastructure, and AI services. It also uses cookies and Google Customer Match for targeted advertising, claiming legitimate interest for ad personalization even beyond cookie consent. The AI features require explicit opt-in but then share your notes and conversations with external AI providers. If you only use basic note-taking without cloud backup or AI features, your privacy risk is lower. But with all features enabled, the data sharing footprint is large.

---

## Detailed Analysis

### Data Collection Overview
Goodnotes collects:
- **Basic personal data:** name, email, country, language at registration.
- **Usage data:** IP address, device type, unique device identifiers, storage usage, data usage, time zone, location, activity data.
- **Diagnostic data:** for support, potentially including document/folder titles.
- **Customer support data:** enquiries, chat logs, tickets.
- **AI feature data:** with explicit opt-in consent, includes inputs, outputs, conversation histories, notebook content.
- **Marketing data:** engagement tracking, cookie data, advertising identifiers.

### Third-Party Disclosures
Goodnotes discloses data to:
- **Analytics:** Google Analytics for Firebase, Mixpanel, Amplitude, Datadog, Statsig, Snowflake, Hex.
- **Cloud/Infrastructure:** Amazon Web Services (Goodnotes Cloud), StreamNative.
- **Marketing/Advertising:** Google (Customer Match), HubSpot, Braze, Mailchimp.
- **AI Services:** Amazon Web Services, Microsoft (externally trained AI models), Amazon Bedrock (Claude).
- **Customer Support:** Zendesk, Zapier, UserVoice.
- **Payments:** Paddle.
- **User Research:** Sprig, UserTesting, Google Forms, Lyssna.

### Key Concerns
1. **Legitimate Interest for Advertising:** Despite collecting opt-in consent for targeted advertising cookies, Goodnotes explicitly states they rely on "legitimate interests" for the actual personalization and targeting advertising activities. This creates a potential gap where users may not be able to fully opt out of ad profiling.

2. **AI Data Sharing:** Goodnotes AI features, while requiring explicit opt-in consent, share notebook content and conversation data with third-party AI providers (AWS, Microsoft) for training and improvement. This means personal notes could be used to train external AI models.

3. **Extensive Service Provider Ecosystem:** With over 20 third-party services receiving data, the attack surface and potential for data mishandling increases significantly.

4. **International Data Transfers:** Data may be transferred outside the UK/EEA to countries with different privacy protections. Goodnotes mentions using model contractual clauses and adequacy decisions, but the breadth of third parties means data could end up in many jurisdictions.

### Positive Notes
1. **Explicit No-Sell Commitment:** "We never sell or rent your data or notebook content to third parties" is a strong, clear statement.
2. **Local-First Storage:** Notes are stored on device by default. Goodnotes does not store note content on its own servers.
3. **No Biometric Processing:** Explicit commitment not to create individual profiles from handwriting data.
4. **GDPR Compliance:** Comprehensive rights disclosure and some in-app rights exercise.

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Data Sharing with 3rd Parties | Risky | 30 | 65% | 19.50 |
| Behavioural & Ad Tracking | Risky | 25 | 65% | 16.25 |
| Camera & Microphone | Caution | 15 | 30% | 4.50 |
| Location & GPS | Caution | 15 | 30% | 4.50 |
| Account & Identity Data | Caution | 15 | 30% | 4.50 |
| Device Info & Fingerprinting | Caution | 15 | 30% | 4.50 |
| Financial & Payment Data | Caution | 15 | 30% | 4.50 |
| Storage & File Access | Caution | 10 | 30% | 3.00 |
| Children's Data Handling | Caution | 10 | 30% | 3.00 |
| Data Deletion & User Rights | Caution | 10 | 30% | 3.00 |
| Network & Internet Activity | Caution | 5 | 30% | 1.50 |
| Policy Change Notification | Caution | 5 | 30% | 1.50 |
| Contacts & Phonebook | Safe | 20 | 0% | 0.00 |
| Health & Biometric Data | Safe | 15 | 0% | 0.00 |

**Total Deductions:** 70.25
**Final Score:** 66 / 100
**Grade:** C
