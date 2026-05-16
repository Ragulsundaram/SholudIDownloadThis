# Headway: Fun & Easy Growth — Strict Re-analysis

**Date:** 2026-05-16  
**Analyst:** claude-sonnet-4  
**Policy:** https://get-headway.com/info/privacy-policy-ios.html  
**Previous score:** C (66)  
**New score:** D (49)

## Summary of changes

- **Developer corrected** from "LibroTech, Inc." to "GTHW App Limited" per Section 15 of the privacy policy ("GTHW App Limited, a company registered and acting under the laws of the Republic of Cyprus").
- **Policy URL updated** from makeheadway.com to get-headway.com, matching the fresh verification text.
- **Four categories marked `unknown`** because the privacy policy is completely silent on them: Camera & Microphone, Contacts & Phonebook, Storage & File Access, and Health & Biometric Data. Under strict rules, silent policies cannot be claimed as `safe`.
- **Location & GPS upgraded** from `safe` to `caution` because the CCPA supplemental notice explicitly lists "Geolocation data" as a collected category (shared with service providers and advertising partners).
- **Red flags refined:** No new red flags added; existing red flags kept but language tightened to ensure every claim is directly quote-backed.

## Verbatim quotes used for scoring

> "We and our partners, including Facebook and Google, use your personal data to tailor ads and possibly even show them to you at the relevant time."

> "we may process data using solutions developed by Facebook, Google, Twitter, Appsflyer, Amplitude, Firebase, Snapchat, Pinterest, Apple, Digital Ocean, Vercel, Customer.io, Zendesk, PayPal, Stripe, Microsoft, Tableau, TikTok"

> "We also automatically collect from your device language settings, IP address, time zone, type and model of a device, device settings, operating system, Internet service provider, mobile carrier, hardware ID, and other unique identifiers (such as IDFA and AAID)."

> "We do not knowingly process personal data from persons under 16 years of age."

> "We will not store or collect your payment card details ourselves. This information will be provided directly to our third-party payment processors."

> "For purposes of the CCPA, we do not 'sell' personal information, nor do we have actual knowledge of any 'sale' of personal information of minors under 16 years of age."

## Scoring breakdown

| Category | Risk | Deduction |
|----------|------|-----------|
| camera_microphone | unknown | 7.5 |
| location_gps | caution | 4.5 |
| contacts_phonebook | unknown | 10.0 |
| storage_file_access | unknown | 5.0 |
| data_sharing_third_parties | risky | 19.5 |
| account_identity | risky | 9.75 |
| behavioural_ad_tracking | risky | 16.25 |
| childrens_data | caution | 3.0 |
| network_internet_activity | risky | 3.25 |
| device_fingerprinting | risky | 9.75 |
| health_biometric | unknown | 7.5 |
| financial_payment | caution | 4.5 |
| data_deletion_user_rights | caution | 3.0 |
| policy_change_notification | caution | 1.5 |
| **Total** | | **105.0** |

**Formula:** round((1 - 105.0 / 205) * 100) = **49** (Grade D)

## Reviewer notes

- `needs_review` is **true** because four categories are silent in the policy.
- Terms and Conditions URL remains unfound in the policy text.
