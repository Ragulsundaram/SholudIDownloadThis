# Privacy Review — Gymverse: Gym Workout Planner

**Analyzed:** 2026-05-18
**Policy URL:** http://www.fitness22.com/privacy-policy
**Policy Last Updated:** 2019-04-02
**Analyst:** claude-kimi-k2.6
**Status:** Complete

---

## App Metadata

| Field | Value |
|-------|-------|
| **Name** | Gymverse: Gym Workout Planner |
| **Developer** | FITNESS22 LTD |
| **Category** | Health & Fitness |
| **App Store** | https://apps.apple.com/in/app/gymverse-gym-workout-planner/id1048454034 |
| **App Store ID** | 1048454034 |

---

## Summary Card

### Gymverse: Gym Workout Planner
**Overall Risk:** Caution (Score: 66 / Grade: C)

**Red Flags:**
- **'Human' privacy summary contradicts the full legal policy** — The top of the policy says "Nothing. None. Nada" about data collection, but the full legal version below reveals the app actually tracks your device, internet address, and behavior through multiple ad and analytics companies.
- **Multiple ad networks track your device for targeted ads** — The app uses Google AdSense, AdMob, and Facebook Ads, which place tracking cookies on your device and use your browsing behavior to show you personalized ads both inside and outside the app.
- **Unique device identifiers collected and shared** — The app collects your mobile device's unique ID, IP address, and other diagnostic data, then sends it to Google Analytics and advertising partners to recognize and track your device.
- **Policy silent on camera, contacts, and files** — The privacy policy does not mention whether the app can access your camera, microphone, contacts, or the files on your phone.
- **Data may be transferred to Israel** — The company is based in Israel and the policy says your data may be transferred there, where data protection laws may be different from your home country.

**Green Flags:**
- **Explicitly promises not to store Apple Health data** — If you connect the app to Apple Health or Google Fit, the developer promises they do not keep, store, or share that health information on their servers, and they do not use it for advertising.
- **Name data stays only on your device** — Although the policy says it may ask for your name, it explicitly states this information is only stored locally on your phone and is never sent to the company's servers.
- **Payments handled by Apple and Google** — Any in-app purchases are processed through Apple or Google Play payment systems; the developer says it does not collect or store your credit card information.
- **Promises notice before privacy policy changes** — The company says it will notify you by email or through a prominent notice in the app before any privacy policy changes take effect.

**Verdict:** Gymverse starts its privacy policy with a bold claim: "Nothing. None. Nada." — asserting it collects no personal information at all. But scroll down to the full legal version and the picture changes completely: the app collects your IP address, unique device identifiers, usage patterns, and location (if permitted), then shares this data with Google Analytics, Mixpanel, AdSense, AdMob, and Facebook for advertising and analytics. The developer explicitly promises not to store Apple Health data on its servers, which is a genuine positive. However, the contradiction between the simplified and full policy versions is misleading, and the app engages in meaningful behavioral ad tracking through multiple third-party networks.

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
The app may collect your location only if you give it permission, and you can turn this off in your phone settings at any time.

**Access Type:** On-demand | **Required for Core Feature:** No | **Optional Access:** Yes | **Background Access:** No
**Score Impact:** -4.5

**Policy Excerpt:**
> "We may use and store information about your location if you give us permission to do so ('Location Data'). We use this data to provide features of our Service, to improve and customize our Service. You can enable or disable location services when you use our Service at any time, through your device settings."

**Concerns:**
- Location stored when permitted
- Purpose described as "improve and customize" which is broad

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
The app shares your usage data and device information with Google Analytics, Mixpanel, and several advertising companies to show you ads and analyze how people use the app.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -9

**Policy Excerpt:**
> "We may use third-party Service Providers to monitor and analyze the use of our Service. Google Analytics... This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network. We may use third-party Service Providers to show advertisements to you... Google AdSense & DoubleClick Cookie... AdMob by Google... Facebook Ads."

**Concerns:**
- Data shared with Google for analytics and ad personalization
- Mixpanel receives usage data
- Facebook Ads receives data for targeting
- DoubleCookie enables interest-based advertising

---

### Account & Identity Data — Safe
The developer claims it does not collect or store your name, email, or other personal identity information on its servers.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** Yes | **Background Access:** No
**Score Impact:** 0

**Policy Excerpt:**
> "First name and last name (However, we do not store your name data on our servers anywhere. It is only stored in the app on your mobile device and not transferred to us)"

**Concerns:**
- None

---

### Behavioural & Ad Tracking — Risky
The app uses Google AdSense, AdMob, and Facebook Ads to track how you use the app and show you personalized ads based on your behavior, both inside and outside the app.

**Access Type:** Continuous | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -16.25

**Policy Excerpt:**
> "Google, as a third party vendor, uses cookies to serve ads on our Service. Google's use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our Service or other websites on the Internet. Google may use the collected data to contextualize and personalize the ads of its own advertising network."

**Concerns:**
- DoubleClick cookie used for interest-based advertising
- Google uses data to personalize ads on its network
- Facebook Ads integration for behavioral targeting
- Usage patterns tracked by Google Analytics and Mixpanel

---

### Children's Data Handling — Caution
The app says it is not meant for anyone under 18 and will delete a child's data if a parent reports it, but there is no age verification.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -3

**Policy Excerpt:**
> "Our Service does not address anyone under the age of 18 ('Children'). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers."

**Concerns:**
- No age verification mechanism
- Workout apps can appeal to teenagers under 18

---

### Network & Internet Activity — Caution
The app automatically records your internet address, browser type, and device information through analytics services to study how people use the app.

**Access Type:** Continuous | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -1.5

**Policy Excerpt:**
> "This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data."

**Concerns:**
- IP address and browsing activity logged by analytics
- Detailed usage patterns tracked continuously

---

### Device Info & Fingerprinting — Risky
The app collects your device's unique ID, operating system, and internet address to recognize your device and share this information with Google and advertising partners.

**Access Type:** Continuous | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -9.75

**Policy Excerpt:**
> "When you access the Service by or through a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data."

**Concerns:**
- Mobile device unique ID collected
- Unique device identifiers tracked continuously
- Data shared with Google for ad targeting

---

### Health & Biometric Data — Safe
The app can connect to Apple Health or Google Fit to read workout data like calories and heart rate, but only with your permission, and the developer promises not to store or share that health information.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** Yes | **Background Access:** No
**Score Impact:** 0

**Policy Excerpt:**
> "Fitness22 Does not keep or store this data, nor do we share or sell any user data at all, for any purpose. Fitness22 does not use any information gained through the HealthKit framework for advertising or similar services."

**Concerns:**
- None

---

### Financial & Payment Data — Safe
Any payments for premium features are handled by Apple or Google Play; the developer does not collect or store your credit card details.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** 0

**Policy Excerpt:**
> "We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy."

**Concerns:**
- None

---

### Data Deletion & User Rights — Caution
You can ask the company to see, correct, or delete your information, but since they claim not to store personal data on their servers, there may be little to delete.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -3

**Policy Excerpt:**
> "If you wish to be informed if Personal Data about is held by us (which it is not) you and if you want it to be removed from our systems, please contact us... The right to access, update or to delete the information we have on you. Whenever made possible, you can access, update or request deletion of your Personal Data directly within your account settings section."

**Concerns:**
- Ambiguity about what data actually exists to delete
- Deletion requires contacting company if not available in settings

---

### Policy Change Notification — Caution
The company says it will email you or post a prominent notice before privacy policy changes take effect, but if you keep using the app after changes, you automatically agree to them.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -1.5

**Policy Excerpt:**
> "We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the 'effective date' at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."

**Concerns:**
- Continued use equals acceptance
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
| Account & Identity Data | Safe | 15 | 0% | 0 |
| Behavioural & Ad Tracking | Risky | 25 | 65% | 16.25 |
| Children's Data Handling | Caution | 10 | 30% | 3 |
| Network & Internet Activity | Caution | 5 | 30% | 1.5 |
| Device Info & Fingerprinting | Risky | 15 | 65% | 9.75 |
| Health & Biometric Data | Safe | 15 | 0% | 0 |
| Financial & Payment Data | Safe | 15 | 0% | 0 |
| Data Deletion & User Rights | Caution | 10 | 30% | 3 |
| Policy Change Notification | Caution | 5 | 30% | 1.5 |

**Total Deductions:** 70.5
**Final Score:** round((1 - 70.5/205) * 100) = 66 (Grade: C)

---

## Review Notes

- The privacy policy has a highly unusual structure: a friendly "Human Version" at the top that claims zero data collection, followed by a standard legal version that reveals extensive tracking.
- The "Human Version" states: "What personal information does Fitness22 collect? Nothing. None. Nada." and "We don't have your personal information in the first place, and even if we did collect it (which we don't) we wouldn't share it."
- The "Full Version" explicitly contradicts this by listing: IP addresses, unique device identifiers, browser info, cookies, location data (with permission), usage patterns, and third-party sharing with Google Analytics, Mixpanel, AdSense, AdMob, and Facebook Ads.
- This contradiction is a significant trust issue. Users reading only the top summary would be severely misled about the app's actual privacy practices.
- Apple HealthKit integration is handled well: explicit consent required, data not stored on servers, not used for ads.
- The developer claims name data is only stored locally on the device, not transferred to servers.
- The policy is silent on camera, microphone, contacts, and storage access.
- The company is based in Israel and mentions data transfer to Israel.
- Policy last updated April 2019, which is quite old (6+ years) for an active app.
- The "Do Not Track" section explicitly states they do not support DNT signals.
