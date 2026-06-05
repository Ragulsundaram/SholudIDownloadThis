# Review: Harvee: Watch Stress Monitor

## App Info

- **Name:** Harvee: Watch Stress Monitor
- **Developer:** Peak Labs Ltd
- **Category:** Health & Fitness
- **App Store URL:** https://apps.apple.com/in/app/harvee-watch-stress-monitor/id6746194884
- **Privacy Policy:** https://harvee.app/privacy-policy.html
- **Terms of Use:** Not found (404 at `https://harvee.app/terms-of-use.html`)

## Summary Card

**App:** Harvee: Watch Stress Monitor  
**Overall Risk:** Safe — **Score: 99 / Grade: A**

### Red Flags
- **Policy changes may go unnoticed.** The privacy policy only updates a date at the top when it changes. It does not say how you will be notified, so you may not know the rules changed unless you check the website yourself.

### Green Flags
- **Health data stays on your device.** Your heart rate and HRV data from Apple HealthKit is processed entirely on your Apple Watch or iPhone. It is never sent to the developer's servers or shared with anyone.
- **No personal information collected.** The app does not ask for your name, email, address, or phone number. You do not need to create an account.
- **All data stays local.** The app stores everything on your device and does not upload it to the cloud. You can manage or remove HealthKit permissions anytime in the Apple Health app.

### Verdict
Harvee is a health-focused watch app that keeps every heartbeat on your device and collects almost nothing else. The developer makes a clear, affirmative promise that all HealthKit data is processed locally and never transmitted. The only minor concern is the passive policy-update mechanism.

---

## Category Breakdown

### Camera & Microphone — Safe
The app does not use your camera or microphone.

### Location & GPS — Safe
The app does not track your location.

### Contacts & Phonebook — Safe
The app does not access your contacts.

### Storage & File Access — Safe
The app reads health data from Apple HealthKit on your device. Nothing is uploaded to the cloud.

### Data Sharing with 3rd Parties — Safe
The developer says they do not share your health data with anyone. The only sharing mentioned is with Apple for refund processing, and only if you give explicit consent.

### Account & Identity Data — Safe
You do not need to create an account. The app does not collect your name, email, or any identity information.

### Behavioural & Ad Tracking — Safe
The app does not show ads or track your behavior across other apps.

### Children's Data Handling — Safe
The app is not meant for children under 13 and does not knowingly collect their data.

### Network & Internet Activity — Safe
The app may connect to the internet for app updates or refund processing, but the developer says no data about you is collected.

### Device Info & Fingerprinting — Safe
The developer says they do not collect device identifiers, except anonymized ones shared with Apple for refund processing only if you consent.

### Health & Biometric Data — Safe
The app reads your heart rate and HRV from Apple HealthKit to analyze stress, but all processing happens on your device and the data never leaves.

### Financial & Payment Data — Safe
Any in-app purchases are handled by Apple. The developer never sees your payment card.

### Data Deletion & User Rights — Safe
All your data is stored on your device. You can remove it by uninstalling the app or revoking HealthKit permissions in the Apple Health app.

### Policy Change Notification — Caution
The privacy policy does not say how you will be told if the rules change. It only updates a date at the top of the page.

---

## Raw Policy Source

See `harvee-watch-stress-monitor_policy.md` (deleted after processing) or fetch:
- https://harvee.app/privacy-policy.html

## Review Notes

- The privacy policy was scraped successfully and contains ~3,400 characters.
- The core claims are: no PII collected, all HealthKit data local-only, no external transmission.
- The Terms of Use page returned a 404; only the privacy policy was available for analysis.
- The app uses HealthKit (heart rate + HRV) which is sensitive biometric data, but the developer's local-only claim is explicit and strong.
- `needs_review: false` because the policy is clear and comprehensive for a health app of this scope.
