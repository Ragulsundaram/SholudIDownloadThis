# StepsApp Pedometer — Privacy Review

**Date:** 2026-05-19  
**Analyst:** claude-sonnet-4  
**Policy URL:** https://www.steps.app/privacy/ios  
**Policy Version:** 1.5  
**Policy Date:** 2026-03-02  

## Summary Card

**App:** StepsApp Pedometer  
**Developer:** StepsApp GmbH  
**Overall Risk:** Risky  
**Score:** 51 / 100  
**Grade:** D  

### Red Flags

- **Health data shared with AI companies** — Your heart rate, sleep, workout details, and menstrual cycle data may be sent to OpenAI and Replicate to generate optional fitness insights.
- **Advertising partners receive your data** — Google AdMob and Meta Ads are used for personalized and non-personalized ads inside the app.
- **Extensive health data collection** — Beyond steps, the app collects weight, heart rate, sleep, menstrual cycle, nutrition, and workout intensity data.
- **Advertising identifiers tracked** — Apple IDFA, IDFV, and Installation ID are collected, with IDFA used for ad targeting.
- **Wide third-party sharing** — Data is shared with cloud providers, analytics services, advertisers, payment processors, and AI companies, some based outside Europe.

### Green Flags

- **Full GDPR rights available** — You can access, correct, delete, export, or restrict your data via in-app settings or email.
- **Many features are optional** — Social features, health insights, newsletters, and community challenges can be skipped. Basic step tracking works without them.
- **No profiling or automated decision-making** — The policy explicitly states no automated decisions with legal effects are made.
- **Clear retention periods** — The policy lists how long each data category is kept (e.g., health data for 3 years, raw analytics for 15 days).

### Verdict

StepsApp is a polished and popular step tracker, but its privacy practices are concerning for an app that handles sensitive health data. The decision to share health information with AI providers and to run personalized ads through major ad networks makes this a poor fit for privacy-conscious users. If you only need basic step counting, you can limit some data sharing by disabling optional features and personalized ads.

---

## Category Breakdown

### Camera & Microphone — Unknown (-7.5)
The policy is completely silent on camera and microphone access. The app offers social sharing and community features, which may involve media uploads, but there is no explicit mention of these permissions.

### Location & GPS — Unknown (-7.5)
The app description markets GPS workout tracking as a Pro feature, yet the privacy policy's exhaustive data categories table does not include location or GPS data. This omission is notable and raises transparency concerns.

### Contacts & Phonebook — Safe (0)
The exhaustive data categories table does not include contacts or phonebook data. No indication the app reads your address book.

### Storage & File Access — Unknown (-5)
The policy mentions "media content shared in community features" under communications data, but does not clearly describe local file access permissions or photo library scanning.

### Data Sharing with 3rd Parties — Risky (-19.5)
Recipients listed: Google Cloud/Firebase, AWS, Firebase, Sentry, Google AdMob, Meta Ads, RevenueCat, OpenAI, Replicate, and payment vendors. Data transfers outside the EEA use Standard Contractual Clauses. Most concerning is the sharing of health data with AI providers for insight generation.

### Account & Identity Data — Risky (-9.75)
Profile info (username, avatar, social links), contact data (email), and identifiers (IDFV, Installation ID, IDFA) are collected. Apple Sign-In with Hide My Email is offered as a privacy-friendly option.

### Behavioural & Ad Tracking — Risky (-16.25)
Identifiers are used for personalized and non-personalized ads through Google AdMob and Meta Ads. Users can disable personalized advertising, but ads may still be shown.

### Children's Data Handling — Unknown (-5)
No explicit age requirement, COPPA compliance statement, or GDPR-K safeguards are mentioned. The app is rated 4+ in the App Store.

### Network & Internet Activity — Caution (-1.5)
Usage data (crash reports, screen views, interactions, timestamps) is collected and shared with Firebase and Sentry. Users can disable analytics in the app.

### Device Info & Fingerprinting — Risky (-9.75)
Detailed device info (model, OS, version, locale, timezone, language) plus identifiers (IDFV, Installation ID, IDFA) are collected. This combination enables device fingerprinting.

### Health & Biometric Data — Risky (-9.75)
Extensive health data is collected: steps, distance, goals, age, sex, height, weight, activity time, heart rate, sleep, menstrual cycle, and nutrition. Shared with OpenAI and Replicate for optional AI insights. Retained for 3 years after last sync.

### Financial & Payment Data — Caution (-4.5)
Anonymized receipts, subscription status, and purchase history are collected. Payments processed through Apple's App Store. Purchase data retained for 7 years after account closure.

### Data Deletion & User Rights — Caution (-3)
Full GDPR rights listed. Deletion available via in-app settings or email. Retention periods are specified but some are long (3 years for health data, 7 years for purchases). Policy contains a "[Please add]" placeholder for device and app info retention period.

### Policy Change Notification — Caution (-1.5)
Significant changes will be communicated in the app and on the website. No explicit requirement for active re-consent; continued use likely implies acceptance.

---

## Notes & Observations

- **Policy drafting issue:** The retention table contains "[Please add]" for device and app info, suggesting the policy was published before it was fully completed.
- **Location gap:** GPS workout tracking is a marketed feature, yet location data is absent from the data categories table. Users relying on this feature should be aware that how location data is handled is not disclosed.
- **AI insight transparency:** While sharing health data with OpenAI and Replicate is disclosed, users may not expect their heart rate and menstrual cycle data to be processed by external AI companies.
- **GDPR compliance:** The policy is structured around GDPR legal bases and rights, which is a positive sign, though the broad legitimate interest claims for advertising and analytics may be contested.
