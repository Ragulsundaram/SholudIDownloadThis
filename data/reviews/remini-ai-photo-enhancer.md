# Remini - AI Photo Enhancer — Privacy Review

**App:** Remini - AI Photo Enhancer  
**Developer:** Bending Spoons Apps ApS (parent: Bending Spoons S.p.A.)  
**Platform:** iOS  
**App Store URL:** https://apps.apple.com/in/app/remini-ai-photo-enhancer/id1470373330  
**Privacy Policy URL:** https://support.bendingspoons.com/privacy.html?app=1470373330  
**Policy Last Updated:** February 12, 2026  
**Review Date:** 2026-05-13  
**Reviewed By:** Claude Sonnet 4  
**Score:** 64 / 100 (Grade C, Caution)

---

## Summary Card

- **Overall risk:** Caution
- **Score:** 64 / 100
- **Grade:** C

### Red flags
- **Your photos and face data are uploaded to external servers** — To enhance your photos and generate AI images, Remini uploads your images and videos to its servers. It also extracts face data from your photos, which may be considered biometric data in some places. (High)
- **Face data is shared with third-party AI providers** — Remini shares your images and related face data with third-party AI service providers who process it to deliver AI-powered features. These providers work under contract but still handle your biometric data. (High)
- **App profiles you to measure ad effectiveness without ad consent** — Even if you don't consent to targeted ads, Remini still analyzes your behavior to measure how well their advertising campaigns work. This profiling is done under "legitimate interest," not your consent. (Medium)
- **Targeted ads use third-party trackers with your consent** — If you consent, Remini uses third-party tracking technologies including your device ID (IDFA) to show you personalized ads. These trackers collect data about your app usage and interests. (Medium)
- **Your data is kept for up to 2 years, and some for up to 10 years** — AI generation images and face data may be kept for up to 2 years. Other personal data is kept for 3 years. In extraordinary cases, data may be retained up to 10 years for legal defense. (Medium)
- **Privacy policy does not explain how you are notified of changes** — The policy shows a last updated date but does not explain if or how you will be warned before important privacy policy changes take effect. (Low)

### Green flags
- **Remini explicitly promises not to sell your images or data** — The privacy policy clearly states that Remini does not sell your data, including your images, to third parties under any circumstances.
- **Enhanced images are deleted automatically after 1 day** — Photos you upload for basic enhancement are deleted from Remini's servers after just one day. Face data used for enhancement is deleted immediately after processing.
- **You keep ownership of your images and videos** — Remini does not claim ownership of any images or videos you upload, enhance, or generate using the app.
- **You can exercise privacy rights directly inside the app** — You can request access, deletion, and other GDPR rights from within the app itself without needing to email or contact support separately.
- **Your images are not used to train AI unless you explicitly agree** — Remini does not use your uploaded images to train its AI algorithms unless you specifically opt in. US-based users' face data is never used for training.

### Verdict
Remini offers powerful AI photo enhancement, but the privacy trade-offs are significant. Your personal photos and face data are uploaded to servers, shared with third-party AI providers, and retained for extended periods. The app also tracks your behavior for advertising, even if you don't consent to targeted ads. The strong automatic deletion for enhanced images and the explicit no-sale commitment are positives, but users should think carefully before uploading sensitive or personal photos.

---

## Raw Policy Text

The privacy policy was fetched from the Bending Spoons support site on 2026-05-13. No separate Terms & Conditions URL was found.

Full extracted text is preserved in the audit trail below.

---

## Audit Trail — Category-by-Category Analysis

### Camera & Microphone
- **Risk:** Caution
- **Reasoning:** Camera and photo library access is required for core functionality. User must explicitly allow via system pop-up. The app may auto-scan the gallery for matching faces after the first upload, which is a minor concern.
- **Policy excerpt:** "To edit photos and videos or generate AI images, the app needs access to your library and your camera. You have to expressly allow this access through the request pop-up that appears on your device."

### Location & GPS
- **Risk:** Safe
- **Reasoning:** No explicit GPS or location access mentioned. IP address is collected as part of network activity, which can infer general area.
- **Policy excerpt:** None found for GPS.

### Contacts & Phonebook
- **Risk:** Safe
- **Reasoning:** No mention of contacts or phonebook access in the privacy policy.
- **Policy excerpt:** None found.

### Storage & File Access
- **Risk:** Caution
- **Reasoning:** Photo library access is required for core functionality. Access is user-initiated. The app auto-finds matching photos in the gallery after first upload, but these don't leave the device until explicitly uploaded.
- **Policy excerpt:** "To edit photos and videos or generate AI images, the app needs access to your library and your camera. You have to expressly allow this access through the request pop-up that appears on your device."

### Data Sharing with 3rd Parties
- **Risk:** Caution
- **Reasoning:** Data is shared with IT providers, third-party AI providers (under contract), advertising partners (with consent), and advisors/corporate buyers. The explicit no-sale statement is a strong positive. However, the "other parties as necessary" clause is broad.
- **Policy excerpt:** "We don't sell your data, including your images, to third parties under any circumstances."

### Account & Identity Data
- **Risk:** Caution
- **Reasoning:** Apple ID, custom identifiers, device identifiers, and IP address are collected. Custom identifiers enable cross-session tracking. IDFA is used for ads with consent.
- **Policy excerpt:** "User identifiers (such as Apple ID) and mobile identifiers (such as IP address, device identifiers, and custom identifiers that we generate to identify our users)"

### Behavioural & Ad Tracking
- **Risk:** Risky
- **Reasoning:** Two layers of concern: (1) targeted ads via third-party trackers are consent-based but use IDFA and device identifiers; (2) profiling for ad campaign effectiveness is done under "legitimate interest" without requiring explicit ad consent. Users can object but must actively do so.
- **Policy excerpt:** "We use third-party tracking technologies to serve you personalized ads. We analyze information about you and the way you use the app to create your user profile... To measure the effectiveness of our advertising campaigns and make them more relevant."

### Children's Data Handling
- **Risk:** Caution
- **Reasoning:** App is not meant for under 16. Will delete data if a child user is discovered. However, the App Store age rating is 4+, which contradicts the 16+ policy, and there is no age verification mechanism.
- **Policy excerpt:** "The app isn't meant to be used by people under the age of 16. We don't knowingly collect personal data from children. If we learn that a user is under the age of 16, we'll take reasonable steps to delete any processed data and close the associated account."

### Network & Internet Activity
- **Risk:** Risky
- **Reasoning:** IP address, network usage, crashes, and errors are logged continuously. Used for troubleshooting, service improvement (3-year retention), and profiling/ad measurement. IP is also used as a mobile identifier.
- **Policy excerpt:** "Internet and network activity information (such as IP address, and information about network usage, Internet connectivity, latency, failures, crashes, and error logs)"

### Device Info & Fingerprinting
- **Risk:** Risky
- **Reasoning:** Comprehensive device info (model, OS, language, name, region) combined with custom identifiers and IDFA creates a persistent fingerprint. Used for profiling and advertising. Retained for 3 years.
- **Policy excerpt:** "Device information (such as device model, device type, OS version, device language, device name, and region)"

### Health & Biometric Data
- **Risk:** Risky
- **Reasoning:** Face data is extracted from uploaded images, uploaded to servers, and shared with third-party AI providers. May be considered biometric data depending on jurisdiction. Retained up to 20 days for AI generation (max 2 years), or 1 year with consent for training (not US users).
- **Policy excerpt:** "Information about faces in the images and videos you upload, including, for example, information that estimates the location and shape of facial features ('face data'). Depending on the applicable law of your jurisdiction, face data may be considered biometric data."

### Financial & Payment Data
- **Risk:** Caution
- **Reasoning:** Payments are processed entirely through Apple. The app only collects subscription status. Subscription data retained for 3 years after expiration.
- **Policy excerpt:** "Information about your subscription"

### Data Deletion & User Rights
- **Risk:** Caution
- **Reasoning:** GDPR rights are available within the app. Automatic deletion after set periods is a positive. However, the rights exercise process is cumbersome (hidden 4-finger long press gesture), and data may be retained up to 10 years for legal defense.
- **Policy excerpt:** "Right to request that your personal data be deleted (erasure)."

### Policy Change Notification
- **Risk:** Unknown
- **Reasoning:** No dedicated section on policy change notification. Only a "Last updated" date is present. Unknown how users are notified of material changes.
- **Policy excerpt:** "Last updated: February 12, 2026"

---

## Scoring Verification

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | Caution | 15 | 0.30 | 4.5 |
| Location & GPS | Safe | 15 | 0 | 0 |
| Contacts & Phonebook | Safe | 20 | 0 | 0 |
| Storage & File Access | Caution | 10 | 0.30 | 3.0 |
| Data Sharing with 3rd Parties | Caution | 30 | 0.30 | 9.0 |
| Account & Identity Data | Caution | 15 | 0.30 | 4.5 |
| Behavioural & Ad Tracking | Risky | 25 | 0.65 | 16.25 |
| Children's Data Handling | Caution | 10 | 0.30 | 3.0 |
| Network & Internet Activity | Risky | 5 | 0.65 | 3.25 |
| Device Info & Fingerprinting | Risky | 15 | 0.65 | 9.75 |
| Health & Biometric Data | Risky | 15 | 0.65 | 9.75 |
| Financial & Payment Data | Caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | Caution | 10 | 0.30 | 3.0 |
| Policy Change Notification | Unknown | 5 | 0.50 | 2.5 |
| **Total** | | **205** | | **73.0** |

**Calculation:**
```
final_score = round((1 - 73.0 / 205) * 100)
final_score = round(64.39)
final_score = 64
```

**Grade:** C (55–69)  
**Overall Risk:** Caution

---

## Notes

- **Terms URL not found.** Multiple attempts to locate a separate Terms & Conditions page for Remini or Bending Spoons were unsuccessful (404s on common paths). The privacy policy may serve as the sole legal document.
- **"In-app tracking technologies" section references were present in the policy but the actual third-party list was not extractable from the HTML, possibly rendered dynamically or in a separate section. The policy states these are linked but the links were not captured in the static HTML fetch.
- The developer name in the App Store is "Bending Spoons Apps ApS" (Danish entity), while the privacy policy controller is "Bending Spoons S.p.A." (Italian entity, parent of AI Creativity S.r.l.). Both are part of the Bending Spoons group.
