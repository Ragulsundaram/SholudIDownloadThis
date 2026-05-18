# Healthify: AI Calorie Tracker — Privacy Policy Analysis

**Reviewed:** 2026-05-18
**Policy:** https://webhook.healthifyme.com/terms-of-use/
**Terms:** https://webhook.healthifyme.com/terms-of-use/
**Platform:** iOS
**Score:** 52/100 (Grade D, Risky)

---

## Summary

HealthifyMe's privacy policy reveals extensive collection of sensitive health data including special categories like ethnicity, genetics, health conditions, and sexual orientation with explicit consent. The app uses your camera to take food photos, which are analyzed on-device but stored on their servers, and may misclassify non-food photos. Your health data from Google Health Connect is integrated. Third-party AI providers process your meal photos, chat messages, and health data for nutrition analysis and coaching. Customer service calls are recorded and stored on AWS. Targeted advertisements are delivered via Facebook and Google with your consent. The app explicitly states it does not sell your personal or health data and uses industry-standard encryption.

Key concerns: collects special categories of health data (ethnicity, genetics, sexual orientation), food photos stored on servers with misclassification risk, third-party AI providers process health data, Google Health Connect integration, customer service calls recorded on AWS, targeted ads via Facebook and Google.

Key positives: explicit consent required for sensitive data, food photo analysis happens on-device, explicitly does not sell data, industry-standard encryption, GDPR rights for EU users, dedicated grievance officer.

---

## Methodology

This analysis follows the ShouldIDownloadThis parser rules: every claim is backed by a direct verbatim quote, cautious language is used, and categories are rated based on the explicit evidence in the policy.

### Data Collection Observed

- **Personal:** Name, age, gender, phone number, email, mailing address
- **Health:** Height, weight, lifestyle, food preferences, medical conditions, health goals, fitness regimes, ethnicity, genetics, health, sexual orientation
- **Location:** IP address, GPS location (unless deactivated)
- **Device:** Device model, operating system, device details
- **Behavioral:** Pages visited, time spent, cookies, web beacons, email opening rates, link clicks
- **Financial:** Credit card, debit card, other payment mode information
- **Other:** Food photos via Snap feature, health data from Google Health Connect (heart rate, steps), call recordings on AWS

### Notable Excerpts

> "We may collect and process 'special categories of personal data' such as ethnic origin, genetics, health or sexual orientation, which are considered sensitive. We use this special category of personal data, for example to provide specialized diet plan and exercise routines. We require your explicit consent to collect and process special categories of personal data."

> "With your prior consent, the following activities may be undertaken with respect to your Food Photos: FILTERING: The Food Photos will be analyzed on your device... STORAGE: Thereafter, such Food Photos will be stored in our servers to help you track your nutrition and achieve your health goals... It is important to understand that the algorithm may occasionally misclassify non-food photos as food photos."

> "All health data through the integration with Google Health Connect, including your heart rate, number of steps taken,etc."

> "HealthifyMe uses artificial intelligence ('AI') technologies, including third-party AI service providers... When you use AI-powered features, the following categories of data may be transmitted securely to our third-party AI processing providers: Text inputs you submit (e.g., chat messages, queries), Meal photos, Selected health and fitness data necessary to generate insights (e.g., weight, goals, logged nutrition data, CGM data), Limited device and usage metadata required to process your request."

> "In the event, you have any telephonic interactions with our customer representatives, the call data is recorded and stored on the Amazon Web Services (AWS) for training and quality purposes."

> "Upon receiving your specific consent, we may share the data we collect from cookies or web beacons with our advertisement partners to track your visits, establish your non-personal identity and present you with targeted advertisements about our Services."

> "HealthifyMe does not sell your personal or health data."

> "When we collect particularly sensitive data (such as a credit card number or your geo-location), it is encrypted using industry-standard cryptographic techniques including but not limited to PBKDF2, AES256, TLS1.2 & SHA256."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | risky | 15 | 0.65 | 9.75 |
| Location & GPS | caution | 15 | 0.30 | 4.5 |
| Contacts & Phonebook | unknown | 20 | 0.50 | 10 |
| Storage & File Access | risky | 10 | 0.65 | 6.5 |
| Data Sharing with 3rd Parties | risky | 30 | 0.65 | 19.5 |
| Account & Identity | caution | 15 | 0.30 | 4.5 |
| Behavioural & Ad Tracking | risky | 25 | 0.65 | 16.25 |
| Children's Data | caution | 10 | 0.30 | 3 |
| Network & Internet Activity | caution | 5 | 0.30 | 1.5 |
| Device Fingerprinting | caution | 15 | 0.30 | 4.5 |
| Health & Biometric | risky | 15 | 0.65 | 9.75 |
| Financial & Payment | caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3 |
| Policy Change Notification | caution | 5 | 0.30 | 1.5 |

**Total deductions:** 98
**Final score:** round((1 − 98/205) × 100) = 52
**Grade:** D
**Risk:** Risky

---

## Summary Card

### Healthify: AI Calorie Tracker
- **Overall Risk:** Risky
- **Score:** 52/100 (Grade D)

**Red Flags:**
- **Collects sensitive health categories.** HealthifyMe collects special categories of personal data including your ethnicity, genetics, health conditions, and sexual orientation with your explicit consent to provide specialized diet and exercise plans.
- **Food photos analyzed and stored on servers.** With your consent, HealthifyMe uses your camera to take food photos. The photos are analyzed on your device but then stored on their servers to track nutrition. The algorithm can occasionally misclassify non-food photos and upload them.
- **Integrates with Google Health Connect.** HealthifyMe integrates with Google Health Connect to collect your health data including heart rate, number of steps taken, and other health metrics.
- **Third-party AI providers process your data.** HealthifyMe sends your meal photos, chat messages, health data (weight, goals, CGM data), and device metadata to third-party AI providers for nutrition analysis, meal recognition, and coaching assistance.
- **Customer service calls recorded and stored on AWS.** If you have telephonic interactions with HealthifyMe customer representatives, the call data is recorded and stored on Amazon Web Services (AWS) for training and quality purposes.
- **Targeted advertisements via Facebook and Google.** With your specific consent, HealthifyMe shares cookie and web beacon data with advertisement partners to track your visits and present you with targeted advertisements about their Services via Facebook and Google.

**Green Flags:**
- **Explicitly does not sell your data.** HealthifyMe explicitly states that it does not sell your personal or health data.
- **Requires explicit consent for sensitive data.** HealthifyMe requires your explicit consent to collect and process special categories of personal data including ethnicity, genetics, health, and sexual orientation. You may refuse or revoke consent at any time.
- **Food photo analysis happens on-device.** Food photos are analyzed on your device (not on servers) to check if they contain food. No photo is transferred to their servers unless the on-device algorithm determines it is a food photo.
- **Uses industry-standard encryption.** HealthifyMe encrypts sensitive data using industry-standard cryptographic techniques including PBKDF2, AES256, TLS1.2, and SHA256.
- **Provides GDPR rights for EU users.** If you are an EU data subject, HealthifyMe outlines your rights including access, rectification, erasure, restriction, objection, data portability, and protection from automated decision-making.
- **Has a dedicated grievance officer.** HealthifyMe has appointed Surabhi Srivastava as Grievance Officer with contact details including phone (+91 63664 40989) and address in Bangalore.

**Verdict:** HealthifyMe collects extensive health data including genetics and sexual orientation, processes your food photos through AI, shares data with third-party AI providers, and records your customer service calls stored on AWS. If you are concerned about extensive health data collection including sensitive categories, third-party AI processing of your food photos and health metrics, and call recordings stored on AWS, consider whether the nutrition tracking convenience is worth the privacy trade-off.
