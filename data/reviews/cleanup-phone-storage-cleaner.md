# Cleanup: Phone Storage Cleaner — Privacy Policy Analysis

**Reviewed:** 2026-05-18  
**Policy:** https://cleanup.photos/privacy  
**Terms:** unknown  
**Platform:** iOS  
**Score:** 61/100 (Grade C, Caution)

---

## Summary Card

### Cleanup: Phone Storage Cleaner
**Risk Level:** Caution | **Score:** 61/100 | **Grade:** C

**Red Flags:**
- **Shares advertising IDs with multiple ad partners** — The app collects your IDFA, GAID, and usage data and shares them with Google, Facebook, Apple, Adjust, and Firebase Analytics for personalized advertising and marketing analysis.
- **Scans your entire photo library** — To find duplicates and similar photos, the app requests broad access to your entire gallery rather than letting you pick individual photos.
- **Can fully manage your emails** — If you enable the email cleaning feature, the app gets permission to read, compose, send, and delete your emails.
- **Collects a detailed device fingerprint** — The app gathers device name, model, manufacturer, OS version, unique device identifiers, hardware model, and region info.
- **Transfers data internationally** — Your personal data is sent to servers and cloud providers located outside your country, including for advertising services.

**Green Flags:**
- **Photos and contacts stay on your device** — The company explicitly states it does not store your photos, videos, or contacts on its own servers. Processing happens locally or within your personal cloud.
- **Sensitive permissions are optional** — You can deny access to contacts, photos, and email, though some core features will not work.
- **Never sees your payment card details** — All payments are handled by third-party processors like Paddle. The app only sees order and subscription information.
- **Offers data deletion rights** — You can request deletion of your personal data, and the policy outlines rights for users in Europe and California.

**Verdict:** Cleanup promises local processing for your sensitive data like photos and contacts, which is genuinely positive. However, the app embeds multiple advertising and analytics SDKs, shares your advertising identifiers for personalized ads, and requests very broad permissions. Use with caution and grant only the permissions you actually need.

---

## Detailed Analysis

### Core Function
Cleanup is a utility app designed to free up iPhone storage by:
- Finding and removing duplicate photos and videos
- Detecting similar screenshots
- Compressing large videos
- Merging duplicate contacts
- Cleaning spam emails
- Organizing storage

### Key Privacy Findings

#### Positive Aspects

1. **Local Processing Promise**: The app explicitly states that photos, videos, and contacts are not uploaded to company servers. Processing occurs locally on the device or within the user's own cloud services. This is a strong privacy-positive feature for an app that requires broad file access.

2. **Optional Permissions Model**: Most sensitive permissions (contacts, photos, email) are optional and can be disabled in device settings. The app acknowledges that denying these permissions will limit functionality.

3. **No Payment Data Storage**: Payment processing is fully outsourced to third parties like Paddle. The app never handles raw payment card data.

4. **Age Gate**: Explicit 16+ age requirement with no intentional collection from children under 16.

5. **Data Deletion Rights**: Users can request deletion, and the policy provides comprehensive rights information for Turkish residents (PDP Law), EEA/UK/Switzerland residents (GDPR), and California residents (CCPA).

#### Concerning Aspects

1. **Extensive Advertising Ecosystem**: The app embeds multiple tracking SDKs and shares Marketing Data with Google, Apple, Facebook SDK, Adjust, and Firebase Analytics for "marketing analysis studies and execution of advertising (including personalised advertising)." The California disclosure admits this sharing may be considered a "sale" under state law.

2. **Broad Photo Library Access**: The app scans your entire photo gallery to find duplicates and similar photos. While processing is claimed to be local, the permission scope is very wide.

3. **Device Fingerprinting**: Collection of device name, device ID, model, manufacturer, OS version, hardware model, region, and advertising identifiers enables comprehensive device fingerprinting.

4. **Email Access Scope**: For the email cleaning feature, the app requests permission to read, compose, send, and delete your emails, plus access metadata and headers. While they claim emails are not stored on servers, the OAuth permission scope is exceptionally broad.

5. **International Data Transfers**: Data is transferred to service providers abroad using Standard Contractual Clauses. The policy acknowledges reliance on servers and cloud systems located outside the user's jurisdiction.

6. **Legitimate Interests Basis**: Several data processing activities rely on "legitimate interests" rather than explicit consent, including customization, business auditing, and user satisfaction analysis.

### Data Retention
- Data is stored for the duration specified in applicable legislation or until the purpose of processing ceases to exist.
- Additional retention occurs for legal rights establishment and protection until limitation periods end.
- Marketing data can be stored longer with explicit consent.

### User Rights
The policy provides comprehensive rights information for:
- Turkish residents (PDP Law)
- EEA/UK/Switzerland residents (GDPR)
- California residents (CCPA)

Requests are handled within 30 days and are free of charge.

### Transparency
The privacy policy is:
- Recently updated (May 5, 2025)
- Well-structured with jurisdiction-specific sections
- Relatively detailed about third-party sharing and legal bases

However, the extensive advertising partnerships and data collection are embedded in lengthy legal text that average users may not fully read.

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | safe | 15 | 0.00 | 0 |
| Location & GPS | caution | 15 | 0.30 | 4.5 |
| Contacts & Phonebook | caution | 20 | 0.30 | 6.0 |
| Storage & File Access | risky | 10 | 0.65 | 6.5 |
| Data Sharing with 3rd Parties | risky | 30 | 0.65 | 19.5 |
| Account & Identity | caution | 15 | 0.30 | 4.5 |
| Behavioural & Ad Tracking | risky | 25 | 0.65 | 16.25 |
| Children's Data | caution | 10 | 0.30 | 3.0 |
| Network & Internet Activity | caution | 5 | 0.30 | 1.5 |
| Device Fingerprinting | risky | 15 | 0.65 | 9.75 |
| Health & Biometric | safe | 15 | 0.00 | 0 |
| Financial & Payment | caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3.0 |
| Policy Change Notification | caution | 5 | 0.30 | 1.5 |

**Total deductions:** 80.5  
**Final score:** round((1 − 80.5/205) × 100) = 61  
**Grade:** C  
**Risk:** Caution

---

## Strict Rules Applied

- Camera & Microphone marked as **safe** because the policy only describes accessing existing photos from the gallery, not using the camera or microphone.
- Storage & File Access marked as **risky** because the app scans the entire photo library to find duplicates and similar photos, constituting broad library access.
- Data Sharing with 3rd Parties marked as **risky** because Marketing Data is explicitly shared with advertising networks (Google, Facebook, Apple, Adjust, Firebase) for personalized advertising.
- Behavioural & Ad Tracking marked as **risky** because multiple advertising identifiers (IDFA, GAID, IDFV, Firebase analytics) are collected and used for personalized ads.
- Device Fingerprinting marked as **risky** because detailed device info combined with advertising IDs enables fingerprinting for ad targeting.
- Health & Biometric marked as **safe** because the policy explicitly states no sensitive personal data is processed.
- Financial & Payment marked as **caution** because payment details are handled by third-party processors and the app never sees card data.
- All plain-English summaries use cautious language and are backed by verbatim quotes.

---

## Policy Excerpts (Key Evidence)

**On local processing:**
> "Please note that we do not store any of your contact list, photos and videos (or images, materials, files, documents, visual records, graphics, media) on our servers; activities to process these will be carried out on your device or your own cloud services only."

**On advertising partners:**
> "The Company may also transfer your Marketing Data to service providers (incl. Google, Apple, Facebook SDK, Adjust and Firebase Analytics, which are embedded into our service) for the purpose of conducting marketing analysis studies and execution of advertising (including personalised advertising)/campaign/promotion processes."

**On device data collection:**
> "Device Information: We may collect data about the device you use to interact with our Services, including the device name, device ID, its model, its manufacturer, region information, device's operating system, device identifiers, hardware model."

**On email access:**
> "When you give us permission to access, we can access the following data, and read, compose, send and delete your emails."

**On age limit:**
> "We do not permit the use of our application by children under the age of 16. Users under 18 must have permission from their parents or legal guardians to use our Services."

**On data retention:**
> "Your data will be stored for the duration specified in the applicable legislation or until the purpose of processing ceases to exist... your data may be further stored even after the fulfilment of the purpose of processing on the legal basis of the necessity of the establishment, execution and protection of our legal rights until the end of legal limitation periods."

---

*Review completed by Claude Sonnet 4 on 2026-05-18*
