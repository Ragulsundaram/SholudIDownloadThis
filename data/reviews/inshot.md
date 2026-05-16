# InShot - AI Video Editor — Strict Re-analysis

**Date:** 2026-05-16  
**Analyst:** claude-sonnet-4  
**Policy:** https://inshot.cc/terms/privacy.html  
**Previous score:** A (81)  
**New score:** B (72)

## Summary of changes

- **Two categories marked `unknown`** because the privacy policy is completely silent on them: Location & GPS and Contacts & Phonebook. Under strict rules, silent policies cannot be claimed as `safe`.
- **Score dropped from 81 to 72** (Grade A to Grade B) due to the two new unknown-category deductions (7.5 + 10.0 = 17.5 additional points).
- **One-liner shortened** to fit the 15-word schema limit and to reflect the cautionary finding: "InShot keeps photos on device and needs no account, but policy is silent on location."
- **All other categories confirmed** with direct quotes from the policy text. No overclaims found in the existing analysis; the previous rating was simply too generous on silent categories.

## Verbatim quotes used for scoring

> "Generally, we do not collect any personal identifiable information ('PII') from you when you download our applications. To be specific, we do not require the consumers to get registered before downloading the application, nor do we keep track of the consumers' visits of our application, and we don't store such PII."

> "InShot will never collect and store your photos or face data when you use our application. All videos and photos on your device will be stored locally."

> "We will not obtain any video or photos from your device, nor will we modify or delete the content in your local media storage."

> "Admob, AppLovin, as advertisers of InShot, may collect information generated during your use of our products and services, extract your preferences, and use them to show you ads that are more in line with your individual needs. We will use technical means to anonymize the data."

> "When you use the audio recording feature, we need microphone permission to record audio; At the same time, your unfinished video will be stored in the InShot draft box and local device."

> "When there are major changes to the terms of this policy, for example, changes of the purpose, method, and scope of personal information collection, we will remind you by means of pop-up notifications."

> "If we learn that our products have accidentally collected children's personal information, we will delete the relevant information as soon as possible."

## Scoring breakdown

| Category | Risk | Deduction |
|----------|------|-----------|
| camera_microphone | caution | 4.5 |
| location_gps | unknown | 7.5 |
| contacts_phonebook | unknown | 10.0 |
| storage_file_access | caution | 3.0 |
| data_sharing_third_parties | caution | 9.0 |
| account_identity | safe | 0 |
| behavioural_ad_tracking | caution | 7.5 |
| childrens_data | safe | 0 |
| network_internet_activity | caution | 1.5 |
| device_fingerprinting | caution | 4.5 |
| health_biometric | safe | 0 |
| financial_payment | caution | 4.5 |
| data_deletion_user_rights | caution | 3.0 |
| policy_change_notification | caution | 1.5 |
| **Total** | | **56.5** |

**Formula:** round((1 - 56.5 / 205) * 100) = **72** (Grade B)

## Reviewer notes

- `needs_review` is **true** because two categories are silent in the policy.
- The policy is notably strong on local storage, no account, and no face data collection. The only material weakness under strict rules is the silence on location and contacts.
