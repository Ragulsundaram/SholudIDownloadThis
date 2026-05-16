# Crunchyroll Privacy Review

**Date:** 2026-05-16  
**Policy URL:** https://www.crunchyroll.com/privacy  
**Analyst:** claude-kimi-k26  
**Method:** Strict legal-safe re-analysis

---

## Summary

Crunchyroll's privacy policy is a Sony Pictures Entertainment (SPE) joint policy covering all SPE content. Under strict legal-safe rules, the policy is silent on device camera/microphone access, contacts access, and file storage access, so these categories are marked as **unknown** with `needs_review: true`.

The policy explicitly states that SPE **does not sell Personal Information in exchange for money**, but it does share data for targeted advertising and analytics. It also explicitly mentions tracking user activity **across apps and/or devices** using Ad IDs.

## Key Verbatim Quotes

- "SPE does not sell Personal Information in exchange for money."
- "SPE shares Personal Information with third parties in compliance with the law to deliver targeted ads and other tailored communications to consumers."
- "Some use device identifiers or other identifiers such as 'Ad IDs' to associate app user activity to a particular app and to track user activity across apps and/or devices."
- "Geolocation data inferred from your IP address, mobile linking to Bluetooth beacons and wifi hotspots at our locations, and precise geolocation based on mobile device location."
- "Internet or other electronic network activity information, browsing history, search history, and information regarding your interactions with our websites, applications, or advertisements."
- "SPE does not knowingly collect Personal Information as defined by the U.S. Children's Privacy Protection Act ('COPPA') in a manner that is not permitted by COPPA."

## Category-by-Category Reasoning

| Category | Risk | Deduction | Reasoning |
|----------|------|-----------|-----------|
| Camera & Microphone | unknown | 0 | Policy silent on device camera/mic. |
| Location & GPS | caution | 4.5 | Explicit quote on geolocation from IP, Bluetooth, WiFi, and precise mobile location. |
| Contacts & Phonebook | unknown | 0 | Policy silent on contacts. |
| Storage & File Access | unknown | 0 | Policy silent on device file access. |
| Data Sharing with 3rd Parties | risky | 19.5 | Explicit sharing for targeted ads + Sony group sharing. No-sale-for-money is a mitigating factor. |
| Account & Identity | caution | 4.5 | Standard account data collection (name, email, financial info). |
| Behavioural & Ad Tracking | risky | 16.25 | Explicit browsing history, search history, interactions, cookies, Ad IDs tracking. |
| Children's Data | safe | 0 | Explicit COPPA compliance statement. |
| Network & Internet Activity | risky | 3.25 | Explicit IP, browsing history, search history, ad interaction collection. |
| Device Fingerprinting | risky | 9.75 | Explicit cross-app/device tracking via Ad IDs. |
| Health & Biometric | caution | 4.5 | Policy lists biometric information as a category it "may collect" for fraud prevention. Cautious language used because applicability to Crunchyroll specifically is not clearly stated. |
| Financial & Payment | caution | 4.5 | Explicit credit/debit card collection for subscriptions. |
| Data Deletion & User Rights | caution | 3.0 | Tools available; may retain as required by law. |
| Policy Change Notification | caution | 1.5 | Changes effective upon posting; continued use = consent. |

## Scoring

- **Total deductions:** 71.25
- **Final score:** 65 (Grade C)

## Red Flags

1. Extensive behavioral tracking (high) — supported by explicit quote on browsing/search/interaction history.
2. Shares data for targeted advertising (high) — supported by explicit quote on sharing for ads.
3. Tracks user activity across apps and devices (medium) — supported by explicit quote on Ad IDs and cross-app tracking.
4. Shares data with Sony group companies (medium) — supported by explicit quote on affiliate sharing.

## Green Flags

1. Does not sell Personal Information for money — directly quoted.
2. State privacy rights available — CCPA/opt-out mentioned.
3. COPPA compliant — directly quoted.

## Notes

- The previous analysis had a math error: total_deductions was listed as 75.75 but the actual sum of deductions was 71.25. This has been corrected.
- The "cross-app tracking" red flag is explicitly supported by the text, satisfying the strict rule.
