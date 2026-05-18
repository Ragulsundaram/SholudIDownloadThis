# Sleep Cycle - Tracker & Sounds — Privacy Policy Analysis

**Reviewed:** 2026-05-18
**Policy:** https://www.sleepcycle.com/privacy-policy/
**Terms:** (not provided)
**Platform:** iOS
**Score:** 74/100 (Grade B, Caution)

---

## Summary

Sleep Cycle is a popular sleep tracking app with strong privacy protections and GDPR compliance. By default, all health and sleep data stays on your device — nothing is sent to servers unless you explicitly opt in. The app provides comprehensive user rights including CSV export, deletion, and correction. It only shares data with named service providers and uses EU Model Clauses for international transfers. However, the app does collect sensitive health data (sleep patterns, snoring, movements), uses your microphone continuously during sleep, and can store this data on cloud servers if you enable backup. Camera is used for optional pulse measurement and location is collected for weather and sleep statistics.

Key concerns: sensitive health data collection, background microphone usage, health data on servers with consent, and data sharing with research partners.

Key positives: health data local by default, strong deletion rights, named service providers only, material change notifications, and strong GDPR compliance.

---

## Methodology

This analysis follows the ShouldIDownloadThis parser rules: every claim is backed by a direct verbatim quote, cautious language is used, and categories are rated based on explicit evidence in the policy.

### Data Collection Observed

- **Personal:** Name, email, password
- **Health:** Sleep times, movements (accelerometer), snoring/noises (microphone), pulse (camera), sleep efficiency, sleep quality, height, weight
- **Location:** Device location for weather and sleep location statistics
- **Device:** IP address, timestamps, log files, device type, operating system
- **Behavioral:** App usage patterns, technical data for analytics
- **Financial:** Not collected — handled by Apple/Google Play
- **Other:** Phone call records kept for support

### Notable Excerpts

> "some personal data will be collected through your device's accelerometer (such as your movements), microphone (such as snoring or other noises), camera (pulse), or device location (for weather and sleep location statistics), and some personal data will be derived (such as sleep efficiency and sleep quality)"

> "As a default setting, personal data related to your health will only be stored locally on your device. Although the app is configured to send account information (such as user name and/or email address) and technical data (such as IP address and device type) to us in certain situations, we will not able to get hold of or exercise any control of your health data unless you give us your consent."

> "The data we store and otherwise process about you will be stored on secure servers hosted by Google Cloud. In addition, data that we process for product development purposes will be transferred to our product development environment (separate from the backup environment) hosted by Amplitude Inc. and their service provider Amazon Web Services."

> "If you want to participate, we will share your personal data (as identified in each individual case) with the investigator in question. Once the investigator has received your data, the investigator will be the data controller for any sub-sequent processing of the data."

> "You can delete specific data points, for example sleep sessions or comments posted by yourself, directly in the app. If you are not using the online backup services you can simply just uninstall the Sleep Cycle app in order to remove any stored data."

> "If we make any material changes to our notice, we will push a notification through the Sleep Cycle app and/or by e-mail (if we have your e-mail address and you have not opted-out from such use)."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | risky | 15 | 0.65 | 9.75 |
| Location & GPS | caution | 15 | 0.30 | 4.5 |
| Contacts & Phonebook | safe | 20 | 0.00 | 0.0 |
| Storage & File Access | safe | 10 | 0.00 | 0.0 |
| Data Sharing with 3rd Parties | caution | 30 | 0.30 | 9.0 |
| Account & Identity | caution | 15 | 0.30 | 4.5 |
| Behavioural & Ad Tracking | caution | 25 | 0.30 | 7.5 |
| Children's Data | safe | 10 | 0.00 | 0.0 |
| Network & Internet Activity | caution | 5 | 0.30 | 1.5 |
| Device Fingerprinting | caution | 15 | 0.30 | 4.5 |
| Health & Biometric | risky | 15 | 0.65 | 9.75 |
| Financial & Payment | safe | 15 | 0.00 | 0.0 |
| Data Deletion & User Rights | safe | 10 | 0.00 | 0.0 |
| Policy Change Notification | caution | 5 | 0.30 | 1.5 |

**Total deductions:** 52.5
**Final score:** round((1 − 52.5/205) × 100) = 74
**Grade:** B
**Risk:** Caution

---

## Summary Card

### Sleep Cycle - Tracker & Sounds
- **Overall Risk:** Caution
- **Score:** 74/100 (Grade B)

**Red Flags:**
- **Collects sensitive sleep and health data.** Sleep Cycle collects detailed health information including your sleep patterns, movements, snoring, sleep talking, height, weight, and pulse. This is sensitive health data that reveals a lot about your wellbeing.
- **Uses microphone in background overnight.** The app listens through your phone's microphone while you sleep to detect snoring, coughing, and sleep talking. These recordings are stored locally by default but can be backed up to servers if you opt in.
- **Sleep data stored on cloud servers if you enable backup.** If you turn on online backup, all your sleep and health data is uploaded to Google Cloud servers. You can delete this data by withdrawing consent or ending your subscription.
- **Health data may be shared with research partners.** If you consent, your personal data may be shared with researchers for sleep studies. Your data may also be transferred to countries outside Europe. Once shared with a researcher, they become the data controller.

**Green Flags:**
- **Health data stays on your device by default.** Sleep Cycle stores all your sleep and health data locally on your phone by default. The app cannot access or control your health data unless you explicitly give consent.
- **Full deletion rights with CSV export.** You can export your data to a CSV file directly in the app, delete specific sleep sessions, or request full account deletion. Most data is deleted within days, with backups cleared within 30 days.
- **Only shares with named service providers.** Sleep Cycle only shares data with specific named companies like Google Cloud, Amplitude, and Zendesk. They do not sell data to advertisers or data brokers, and they use EU Model Clauses for international transfers.
- **Notifies you of material policy changes.** If Sleep Cycle makes important changes to its privacy policy, they will send you a push notification through the app or email you directly.
- **Strong GDPR compliance with data protection officer.** Sleep Cycle is a Swedish company that follows GDPR rules closely. They list a data protection officer, explain all legal bases for processing, and provide detailed retention periods for each type of data.

**Verdict:** Sleep Cycle is a popular sleep tracking app with strong privacy protections and GDPR compliance. By default, all health and sleep data stays on your device — nothing is sent to servers unless you explicitly opt in. The app provides comprehensive user rights including CSV export, deletion, and correction. It only shares data with named service providers and uses EU Model Clauses for international transfers. However, the app does collect sensitive health data (sleep patterns, snoring, movements), uses your microphone continuously during sleep, and can store this data on cloud servers if you enable backup. Camera is used for optional pulse measurement and location is collected for weather and sleep statistics.
