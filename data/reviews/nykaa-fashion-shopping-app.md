# Nykaa Fashion - Shopping App

**Analyzed:** 2026-05-18
**Policy URL:** https://www.nykaafashion.com/lp/privacy-policy
**Policy Last Updated:** 2026-01-29

---

## Summary Card

**App:** Nykaa Fashion - Shopping App
**Overall Risk:** Caution
**Score:** 56 / 100
**Grade:** C

### Red Flags
- **Shares data with many third parties:** The app shares your personal information with delivery companies, payment processors, marketing firms, and analytics companies. It also uses advertising tools that build a profile of your interests to target you with ads.
- **Tracks you for targeted ads:** The app shows interest-based ads and uses third-party tools like Clevertap, Appsflyer, and Gamooga to collect your behavior and device signals. They use this to create a user persona for personalized marketing.
- **Changes posted without direct notice:** If the company updates its privacy policy, it only posts changes on the website. You won't get an email or app alert, so you have to remember to check yourself.
- **Some data kept even after deletion:** While you can request account deletion by emailing privacy@nykaa.com, the company says it may keep some of your data for legal or regulatory reasons without clearly stating exactly what or for how long.
- **Builds a profile from your device:** The app collects device information and network carrier details, then combines this with your behavior to create a profile used for targeting ads and personalized content.

### Green Flags
- **Clearly states it is for adults only:** The app says it is meant for adults and does not knowingly collect information from children.
- **Uses trusted payment gateways:** Payments are handled by well-known third-party processors like Razorpay, PayU, and Cashfree, which typically meet security standards.
- **Provides a grievance officer contact:** The company lists a specific grievance officer with name, address, email, and phone number for handling complaints, which is required under Indian law.
- **Allows data deletion requests:** You can ask to delete your account and associated data by emailing privacy@nykaa.com, though some information may be kept for legal reasons.

### Verdict
Nykaa Fashion collects significant personal information including identity, contact, location, device, and payment details to run its e-commerce platform. It shares this data with numerous third-party service providers and uses advertising SDKs to track your behavior and show personalized ads. While it offers some user rights and uses known payment processors, the broad data sharing, behavioral tracking, and passive policy-change approach earn it a Caution rating.

---

## Full Audit Notes

### Camera & Microphone
- **Risk:** Unknown
- The policy is silent on camera and microphone access. No explicit mention of photo uploads via camera or voice/video features.

### Location & GPS
- **Risk:** Caution
- The policy lists location details and IP address as collected categories. Technical details include device information, location, and network carrier when using mobile applications. This is used for order delivery and personalization.
- Concerns: No explicit mention of background location access; IP address used for location inference.

### Contacts & Phonebook
- **Risk:** Unknown
- No reference to contacts, address book, or phonebook data in the policy.

### Storage & File Access
- **Risk:** Unknown
- No explicit mention of file system access, photo library access, or storage permissions.

### Data Sharing with 3rd Parties
- **Risk:** Risky
- The policy states broad sharing with third parties for order processing, delivery, email communication, marketing assistance, payment processing, customer support, data analysis, and fraud prevention. It explicitly mentions third-party SDKs (Clevertap, Appsflyer, Crashlytics, Gamooga) that may collect PII for targeted marketing and ads. While contractual obligations are mentioned, the scope of sharing is wide.
- Concerns: Broad sharing with many third-party categories; advertising SDKs collect data for targeting; no clear in-app opt-out for data sharing described.

### Account & Identity Data
- **Risk:** Caution
- Collects demographic and identity data including name, email, contact number, shipping address, country, date of birth, and profile picture. Also lists transaction amount, bank name, card number, and card type. Payment is processed by third-party gateways (PayU, Razorpay, Cashfree), but the policy explicitly lists card number as a collected category, which is ambiguous.
- Concerns: Card details mentioned as collected, though payment processed by third parties; open and public data may also be collected.

### Behavioural & Ad Tracking
- **Risk:** Risky
- The policy states they use personal information to display interest-based ads. They rely on third-party analytics partners to gather first-party and third-party signals for personalized insights and targeted marketing. SDKs (Clevertap, Appsflyer, Crashlytics, Gamooga) collect contextual and behavioral non-PII data from device signals to create a user persona for enhanced personalization.
- Concerns: Interest-based advertising using personal information; third-party analytics partners collect behavioral signals; user persona created for enhanced personalization; no clear in-app opt-out for ad tracking described.

### Children's Data Handling
- **Risk:** Safe
- The platform is directed to be used by adults only. It explicitly states that minors should not make purchases, register, or submit personal information. The company does not knowingly collect information from minors.

### Network & Internet Activity
- **Risk:** Caution
- IP addresses and logs are collected as part of online identifiers and technical data. This is standard for service delivery and security, though also used for personalization.
- Concerns: IP address used, potentially for location inference.

### Device Info & Fingerprinting
- **Risk:** Risky
- Technical details such as device information, location, and network carrier are collected. Third-party partners collect and combine contextual and behavioral non-PII data from device signals to create a user persona for enhanced personalization and targeting.
- Concerns: Device signals used for ad targeting and user profiling; third-party SDKs involved in fingerprinting.

### Health & Biometric Data
- **Risk:** Safe
- The privacy policy does not mention health, fitness, or biometric information.

### Financial & Payment Data
- **Risk:** Caution
- Payment processing is handled by third-party SDKs: PayU, Razorpay, Cashfree. The policy lists transaction amount, bank name, card number, and card type as collected categories, which is ambiguous about whether raw card data is retained by Nykaa. In practice, Indian regulations require payment gateways to handle card data, but the policy wording is imprecise.
- Concerns: Policy explicitly lists card number as collected personal information, creating ambiguity about storage.

### Data Deletion & User Rights
- **Risk:** Caution
- Users can opt to get their account and associated data deleted by contacting privacy@nykaa.com. However, the policy states data is kept as long as required for legal or regulatory reasons, and there is no self-service deletion option.
- Concerns: No self-service deletion mechanism; data retention for legal/regulatory reasons is vague.

### Policy Change Notification
- **Risk:** Risky
- Changes are posted on the privacy policy page. Users are expected to re-visit regularly. No email, push notification, or advance notice is mentioned. No requirement for active re-consent.
- Concerns: No proactive notification to users; no advance notice or re-consent requirement.

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | Unknown | 15 | 0.50 | 7.50 |
| Location & GPS | Caution | 15 | 0.30 | 4.50 |
| Contacts & Phonebook | Unknown | 20 | 0.50 | 10.00 |
| Storage & File Access | Unknown | 10 | 0.50 | 5.00 |
| Data Sharing with 3rd Parties | Risky | 30 | 0.65 | 19.50 |
| Account & Identity Data | Caution | 15 | 0.30 | 4.50 |
| Behavioural & Ad Tracking | Risky | 25 | 0.65 | 16.25 |
| Children's Data Handling | Safe | 10 | 0.00 | 0.00 |
| Network & Internet Activity | Caution | 5 | 0.30 | 1.50 |
| Device Info & Fingerprinting | Risky | 15 | 0.65 | 9.75 |
| Health & Biometric Data | Safe | 15 | 0.00 | 0.00 |
| Financial & Payment Data | Caution | 15 | 0.30 | 4.50 |
| Data Deletion & User Rights | Caution | 10 | 0.30 | 3.00 |
| Policy Change Notification | Risky | 5 | 0.65 | 3.25 |

**Total Deductions:** 89.25
**Final Score:** 56 / 100
**Grade:** C
