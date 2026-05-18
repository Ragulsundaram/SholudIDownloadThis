# Strava: Run, Bike, Walk — Privacy Policy Analysis

**Reviewed:** 2026-05-18
**Policy:** https://www.strava.com/legal/privacy
**Terms:** https://www.strava.com/legal/terms
**Platform:** iOS
**Score:** 55/100 (Grade C, Caution)

---

## Summary

Strava's privacy policy reveals that user profiles and activities are set to 'Everyone' (public, including search engines) by default for users 18 and older. The app requires precise GPS location for core features like activity tracking and segments. It collects extensive health data including heart rate, HRV, and VO2max from connected devices, and uses this data along with your activities to train AI models for performance predictions and route recommendations. Your data is shared with corporate affiliates, service providers, partners for sponsored events, and third-party advertising networks for targeted ads about Strava's own services. However, Strava explicitly states it does not sell health information for advertising, provides multiple privacy controls, and offers GDPR-compliant data rights with a Data Protection Officer.

Key concerns: public by default for 18+ users, precise GPS required for core features, AI/ML training on health data, targeted advertising, data transfer to US.

Key positives: health data not used for ads without consent, only last 4 digits of payment cards stored, robust privacy controls available, GDPR compliant with DPO, additional protections for users under 18.

---

## Methodology

This analysis follows the ShouldIDownloadThis parser rules: every claim is backed by a direct verbatim quote, cautious language is used, and categories are rated based on the explicit evidence in the policy.

### Data Collection Observed

- **Personal:** Name, email address, phone number, date of birth, gender, username, password, photo, weight, fitness goals, experience level
- **Health:** Heart rate, HRV, VO2max, sleep information, step count, power, cadence, perceived exertion, activity data
- **Contacts:** Mobile address book and social networking contacts
- **Location:** Precise GPS location required for core features
- **Device:** Device and network information, log files, analytics information
- **Behavioral:** Club/challenge participation, kudos, actions taken, cookies, tracking pixels, SDKs
- **Financial:** Final four digits of credit card number
- **Other:** Photos, videos, posts, comments, messages, segments, routes

### Notable Excerpts

> "If you are 18 years or older, certain information, including your profile and your activities, is set by default to be viewable by 'Everyone.' 'Everyone' includes Strava users and the public, including search engine results."

> "For our core features to function (e.g., GPS activity tracking, routes, segments), you must grant us permission through your device to track your device's precise location."

> "Activity Data can also include health data, such as heart rate, if you choose to provide it... If we collect health information from these integrations (such as heart rate), we will not sell or use it for advertising or other similar purposes; we do not disclose it to third parties without your prior consent; and we will only use it for the specific purposes described in this Policy."

> "We use and develop machine learning ('ML') and artificial intelligence (including large language models) ('AI') to provide features designed to enhance your training and improve the Services... Depending on your privacy controls and sharing permissions, we also may use personal information such as health and Location Information for AI Features."

> "We may also disclose information to marketing partners or third-party advertising networks to promote our services (with your consent, where required)."

> "If you are located outside of the United States and choose to use the Services or provide information to us, you acknowledge and understand that your information will be transferred, processed, and stored in the United States."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | caution | 15 | 0.30 | 4.5 |
| Location & GPS | risky | 15 | 0.65 | 9.75 |
| Contacts & Phonebook | risky | 20 | 0.65 | 9.75 |
| Storage & File Access | caution | 10 | 0.30 | 3 |
| Data Sharing with 3rd Parties | risky | 30 | 0.65 | 19.5 |
| Account & Identity | caution | 15 | 0.30 | 4.5 |
| Behavioural & Ad Tracking | risky | 25 | 0.65 | 16.25 |
| Children's Data | safe | 10 | 0.00 | 0 |
| Network & Internet Activity | caution | 5 | 0.30 | 1.5 |
| Device Fingerprinting | caution | 15 | 0.30 | 4.5 |
| Health & Biometric | risky | 15 | 0.65 | 9.75 |
| Financial & Payment | caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3 |
| Policy Change Notification | caution | 5 | 0.30 | 1.5 |

**Total deductions:** 91.25
**Final score:** round((1 − 91.25/205) × 100) = 55
**Grade:** C
**Risk:** Caution

---

## Summary Card

### Strava: Run, Bike, Walk
- **Overall Risk:** Caution
- **Score:** 55/100 (Grade C)

**Red Flags:**
- **Profile and activities are public by default.** If you are 18 or older, your profile and activities are set to be viewable by 'Everyone' by default, which includes all Strava users, the public, and search engine results.
- **Precise location required for core features.** You must grant permission to track your device's precise location for core features like GPS activity tracking, routes, and segments to function.
- **Your data is used to train AI and ML models.** Strava uses your personal information, including health and location data, to train, test, and improve machine learning and AI models for features like performance predictions, route recommendations, and leaderboard anomaly detection.
- **Extensive health data collected from integrations.** Strava collects health data such as heart rate, HRV, VO2max, sleep information, and step count from connected devices and apps like Apple Health, Garmin, and Peloton.
- **Targeted advertising with third-party networks.** Strava discloses information to marketing partners and third-party advertising networks to promote their services, using cookies and tracking technologies to serve relevant ads.
- **Data transferred to the United States.** If you are located outside the United States, your information will be transferred, processed, and stored in the United States.

**Green Flags:**
- **Health data not used for advertising without consent.** Strava explicitly states that if it collects health information from integrations such as heart rate, it will not sell or use it for advertising or other similar purposes without your prior consent.
- **Does not collect full payment card numbers.** Strava collects only the final four digits of your credit card number and uses PCI-compliant third-party payment services for processing.
- **Robust privacy controls available.** Strava provides a variety of privacy controls to manage your information, including activity visibility settings, Beacon safety feature controls, and Flyby opt-out.
- **Account deletion available with clear process.** You can delete your account through provided instructions, though it may take up to 45 days to fully remove your data from systems.
- **GDPR compliant with Data Protection Officer.** Strava has a Data Protection Officer (DPO@strava.com), a lead supervisory authority in Ireland, and provides GDPR rights including access, rectification, deletion, and objection.
- **Additional protections for users under 18.** Strava is not intended for children under 13, and provides additional privacy and safety protections for users under 18 years of age.

**Verdict:** Strava makes your profile and activities publicly visible by default, tracks your precise GPS location for core features, and uses your data to train AI models, but offers robust privacy controls and does not sell health data for ads. If you are concerned about public visibility of your fitness activities and location by default, AI training on your health data, and broad data sharing with corporate affiliates and partners, review and adjust your privacy controls before using the app.
