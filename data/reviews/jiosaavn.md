# JioSaavn Privacy Policy Review

**Date:** 2026-05-17
**Analyst:** claude-sonnet-4
**Policy URL:** https://www.jiosaavn.com/corporate/privacy
**Terms URL:** https://www.jiosaavn.com/corporate/terms
**Policy Date:** November 14, 2024

---

## Summary Card

**App:** JioSaavn – Music & Podcasts
**Overall Risk:** Risky (Grade D)
**Score:** 47/100

### Red Flags
- **Comprehensive behavioral tracking** - The policy states they track everything you listen to, your device info, browsing activity, and use advertising identifiers (IDFA/GAID) to show personalized ads across all your devices
- **Data shared with advertising networks** - Your information is shared with advertisers, advertising networks, advertising servers, analytics companies, business partners, and rights holders
- **Some cookies last 20 years** - The cookie table shows device_id, latlong, ssid and other cookies set to expire after 20 years
- **Location collected and shared** - Approximate GPS collected with consent, plus IP/WiFi location. Location data may be shared with third parties for analytics and advertising
- **Unique device identifiers** - IP addresses, device IDs, AD-IDs/IDFAs, hardware model collected automatically for tracking
- **Residual data after deletion** - Policy states it's not always possible to completely remove all information from databases due to backups

### Green Flags
- **Some opt-out options** - Links provided to opt out of interest-based advertising through DAA, NAI, and EDAA
- **Account deletion available** - Users can delete account through settings with 30-day grace period
- **GDPR rights** - European users have access, rectification, erasure, restriction, objection, and portability rights
- **Age restriction** - Platform not directed to children under 18

### Verdict
JioSaavn tracks extensive listening and device data to personalize content and advertisements. Data is shared broadly with the advertising ecosystem. Some tracking cookies persist for up to 20 years. While account deletion is available and some opt-out options exist, the extensive tracking and data sharing warrant a Risky (Grade D) rating.

---

## Analysis Notes

### Key Findings

**1. Extensive Data Sharing (Dangerous)**
The policy explicitly states information is shared with "advertisers, advertising networks, advertising servers, and analytics companies" as well as business partners, sponsors, and rights holders. Third-party ad networks use cookies and similar technologies to serve ads across the internet.

**2. Long-Term Tracking (Major Concern)**
The cookie table reveals shocking durations:
- `device_id`: 20 years
- `latlong`: 20 years
- `ssid`: 20 years
- `fbsr_`: 20 years
- Some advertising cookies (FBM_REFERER, BN): 30 days to 1 day

**3. Comprehensive Activity Logging**
Everything is tracked: browser type, OS, activations, purchases, content accessed, listening times, page views, interactions with content and ads, and preceding page views.

**4. Cross-Device Tracking**
Uses IDFA/AD-IDs to track users across devices. Creates "unique device IDs" using multiple technologies (cookies, web beacons, pixel tags, in-app IDs).

**5. Location Collection**
- Approximate GPS with express consent
- IP address location (automatic)
- WiFi location
- Location shared with third parties for analytics and advertising

**6. Data Retention Issues**
Account deletion has a 30-day grace period (good for accidental deletions), but the policy explicitly warns that "it is not always possible to completely remove or delete all of your information from our databases without some residual data because of backups and other reasons."

### User Rights
- Account deletion: 30-day processing with grace period
- GDPR rights for EU users
- California privacy rights
- Marketing opt-out (30-day processing)
- Cookie controls (browser-based, limited)

### Privacy Controls
- Can opt out of interest-based ads through industry programs (DAA, NAI, EDAA)
- Can disable location collection in device settings
- Can change cookie settings (but site may not work properly)
- Note: "Do Not Track" headers are not recognized

---

## Scoring Breakdown

| Category | Risk | Deduction |
|----------|------|-------------|
| Camera & Microphone | Safe | 0 |
| Location & GPS | Risky | 9.75 |
| Contacts & Phonebook | Caution | 6 |
| Storage & File Access | Caution | 3 |
| Data Sharing with 3rd Parties | **Dangerous** | **30** |
| Account & Identity Data | Risky | 9.75 |
| Behavioural & Ad Tracking | **Dangerous** | **25** |
| Children's Data Handling | Caution | 3 |
| Network & Internet Activity | Risky | 3.25 |
| Device Info & Fingerprinting | Risky | 9.75 |
| Health & Biometric Data | Safe | 0 |
| Financial & Payment Data | Caution | 4.5 |
| Data Deletion & User Rights | Caution | 3 |
| Policy Change Notification | Caution | 1.5 |

**Total Deductions:** 108.5
**Final Score:** 47 (Grade D)

---

## Verbatim Policy Excerpts

**On Ad Tracking:**
> "We may allow third parties to serve you ads across the Internet and use third party ad networks providers to help present ads on the Platform using Cookies and similar technologies"

**On Cookie Duration:**
> From the Cookie Table: device_id (20 years), latlong (20 years), ssid (20 years)

**On Location Sharing:**
> "We may share your location with certain third-parties for analytics and advertising purposes"

**On Residual Data:**
> "you should be aware that it is not always possible to completely remove or delete all of your information from our databases without some residual data because of backups and other reasons"

**On Data Sharing:**
> "Your information may also be used by us or shared with our sponsors, partners, advertisers, advertising networks, advertising servers, and analytics companies or other third parties in connection with marketing, promotional, and other offers"
