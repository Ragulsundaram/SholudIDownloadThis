# Digi Yatra — Privacy Review

> **Score:** 86 / 100 | **Grade:** A | **Risk:** Safe
> Analyzed: 2026-06-01 | Slug: `digi-yatra`

---

## App

| Field | Value |
|---|---|
| **Name** | Digi Yatra |
| **Developer** | Digiyatra Foundation |
| **Category** | Travel |
| **App Store URL** | https://apps.apple.com/in/app/digi-yatra/id6479873321 |
| **Icon URL** | https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a7/a3/4c/a7a34c6f-5c3a-de77-3b2d-3c42185f55d7/AppIcon-0-0-1x_U007ephone-0-1-85-220.jpeg/512x512bb.jpg |

---

## Executive Summary

**Digi Yatra** is a not-for-profit initiative under India's Ministry of Civil Aviation that enables paperless, biometric-based airport entry. Unlike nearly every other app reviewed on this platform, Digi Yatra employs a genuinely privacy-preserving architecture called Self-Sovereign Identity (SSI): your personal data lives only in an encrypted digital wallet on your phone, not in any company database.

**Key findings:**
1. No central database stores your personal information—the company literally cannot tell if a specific person has ever used the app
2. Your Aadhaar image is purged immediately after your digital credential is created
3. You must explicitly consent before every single trip to share your credential with the origin airport
4. Uninstalling the app permanently erases all your data with no copies remaining on servers
5. No advertising, no behavioral tracking, and no data selling
6. However, you must provide your Aadhaar ID and a selfie, and your facial biometric is shared with airports upon each consent

---

## What the Policy Actually Says

### Data Collection

The policy is remarkably transparent and organized into a table format showing exactly what data is collected, when, why, how long it's kept, and whether it's shared.

**Data stored locally on your phone (never on central servers):**
- **Mobile number** — used for OTP login, retained only until you log out
- **Aadhaar eKYC details** — name, date of birth, gender, face image, masked Aadhaar number. The raw Aadhaar image is purged immediately after VC creation
- **Facial image (selfie)** — captured during onboarding, matched with Aadhaar photo, stored locally as part of the VC
- **Boarding pass data (M1 string)** — parsed from uploaded boarding pass, stored locally until deleted or app uninstalled

**Data processed automatically (anonymized):**
- **IP address** — anonymized in real-time, used for firewall rules to block non-Indian IPs and VPNs, retained for a few hours
- **Backend logs** — system events like Aadhaar validation status and facial match scores (without PII), retained for 14 days
- **Device types and OS version** — anonymous crash analytics from app store dashboards
- **Anonymous app data** — download and usage statistics from Apple and Google app stores

**Data collected only for grievance resolution (if you share it unsolicited):**
- **Email ID** — if you include it in a support email, retained for 30 days
- **Feedback** — anonymous unless you include PII in the message body
- **Social media interactions** — stored according to platform policies

### Data Sharing

Data sharing is strictly limited and purposeful:

1. **Origin airport** — receives your VC and boarding pass data only with your explicit consent before each travel, retained up to 24 hours after flight departure
2. **DYF employees and advisers** — access data only as necessary for service fulfillment
3. **Security service providers** — assist in protecting and securing DYF systems
4. **Tech support partners** — may access anonymized IP addresses and backend logs (without PII) for issue resolution
5. **Successors/assigns** — in case of organizational transfer of functions

The policy explicitly states: "DYF does not store any data in a central repository. Information from the DYF App present on the user's device is only shared with explicit consent and not disclose any personal information to others."

### Architecture & Technical Measures

- **Self-Sovereign Identity (SSI)** — personal information is not stored in any central repository
- **Data hosted within India** — all processing complies with Indian laws
- **Encrypted transmission channels** — data in transit is protected
- **Access restricted** — authorized individuals only, on a need-to-know basis
- **Yearly comprehensive audit** — plus two non-comprehensive audits per fiscal year
- **Aadhaar Act compliance** — all Aadhaar-related transactions comply with the Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016
- **Digital Personal Data Protection Act compliance** — adheres to India's DPDP Act, 2023

### Minors Policy

Minors under 18 cannot independently use the app. A business rule requires an adult profile on the device before a minor profile can be created. Age verification uses the date of birth from Aadhaar eKYC data. The adult must consent on behalf of the minor.

---

## How the Score Was Reached

| Category | Risk | Max | Rate | Deduction |
|---|---|---|---|---|
| Data Sharing with 3rd Parties | caution | 30 | 0.30 | 9.0 |
| Account & Identity Data | caution | 15 | 0.30 | 4.5 |
| Camera & Microphone | caution | 15 | 0.30 | 4.5 |
| Health & Biometric Data | caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3.0 |
| Network & Internet Activity | caution | 5 | 0.30 | 1.5 |
| Policy Change Notification | caution | 5 | 0.30 | 1.5 |

**Total deductions:** 28.5
**Final score:** clamp(0, 100, round((1 - 28.5/205) × 100)) = **86**

---

## Red Flags

1. **Requires Your Aadhaar ID to Create Credentials** — You must provide your Aadhaar number and allow a selfie to be taken so the app can create a digital identity credential for airport entry.

2. **Your Face Data Is Shared with Airports Before Every Flight** — Each time you travel, you must consent to share your facial biometric credential with the origin airport so they can verify your identity at security gates.

3. **Tech Support Partners Can Access Some System Data** — Third-party partners who help with tech support and security may see anonymized IP addresses, backend logs, and device analytics to fix issues.

---

## Green Flags

1. **No Central Database Stores Your Personal Info** — Your Aadhaar details, selfie, and travel data are stored only in an encrypted wallet on your phone. The company cannot see if a specific person has ever used the app.

2. **You Must Explicitly Consent Before Every Trip** — The app cannot share your credentials with an airport unless you tap to approve it before each individual flight.

3. **Your Raw Aadhaar Image Is Deleted Immediately** — After your digital credential is created, the original Aadhaar image is purged right away. Only a masked version remains in your phone's wallet.

4. **Deleting the App Erases Everything Permanently** — Since all your data lives only on your device, uninstalling the app or deleting your credential permanently removes all your personal information with no copies left on company servers.

5. **No Ads and No Behavioral Tracking** — The app does not show advertisements, use tracking cookies, or build a behavioral profile for marketing purposes.

---

## Verdict & Recommendation

**Risk:** Safe | **Grade:** A | **Score:** 86/100

**Recommendation:** Recommended

Digi Yatra represents a rare example of privacy-by-design in a government-backed service. The Self-Sovereign Identity architecture ensures that your most sensitive data—Aadhaar details and facial biometrics—never leaves your phone except when you explicitly choose to share it with a specific airport for a specific trip. There is no central database, no tracking for ads, and no data brokering. The main caveat is inherent to the service itself: you must trust the app with your Aadhaar and facial biometric data, and you must consent to share your face with airport verifier systems every time you fly. But within the constraints of biometric-based airport entry, Digi Yatra handles your data about as responsibly as technologically possible.
