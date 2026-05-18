# Privacy Review — Fitbod Workout & Gym Planner

**Analyzed:** 2026-05-18
**Policy URL:** https://fitbod.me/privacy-policy
**Policy Last Updated:** 2024-04-18
**Analyst:** claude-kimi-k2.6
**Status:** Complete

---

## App Metadata

| Field | Value |
|-------|-------|
| **Name** | Fitbod Workout & Gym Planner |
| **Developer** | Fitbod Inc. |
| **Category** | Health & Fitness |
| **App Store** | https://apps.apple.com/in/app/fitbod-workout-gym-planner/id1041517543 |
| **App Store ID** | 1041517543 |

---

## Summary Card

### Fitbod Workout & Gym Planner
**Overall Risk:** Caution (Score: 58 / Grade: C)

**Red Flags:**
- **Tracks behavior for personalized ads and cross-device targeting** — Fitbod collects your advertising ID and monitors how you use the app, then shares this information with advertising partners to show you personalized ads on other websites and apps, even tracking you across multiple devices.
- **Sensitive health and fitness data stored on servers** — The app stores your heart rate, weight, body measurements, sex, date of birth, and detailed workout history on its servers to generate personalized plans. This is sensitive health information that could be damaging if exposed in a data breach.
- **Aggressive device fingerprinting and ad identifiers** — Fitbod collects your MAC address, mobile advertising ID, unique device identifiers, cookie IDs, and your internet address to recognize and track your device across the web.
- **Data shared with advertising and analytics networks** — According to the California privacy disclosure, Fitbod shares your identifiers, internet activity, geolocation, and behavioral inferences with advertising networks, data analytics providers, and social networks.
- **Policy silent on camera, contacts, and file access** — The privacy policy does not say whether the app can access your camera, microphone, contacts, or the files stored on your phone.

**Green Flags:**
- **Explicitly promises not to use health data for advertising** — Fitbod states it does not use or share any data gathered in a health or fitness context for advertising, marketing, or data-mining purposes. This is a genuine positive for a fitness app.
- **Apple Health and Google Fit integration is optional** — You can choose whether or not to connect the app to Apple Health or Google Fit to import workout and body data. The app works without this connection.
- **Payments handled by third-party processors** — Your payment card information is processed by external payment processors. Fitbod says it does not directly collect or store your raw card details.
- **Account deletion available via email request** — You can request to delete your account and personal data by emailing Fitbod support with "Account Deletion" in the subject line.
- **Explicitly states it does not sell personal information** — Under the California Consumer Privacy Act section, Fitbod explicitly says it does not "sell" personal information and has no knowledge of selling data from minors.

**Verdict:** Fitbod is a well-known gym workout planner that collects detailed health and fitness information—including heart rate, weight, body measurements, and workout history—and stores it on its servers to generate personalized workout plans. While the developer explicitly promises not to use this health data for advertising, the app still engages in significant behavioral ad tracking through advertising partners, cross-device tracking, and collection of unique device identifiers. The privacy policy is also silent on whether the app accesses your camera, contacts, or local files.

---

## Category-by-Category Assessment

### Camera & Microphone — Unknown
The privacy policy does not say whether the app accesses your camera or microphone.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -7.5

**Concerns:**
- Policy is silent on camera and microphone access

---

### Location & GPS — Caution
The app may collect your precise location only if you give it permission, and you can turn this off in your phone settings.

**Access Type:** On-demand | **Required for Core Feature:** No | **Optional Access:** Yes | **Background Access:** No
**Score Impact:** -4.5

**Policy Excerpt:**
> "With your consent, we may also collect precise location-based information if you use our mobile application. You may opt out of this collection by changing the settings on your mobile device."

**Concerns:**
- General location inferred from IP address automatically
- Precise location collected with consent

---

### Contacts & Phonebook — Unknown
The privacy policy does not mention whether the app accesses your contacts or phonebook.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -10

**Concerns:**
- Policy is silent on contacts access

---

### Storage & File Access — Unknown
The privacy policy does not say whether the app accesses your photos or files stored on your device.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -5

**Concerns:**
- Policy is silent on storage and file access

---

### Data Sharing with 3rd Parties — Caution
Fitbod shares your information with service providers, business partners, advertising partners, and social media platforms to run the app and show you ads.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -9

**Policy Excerpt:**
> "We may share your personal information with our third-party service providers... Business Partners... Advertising Partners... We do not use or disclose to third parties data gathered in the health and fitness context for advertising, marketing, or other use-based data mining purposes."

**Concerns:**
- Data shared with advertising partners for personalized ads
- Behavioral data shared with social networks
- Inferences and profiles shared with data analytics providers

---

### Account & Identity Data — Caution
You must create an account to use the app, providing your name, email, and other personal details, which are then linked to your fitness activity.

**Access Type:** N/A | **Required for Core Feature:** Yes | **Optional Access:** No | **Background Access:** No
**Score Impact:** -4.5

**Policy Excerpt:**
> "We may collect Personal Data you voluntarily provide directly to us, such as when you sign up for an account; enter personal information, workout information, your health, fitness and/or body data..."

**Concerns:**
- Account required to use the app
- Identity linked to workout and health data

---

### Behavioural & Ad Tracking — Risky
Fitbod tracks how you use the app and works with advertising partners to show you personalized ads based on your behavior, even tracking you across different devices.

**Access Type:** Continuous | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -16.25

**Policy Excerpt:**
> "We may use personal information to tailor and provide you with content and advertisements... including through cross-device tracking. These third-party advertising partners may set Technologies and other tracking tools on our Services to collect information regarding your activities and your device... for purposes of delivering personalized advertisements to you when you visit digital properties within their networks."

**Concerns:**
- Cross-device tracking for personalized advertising
- Advertising partners collect detailed activity and device data
- Interest-based advertising enabled by default
- Google Analytics tracks usage patterns

---

### Children's Data Handling — Caution
The app says it is not meant for children under 13 and will delete a child's data if discovered, but there is no real age check.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -3

**Policy Excerpt:**
> "The Services are not directed to children under 13 (or other age as required by local law), and we do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information in violation of applicable law, we will delete any personal information we have collected, unless we have a legal obligation to keep it, and terminate the child's account."

**Concerns:**
- No age verification mechanism

---

### Network & Internet Activity — Caution
The app automatically logs your internet address, the pages you visit, and how you interact with content to study trends and improve the service.

**Access Type:** Continuous | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -1.5

**Policy Excerpt:**
> "We may also automatically collect information regarding your use of our Services, such as pages that you visit before, during and after using our Services, information about the links you click, the types of content you interact with, the frequency and duration of your activities, and other information about how you use our Services."

**Concerns:**
- Detailed browsing and activity patterns logged
- IP address collected automatically

---

### Device Info & Fingerprinting — Risky
Fitbod collects your MAC address, advertising ID, unique device identifiers, and cookie IDs to recognize your device and share this information with advertising and analytics partners.

**Access Type:** Continuous | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -9.75

**Policy Excerpt:**
> "We may collect certain information automatically when you use our Services, such as your Internet protocol (IP) address, user settings, MAC address, cookie identifiers, mobile carrier, mobile advertising and other unique identifiers, browser or device information, general location information..."

**Concerns:**
- MAC address collected
- Mobile advertising ID tracked
- Unique identifiers used for ad targeting
- Device fingerprint shared with advertising partners

---

### Health & Biometric Data — Risky
The app collects sensitive health information such as your heart rate, weight, body measurements, sex, and workout history, and stores it on company servers to build your personalized workout plan.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** Yes | **Background Access:** No
**Score Impact:** -9.75

**Policy Excerpt:**
> "We may collect iOS Health app and/or Healthkit data (including date of birth, heart rate, height, sex, weight and workouts)... Users are not required to share this information and can choose not to provide this additional information by not entering it when asked."

**Concerns:**
- Sensitive health and biometric data stored on external servers
- Workout history linked to personal identity
- Health data retention tied to account lifetime

---

### Financial & Payment Data — Safe
Your payment card details are handled by external payment processors; Fitbod says it does not directly collect or store your raw card information.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** 0

**Policy Excerpt:**
> "Any payments made via our Services are processed by third-party payment processors. We do not directly collect or store any payment card information entered through our Services, but it may receive information associated with your payment card information (e.g., your billing details)."

**Concerns:**
- Billing details may still be received by Fitbod

---

### Data Deletion & User Rights — Caution
You can request to delete your account by emailing Fitbod support, but there is no simple one-click delete button inside the app.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -3

**Policy Excerpt:**
> "Account holders can manage and delete their personal information processed by Fitbod by either visiting this website or by sending an email to support@fitbod.me with 'Account Deletion' in the subject line."

**Concerns:**
- No in-app self-service deletion button
- Deletion requires email or website visit

---

### Policy Change Notification — Caution
Fitbod can change its privacy policy at any time, and if you keep using the app after changes take effect, you automatically agree to them.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -1.5

**Policy Excerpt:**
> "We may revise this Privacy Policy from time to time in our sole discretion. If there are any material changes to this Privacy Policy, we will notify you as required by applicable law. You understand and agree that you will be deemed to have accepted the updated Privacy Policy if you continue to use our Services after the new Privacy Policy takes effect."

**Concerns:**
- Continued use equals acceptance of changes
- No requirement for active re-consent

---

## Scoring Details

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | Unknown | 15 | 50% | 7.5 |
| Location & GPS | Caution | 15 | 30% | 4.5 |
| Contacts & Phonebook | Unknown | 20 | 50% | 10 |
| Storage & File Access | Unknown | 10 | 50% | 5 |
| Data Sharing with 3rd Parties | Caution | 30 | 30% | 9 |
| Account & Identity Data | Caution | 15 | 30% | 4.5 |
| Behavioural & Ad Tracking | Risky | 25 | 65% | 16.25 |
| Children's Data Handling | Caution | 10 | 30% | 3 |
| Network & Internet Activity | Caution | 5 | 30% | 1.5 |
| Device Info & Fingerprinting | Risky | 15 | 65% | 9.75 |
| Health & Biometric Data | Risky | 15 | 65% | 9.75 |
| Financial & Payment Data | Safe | 15 | 0% | 0 |
| Data Deletion & User Rights | Caution | 10 | 30% | 3 |
| Policy Change Notification | Caution | 5 | 30% | 1.5 |

**Total Deductions:** 85.25
**Final Score:** round((1 - 85.25/205) * 100) = 58 (Grade: C)

---

## Review Notes

- The privacy policy is comprehensive and professionally written, with clear GDPR and CCPA compliance sections.
- A major positive: Fitbod explicitly promises not to use or disclose health/fitness context data for advertising, marketing, or data mining. This is rare and commendable for a fitness app.
- However, the app still engages in extensive non-health behavioral tracking for advertising through third-party partners, including cross-device tracking.
- The CCPA disclosure table confirms sharing identifiers, internet activity, geolocation, sensory data, and inferences with advertising networks, data analytics providers, and social networks.
- The policy is silent on camera, microphone, contacts, and storage access. These should be clarified.
- HealthKit and Health Connect integration are optional, but users can still manually enter health/body data which is stored on servers.
- Data deletion requires emailing support or visiting the website — no in-app self-service button.
- Policy was last updated April 2024, which is relatively recent.
- The company is based in San Francisco, CA, USA.
- The "Do Not Track" section explicitly states they do not respond to DNT signals.
