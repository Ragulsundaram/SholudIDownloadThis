# Amazon India Shop, Pay, miniTV — Privacy Policy Re-Analysis

**Reviewed:** 2026-05-16
**Policy:** https://amazon.in/privacy
**Terms:** (not provided)
**Platform:** iOS
**Score:** 58/100 (Grade C, Caution)

---

## Summary

Amazon India's privacy policy reveals broad data collection across categories. It allows contact uploads for certain features, logs your full browsing clickstream including page interactions, and uses advertising identifiers for interest-based ads.

Key concerns: extensive URL clickstream logging, device identifiers used for advertising, contacts can be uploaded, and data is shared with sellers, advertisers, and service providers.

Key positives: Amazon explicitly commits to not selling personal information, uses encryption and PCI DSS standards, promises not to materially weaken privacy protections for past data without consent, and allows advertising preference adjustments.

The policy is silent on health/biometric data and on broad storage/file access beyond user-initiated uploads, so these categories are marked as unknown.

---

## Methodology

This re-analysis was conducted with strict legal-safe rules: every claim is backed by a direct verbatim quote, cautious language is used, and categories not addressed by the policy are marked as unknown with needs_review.

### Data Collection Observed

- **Personal:** Name, address, phone numbers, age, location, IP address, government IDs (PAN)
- **Contacts:** Upload your contacts, including access to mobile device contacts for certain services
- **Files:** Upload or stream images, videos, or audio; no explicit mention of broad file metadata access
- **Location:** Automatically collected; device or computer location
- **Device:** Device log files, configurations, Wi-Fi credentials, advertising identifiers, cookies
- **Behavioral:** Full URL clickstream, page interactions (scrolling, clicks, mouse-overs), interest-based ads
- **Financial:** Payment card data processed under PCI DSS
- **Other:** Voice recordings via Alexa, content interaction information

### Notable Excerpts

> "We are not in the business of selling our customers' personal information to others."

> "upload your contacts, including access to mobile device contacts for certain services"

> "the full Uniform Resource Locator (URL) clickstream to, through, and from our websites, including date and time... page interaction information (such as scrolling, clicks, and mouse-overs)"

> "we use an advertising identifier like a cookie, a device identifier, or a code derived from applying irreversible cryptography to other information like an email address"

> "We follow the Payment Card Industry Data Security Standard (PCI DSS) when handling payment card data."

> "We stand behind the promises we make, however, and will never materially change our policies and practices to make them less protective of customer information collected in the past without the consent of affected customers."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | caution | 15 | 0.30 | 4.5 |
| Location & GPS | caution | 15 | 0.30 | 4.5 |
| Contacts & Phonebook | risky | 20 | 0.65 | 13.0 |
| Storage & File Access | unknown | 10 | 0.00 | 0 |
| Data Sharing with 3rd Parties | risky | 30 | 0.65 | 19.5 |
| Account & Identity | caution | 15 | 0.30 | 4.5 |
| Behavioural & Ad Tracking | risky | 25 | 0.65 | 16.25 |
| Children's Data | caution | 10 | 0.30 | 3.0 |
| Network & Internet Activity | risky | 5 | 0.65 | 3.25 |
| Device Fingerprinting | risky | 15 | 0.65 | 9.75 |
| Health & Biometric | unknown | 15 | 0.00 | 0 |
| Financial & Payment | caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3.0 |
| Policy Change Notification | safe | 5 | 0.00 | 0 |

**Total deductions:** 85.75
**Final score:** round((1 − 85.75/205) × 100) = 58
**Grade:** C
**Risk:** Caution

---

## Strict Rules Applied

- **Storage & File Access** marked as **unknown** because the policy mentions user-initiated uploads but does not explicitly describe broad file metadata access or storage permissions. The previous analysis incorrectly used a Blinkit quote here; that has been removed.
- **Health & Biometric** marked as **unknown** because the policy does not address this category.
- **Interest-based ads** red flag severity downgraded from high to **medium** under the rule that high-severity flags require explicit, unambiguous backing.
- All plain-english summaries use cautious language and are backed by verbatim quotes.
