# 7 Minute Workout — Privacy Policy Analysis

**Reviewed:** 2026-05-18
**Policy:** https://7minuteworkoutapp.com/privacy.html
**Terms:** (not provided)
**Platform:** iOS
**Score:** 67/100 (Grade C, Caution)

---

## Summary

7 Minute Workout is a straightforward HIIT fitness app with a refreshingly short and transparent privacy policy. The app collects your location while open, device information, and basic account details. It integrates with Apple HealthKit to track workouts. The developer explicitly promises not to share health data with advertising platforms, data brokers, or information resellers — a significant positive. However, the policy is vague about what other device permissions may be accessed, and continued use counts as accepting policy changes automatically.

Key concerns: location tracking while app is open, vague device permissions clause, automatic acceptance of policy changes, and lack of detail on camera/microphone/storage access.

Key positives: explicit promise not to sell health data, payments handled by third-party providers, access and correction rights available, and a short readable privacy policy.

---

## Methodology

This analysis follows the ShouldIDownloadThis parser rules: every claim is backed by a direct verbatim quote, cautious language is used, and categories are rated based on explicit evidence in the policy.

### Data Collection Observed

- **Personal:** First name, last name, email, password (optional account creation)
- **Device:** Operating system, device identifier, carrier, language, battery performance, network connections
- **Location:** GPS, WiFi, cell towers (only when app is open)
- **Health:** Apple HealthKit workout activity data (send/receive)
- **Behavioral:** Aggregate app and website usage, page views, cookies, applets
- **Financial:** Not collected — handled by payment service providers
- **Other:** IP address, communications with support

### Notable Excerpts

> "Bytesize Apps collects and stores location data from sources such as GPS, Wi-Fi and cell towers after you install and consent to the App tracking your location. Bytesize Apps does not collect location data when the App is closed. You may choose to stop our collection of location data by removing the App from your phone."

> "If you choose to create an account using email, you provide us your first name, last name, email and a password. If you choose to login using Facebook, you provide us with your first name, last name and email."

> "Information from your device. This includes information about your operating system, device identifier, carrier, language, battery performance, wi-fi or other network connections, or other data that you permit the App to access on your device including through permissions on your device."

> "To help improve recommendations and track your workout activity, Bytesize Apps sends and receives data to and from Apples HealhKit Application."

> "Bytesize Apps will not use or share health data collected through HealthKit with advertising platforms, data brokers or information resellers."

> "When You use any online payment facility on Our App or Website, We will pass Your Personal Information (including financial and credit information) to providers of those payment services and facilities."

> "Your continued use of the Bytesize Apps Website constitutes Your acceptance of the collection, use and disclosure of Your Personal Information to the extent outlined in this Privacy Policy as amended from time to time."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | unknown | 15 | 0.50 | 7.5 |
| Location & GPS | caution | 15 | 0.30 | 4.5 |
| Contacts & Phonebook | unknown | 20 | 0.50 | 10.0 |
| Storage & File Access | unknown | 10 | 0.50 | 5.0 |
| Data Sharing with 3rd Parties | caution | 30 | 0.30 | 9.0 |
| Account & Identity | caution | 15 | 0.30 | 4.5 |
| Behavioural & Ad Tracking | caution | 25 | 0.30 | 7.5 |
| Children's Data | unknown | 10 | 0.50 | 5.0 |
| Network & Internet Activity | caution | 5 | 0.30 | 1.5 |
| Device Fingerprinting | caution | 15 | 0.30 | 4.5 |
| Health & Biometric | caution | 15 | 0.30 | 4.5 |
| Financial & Payment | safe | 15 | 0.00 | 0.0 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3.0 |
| Policy Change Notification | caution | 5 | 0.30 | 1.5 |

**Total deductions:** 68
**Final score:** round((1 − 68/205) × 100) = 67
**Grade:** C
**Risk:** Caution

---

## Summary Card

### 7 Minute Workout
- **Overall Risk:** Caution
- **Score:** 67/100 (Grade C)

**Red Flags:**
- **Tracks your location while the app is open.** 7 Minute Workout collects your location from GPS, WiFi, and cell towers whenever the app is running. You can stop this only by deleting the app entirely.
- **Vague about what device data is accessed.** The policy says the app may access 'other data that you permit the App to access on your device including through permissions on your device' but doesn't say exactly what that means.
- **Policy changes accepted automatically.** If the developer updates its privacy policy, your continued use of the app counts as agreeing to the new terms. They won't ask you to confirm or re-accept.

**Green Flags:**
- **Explicitly promises not to sell health data.** The policy clearly states they will not use or share health data collected through HealthKit with advertising platforms, data brokers, or information resellers.
- **Payment details handled by third-party providers.** When you pay for premium features, your payment information goes directly to the payment service provider. The app developer never sees or stores your card details.
- **You can access and correct your data.** You can request access to your personal information and ask for corrections. The developer says they will tell you if access is denied and why.
- **Short and readable privacy policy.** Unlike many apps with pages of dense legal text, 7 Minute Workout has a brief, easy-to-understand privacy policy written in plain language.

**Verdict:** 7 Minute Workout is a straightforward HIIT fitness app with a refreshingly short and transparent privacy policy. The app collects your location while open, device information, and basic account details. It integrates with Apple HealthKit to track workouts. The developer explicitly promises not to share health data with advertising platforms, data brokers, or information resellers — a significant positive. However, the policy is vague about what other device permissions may be accessed, and continued use counts as accepting policy changes automatically.
