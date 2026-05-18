# Privacy Review — Finch: Self-Care Pet

**Analyzed:** 2026-05-18
**Policy URL:** https://finchcare.com/privacy
**Policy Last Updated:** 2025-10-27
**Analyst:** claude-kimi-k2.6
**Status:** Complete

---

## App Metadata

| Field | Value |
|-------|-------|
| **Name** | Finch: Self-Care Pet |
| **Developer** | Finch Care Public Benefit Corporation |
| **Category** | Health & Fitness |
| **App Store** | https://apps.apple.com/in/app/finch-self-care-pet/id1528595748 |
| **App Store ID** | 1528595748 |

---

## Summary Card

### Finch: Self-Care Pet
**Overall Risk:** Caution (Score: 58 / Grade: C)

**Red Flags:**
- **Tracks your behavior for personalized marketing** — Finch collects your device advertising ID and watches how you use the app, then shares that information with social media platforms and advertising partners to show you personalized ads for Finch on other websites and apps.
- **Mental health journals stored on company servers** — The private reflections, goals, and journal entries you write in the app are stored on Finch's servers. While encrypted, the company holds the encryption keys by default, meaning they could access this sensitive mental health data if required by law.
- **Device identifiers collected for ad targeting** — The app collects your device's unique identifiers and advertising ID, which are used to recognize your device and target you with marketing campaigns.
- **Cute pet design appeals to kids despite 13+ policy** — Finch is a colorful digital pet app, which naturally attracts children under 13, yet the privacy policy says it is not meant for kids and offers no real age verification.

**Green Flags:**
- **Explicitly promises not to sell your data** — Finch clearly states it does not sell, rent, or lease your personal information to third parties, and it does not show advertisements from other companies inside the app.
- **Strong encryption for private journal entries** — Your private reflections and journal entries are encrypted on Finch's servers. You can also turn on Advanced Data Protection, which gives you a private recovery key that only you hold, meaning Finch cannot read your content at all.
- **Easy in-app data deletion** — You can delete your account and all your data directly inside the app by going to Settings and tapping "Delete Data", without needing to email customer support.
- **Contact numbers are hashed before upload** — If you use the optional Contact Sync feature, your contacts' phone numbers are converted into irreversible cryptographic hashes on your device before anything is sent to Finch's servers.
- **Payments handled by third-party processors** — Your credit or debit card details are processed by Shopify and other external payment gateways; Finch does not store your raw payment card information on its own servers.

**Verdict:** Finch is a well-meaning mental health app with genuinely privacy-friendly features, but its data practices are not as clean as its wholesome image suggests. The app tracks your behavior using advertising identifiers, shares your information with social media platforms for personalized marketing, and stores sensitive mental health content on its servers by default. On the positive side, Finch explicitly refuses to sell your data, encrypts your private journals, offers an in-app delete button, and uses clever cryptographic hashing to protect contact information. If you use the app, enable Advanced Data Protection to keep your reflections truly private, and opt out of personalized ads in your device settings.

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
Finch does not ask for your precise GPS location, but it may estimate your rough location from your internet address when you use the app.

**Access Type:** Continuous | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -4.5

**Policy Excerpt:**
> "We may derive a rough estimate of your location from your IP address when you use the Services, as is provided by default by some of our third-party service providers."

**Concerns:**
- Location inferred from IP address automatically

---

### Contacts & Phonebook — Caution
If you choose to use Contact Sync, the app reads your phone's contacts and uploads hashed phone numbers to find friends who also use Finch. The actual phone numbers are never stored.

**Access Type:** On-demand | **Required for Core Feature:** No | **Optional Access:** Yes | **Background Access:** No
**Score Impact:** -6.0

**Policy Excerpt:**
> "If you use Contact Sync, you will give the Finch app permission to access the contacts stored on your phone... Finch will not store your contacts' phone numbers, but only an encrypted 'hash' of them."

**Concerns:**
- Contacts accessed if optional feature is enabled
- User's own phone number may be discoverable by other users via Contact Sync

---

### Storage & File Access — Unknown
The privacy policy does not say whether the app accesses your photos or files stored on your device.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -5.0

**Concerns:**
- Policy is silent on storage and file access

---

### Data Sharing with 3rd Parties — Caution
Finch shares some of your information with service providers, analytics companies, and social media platforms to run the app and promote its own services, but it promises not to sell your data.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -9.0

**Policy Excerpt:**
> "We do not sell, rent, license, or lease your personal information to third parties. We may share personal information with: Service Providers... Third-Party Sponsors and Benefit Providers... We do not run ads for other companies on the Services."

**Concerns:**
- Data shared with advertising and marketing service providers
- Identification and activity info shared with social media platforms for personalized ads
- Third-party sponsors receive aggregated engagement data

---

### Account & Identity Data — Caution
You can use Finch without creating an account, but if you sign up, you give your name, email, and other details. Your phone number is hashed so Finch never sees the real number.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** Yes | **Background Access:** No
**Score Impact:** -4.5

**Policy Excerpt:**
> "If you choose to do so, you may register for a Finch account that will be linked to a secure hash of your phone number... If you choose to provide it, we will store your name, email address, (hashed) phone number, mailing/billing addresses, gender, age, and birthday."

**Concerns:**
- No anonymous cross-device sync possible
- Identity data may be shared with advertising partners for promotional campaigns

---

### Behavioural & Ad Tracking — Risky
Finch tracks how you use the app and collects your device's advertising identifier to show you personalized ads for Finch on social media and other websites.

**Access Type:** Continuous | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -16.25

**Policy Excerpt:**
> "We may share Identification Information and Internet Activity Information with social media platforms and other advertising partners for the purpose of serving you personalized advertisements from us on social media platforms and other third party websites."

**Concerns:**
- Advertising identifiers collected
- Usage behavior tracked and shared with advertising partners
- Personalized ads served on external platforms

---

### Children's Data Handling — Caution
Finch says it is not for children under 13 and will delete a child's data if discovered, but the cute pet design naturally attracts younger kids and there is no real age check.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -3.0

**Policy Excerpt:**
> "Our Services are not directed to children who are under the age of 13. We do not knowingly collect personal information from children under the age of 13. If we learn that we have collected personal information from a child under the age of 13 without the consent of the child's parent or guardian as required by law, we will delete that information."

**Concerns:**
- App design strongly appeals to children under 13
- No age verification mechanism in place

---

### Network & Internet Activity — Caution
Finch automatically logs your internet address, device type, and how you use the app to study trends and fix problems.

**Access Type:** Continuous | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -1.5

**Policy Excerpt:**
> "When you use the Services, we may automatically log the following information: Device Information: The manufacturer and model, operating system, browser type, IP address, and unique identifiers of the device... Usage Information: Information about how you use our Services..."

**Concerns:**
- Detailed usage patterns logged
- IP address used for location inference

---

### Device Info & Fingerprinting — Risky
Finch collects your device's unique identifiers and advertising ID to recognize your device and target you with marketing.

**Access Type:** Continuous | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -9.75

**Policy Excerpt:**
> "Device Information: The manufacturer and model, operating system, browser type, IP address, and unique identifiers of the device you use to access the Services."

**Concerns:**
- Advertising identifiers collected
- Unique device identifiers tracked

---

### Health & Biometric Data — Risky
Because Finch is a mental health app, the private reflections and goals you write are sensitive health information stored on the company's servers.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -9.75

**Policy Excerpt:**
> "If you choose to enable a feature that lets you create an account... we may store the full content you write in reflections, custom goals, or custom journeys on our servers in an encrypted way."

**Concerns:**
- Sensitive mental health content stored on external servers
- Company holds encryption keys by default

---

### Financial & Payment Data — Caution
Your payment details are handled by Shopify and other external payment processors; Finch does not store your raw card information.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -4.5

**Policy Excerpt:**
> "Our payment processor(s) will collect the financial information necessary to process your payments, such as your payment card number and authentication details. Please note, however, that we store only a tokenized version of such information and do not maintain payment card information on our servers."

**Concerns:**
- Payment data handled by third-party processors

---

### Data Deletion & User Rights — Caution
You can delete your data directly inside the app, and you can ask Finch to see, correct, or delete your personal information.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -3.0

**Policy Excerpt:**
> "You can delete your information at any time directly from the Services. In the Finch: Self Care Pet app, go to Settings... tap 'Delete Data', type 'DELETE', and tap 'Delete my data'. Completion of this flow will delete your information within 90 days of completion."

**Concerns:**
- Deletion may take up to 90 days
- Legal obligations may limit complete erasure

---

### Policy Change Notification — Caution
Finch can change its privacy policy at any time, and if you keep using the app after changes are posted, you automatically agree to them.

**Access Type:** N/A | **Required for Core Feature:** No | **Optional Access:** No | **Background Access:** No
**Score Impact:** -1.5

**Policy Excerpt:**
> "We may change this Privacy Policy at any time. When we do, we will post an updated version on this page... By continuing to use our Services or providing us with personal information after we have posted an updated Privacy Policy... you consent to the revised Privacy Policy."

**Concerns:**
- Continued use equals acceptance of changes
- No requirement for active re-consent

---

## Scoring Details

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | Unknown | 15 | 50% | 7.5 |
| Location & GPS | Caution | 15 | 30% | 4.5 |
| Contacts & Phonebook | Caution | 20 | 30% | 6.0 |
| Storage & File Access | Unknown | 10 | 50% | 5.0 |
| Data Sharing with 3rd Parties | Caution | 30 | 30% | 9.0 |
| Account & Identity Data | Caution | 15 | 30% | 4.5 |
| Behavioural & Ad Tracking | Risky | 25 | 65% | 16.25 |
| Children's Data Handling | Caution | 10 | 30% | 3.0 |
| Network & Internet Activity | Caution | 5 | 30% | 1.5 |
| Device Info & Fingerprinting | Risky | 15 | 65% | 9.75 |
| Health & Biometric Data | Risky | 15 | 65% | 9.75 |
| Financial & Payment Data | Caution | 15 | 30% | 4.5 |
| Data Deletion & User Rights | Caution | 10 | 30% | 3.0 |
| Policy Change Notification | Caution | 5 | 30% | 1.5 |

**Total Deductions:** 85.75
**Final Score:** round((1 - 85.75/205) * 100) = 58 (Grade: C)

---

## Review Notes

- Camera & Microphone and Storage & File Access are rated Unknown because the privacy policy is completely silent on whether the app requests these permissions. A future update to the policy or App Store labels should clarify this.
- The Contact Sync feature is notably privacy-preserving: phone numbers are hashed locally with a cryptographic hash function before any data leaves the device. Finch cannot reverse these hashes.
- The Advanced Data Protection feature is a genuine positive: it creates a private key recovery code held only by the user, meaning Finch cannot decrypt the stored content. However, it is opt-in, and most users will likely stick with the default server-side encryption.
- The app's cute digital pet design is strongly appealing to children under 13, creating a tension with the stated 13+ age limit. No age verification is mentioned.
- While Finch does not sell data or run third-party ads, it does share identification and internet activity information with social media platforms for personalized advertising of its own services.
- Payment processing is fully outsourced to Shopify, and Finch only stores tokenized payment data.
- The 90-day deletion timeline is longer than ideal but deletion is self-service and straightforward.
