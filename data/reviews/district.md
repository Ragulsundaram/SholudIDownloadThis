# District Privacy Review

**Date:** 2026-05-16  
**Policy URL:** https://www.district.in/policies/privacy  
**Analyst:** claude-kimi-k26  
**Method:** Strict legal-safe re-analysis

---

## Summary

District's privacy policy is a comprehensive Eternal (formerly Zomato) group policy. Under strict legal-safe rules, the policy is **silent** on whether the District mobile app accesses your camera or microphone. It does mention CCTV at physical event premises, but that is not the same as device camera access. Therefore Camera & Microphone is marked **unknown** with `needs_review: true`.

The policy explicitly describes extensive data collection, sharing across the Eternal group, third-party ad tracking, precise GPS collection linked to device ID, checking installed apps, and broad file access.

## Key Verbatim Quotes

- "If you use any of Eternal's applications such as Zomato, Blinkit, District or Hyperpure, we may collect information about the presence and/ or absence and/ or details pertaining to other applications on your mobile phone."
- "When you use one of our location-enabled services... we may collect and process information about your mobile device's GPS location (including the latitude, longitude or altitude of your mobile device)... we may associate location data with your device ID and other information we hold about you."
- "Our applications may also access metadata and other information associated with files stored on your mobile device. This may include, for example, photographs, audio and video clips, personal contacts and address book information."
- "If you choose to utilise any of our services which require uploading of your contact book, then we will collect and process such information as well, which could include the name and phone number of contacts stored on your device(s)."
- "We may disclose personal information that we collect or you provide... to our subsidiaries and affiliates... to contractors, suppliers, advertisers/service providers... to an actual or potential buyer or other successor in the event of a merger."
- "Third-party advertisers and partners accessible via our Services use their own tracking technologies (like cookies and device IDs) to collect data about your Service usage. They use this to personalize ads shown to you."
- "Unlike cookies, mobile device IDs cannot be deleted."
- "Copies and backups of your personal information may continue to remain in our backup storage used for recovery in case of contingencies, as well as for enforcing our legal rights and fraud / risk mitigation purposes."

## Category-by-Category Reasoning

| Category | Risk | Deduction | Reasoning |
|----------|------|-----------|-----------|
| Camera & Microphone | unknown | 0 | Policy mentions CCTV at physical premises but does NOT explicitly state the app accesses device camera/mic. Strict rule requires unknown. |
| Location & GPS | risky | 9.75 | Explicit quote on precise GPS including lat/long/altitude, linked to device ID. |
| Contacts & Phonebook | risky | 13.0 | Explicit quote on uploading contact book names and phone numbers. |
| Storage & File Access | risky | 6.5 | Explicit quote on accessing metadata and files (photos, audio, video, contacts) stored on device. |
| Data Sharing with 3rd Parties | risky | 19.5 | Explicit quotes on sharing with affiliates, advertisers, service providers, and successors in mergers. |
| Account & Identity | risky | 9.75 | Explicit extensive identity collection. Also explicitly reserves right to combine with third-party data. |
| Behavioural & Ad Tracking | risky | 16.25 | Explicit quotes on third-party cookies, device IDs, ad networks, and personalization. |
| Children's Data | caution | 3.0 | Explicit text on minors: services not directed at under-18s, but limited data may be collected with adult consent. |
| Network & Internet Activity | caution | 1.5 | Explicit logging of search queries, pages viewed, clicks, time spent, referral URLs. |
| Device Fingerprinting | risky | 9.75 | Explicit collection of IDFA, device IDs, and checking other installed apps. Also states device IDs cannot be deleted. |
| Health & Biometric | safe | 0 | Explicit opt-in only for health data via third-party platforms. No biometric collection mentioned for the app. |
| Financial & Payment | caution | 4.5 | Explicit credit/debit card sharing with payment processors. |
| Data Deletion & User Rights | caution | 3.0 | Deletion available but backups remain. |
| Policy Change Notification | caution | 1.5 | Continued use = acceptance. Material changes may be posted but no explicit re-consent. |

## Scoring

- **Total deductions:** 98.0
- **Final score:** 52 (Grade D)

## Red Flags

1. District may check what other apps are installed on your phone (high) — directly quoted.
2. Your precise GPS location is collected and linked to your profile (high) — directly quoted.
3. Your data is shared with advertisers and Eternal group companies (high) — directly quoted.
4. The app may access files and metadata on your device (high) — directly quoted.
5. CCTV at events may capture your image (medium) — directly quoted. Note: this refers to physical premises, not the app.

## Green Flags

1. You can request account deletion — directly quoted.
2. Payment processors are PCI compliant — directly quoted.
3. Health data only collected with explicit consent — directly quoted.

## Notes

- The Camera & Microphone category was previously rated "caution" based on the CCTV quote. Under strict rules, CCTV at physical premises is not the same as device camera/mic access. The policy does not explicitly state the app accesses your camera or microphone, so it must be marked unknown.
- The "checks what other apps are installed" finding is explicitly and unambiguously supported by the text.
- The "mobile device IDs cannot be deleted" quote is a notable user-rights limitation.
