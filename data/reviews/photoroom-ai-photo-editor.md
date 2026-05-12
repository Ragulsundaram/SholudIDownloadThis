# PhotoRoom: AI Photo Editor — Privacy Review

**Analyzed:** 2026-05-13  
**Policy URL:** https://photoroom.com/legal/privacy/  
**Terms URL:** Not found (404)  
**Analyst:** claude-sonnet-4

---

## Summary Card

**App:** PhotoRoom: AI Photo Editor  
**Developer:** Photoroom S.A.S  
**Overall Risk:** Caution  
**Score:** 62 / 100  
**Grade:** C

### Red Flags
- **Your uploaded photos may train AI models by default.** PhotoRoom can use the photos you upload to improve its AI models unless you manually turn this off in your account settings. Once your photos have been used for training, opting out does not undo that past use.
- **Your purchases and device ID are tracked for ads.** PhotoRoom uses your purchase history and device identifiers for advertising, analytics, and personalization. The App Store privacy label confirms tracking uses Purchases and Identifiers.
- **Cookie data kept for up to 25 months.** Social network and audience measurement cookies store your IP address and pages viewed for up to 25 months with your consent, creating a long-term record of your online activity.
- **Data may be transferred outside Europe.** PhotoRoom states that your personal data may be transferred outside the European Economic Area under GDPR protections, which means your data could be stored or processed in countries with different privacy laws.
- **Purchase records kept for 10 years.** PhotoRoom retains your purchase and transaction records for a full decade, which is a very long time even by industry standards.

### Green Flags
- **You can opt out of AI model training.** PhotoRoom allows you to opt out of having your uploaded photos used to train AI models at any time through your account settings.
- **Strong GDPR rights including erasure and portability.** PhotoRoom provides extensive user rights under GDPR, including the right to access, delete, and export your data. They typically respond to requests within one month.
- **Does not sell or share data for direct ads.** PhotoRoom explicitly states that it does not sell or share your personal information under CCPA definitions, and does not give outsiders your data for their own direct advertising.
- **No direct advertising to third parties.** PhotoRoom does not provide your information to outside companies so they can show you ads on other platforms.

### Verdict
PhotoRoom is a capable AI photo editor that requires camera and photo access to function. It offers strong GDPR user rights and claims not to sell your data, but it uses your purchase history and device identifiers for advertising and analytics, stores cookie data for up to 25 months, and may use your uploaded photos to train AI models unless you actively opt out. Data is shared with Apple, RevenueCat, Dub, and other service providers, and may be transferred outside the European Economic Area.

---

## Full Category Assessment

### Camera & Microphone — Caution
PhotoRoom needs access to your camera and photos to edit images, which is the core purpose of the app. Access requires your permission and lasts until you withdraw it.

**Policy excerpt:** "Device camera and photo access requires approval and lasts until withdrawn."

**Concerns:**
- Uploaded photos may be used for AI model training by default

### Location & GPS — Unknown
The privacy policy does not mention whether PhotoRoom accesses your GPS location.

**Concerns:**
- IP address collected for cookies may reveal approximate location

### Contacts & Phonebook — Unknown
The privacy policy does not mention whether PhotoRoom accesses your contacts or address book.

### Storage & File Access — Caution
PhotoRoom accesses your photos when you choose to upload or edit them. This is required for the app to work, but your uploaded images may be used to train AI models unless you opt out.

**Policy excerpt:** "By operating the service, users acknowledge uploaded visuals may refine AI models, yet they may opt-out of this at any time through account controls."

**Concerns:**
- Uploaded photos may be used for AI model training by default
- Opt-out does not undo prior processing

### Data Sharing with 3rd Parties — Caution
PhotoRoom shares your data with service providers like Apple, RevenueCat, and Dub, but claims it does not sell your data or give it to others for their own ads.

**Policy excerpt:** "Records may be transferred outside the European Economic Area under GDPR protections. We do not 'sell' or 'share' data under CCPA meanings."

**Concerns:**
- Data transferred outside the EEA
- Multiple service providers receive user data
- Referral addresses shared with Dub

### Account & Identity Data — Caution
PhotoRoom collects your email, login credentials, and purchase records to manage your account. Some data is kept for years even after you stop using the app.

**Policy excerpt:** "Gathered details facilitate account management, billing, app operations, support tickets, content moderation, newsletters, and anti-fraud measures."

**Concerns:**
- Purchase records retained for 10 years
- Login credentials archived for 5 years after 2 years dormancy
- Cookie data retained for 25 months

### Behavioural & Ad Tracking — Risky
PhotoRoom tracks your purchases and device identifiers for advertising, analytics, and personalization. Cookie data about your online activity is kept for up to 25 months.

**Policy excerpt:** "Social network and audience measurement Cookies preserve IP address, pages viewed, etc. for up to twenty-five months with consent."

**Concerns:**
- Purchase history used for advertising and analytics
- Device identifiers used for tracking
- Cookie data retained for 25 months
- Limited opt-out mechanisms mentioned

### Children's Data Handling — Caution
PhotoRoom says it is not intended for children under 13, but there is no strong age verification system to enforce this.

**Policy excerpt:** "The platform is not intended for...children under the age of 13."

**Concerns:**
- No robust age verification mechanism
- No specific COPPA compliance measures mentioned

### Network & Internet Activity — Caution
PhotoRoom needs internet access to work. Your IP address is logged and used for cookies and audience measurement, which can reveal what websites you visit.

**Policy excerpt:** "Social network and audience measurement Cookies preserve IP address, pages viewed, etc. for up to twenty-five months with consent."

**Concerns:**
- IP address logged for 25 months via cookies
- Usage details and crash diagnostics collected continuously

### Device Info & Fingerprinting — Risky
PhotoRoom collects your device ID and uses it for advertising and analytics tracking, which helps build a profile of your activity across sessions.

**Policy excerpt:** "purchase history, email, photos/videos, user and device IDs, usage details, and crash diagnostics for advertising, analytics, personalization, and app functionality."

**Concerns:**
- Device IDs used for ad targeting
- Identifiers tracked continuously
- Creates persistent device profile for analytics

### Health & Biometric Data — Safe
PhotoRoom does not collect health or biometric data.

### Financial & Payment Data — Caution
PhotoRoom processes payments through Apple for in-app purchases. It does not store your credit card directly, but keeps your purchase records for 10 years.

**Policy excerpt:** "To validate refunds, interaction logs are forwarded to Apple and RevenueCat, where they reside for a six-month term."

**Concerns:**
- Purchase records retained for 10 years
- Interaction logs shared with Apple and RevenueCat

### Data Deletion & User Rights — Caution
PhotoRoom gives you GDPR rights to access, delete, and export your data, and they usually respond within a month. However, some data is kept for legal or business reasons even after you request deletion.

**Policy excerpt:** "People may exercise extensive controls, including Right of access, Right to erasure/right to be forgotten, Right to data portability, plus options to oppose processing or revoke approval."

**Concerns:**
- Some data retained for legal/accounting reasons
- Long archival periods for dormant accounts
- Opt-out of AI training does not undo prior processing

### Policy Change Notification — Caution
PhotoRoom says it will announce updates to the privacy policy, but it is not clear if you will be actively notified or if you need to keep checking the website yourself.

**Policy excerpt:** "Updates will be announced."

**Concerns:**
- Unclear notification mechanism for policy changes
- No explicit advance notice period stated

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | Caution | 15 | 0.30 | 4.5 |
| Location & GPS | Unknown | 15 | 0.50 | 7.5 |
| Contacts & Phonebook | Unknown | 20 | 0.50 | 10.0 |
| Storage & File Access | Caution | 10 | 0.30 | 3.0 |
| Data Sharing with 3rd Parties | Caution | 30 | 0.30 | 9.0 |
| Account & Identity Data | Caution | 15 | 0.30 | 4.5 |
| Behavioural & Ad Tracking | Risky | 25 | 0.65 | 16.25 |
| Children's Data Handling | Caution | 10 | 0.30 | 3.0 |
| Network & Internet Activity | Caution | 5 | 0.30 | 1.5 |
| Device Info & Fingerprinting | Risky | 15 | 0.65 | 9.75 |
| Health & Biometric Data | Safe | 15 | 0.00 | 0 |
| Financial & Payment Data | Caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | Caution | 10 | 0.30 | 3.0 |
| Policy Change Notification | Caution | 5 | 0.30 | 1.5 |

**Total Deductions:** 78.5  
**Final Score:** round((1 - 78.5 / 205) × 100) = 62  
**Grade:** C  
**Overall Risk:** Caution

---

## Notes

- Terms & Conditions URL (https://photoroom.com/legal/terms/) returned 404 at time of analysis.
- The AI training opt-out is a notable positive feature, but the default opt-in is a significant privacy concern for a photo editing app.
- The 25-month cookie retention period is unusually long and creates a detailed browsing history profile.
- Data transfer outside the EEA is disclosed but may concern users in the EU.
- The app is rated 4+ on the App Store despite the 13+ age statement in the privacy policy.
