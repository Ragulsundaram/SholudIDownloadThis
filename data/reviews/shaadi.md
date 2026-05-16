# Re-analysis: Shaadi.com
**Date:** 2026-05-16  
**Analyst:** claude-sonnet-4  
**Policy:** https://www.shaadi.com/info/privacy

## Verdict
- **Score:** 58 / Grade: C / Risk: caution
- **Recommendation:** think_twice
- **Needs review:** true — several claims could not be verified against the privacy policy text alone (terms may contain additional context).

## Red Flags (4)
1. **Government ID and selfie verification may be required** (medium) — Policy says "strongly encouraged" and "may be required from time to time." Removed unsupported claim that this is required to unlock core features like messaging.
2. **Your profile is shared with other users by design** (medium) — Personal information is published to other registered users for matchmaking. Downgraded from high because it is the explicit core purpose.
3. **Collects bank account, credit card, and UPI details for paid services** (medium)
4. **The platform explicitly operates as an advertising service** (medium) — Policy states: "Shaadi.com is an advertising platform providing targeted advertising services."

## Green Flags (3)
1. **You can access, update, and delete your information**
2. **Payment data is encrypted during transmission**
3. **Shaadi.com states it does not sell your personal information** — New flag based on direct policy quote.

## Removed Flags
- **Removed `red_criminal_background_checks`:** Not mentioned in the privacy policy text.
- **Removed `red_testimonials_used_forever`:** Privacy policy mentions testimonials are collected, but does not state they are licensed for perpetual marketing.
- **Removed `green_chat_auto_delete`:** Not mentioned in privacy policy.
- **Removed `green_age_verification_strong`:** Privacy policy is completely silent on age requirements.

## Key Changes in This Re-analysis
- **Fixed `app.slug`:** Changed from `shaadi-ios` to `shaadi` to match folder name and URL convention.
- **Fixed scoring rate errors:** `account_identity`, `behavioural_ad_tracking`, `device_fingerprinting`, and `financial_payment` all used incorrect rates (0.7–0.8 instead of 0.65 for risky). Corrected to schema-compliant rates.
- **Changed `childrens_data` from safe to unknown:** Privacy policy is silent on age/children. Deduction changed from 0 to 5.0.
- **Updated `policy_change_notification`:** Removed terms-based claims about "continued use = acceptance." Now reflects only what the privacy policy says: material changes will be notified as required by law.
- **Updated `camera_microphone`:** Removed unsupported claims about video call features (Shaadi Meet / Shaadi Live) because they are not mentioned in the privacy policy.
- **Updated `data_sharing_third_parties`:** Removed unsupported concern about "verification agencies conducting criminal background checks."

## Scoring
Corrected rates and added `childrens_data` unknown deduction. Total deductions: 85.25. Score and grade unchanged (58, C).
