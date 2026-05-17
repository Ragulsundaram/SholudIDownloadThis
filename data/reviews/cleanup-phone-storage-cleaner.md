# Cleanup: Phone Storage Cleaner — Privacy Review

**Review Date:** 2026-05-18  
**Policy Date:** 2026-05-05  
**App ID:** 1510944943  
**Developer:** DEEP FLOW SOFTWARE SERVICES - FZCO  
**Policy URL:** https://cleanup.photos/privacy

---

## Summary Card

### Cleanup: Phone Storage Cleaner
**Risk Level:** Risky | **Score:** 64/100 | **Grade:** C

**Red Flags:**
- **Aggressive ad tracking with multiple partners** — The app collects your advertising ID (IDFA), device ID, and usage data to show you personalized ads. This information is shared with Google, Facebook, Apple, Adjust, and Firebase Analytics.
- **Collects detailed device fingerprint** — The app gathers extensive information about your device including device name, model, manufacturer, operating system version, unique device identifiers, and region.
- **Data transferred internationally** — Your personal data is sent to servers and cloud providers located outside your country.
- **Can read, send, and delete your emails** — If you allow email access for the inbox cleaning feature, the app has broad permissions to manage your emails.

**Green Flags:**
- **Photos stay on your device** — Cleanup processes your photos and videos locally. They explicitly state they do not store your photos, contacts, or videos on their servers.
- **Most permissions are optional** — Access to contacts, photos, and email is optional and can be denied or disabled.
- **Never sees your payment details** — Credit card details are handled by third-party processors; the app never sees them.
- **Review before anything is deleted** — The app shows you a final review screen before actually deleting anything.

**Verdict:** Cleanup promises offline processing for your photos and contacts, which is good. However, it collects extensive device data and shares it with multiple advertising partners including Facebook, Google, and Adjust for personalized ads. The app is functional but comes with significant tracking trade-offs.

---

## Detailed Analysis

### Core Function
Cleanup is a utility app designed to free up iPhone storage by:
- Removing duplicate photos and videos
- Detecting similar screenshots
- Compressing large videos
- Merging duplicate contacts
- Cleaning spam emails
- Organizing storage

### Key Privacy Findings

#### Positive Aspects

1. **Local Processing Promise**: The app explicitly states that photos, videos, and contacts are not uploaded to their servers. Processing occurs locally on the device or within the user's own cloud services. This is a strong privacy-positive feature for an app that requires broad file access.

2. **Optional Permissions Model**: Most sensitive permissions (contacts, photos, email) are optional and can be disabled in device settings. The app acknowledges that denying these permissions will limit functionality.

3. **Review Before Delete**: The app includes a user confirmation step before any deletion occurs, preventing accidental data loss.

4. **No Payment Data Storage**: Payment processing is fully outsourced to third parties like Paddle. The app never handles raw payment card data.

5. **Age Gate**: Explicit 16+ age requirement with no intentional collection from children.

#### Concerning Aspects

1. **Extensive Advertising Ecosystem**: The app embeds multiple tracking SDKs and shares data with:
   - Google (Advertising ID, Firebase Analytics)
   - Facebook SDK
   - Apple (IDFA)
   - Adjust
   
   This data is used for "personalized advertising" and "marketing analysis studies."

2. **Device Fingerprinting**: The collection of device name, model, manufacturer, OS version, unique device identifiers, hardware model, and region information enables comprehensive device fingerprinting even if advertising IDs are reset.

3. **Email Access Scope**: For the email cleaning feature, the app requests permission to:
   - Read emails
   - Compose and send emails
   - Delete emails
   - Access email metadata and headers
   
   While they claim emails aren't stored on servers, the permission scope is exceptionally broad.

4. **International Data Transfers**: Data is transferred to service providers abroad using Standard Contractual Clauses. The policy acknowledges reliance on servers and cloud systems located outside the user's jurisdiction.

5. **Legitimate Interests Basis**: Several data processing activities rely on "legitimate interests" rather than explicit consent, including customization, business auditing, and user satisfaction analysis.

### Data Retention
- Data is stored "for the duration specified in applicable legislation or until the purpose of processing ceases to exist"
- Additional retention occurs for legal rights establishment/protection until limitation periods end
- Marketing data can be stored longer with consent

### User Rights
The policy provides comprehensive rights information for:
- Turkish residents (PDP Law)
- EEA/UK/Switzerland residents (GDPR)
- California residents (CCPA)

Requests are handled within 30 days and are free of charge.

### Transparency
The privacy policy is:
- Recently updated (May 5, 2026)
- Well-structured with jurisdiction-specific sections
- Relatively detailed about third-party sharing
- Clear about data processing purposes and legal bases

However, the extensive advertising partnerships and data collection are buried in lengthy policy text that average users may not fully read.

---

## Scoring Breakdown

| Category | Risk | Deduction |
|----------|------|-----------|
| Data Sharing with 3rd Parties | Risky | 19.5 |
| Behavioural & Ad Tracking | Risky | 16.25 |
| Device Info & Fingerprinting | Risky | 9.75 |
| Contacts & Phonebook | Caution | 6 |
| Account & Identity Data | Caution | 4.5 |
| Location & GPS | Caution | 4.5 |
| Storage & File Access | Caution | 3 |
| Data Deletion & User Rights | Caution | 3 |
| Policy Change Notification | Caution | 1.5 |
| Network & Internet Activity | Caution | 1.5 |
| **Total Deductions** | | **69.5** |
| **Final Score** | | **64/100 (Grade C)** |

---

## Recommendations

### For Users
1. **Deny marketing/tracking consent** when prompted — this reduces but doesn't eliminate data sharing
2. **Review the final deletion screen carefully** before confirming any cleanup action
3. **Consider if you need the email cleaning feature** — this requires very broad email permissions
4. **Check your App Tracking Transparency settings** to limit IDFA collection

### For Developer
1. Reduce reliance on advertising SDKs; consider privacy-respecting analytics alternatives
2. Provide more granular permission options for email access (read-only vs. full control)
3. Implement on-device analytics to reduce data transmission
4. Consider a premium tier that removes all tracking SDKs

---

## Policy Excerpts (Key Evidence)

**On local processing:**
> "We do not store any of your contact list, photos and videos on our servers; activities to process these will be carried out on your device or your own cloud services only."

**On advertising partners:**
> "The Company may also transfer your Marketing Data to service providers (incl. Google, Apple, Facebook SDK, Adjust and Firebase Analytics, which are embedded into our service) for the purpose of conducting marketing analysis studies and execution of advertising (including personalised advertising)."

**On device data collection:**
> "Device Information: We may collect data about the device you use to interact with our Services, including the device name, device ID, its model, its manufacturer, region information, device's operating system, device identifiers, hardware model."

**On email access:**
> "When you give us permission to access, we can access the following data, and read, compose, send and delete your emails."

---

*Review completed by Claude Sonnet 4.6 on 2026-05-18*
