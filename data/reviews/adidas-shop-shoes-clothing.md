# Privacy Review: adidas: Shop Shoes & Clothing

**Developer:** runtastic GmbH  
**Platform:** iOS  
**Analyzed:** 2026-05-18  
**Policy URL:** https://adidasapp.adidas.com/legal/en-GB/privacy_policy.html  
**Policy Last Updated:** 2025-11-01

---

## Summary Card

**App:** adidas: Shop Shoes & Clothing  
**Overall Risk:** Risky  
**Score:** 51 / 100 (Grade D)

### Red Flags
- **Extensive ad tracking across platforms:** Adidas uses cookies, pixels, and device fingerprints to track what you do online and offline, then shows you targeted ads on Facebook, Google, Instagram, and other platforms.
- **Background location for marketing pushes:** The app can track your location even when it is closed to send you push notifications about nearby stores or events.
- **Unified consumer profile across channels:** Adidas combines your online browsing, in-store visits, social media activity, and purchase history into one detailed profile used for personalized marketing.
- **Health and body measurements stored:** If you share them, the app stores details like your weight, BMI, and heartbeat on its servers to help with size recommendations and fitness features.
- **Wide sharing with advertising partners:** Your personal data is shared with many outside companies including advertising agencies, social media platforms, and analytics firms for marketing and fraud prevention.

### Green Flags
- **Self-service data rights available:** You can request a copy of your data, download it in a portable format, or delete your account using built-in tools in the app and website.
- **Camera use is opt-in with no storage:** Features that use your camera, like augmented-reality try-on, ask for permission first and the app says it does not save any photos or videos.
- **Inactive accounts deleted after 4 years:** If you do not use your account for four years, adidas will automatically delete the data connected to it.
- **Uses standard secure payment processors:** Payments are handled by well-known processors like Apple Pay, Google Pay, PayPal, Adyen, and Klarna, which helps keep your card details secure.

### Verdict
Adidas collects a wide range of personal information including your location in the background, device fingerprint, and even health metrics if you choose to share them. It then combines this into a unified profile and shares it with numerous advertising and analytics partners to target you with ads across the internet. While the app does offer clear tools to access or delete your data, the scale of tracking and third-party sharing is significant enough that privacy-conscious users should think twice before creating an account or enabling optional features like location and personalized marketing.

---

## Full Audit Notes

### Camera & Microphone
- **Risk:** Caution
- Camera is used only for optional AR try-on and product label scanning. The policy states permission is required and images are not stored.
- Concerns: Camera access is optional but used for marketing-adjacent features like AR try-on.

### Location & GPS
- **Risk:** Risky
- Geofence-based push notifications require background location access. The app checks location every 15 minutes on Android and stores last known location temporarily on Apple devices.
- Concerns: Background location access is used for marketing push notifications, not core shopping functionality. Location data is combined with other personal data for profiling and targeted marketing.

### Contacts & Phonebook
- **Risk:** Unknown
- No reference to contacts, address book, or phonebook data in the policy.
- Concerns: Policy is silent on this category.

### Storage & File Access
- **Risk:** Caution
- The policy mentions "data stored on device when access is granted" under Mobile Device Information. This is limited to camera-related features and is user-initiated.
- Concerns: Policy is vague about exact scope of device storage access.

### Data Sharing with 3rd Parties
- **Risk:** Risky
- The policy lists extensive third-party recipients including Advertising Agency Partners, Social Media Platforms (Facebook, Google, Instagram, Snapchat, Pinterest, Bing), analytics providers (Adobe, Google Analytics, Flurry, Apps Flyer, mParticle, Amplitude), and many others. Data is shared for targeted advertising and business analytics.
- Concerns: Extensive sharing with advertising and social media partners for targeted marketing. Data enrichment creates unified profiles that are shared across adidas platforms and partners. Payment risk data (including partial credit card details) is shared with fraud prevention providers and used to train their models for other clients.

### Account & Identity Data
- **Risk:** Risky
- The policy describes "Data Enrichment" where adidas creates a single unified consumer profile by matching all personal data collected directly or indirectly across digital and offline channels. This includes social media interactions, in-store data, and browsing behavior linked to your identity.
- Concerns: Comprehensive identity profiling across all touchpoints (online, offline, social media). Profile data is used for targeted advertising and marketing personalization. Social media identifiers and handles are collected and linked to your profile.

### Behavioural & Ad Tracking
- **Risk:** Risky
- Adidas uses cookies, pixels, tags, beacons, and javascript to track browsing behavior. They use profiling, audience management, and data models to target ads on third-party platforms like Facebook, Google, YouTube, and Instagram.
- Concerns: Cross-platform behavioral tracking using cookies, pixels, and device fingerprinting. Data models are built using machine learning to predict preferences and optimize ad targeting. Marketing analytics retention periods of up to 38 months (Google Analytics).

### Children's Data Handling
- **Risk:** Safe
- The privacy policy does not mention specific children's data protections, but the app is clearly an adult shopping platform, not child-directed.

### Network & Internet Activity
- **Risk:** Caution
- Browsing Information including IP address, clickstream data, pages visited, and referral URLs are collected. IP addresses are used for location inference and security screening.
- Concerns: IP address is used for location inference and security screening. Browsing behavior is logged and used for profiling and marketing analytics.

### Device Info & Fingerprinting
- **Risk:** Risky
- Device fingerprint (including browser fingerprint) is explicitly listed as part of Identity Information. Device EUI, device ID, IP/Wifi Information, and operating system are also collected.
- Concerns: Explicit collection of device and browser fingerprints for identification. Fingerprint data is linked to your identity profile and used for marketing and analytics. Device information is shared with advertising and analytics partners.

### Health & Biometric Data
- **Risk:** Risky
- Measurements and Health Information (BMI, heartbeat per minute) are collected with consent. This data is stored on adidas servers and linked to your profile.
- Concerns: Health data including BMI and heartbeat are stored on company servers. Measurement data is used for size recommendations via third-party machine learning providers. Health and fitness data may be combined with other profile data for analytics.

### Financial & Payment Data
- **Risk:** Caution
- Payment Information is collected for order processing. Partial credit card details are shared with Payment Risk Solution Providers for fraud detection. Standard payment processors (Adyen, Klarna, PayPal, Apple Pay, Google Pay) are used.
- Concerns: Partial credit card details are shared with fraud prevention providers. Payment risk data is used to train machine learning models for the provider's other clients.

### Data Deletion & User Rights
- **Risk:** Caution
- Self-service tools are available for access, portability, and deletion. Standard processing time is one month. Order/transactional data is archived for 10 years for legal compliance. Inactive accounts are deleted after 4 years.
- Concerns: Order and transactional data is retained for 10 years even after deletion requests. Deletion processing can take up to one month (or three months in complex cases).

### Policy Change Notification
- **Risk:** Caution
- Significant changes are announced in advance and users are informed, potentially via email. However, continued use may constitute acceptance of changes.
- Concerns: No explicit requirement for users to actively re-agree to policy changes. Policy does not specify a notice period for significant changes.

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | Caution | 15 | 0.30 | 4.50 |
| Location & GPS | Risky | 15 | 0.65 | 9.75 |
| Contacts & Phonebook | Unknown | 20 | 0.50 | 10.00 |
| Storage & File Access | Caution | 10 | 0.30 | 1.50 |
| Data Sharing with 3rd Parties | Risky | 30 | 0.65 | 19.50 |
| Account & Identity Data | Risky | 15 | 0.65 | 9.75 |
| Behavioural & Ad Tracking | Risky | 25 | 0.65 | 16.25 |
| Children's Data Handling | Safe | 10 | 0.00 | 0.00 |
| Network & Internet Activity | Caution | 5 | 0.30 | 1.50 |
| Device Info & Fingerprinting | Risky | 15 | 0.65 | 9.75 |
| Health & Biometric Data | Risky | 15 | 0.65 | 9.75 |
| Financial & Payment Data | Caution | 15 | 0.30 | 4.50 |
| Data Deletion & User Rights | Caution | 10 | 0.30 | 3.00 |
| Policy Change Notification | Caution | 5 | 0.30 | 1.50 |

**Total Deductions:** 101.25
**Final Score:** 51 / 100
**Grade:** D
