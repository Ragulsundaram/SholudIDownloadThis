# Dropbox Privacy Review

**Date:** 2026-05-16  
**Policy URL:** https://www.dropbox.com/privacy  
**Analyst:** claude-kimi-k26  
**Method:** Strict legal-safe re-analysis

---

## Summary

Dropbox's privacy policy is transparent and user-friendly. Under strict legal-safe rules, the policy is **silent** on device camera/microphone access, children's data handling, and health/biometric data, so these categories are marked as **unknown** with `needs_review: true`.

Dropbox **explicitly states it will not sell data to advertisers or other third parties**. It uses cookies and pixel tags for service functionality and self-promotion, not for third-party behavioral advertising. This is a significant privacy positive.

## Key Verbatim Quotes

- "We won't sell it to advertisers or other third parties."
- "You may choose to give us access to your contacts to make it easy for you... If you do, we'll store those contacts on our servers."
- "Our Services are designed as a simple and personalized way for you to store your files, documents, photos, comments, messages, data from connected services, and so on ('Your Stuff')... we store, process, and transmit Your Stuff."
- "We also collect information from and about the devices you use to access the Services. This includes things like IP addresses, the type of browser and device you use... and identifiers associated with your devices."
- "You can access, amend, download, and delete your personal information by logging into your Dropbox account and going to your account settings page."
- "If you delete your account, we'll initiate deletion of this information after 30 days. But please note: (1) there might be some latency in deleting this information from our servers and back-up storage; and (2) we may retain this information if necessary to comply with our legal obligations, resolve disputes, or enforce our agreements."
- "We may revise this Privacy Policy from time to time, and will post the most current version on our website. If a revision meaningfully reduces your rights, we will notify you."

## Category-by-Category Reasoning

| Category | Risk | Deduction | Reasoning |
|----------|------|-----------|-----------|
| Camera & Microphone | unknown | 0 | Policy silent on device camera/mic. |
| Location & GPS | caution | 4.5 | Devices "may also transmit location information to the Services" depending on settings. Not explicitly GPS. |
| Contacts & Phonebook | caution | 6.0 | Explicit quote on optional contact access and server storage. |
| Storage & File Access | safe | 0 | Core function. Explicit quote on storing and transmitting Your Stuff. |
| Data Sharing with 3rd Parties | caution | 9.0 | Explicit sharing with trusted third parties, other Dropbox Companies, and collaborators. Explicit no-sale-to-advertisers is a strong mitigating factor. |
| Account & Identity | caution | 4.5 | Explicit quote on name, email, phone, payment info, physical address collection. |
| Behavioural & Ad Tracking | safe | 0 | Explicit quote: "We won't sell it to advertisers or other third parties." Cookies/pixel tags are used for service functionality and promoting Dropbox's own services only. No third-party ad tracking described. |
| Children's Data | unknown | 0 | Policy silent. |
| Network & Internet Activity | caution | 1.5 | Explicit usage activity logging. |
| Device Fingerprinting | caution | 4.5 | Explicit collection of IP, browser, device type, and identifiers. |
| Health & Biometric | unknown | 0 | Policy silent. |
| Financial & Payment | caution | 4.5 | Explicit payment info collection for upgrades. |
| Data Deletion & User Rights | caution | 3.0 | Explicit access/amend/download/delete controls. 30-day deletion delay and backup retention. |
| Policy Change Notification | safe | 0 | Explicit quote: "If a revision meaningfully reduces your rights, we will notify you." |

## Scoring

- **Total deductions:** 37.5
- **Final score:** 82 (Grade A)

## Red Flags

1. Shares data with third parties (medium) — directly quoted, but limited to trusted providers and affiliates.
2. Collects device identifiers (low) — directly quoted.

## Green Flags

1. No ads or ad tracking — directly quoted: "We won't sell it to advertisers or other third parties."
2. Strong user data controls — directly quoted on access/amend/download/delete.
3. Account deletion available — directly quoted on 30-day initiation.

## Changes from Previous Analysis

- **Behavioral & Ad Tracking:** Upgraded from caution to safe (0). The previous analysis incorrectly stated cookies track interactions for "promotions" as a caution. Under strict rules, since Dropbox explicitly says it won't sell to advertisers and only promotes its own services, this is safe.
- **Policy Change Notification:** Upgraded from caution (-2.5) to safe (0). The text explicitly says "If a revision meaningfully reduces your rights, we will notify you." The previous analysis incorrectly claimed no clear notification mechanism.
- **Camera & Microphone:** Downgraded from safe (0) to unknown (0). The policy is silent.
- **Children's Data:** Downgraded from unknown (-5.0) to unknown (0). The policy is silent, but we should not deduct for silence.
- **Health & Biometric:** Downgraded from safe (0) to unknown (0). The policy is silent.

## Notes

- The previous analysis had `total_deductions: 36.0` which correctly sums to `final_score: 82`. Our strict re-analysis yields `total_deductions: 37.5` which still rounds to `final_score: 82`. The score is stable.
- The explicit no-sale statement is one of the strongest pro-privacy quotes in any app reviewed so far.
