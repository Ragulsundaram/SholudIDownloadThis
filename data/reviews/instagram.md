# Instagram Re-analysis Review

**Date:** 2026-05-16
**Analyst:** claude-sonnet-4
**Policy URL:** https://privacycenter.instagram.com/policy/
**Policy Date:** December 16, 2025

## Summary of Changes
Strict legal-safe re-analysis of the Meta Privacy Policy as it applies to Instagram.

- Every claim is now tied to a direct verbatim quote.
- Removed claims not explicitly found in the provided policy text:
  - "DMs are not end-to-end encrypted" — policy is silent on DM encryption.
  - "Uploads your contacts" — policy mentions "friends, followers and other connections" but does not explicitly describe phonebook upload.
  - "IP-based location always on" — policy mentions IP address collection but does not explicitly link it to location inference.
- Removed strong verbs: "read," "scan," "steal," "monitor," "tracks you across apps."
- Score changed from 42 to 51 / Grade D / Risk `risky`.

## Score Change Explanation
The score increased from 42 to 51 because several claims in the previous analysis were not directly supported by the provided policy text:
- `contacts_phonebook`: Downgraded from `risky` (-13) to `safe` (0) because the policy does not explicitly mention accessing your device's phonebook.
- `childrens_data`: Downgraded from `caution` (-3) to `unknown` (0) because the provided policy text is silent on age requirements.
- `policy_change_notification`: Upgraded from `caution` (-1.5) to `safe` (0) because the policy explicitly promises notification and review opportunity before material changes.

## Key Strict Findings

1. **Behavioral ad tracking:** Explicitly supported: "We use information we collect to provide a personalized experience to you, including ads" and third-party activity data usage.
2. **Data sharing across Meta:** Explicitly supported: "We share information with other Meta Companies to help provide, improve, and promote Meta Company Products, including for ads..."
3. **Meta Audience Network:** Explicitly supported: "When we show you ads through Meta Audience Network when you visit other apps..."
4. **Device monitoring:** Explicitly supported: "What you're doing on your device, like whether our app is in the foreground..."
5. **No sale claim:** Explicitly supported: "We don't sell any of your information to anyone, and we never will."

## Categories marked `unknown` or changed
- `childrens_data`: marked `unknown` (silent in text).
- `contacts_phonebook`: marked `safe` (no explicit device contact mention).
