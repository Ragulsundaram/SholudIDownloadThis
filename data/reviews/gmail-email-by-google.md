# Gmail - Email by Google — Privacy Review

**Reviewed:** 2026-05-16
**Policy:** https://policies.google.com/privacy
**Terms:** https://policies.google.com/terms
**Platform:** iOS
**Score:** 67/100 (Grade C, Caution)

---

## Summary

Gmail is Google's free email service that collects the content of all your emails, contacts, and attachments. While Google states it does not show personalised ads based on Gmail content, it does track your broader activity across Google services for advertising. Your emails may be scanned for spam, malware, and policy violations.

Key concern addressed in this review: the previous analysis claimed "Encryption in transit and at rest" as a green flag. The Google Privacy Policy text explicitly mentions "We use encryption to keep your data private while in transit" but does not mention "at rest" in the provided policy text. The green flag was corrected to "Encryption in transit" only. Additionally, the previous analysis overstated third-party data sharing; Google's policy explicitly limits personal-information sharing outside the company to consent, domain administrators, external processing, and legal reasons. Only non-personally identifiable information is shared with advertisers.

---

## Methodology

This review was conducted by analyzing the Google Privacy Policy, accessed via jina.ai text extraction on 2026-05-16. The privacy policy was effective April 2, 2026. All claims are backed by direct verbatim quotes. Cautious language ("may," "states that") is used where the policy leaves room for interpretation.

### Data Collection Observed

- **Account:** Name, password, phone number, payment information
- **Content:** Emails you write and receive, photos, videos, docs, comments
- **Device:** Unique identifiers, browser type/settings, device type/settings, OS, mobile network info (carrier, phone number), app version
- **Activity:** Search terms, videos watched, ad interactions, purchase activity, people you communicate with, activity on third-party sites/apps using Google services, Chrome browsing history (if synced)
- **Location:** GPS, IP address, Wi-Fi access points, cell towers, Bluetooth devices
- **Calls/Messages:** Phone numbers, sender/recipient email addresses, time/date, duration, routing info

### Notable Excerpts

> "We use automated systems that analyze your content to provide you with things like customized search results, personalized ads, or other features tailored to how you use our services. And we analyze your content to help us detect abuse such as spam, malware, and illegal content."

> "Depending on your settings, we may also show you personalized ads based on your interests and activity across Google services."

> "We don't show you personalized ads based on your content from Drive, Gmail, or Photos."

> "We do not share your personal information with companies, organizations, or individuals outside of Google except in the following cases: With your consent; With domain administrators; For external processing; For legal reasons."

> "We may share non-personally identifiable information publicly and with our partners — like publishers, advertisers, developers, or rights holders. We also allow specific partners to collect information from your browser or device for advertising and measurement purposes using their own cookies or similar technologies."

> "We use encryption to keep your data private while in transit."

> "You can export a copy of content in your Google Account if you want to back it up or use it with a service outside of Google. To delete your information, you can: Delete your content from specific Google services; Delete specific Google products; Delete your entire Google Account."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | Safe | 15 | 0.00 | 0 |
| Location & GPS | Safe | 15 | 0.00 | 0 |
| Contacts & Phonebook | Caution | 20 | 0.30 | 6.0 |
| Storage & File Access | Caution | 10 | 0.30 | 3.0 |
| Data Sharing with 3rd Parties | Risky | 30 | 0.50 | 15.0 |
| Account & Identity Data | Caution | 15 | 0.30 | 4.5 |
| Behavioural & Ad Tracking | Risky | 25 | 0.65 | 16.25 |
| Children's Data Handling | Safe | 10 | 0.00 | 0 |
| Network & Internet Activity | Risky | 5 | 0.65 | 3.25 |
| Device Info & Fingerprinting | Risky | 15 | 0.65 | 9.75 |
| Health & Biometric Data | Safe | 15 | 0.00 | 0 |
| Financial & Payment Data | Caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | Caution | 10 | 0.30 | 3.0 |
| Policy Change Notification | Caution | 5 | 0.30 | 1.5 |

**Total Deductions:** 66.75
**Final Score:** round((1 - 66.75/205) * 100) = **67**
**Grade:** C

---

## Changes from Previous Review

- Reduced `data_sharing_third_parties` deduction from 19.5 to 15.0 (rate 0.65 -> 0.50) because Google's personal-information sharing outside the company is explicitly limited, and only non-personally identifiable information is shared with advertisers.
- Corrected `green_encryption` title from "Encryption in transit and at rest" to "Encryption in transit" because the provided privacy policy text does not explicitly mention encryption at rest.
- Updated red flag language to use cautious "may" and direct quotes rather than inferential language (e.g., changed "Google scans your emails" to "Google's automated systems analyze your emails").
- Score changed from 65 to 67. Grade remains C.
- Updated review date and analyst metadata.
