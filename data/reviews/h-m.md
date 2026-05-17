# H&M — Privacy Review

**Analyzed:** 2026-05-18  
**Policy URL:** https://www2.hm.com/en_gb/customer-service/legal-and-privacy/privacy-link.html  
**Scraper Status:** **BLOCKED** — The H&M website returned "Access Denied" for all automated requests. Only cookie-banner text was captured.

---

## Summary Card

**App:** H&M  
**Overall Risk:** Risky  
**Score:** 45 / 100 (Grade D)

### Red Flags
- **Personalized ads via third-party tracking:** The cookie banner says the app uses tracking technologies from third-party publishers to deliver personalized advertising on websites, apps, newsletters, and social media.
- **Data shared with advertising partners:** The cookie banner explicitly says your information is shared with third parties such as advertising partners, and in some cases your data may be processed outside the EU/EEA.
- **Privacy policy could not be fully retrieved:** The H&M website blocked the scraper, so the actual privacy policy text is missing. Most privacy categories had to be marked unknown, which means there are large gaps in our understanding of how this app handles your data.

### Green Flags
- **You can block optional tracking cookies:** The cookie banner gives you an option to choose "Only required cookies" instead of accepting all tracking and marketing cookies, which limits some data collection.
- **Cookies stored only as long as needed:** The cookie banner states that cookies and data are stored only for as long as needed to fulfill their purpose.

### Verdict
The available cookie disclosures confirm that H&M uses third-party tracking for personalized advertising and shares data with advertising partners, potentially outside the EU. However, the full privacy policy could not be retrieved, so most categories remain unverified. We recommend reviewing the privacy policy manually on H&M's website before deciding whether to use this app.

---

## Category Details

### Camera & Microphone
- **Risk:** Unknown
- **Plain English:** The scraped policy text did not mention camera or microphone use. This category is unknown because the scraper could not retrieve the full privacy policy.
- **Concerns:** Scraper blocked; full policy unavailable

### Location & GPS
- **Risk:** Unknown
- **Plain English:** The scraped policy text did not mention location or GPS access. This category is unknown because the scraper could not retrieve the full privacy policy.
- **Concerns:** Scraper blocked; full policy unavailable

### Contacts & Phonebook
- **Risk:** Unknown
- **Plain English:** The scraped policy text did not mention contacts or phonebook access. This category is unknown because the scraper could not retrieve the full privacy policy.
- **Concerns:** Scraper blocked; full policy unavailable

### Storage & File Access
- **Risk:** Unknown
- **Plain English:** The scraped policy text did not mention storage or file access. This category is unknown because the scraper could not retrieve the full privacy policy.
- **Concerns:** Scraper blocked; full policy unavailable

### Data Sharing with 3rd Parties
- **Risk:** Risky
- **Plain English:** The cookie banner says the app shares your information with third parties such as advertising partners, and your data may be processed outside the EU/EEA.
- **Policy Excerpt:** "By clicking 'Accept all cookies and services', you accept all cookies and agree that we share information with third parties, such as our advertising partners. This may in some cases mean your data will be processed outside the EU/EEA."
- **Concerns:** Shared with advertising partners; Data transferred outside EU/EEA

### Account & Identity Data
- **Risk:** Unknown
- **Plain English:** The scraped policy text did not mention account or identity data practices. This category is unknown because the scraper could not retrieve the full privacy policy.
- **Concerns:** Scraper blocked; full policy unavailable

### Behavioural & Ad Tracking
- **Risk:** Risky
- **Plain English:** The cookie banner says the app uses tracking technologies from third parties to deliver personalized advertising on websites, apps, newsletters, and social media.
- **Policy Excerpt:** "We use first- and third-party cookies including other tracking technologies from third party publishers to give you the full functionality of our website, customize your user experience, perform analytics and deliver personalized advertising on our websites, apps and newsletters across internet and via social media platforms."
- **Concerns:** Third-party tracking technologies used; Personalized advertising across platforms

### Children's Data Handling
- **Risk:** Unknown
- **Plain English:** The scraped policy text did not mention children's data protections. This category is unknown because the scraper could not retrieve the full privacy policy.
- **Concerns:** Scraper blocked; full policy unavailable

### Network & Internet Activity
- **Risk:** Risky
- **Plain English:** The cookie banner says the app collects browsing patterns and device information for analytics and personalized advertising.
- **Policy Excerpt:** "For that purpose, we collect information about user, browsing patterns and device."
- **Concerns:** Browsing patterns collected for profiling; Device info linked to analytics and ads

### Device Info & Fingerprinting
- **Risk:** Risky
- **Plain English:** The cookie banner says the app collects device information and browsing patterns using tracking technologies for advertising and analytics.
- **Policy Excerpt:** "For that purpose, we collect information about user, browsing patterns and device."
- **Concerns:** Device data collected for ad targeting; Tracking technologies used

### Health & Biometric Data
- **Risk:** Unknown
- **Plain English:** The scraped policy text did not mention health or biometric data. This category is unknown because the scraper could not retrieve the full privacy policy.
- **Concerns:** Scraper blocked; full policy unavailable

### Financial & Payment Data
- **Risk:** Unknown
- **Plain English:** The scraped policy text did not mention financial or payment data practices. This category is unknown because the scraper could not retrieve the full privacy policy.
- **Concerns:** Scraper blocked; full policy unavailable

### Data Deletion & User Rights
- **Risk:** Unknown
- **Plain English:** The scraped policy text did not mention data deletion or user rights. This category is unknown because the scraper could not retrieve the full privacy policy.
- **Concerns:** Scraper blocked; full policy unavailable

### Policy Change Notification
- **Risk:** Unknown
- **Plain English:** The scraped policy text did not mention how users are notified of policy changes. This category is unknown because the scraper could not retrieve the full privacy policy.
- **Concerns:** Scraper blocked; full policy unavailable

---

## Scoring Breakdown

| Category | Max | Risk | Rate | Deduction |
|----------|-----|------|------|-----------|
| Data Sharing with 3rd Parties | 30 | Risky | 65% | 19.5 |
| Behavioural & Ad Tracking | 25 | Risky | 65% | 16.25 |
| Network & Internet Activity | 5 | Risky | 65% | 3.25 |
| Device Info & Fingerprinting | 15 | Risky | 65% | 9.75 |
| Camera & Microphone | 15 | Unknown | 50% | 7.5 |
| Location & GPS | 15 | Unknown | 50% | 7.5 |
| Contacts & Phonebook | 20 | Unknown | 50% | 10 |
| Storage & File Access | 10 | Unknown | 50% | 5 |
| Account & Identity Data | 15 | Unknown | 50% | 7.5 |
| Children's Data Handling | 10 | Unknown | 50% | 5 |
| Health & Biometric Data | 15 | Unknown | 50% | 7.5 |
| Financial & Payment Data | 15 | Unknown | 50% | 7.5 |
| Data Deletion & User Rights | 10 | Unknown | 50% | 5 |
| Policy Change Notification | 5 | Unknown | 50% | 2.5 |

**Total Deductions:** 113.75  
**Final Score:** 45 / 100 (Grade D)

---

## Review Notes

- **Scraper blocked:** The H&M website uses Akamai/EdgeSuite bot protection and returned "Access Denied" for all automated requests across multiple regions (GB, US, IN) and tools (curl, Playwright, WebFetch).
- **Minimal evidence:** Only cookie-banner UI text was captured. It contains explicit disclosures about third-party cookies, personalized advertising, data sharing with advertising partners, and processing outside the EU/EEA.
- **High uncertainty:** 10 of 14 categories are marked `unknown` due to missing policy text. The low score reflects this uncertainty, not necessarily malicious practices.
- **Recommendation:** Before publishing this entry, a human reviewer should manually visit the H&M privacy policy page and fill in the unknown categories.
