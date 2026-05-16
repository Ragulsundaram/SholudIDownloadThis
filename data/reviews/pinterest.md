# Pinterest — Strict Re-Analysis

**Date:** 2026-05-16  
**Analyst:** kimi-k2.6  
**Policy URL:** https://policy.pinterest.com/privacy-policy  
**Methodology:** Strict legal-safe rules applied. Every claim requires a direct verbatim quote. No strong verbs from weak evidence. Silent categories marked `unknown` with `needs_review: true`.

---

## Policy Summary

Pinterest's privacy policy (last updated 2025-04-30) describes extensive data collection for personalization and advertising. It explicitly discloses sharing identifiers with Facebook Ads and Google Marketing Platform, uses offsite activity for ad targeting, and trains AI models on user content.

---

## Key Verbatim Quotes

> "we customize the ads we show you by identifying your interests based on your onsite and offsite activities, as well as by using information we receive from ad partners or other third parties."

> "we disclose information such as cookie IDs, your IP address, or a hashed version of your email address to third parties, such as Facebook Ads, Google Marketing Platform, and others."

> "using information to train, develop and improve our technology such as our machine learning models, regardless of when Pins were posted."

> "If you previously chose to sync your contacts with your account, we will continue to process certain information about your contacts who are Pinterest users to help you find one another on our Services."

> "Children under 13 are not allowed to use Pinterest."

> "We use your IP address to infer your approximate location, even if you don't choose to share your precise location."

> "This log data includes, for example, your Internet Protocol (IP) address, activity on websites you visit that incorporate Pinterest features (like the 'Save' button)"

> "We collect information about the device you use to access our Services, including the type of device, operating system, network service provider, settings, and unique device identifiers."

---

## Changes from Previous Analysis

### Red Flags (Revised for Strict Rules)

1. **Your offsite activity may power Pinterest ads** (was "tracks you across the web")  
   - Softened language to "may" and directly quoted the policy's description of onsite/offsite interest identification.

2. **Your data is shared with Facebook, Google, and other ad platforms** (was "shared with Facebook, Google, and other ad networks")  
   - Plain-english now directly quotes the exact identifiers and third-party names disclosed in the policy.

3. **Your Pins may train AI models** (was "Your photos and activity train AI models")  
   - Changed "train" to "may train" to match cautious language. Added note that opt-out is not clearly explained.

4. **Your contacts may be processed by Pinterest** (was "Your contacts are uploaded to Pinterest servers")  
   - Removed the strong verb "uploaded" (not in the text). Replaced with "process certain information" which is the verbatim phrase.

### Categories (Revised for Strict Rules)

- **Camera & Microphone:** Removed unsupported claim that "Pinterest says it does not collect the actual camera data." The policy only describes photo search opt-in and is silent on camera data storage.
- **Account & Identity:** Removed inference that account data is used for "advertising profiles." Policy does not explicitly link identity data to ad targeting.
- **Device Fingerprinting:** Removed claim "can be used to fingerprint your device." Now states what is collected and notes the purpose is not clearly explained.
- **Children's Data:** Removed unsupported claim about "no robust age verification." Now states the policy "does not explain how age is verified."
- **Data Deletion:** Removed inference that "advertising profile with partners may persist." Now states the policy "does not clearly explain whether information shared with advertising partners is also deleted."
- **Health & Biometric:** Changed from `safe` to `unknown` because the policy is silent on this topic.
- **Financial & Payment:** Changed from `safe` to `unknown` because the policy is silent on this topic.

---

## Category-by-Category Assessment

| Category | Risk | Deduction |
|----------|------|-----------|
| Camera & Microphone | Caution | 4.5 |
| Location & GPS | Risky | 9.75 |
| Contacts & Phonebook | Risky | 13.0 |
| Storage & File Access | Caution | 3.0 |
| Data Sharing with 3rd Parties | Dangerous | 30.0 |
| Account & Identity Data | Caution | 4.5 |
| Behavioural & Ad Tracking | Dangerous | 25.0 |
| Children's Data Handling | Caution | 3.0 |
| Network & Internet Activity | Risky | 3.25 |
| Device Info & Fingerprinting | Risky | 9.75 |
| Health & Biometric Data | Unknown | 0 |
| Financial & Payment Data | Unknown | 0 |
| Data Deletion & User Rights | Caution | 3.0 |
| Policy Change Notification | Caution | 1.5 |

---

## Scoring

- Base score: 100
- Total deductions: 110.25
- **Final score: 46**
- **Grade: D**
- Overall risk: **Risky**

Score unchanged from previous analysis. The strict-rule revisions were mostly textual; the scoring inputs remained the same.

---

## Review Notes

`needs_review: true` because the policy is silent on:
- **health_biometric**
- **financial_payment**
