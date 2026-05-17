# Bazaart AI Photo Editor Design — Privacy Review

**Review Date:** 2026-05-18  
**Analyzed By:** Claude Sonnet 4  
**Policy URL:** https://www.bazaart.com/terms#privacy  
**Policy Last Updated:** 2026-03-02

---

## Summary Card

**App:** Bazaart AI Photo Editor Design  
**Developer:** Bazaart Ltd.  
**Overall Risk:** ⚠️ Risky (Grade C, Score: 65/100)

### Red Flags
- **Data shared with 20+ third parties:** Your information is shared with over 20 third-party services including Facebook, Google Analytics, AppsFlyer, and multiple AI companies. These services track your behavior and process your data.
- **Photos processed on company servers:** When you use certain features, copies of your photos and videos are uploaded to Bazaart's servers for processing. While they say this data is deleted after a few days, your content still leaves your device.
- **Marketing contact allowed:** The company can contact you with promotional offers and newsletters using your email address and phone number. You may receive marketing messages after signing up.
- **AI features use external services:** AI-generated content is created using external services like OpenAI, Google Gemini, and Replicate. Your prompts and images may be sent to these third-party AI providers.

### Green Flags
- **Users can delete their data:** You can request deletion of your personal information through the app. The company provides a way to review and remove your data.
- **No required account creation:** You can use basic features without creating an account. Signup is only required for cloud sync and premium features.
- **Face detection data not retained:** When the app detects faces in photos using Apple's Vision Framework, your face data is not kept or stored by the company.

### Verdict
Bazaart is a feature-rich AI photo editor with powerful capabilities, but it comes with significant privacy trade-offs. The extensive network of third-party services collecting your data for analytics and advertising, combined with server-side processing of your photos, makes this app a "think twice" recommendation. If you value privacy, consider using the app without creating an account and avoid the AI generation features that send your content to external servers.

---

## Detailed Category Analysis

### Camera & Microphone
- **Risk:** Caution
- **Access Type:** On-demand
- **Required for Core Function:** Yes
- **Plain English:** Camera and microphone access are requested for taking photos and transcribing videos. These permissions are needed for the app's core editing features.
- **Policy Excerpt:** "We may require additional device permissions to provide you certain parts of the services. These include camera permission for taking photos and videos, microphone and speech recognition permissions to transcribe videos."

### Location & GPS
- **Risk:** Safe
- **Access Type:** Never
- **Plain English:** The app does not appear to collect or use your location or GPS data.

### Contacts & Phonebook
- **Risk:** Safe
- **Access Type:** Never
- **Plain English:** The app does not access your contacts or phonebook.

### Storage & File Access
- **Risk:** Caution
- **Access Type:** On-demand
- **Required for Core Function:** Yes
- **Plain English:** Storage permission is requested to access files on your device for processing and saving your designs.
- **Policy Excerpt:** "We may require additional device permissions to provide you certain parts of the services. These include... storage permissions to access files on your device for processing."

### Data Sharing with 3rd Parties
- **Risk:** Risky
- **Access Type:** Continuous
- **Plain English:** Your data is shared with over 20 third-party companies including Facebook, Google Analytics, AppsFlyer, and AI service providers for analytics, advertising, and processing.
- **Policy Excerpt:** "We may use your email address with third party services, including Amplitude for analytics and Paddle for payments. We use the following third party services: (i) Apple Analytics; (ii) Facebook; (iii) AppsFlyer; (iv) Amplitude; (v) OneSignal; (vi) Google Payments; (vii) Google Analytics; (viii) Firebase; (ix) Hotjar Analytics; (x) Sentry.io."
- **Concerns:**
  - Extensive third-party ecosystem
  - Multiple analytics and tracking services
  - AI processing by external providers

### Account & Identity Data
- **Risk:** Caution
- **Access Type:** On-demand
- **Required for Core Function:** No
- **Plain English:** If you register, the app collects your name, photo, and email address. You can use basic features without an account.
- **Policy Excerpt:** "Moreover, when you register, we may retain the information you provided us at registration, including your name, photo and email address."

### Behavioural & Ad Tracking
- **Risk:** Risky
- **Access Type:** Continuous
- **Plain English:** The app uses multiple tracking services including Facebook, Google Analytics, AppsFlyer, and others to monitor your behavior and usage patterns.
- **Policy Excerpt:** "We use the following third party services: (i) Apple Analytics; (ii) Facebook; (iii) AppsFlyer; (iv) Amplitude; (v) OneSignal; (vi) Google Payments; (vii) Google Analytics; (viii) Firebase; (ix) Hotjar Analytics; (x) Sentry.io."
- **Concerns:**
  - Multiple advertising and analytics trackers
  - Cross-service tracking through Facebook and Google

### Children's Data Handling
- **Risk:** Caution
- **Plain English:** The app requires users to be 13 or older, or have parental consent if under 18. However, there's no strong verification system mentioned.
- **Policy Excerpt:** "When enrolling into the service, you represent and warrant that: (i) you are either over 18 years of age, or if you're over 13 and under 18, you obtained your legal guardian's consent to these terms."
- **Concerns:**
  - Self-certified age with no verification
  - App may appeal to younger users with sticker creation features

### Network & Internet Activity
- **Risk:** Safe
- **Access Type:** On-demand
- **Required for Core Function:** Yes
- **Plain English:** The app requires internet access for AI features and cloud services. No concerning network monitoring practices mentioned.

### Device Info & Fingerprinting
- **Risk:** Risky
- **Access Type:** Continuous
- **Plain English:** The app collects technical device information like your IP address and operating system, and shares it with multiple analytics companies for tracking purposes.
- **Policy Excerpt:** "We collect some raw information which may be considered as personally identifiable, which is technical information about your device, such as your IP address, your operating system and other technical information."
- **Concerns:**
  - IP address collection
  - Multiple device identifiers through analytics SDKs

### Health & Biometric Data
- **Risk:** Safe
- **Plain English:** The app uses Apple's Vision Framework to detect faces in photos but explicitly states that face data is not retained.
- **Policy Excerpt:** "We use Apple's Vision Framework on iOS to inspect whether photos contain a person's face or not. However, in such use, your face data is not retained if the photo is found to include face data."

### Financial & Payment Data
- **Risk:** Caution
- **Access Type:** On-demand
- **Required for Core Function:** No
- **Plain English:** Payments are processed through Paddle and your Apple/Google account. The app itself doesn't store your payment card details.
- **Policy Excerpt:** "We may charge our fees through your Apple or Google account or independently... We use Paddle to process payments."

### Data Deletion & User Rights
- **Risk:** Caution
- **Plain English:** You can request deletion of your information through the app, though specific details about what gets deleted and retention periods are limited.
- **Policy Excerpt:** "Can You Review or Remove Your Information? Yes. You can always review your information using our software and panel. You can also request to delete all relevant information."
- **Concerns:**
  - Limited detail on deletion scope and timelines

### Policy Change Notification
- **Risk:** Safe
- **Plain English:** You'll be notified of policy changes via electronic communication, and you have 30 days to terminate if you don't agree with the changes.
- **Policy Excerpt:** "We may amend these terms from time to time, provided that you shall be informed through electronic communication on such amendment and shall be granted the option to terminate your agreements with us by providing a 30 days prior written notice."

---

## Scoring Breakdown

| Category | Risk Level | Max | Rate | Deduction |
|----------|------------|-----|------|-----------|
| Data Sharing with 3rd Parties | Risky | 30 | 0.65 | 19.5 |
| Behavioural & Ad Tracking | Risky | 25 | 0.65 | 16.25 |
| Device Info & Fingerprinting | Risky | 15 | 0.65 | 9.75 |
| Camera & Microphone | Caution | 15 | 0.30 | 4.5 |
| Account & Identity Data | Caution | 15 | 0.30 | 4.5 |
| Financial & Payment Data | Caution | 15 | 0.30 | 4.5 |
| Children's Data Handling | Caution | 10 | 0.30 | 3.0 |
| Storage & File Access | Caution | 10 | 0.30 | 3.0 |
| Data Deletion & User Rights | Caution | 10 | 0.30 | 3.0 |
| **Total** | | **205** | | **71.5** |

**Final Score:** 100 - 71.5 = **65/100**  
**Grade:** C  
**Overall Risk:** Risky
