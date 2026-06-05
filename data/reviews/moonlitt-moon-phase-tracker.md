# Review: Moonlitt: Moon Phase Tracker

**Analyzed:** 2026-06-01  
**Analyzed by:** claude-sonnet-4  
**Policy URL:** https://flippinghues.com/moonlitt/privacy-policy  
**Terms URL:** https://www.apple.com/legal/internet-services/itunes/dev/stdeula  
**Policy Last Updated:** 2025-01-24

---

## Summary Card

**App:** Moonlitt: Moon Phase Tracker  
**Developer:** Flipping Hues Srls  
**Overall Risk:** Caution  
**Score:** 74 / 100  
**Grade:** B  
**Recommendation:** Recommended

### Red Flags
- **Privacy policy is very short and silent on several topics:** The policy only covers a few topics and does not mention camera, contacts, health data, or how your internet activity is handled. This means there is less transparency than a full privacy policy would provide.
- **App requests location access even though it says it never stores it:** The app asks for permission to use your location for features like the moon compass and AR, but claims it never collects, stores, or uses that location to track you. While this sounds good, any permission request creates a small risk that something could go wrong.

### Green Flags
- **Does not collect any personal data:** The policy clearly states that Moonlitt does not collect personal data that could identify you. This is one of the best privacy commitments an app can make.
- **No advertising or tracking for marketing:** The policy explicitly says it does not share data with third parties for marketing or advertising purposes, and there are no ad networks or behavioral trackers in the app.
- **Anonymous analytics with easy opt-out:** The app uses Mixpanel for anonymous usage stats, but you can turn this off anytime in your device settings under Settings > Moonlitt > Analytics.
- **Works offline with no ads:** The app works without an internet connection and contains no advertisements, which means fewer opportunities for your data to be collected or shared.

### Verdict
Moonlitt is a privacy-respecting indie app with a refreshingly short and clear privacy policy. It explicitly commits to not collecting personal data and not sharing data for advertising. The only data collection is anonymous analytics via Mixpanel, which users can easily disable. The short policy leaves some categories unaddressed, and the app does request location access despite claiming not to store it. Overall, it is a solid choice for privacy-conscious users who want a moon tracking app.

---

## Detailed Analysis

### Data Collection Overview

The Moonlitt privacy policy is extremely concise and transparent. It makes a clear, upfront commitment:

> "Moonlitt does not collect personal data or share data with third parties for marketing or advertising purposes."

The only data collection mentioned is:
- **Anonymous device information:** Device model and operating system
- **Anonymous app usage patterns:** Session duration, number of sessions, and feature interactions
- These are used solely for "analyzing trends, improving app performance, and enhancing features"

The policy also notes that third-party analytics service Mixpanel may process this anonymous usage data, but users can opt out via Settings > Moonlitt > Analytics.

### Location Data

The app requests location access for features like the AR moon path and moon compass. However, the policy makes a strong commitment:

> "Location data is never collected, stored, or used to track you or your device."

This suggests location is used ephemerally on-device for AR calculations but never transmitted or stored. This is a good privacy practice, though the permission request itself creates a small trust surface.

### Data Sharing

No personal data sharing occurs. Anonymous analytics data may go to Mixpanel, but:
- It is explicitly stated as anonymous and non-identifying
- Users have an in-app opt-out switch
- No marketing, advertising, or data sales occur

### Children's Data

The policy does not mention children or age restrictions. The app is rated 4+ on the App Store, meaning young children may use it. Since no personal data is collected, this is not a major concern, but the policy would benefit from explicitly addressing this.

### Policy Change Handling

Significant updates will be communicated through the app or website. The policy does not commit to advance notice or require active re-agreement.

### App Features

The app provides moon phase tracking, lunar calendar, eclipse information, AR visualization, Apple Watch support, widgets, and Live Activities. It works offline and contains no ads.

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Contacts & Phonebook | Unknown | 20 | 0.50 | 10.0 |
| Data Sharing with 3rd Parties | Caution | 30 | 0.30 | 9.0 |
| Camera & Microphone | Unknown | 15 | 0.50 | 7.5 |
| Health & Biometric Data | Unknown | 15 | 0.50 | 7.5 |
| Location & GPS | Caution | 15 | 0.30 | 4.5 |
| Storage & File Access | Unknown | 10 | 0.50 | 5.0 |
| Children's Data Handling | Unknown | 10 | 0.50 | 5.0 |
| Network & Internet Activity | Unknown | 5 | 0.50 | 2.5 |
| Policy Change Notification | Caution | 5 | 0.30 | 1.5 |
| Account & Identity Data | Safe | 15 | 0.00 | 0 |
| Behavioural & Ad Tracking | Safe | 25 | 0.00 | 0 |
| Device Info & Fingerprinting | Safe | 15 | 0.00 | 0 |
| Financial & Payment Data | Safe | 15 | 0.00 | 0 |
| Data Deletion & User Rights | Safe | 10 | 0.00 | 0 |

**Total Deductions:** 52.5  
**Final Score:** round((1 - 52.5 / 205) × 100) = **74**  
**Grade:** B  
**Overall Risk:** Caution
