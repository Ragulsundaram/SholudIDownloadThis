# Hinge — Strict Re-analysis

**Date:** 2026-05-16  
**Analyst:** claude-sonnet-4  
**Policy:** https://hinge.co/privacy  
**Previous score (file):** D (41)  
**New score:** D (47)

## Summary of changes

- **Fixed arithmetic error** in the previous `total_deductions` field (was 121.75; correct sum of listed deductions is 109.5). The previous file had a 9.75 discrepancy.
- **Policy change notification upgraded** from `unknown` (deduction 2.5) to `safe` (deduction 0) because the policy explicitly states: "We will notify you before material changes take effect so that you have time to review the changes."
- **Red flag severities adjusted** under strict "no high severity without unambiguous backing" rule:
  - `red_advertiser_sharing` downgraded from **high** to **medium** because the policy states advertising partners transform email/phone/ad IDs into "an identifier that can't be used to identify you personally." The exact sensitivity of shared data is ambiguous.
  - `red_long_retention` downgraded from **high** to **medium** because face data is normally erased within 30 days (only biometric confirmation images may be retained for 36 months), and financial record retention is standard for tax compliance.
- **Data deletion plain_english corrected** from "customer service chats for 6 years" to "customer care exchanges for 5 years" per the verbatim text.
- **Verdict one_liner and recommendation_reason softened** to remove the implication that Hinge explicitly shares *sensitive* data with advertisers. The policy lists Profile Data (which *can* contain sensitive data) under advertising partner categories, but the advertising section focuses on transformed/hashed identifiers.

## Verbatim quotes used for scoring

> "Some of this data may be considered sensitive or special in certain countries, such as details about sexual orientation, sexual life, health, racial or ethnic origins, religious beliefs or political affiliations."

> "You may choose to participate in certain of our features, like Selfie Verification, that involve the collection of face geometry data"

> "To help improve the relevance of these ads, we provide certain info about you to third parties, including advertising partners... Some of our advertising partners enable us to transform your email address, advertising identifiers or phone number into an identifier that can't be used to identify you personally"

> "We will notify you before material changes take effect so that you have time to review the changes."

> "we keep customer care exchanges with you for five years from the date of the communication; customer care records and supporting data, as well as imprecise location of download/purchase, for five years"

> "Our service is restricted to individuals who are 18 years of age or older. We do not permit individuals under the age of 18 on our platform."

## Scoring breakdown

| Category | Risk | Deduction |
|----------|------|-----------|
| camera_microphone | caution | 4.5 |
| location_gps | risky | 9.75 |
| contacts_phonebook | risky | 13.0 |
| storage_file_access | caution | 3.0 |
| data_sharing_third_parties | risky | 19.5 |
| account_identity | risky | 9.75 |
| behavioural_ad_tracking | risky | 16.25 |
| childrens_data | safe | 0 |
| network_internet_activity | risky | 3.25 |
| device_fingerprinting | risky | 9.75 |
| health_biometric | risky | 9.75 |
| financial_payment | caution | 4.5 |
| data_deletion_user_rights | risky | 6.5 |
| policy_change_notification | safe | 0 |
| **Total** | | **109.5** |

**Formula:** round((1 - 109.5 / 205) * 100) = **47** (Grade D)

## Reviewer notes

- `needs_review` is **false** because the policy is explicit on every category scored.
- No silent categories remain after this re-analysis.
