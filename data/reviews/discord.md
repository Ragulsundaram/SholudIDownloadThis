# Discord Privacy Review

**Date:** 2026-05-16  
**Policy URL:** https://discord.com/privacy/  
**Analyst:** claude-kimi-k26  
**Method:** Strict legal-safe re-analysis

---

## Summary

Discord's privacy policy is detailed and transparent. Under strict legal-safe rules, the policy is **silent** on GPS location access, children's data handling, and health/biometric data, so these categories are marked as **unknown** with `needs_review: true`.

Discord **explicitly states it does not sell personal information**. It offers end-to-end encrypted voice/video calls and gives users controls to limit personalization and delete accounts. However, it **does** receive behavioral and demographic data from third-party advertisers and data providers about your activity outside Discord, and uses your information for sponsored content.

## Key Verbatim Quotes

- "We don't sell your personal information."
- "Voice and video communications on Discord are designed to be end-to-end encrypted."
- "We may receive information about you from advertisers and third-party data providers, such as demographic information and how you engage with other products and services outside of Discord."
- "We may provide limited information to advertising platforms to help us reach people that we think will like our products and to measure the performance of our ads shown on those platforms."
- "We will update this Privacy Policy from time to time. We always indicate the date the last changes were published, and if changes are significant, we'll provide a more prominent notice as required by law, such as by emailing you or highlighting the changes within the services."
- "Certain features, like contact syncing, may require that you provide additional information (or grant us access to such information) to make them work."
- "Deleting your account permanently deletes identifying information and anonymizes other data as described in our data retention policy."

## Category-by-Category Reasoning

| Category | Risk | Deduction | Reasoning |
|----------|------|-----------|-----------|
| Camera & Microphone | caution | 4.5 | Explicit device settings quote includes camera/mic. Calls are e2e encrypted. |
| Location & GPS | unknown | 0 | Policy silent on GPS. IP address is collected as device info, not location. |
| Contacts & Phonebook | caution | 6.0 | "Contact syncing" is mentioned but text is vague. Downgraded from risky because no explicit quote confirms server upload. |
| Storage & File Access | caution | 3.0 | Explicit quote: "You may also upload and share files." User-initiated only. |
| Data Sharing with 3rd Parties | caution | 9.0 | Shares with vendors, related companies, and limited info with ad platforms. Explicit no-sale statement is a mitigating factor. Downgraded from risky. |
| Account & Identity | caution | 4.5 | Explicit quote on required account info (email/phone, birthday). |
| Behavioural & Ad Tracking | caution | 12.5 | Receives third-party behavioral data and uses it for sponsored content. Rate 0.5 because this is significant, but mitigated by explicit opt-out controls. Downgraded from risky. |
| Children's Data | unknown | 0 | Policy silent on children's data specifics. |
| Network & Internet Activity | caution | 1.5 | Explicit logging of pages visited, features used, interactions. |
| Device Fingerprinting | caution | 4.5 | Explicit collection of IP, OS, browser, device settings. |
| Health & Biometric | unknown | 0 | Policy silent. |
| Financial & Payment | caution | 4.5 | Explicit quote on Stripe/PayPal handling payments; Discord may store last 4 digits. |
| Data Deletion & User Rights | caution | 3.0 | Explicit deletion and data download available. Some data retained for legal reasons. |
| Policy Change Notification | safe | 0 | Explicit promise of notice for significant changes. Upgraded from caution. Previous analysis incorrectly claimed "continued use = acceptance" which is NOT in the text. |

## Scoring

- **Total deductions:** 53.0
- **Final score:** 74 (Grade B)

## Changes from Previous Analysis

- **Contacts:** Downgraded from risky (-13.0) to caution (-6.0). The previous claim "uploads your entire address book" was not directly supported by the text.
- **Data Sharing:** Downgraded from risky (-19.5) to caution (-9.0). The explicit no-sale statement and "limited information" sharing with ad platforms warranted a lower rate under strict rules.
- **Behavioral Tracking:** Downgraded from risky (-16.25) to caution (-12.5). Strong opt-out controls are explicitly described.
- **Policy Change:** Upgraded from caution (-1.5) to safe (0). The text explicitly promises notice for significant changes. The previous "continued use = acceptance" claim was invented.
- **Location:** Downgraded from safe (0) to unknown (0). The policy is silent on GPS; only IP address is mentioned.
- **Children's Data:** Downgraded from caution (-3.0) to unknown (0). The policy is silent.
- **Health & Biometric:** Downgraded from safe (0) to unknown (0). The policy is silent.

## Red Flags

1. Discord may receive data about you from outside sources (medium) — directly quoted.
2. Your behavior may fuel sponsored content (medium) — directly quoted.
3. Your messages may be scanned for policy violations (medium) — directly quoted.
4. Contact syncing may access information on your device (low) — directly quoted, but vague.

## Green Flags

1. Discord states it does not sell your personal data — directly quoted.
2. Voice and video calls are designed to be end-to-end encrypted — directly quoted.
3. You can turn off personalization and delete your account — directly quoted.
