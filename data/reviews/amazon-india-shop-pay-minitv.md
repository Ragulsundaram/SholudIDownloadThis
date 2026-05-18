# Amazon India Shop, Pay, miniTV — Privacy Policy Re-Analysis

**Reviewed:** 2026-05-18
**Policy:** https://amazon.in/privacy
**Terms:** https://www.amazon.in/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ
**Platform:** iOS
**Score:** 55/100 (Grade C, Caution)

---

## Summary

Amazon India's privacy policy reveals broad data collection across categories. It allows contact uploads for certain features, logs your full browsing clickstream including page interactions, and uses advertising identifiers for interest-based ads. It also collects health data for pharmacy services and file metadata for uploaded content.

Key concerns: extensive URL clickstream logging, device identifiers used for advertising, contacts can be uploaded, data shared with sellers and advertisers, and health data collected for pharmacy services.

Key positives: Amazon explicitly commits to not selling personal information, uses encryption and PCI DSS standards, promises not to materially weaken privacy protections for past data without consent, and allows advertising preference adjustments.

---

## Methodology

This re-analysis was conducted with strict rules: every claim is backed by a direct verbatim quote, cautious language is used, and categories are rated based on the explicit evidence in the policy.

### Data Collection Observed

- **Personal:** Name, address, phone numbers, age, location, IP address, government IDs (PAN)
- **Contacts:** Upload your contacts, including access to mobile device contacts for certain services
- **Files:** Upload or stream images, videos, or audio; file metadata (file name, dates, times, location of images) collected
- **Location:** Automatically collected; device or computer location
- **Device:** Device log files, configurations, Wi-Fi credentials (if you opt in to sync), advertising identifiers, cookies
- **Behavioral:** Full URL clickstream, page interactions (scrolling, clicks, mouse-overs), interest-based ads
- **Financial:** Payment card data processed under PCI DSS; credit history from credit bureaus for some customers
- **Health:** Medical or health related information collected when you set up an account or transact (Amazon Pharmacy)
- **Other:** Voice recordings via Alexa, content interaction information

### Notable Excerpts

> "We are not in the business of selling our customers' personal information to others."

> "upload your contacts, including access to mobile device contacts for certain services"

> "the full Uniform Resource Locator (URL) clickstream to, through, and from our websites, including date and time... page interaction information (such as scrolling, clicks, and mouse-overs)"

> "we use an advertising identifier like a cookie, a device identifier, or a code derived from applying irreversible cryptography to other information like an email address"

> "We follow the Payment Card Industry Data Security Standard (PCI DSS) when handling payment card data."

> "We stand behind the promises we make, however, and will never materially change our policies and practices to make them less protective of customer information collected in the past without the consent of affected customers."

> "We may collect personal data (such as email address, delivery address, name, phone number, credit card/debit card and other payment instrument details or medical or health related information) from you when you set up an account or transact with us"

> "information about uploaded images and files such as the file name, dates, times and location of your images"

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | caution | 15 | 0.30 | 4.5 |
| Location & GPS | caution | 15 | 0.30 | 4.5 |
| Contacts & Phonebook | risky | 20 | 0.65 | 13.0 |
| Storage & File Access | caution | 10 | 0.30 | 3.0 |
| Data Sharing with 3rd Parties | risky | 30 | 0.65 | 19.5 |
| Account & Identity | caution | 15 | 0.30 | 4.5 |
| Behavioural & Ad Tracking | risky | 25 | 0.65 | 16.25 |
| Children's Data | caution | 10 | 0.30 | 3.0 |
| Network & Internet Activity | risky | 5 | 0.65 | 3.25 |
| Device Fingerprinting | risky | 15 | 0.65 | 9.75 |
| Health & Biometric | caution | 15 | 0.30 | 4.5 |
| Financial & Payment | caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3.0 |
| Policy Change Notification | safe | 5 | 0.00 | 0 |

**Total deductions:** 93.25
**Final score:** round((1 − 93.25/205) × 100) = 55
**Grade:** C
**Risk:** Caution

---

## Summary Card

### Amazon India Shop, Pay, miniTV
- **Overall Risk:** Caution
- **Score:** 55/100 (Grade C)

**Red Flags:**
- **Your behavior may power interest-based ads.** Amazon uses your personal information to display interest-based ads and shares advertising identifiers with ad companies to measure ad performance.
- **Contacts can be uploaded for certain features.** Amazon states you can upload your contacts, including access to mobile device contacts, for certain services.
- **Device identifiers used for advertising.** Amazon collects device identifiers and advertising IDs to recognize your device and deliver ads.
- **Full browsing clickstream is logged.** Amazon collects the full URL clickstream of websites you visit, along with page interaction details such as scrolling, clicks, and mouse-overs.
- **Data shared with sellers, advertisers, and service providers.** Amazon shares your data with third-party sellers, service providers, and other companies for fraud protection and credit risk reduction. It also shares advertising identifiers with ad companies.
- **Health data collected for pharmacy services.** Amazon may collect medical or health related information when you set up an account or transact, which includes Amazon Pharmacy services.

**Green Flags:**
- **Explicit no-sale commitment.** Amazon explicitly states that it is not in the business of selling customers' personal information to others.
- **Encryption and PCI DSS compliance.** Amazon uses encryption protocols to protect your information during transmission and follows PCI DSS when handling payment card data.
- **Material policy changes need consent.** Amazon promises it will never materially change its policies to make them less protective of customer information collected in the past without the consent of affected customers.
- **Advertising preferences can be adjusted.** You can adjust your advertising preferences and opt out of some interest-based ads through Amazon's Advertising Preferences page.

**Verdict:** Amazon India collects extensive data including your contacts, browsing habits, and health information for pharmacy services, but explicitly states it does not sell your personal information. If you are concerned about behavioral tracking, contact uploads, and broad device fingerprinting for ads, consider whether the convenience of Amazon's ecosystem is worth the data trade-off.
