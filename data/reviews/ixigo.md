# ixigo Train, Bus, Metro Ticket — Privacy Review

**Developer:** Le Travenues Technology Ltd  
**Category:** Travel  
**Review Date:** 2026-06-01  
**Policy Source:** https://www.iubenda.com/privacy-policy/696667  
**Analyzed by:** claude-sonnet-4

---

## Summary Card

- **App:** ixigo Train, Bus, Metro Ticket
- **Overall Risk:** Dangerous
- **Score:** 31 / 100
- **Grade:** F

### Red Flags

- **Reads and uploads your text messages:** The app reads, uploads, and analyzes text messages from travel providers on your phone to check PNR status and flight or train delays. This means the app can see any SMS on your device, not just booking confirmations.
- **Shares list of apps on your phone:** ixigo explicitly shares an inventory of all apps installed on your device with third-party companies for advertising, analytics, and fraud detection. This reveals a lot about your personal life, health, finances, and relationships.
- **Tracks you across apps and websites for ads:** The app uses multiple advertising and tracking tools including Meta pixel, X Ads, Adjust, Twitter Remarketing, and Clevertap to follow your activity across other apps and websites. Your device ID and usage data are used to target you with ads.
- **Records your screen for advertising:** ixigo uses Microsoft Clarity to record your screen activity, clicks, and scrolling. Microsoft explicitly states this data may be used for Microsoft Advertising purposes, meaning your browsing behavior inside the app feeds ad targeting systems.
- **Sends your data to AI companies:** The app uses OpenAI's API to automate tasks and ElevenLabs for speech-to-text in its voice agent. Your personal data, voice recordings, or usage patterns may be processed by these external AI services.

### Green Flags

- **Data deletion available by email:** You can request deletion of your data by emailing customersupport@ixigo.com with the subject "Data Deletion Request." The company says it will complete the process within 30 days.
- **Payments handled by Google Pay:** When you make a payment, the app uses Google Pay and only receives a notification of whether the payment succeeded. Your actual card or bank details are never collected or stored by ixigo.
- **Lists all third-party services used:** The privacy policy names every third-party service that receives your data, including what specific information each one gets. This level of transparency makes it easier to understand where your data goes.

### Verdict

ixigo is one of the most privacy-invasive travel apps reviewed. While it is a popular and functional booking platform, the combination of SMS reading, installed-apps sharing, extensive cross-app ad tracking, and AI data processing creates a profile that is far more invasive than necessary for booking train or bus tickets. Users who value their privacy should look for alternative travel apps with more respectful data practices.

---

## Detailed Category Analysis

### Data Sharing with 3rd Parties — Dangerous (30 pts)

The policy explicitly lists sharing name, email, mobile phone number, device information, location, network carrier, and inventory of installed apps with third-party service providers. Named recipients include OpenAI, Meta, X/Twitter, Google, Microsoft, Amazon, Adjust, Clevertap, Cloudflare, Freshworks, and Elevenlabs. The stated purposes — "personalize the app, perform behavioral analytics, fraud detection" — are broad enough to cover almost any data use.

### Behavioural & Ad Tracking — Dangerous (25 pts)

At least seven distinct advertising/tracking services are active: AdMob, X Ads conversion tracking, Meta pixel, Adjust, Twitter Remarketing, Clevertap, and Google Tag Manager. Clevertap is explicitly described as collecting "personally identifiable information (PII). We use this information to better target users." Unique device identifiers for advertising (IDFA) are collected. Microsoft Clarity session recordings may be used for Microsoft Advertising.

### Device Info & Fingerprinting — Dangerous (15 pts)

The app collects IDFA, generates a persistent UUID on installation, and uses Cloudflare Bot Management to collect an extraordinarily detailed device fingerprint including motion sensor events, keypress events, mouse movements, touch events, scroll position, and more. The installed apps inventory also contributes to fingerprinting.

### Contacts & Phonebook — Risky (13 pts)

The SMS-reading feature is the most severe concern here. The app reads, uploads, and syntactically analyzes text messages from travel providers. This grants the app access to all SMS content, not just booking confirmations. Address book access is also available for friend invitation features.

### Camera & Microphone — Risky (9.75 pts)

The Tara AI voice agent uses ElevenLabs speech-to-text and text-to-speech. Voice data is processed by a third-party AI provider. While data is said to be hosted in India, the policy does not clarify retention, training use, or further sharing of voice recordings.

### Location & GPS — Risky (9.75 pts)

Geolocation is collected for location-based services and shared with third parties. Crashlytics also collects geographic position alongside advertising identifiers, linking location to ad profiles.

### Account & Identity Data — Risky (9.75 pts)

Public profiles may expose city, country, first name, last name, picture, state, and username to other users. Phone numbers may be used for commercial or promotional contact. Facebook Authentication may expose additional social data.

### Storage & File Access — Risky (6.5 pts)

By reading SMS messages, the app accesses stored communications and uploads them to external servers. While the policy claims SSL transmission and "secured environment," this is still external storage of private messages.

### Data Deletion & User Rights — Risky (6.5 pts)

Deletion is email-only (customersupport@ixigo.com), with a 30-day processing window. No in-app self-service deletion is mentioned. GDPR rights are listed but the practical mechanism is limited.

### Children's Data Handling — Unknown (5 pts)

The policy is completely silent on children, minors, or age restrictions. Given the app's travel-booking nature and extensive data collection, this is a notable omission.

### Financial & Payment Data — Caution (4.5 pts)

Google Pay handles payments; ixigo only receives success/failure notification. The app does not store raw card or bank data. Email address is collected in connection with payment.

### Network & Internet Activity — Risky (3.25 pts)

Cloudflare Bot Management collects IP address, browsing history, search history, clicks, page views, and session statistics. System logs also use IP addresses for maintenance.

### Policy Change Notification — Risky (3.25 pts)

Changes can be made at any time with notification on the website, possibly in-app, or via contact info. No mandatory re-consent for non-consent-based changes.

### Health & Biometric Data — Safe (0 pts)

No health or biometric data collection was found.

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Data Sharing with 3rd Parties | Dangerous | 30 | 100% | 30.0 |
| Behavioural & Ad Tracking | Dangerous | 25 | 100% | 25.0 |
| Device Info & Fingerprinting | Dangerous | 15 | 100% | 15.0 |
| Contacts & Phonebook | Risky | 20 | 65% | 13.0 |
| Camera & Microphone | Risky | 15 | 65% | 9.75 |
| Location & GPS | Risky | 15 | 65% | 9.75 |
| Account & Identity Data | Risky | 15 | 65% | 9.75 |
| Storage & File Access | Risky | 10 | 65% | 6.5 |
| Data Deletion & User Rights | Risky | 10 | 65% | 6.5 |
| Children's Data Handling | Unknown | 10 | 50% | 5.0 |
| Financial & Payment Data | Caution | 15 | 30% | 4.5 |
| Network & Internet Activity | Risky | 5 | 65% | 3.25 |
| Policy Change Notification | Risky | 5 | 65% | 3.25 |
| Health & Biometric Data | Safe | 15 | 0% | 0.0 |

**Total deductions:** 141.25  
**Final score:** 31 / 100  
**Grade:** F

---

## Audit Notes

- Policy was generated via iubenda and is unusually detailed in listing third-party services, but the practices described are highly invasive.
- The SMS-reading feature is described as limited to "travel providers" but the technical capability implied by "reads, uploads and syntactic analyses text messages" suggests broader access.
- The "inventory of installed apps" is explicitly named as a data point shared with third parties — this is rare to see stated so clearly and is a major privacy concern.
- Multiple contradictory signals: high transparency about third parties, but extremely broad data sharing; deletion available, but only via slow email process.
- `needs_review: false` because the policy is detailed and explicit enough to rate confidently.
