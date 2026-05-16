# Telegram Privacy Review

**Analyzed:** 2026-05-16  
**Policy URL:** https://telegram.org/privacy  
**Policy Date:** Latest changelog entry September 29, 2024  
**Model:** claude-sonnet-4  
**Method:** Strict legal-safe analysis — every claim backed by a direct verbatim quote.

---

## Score Summary

- **Deductions:** 44.0 / 205
- **Final Score:** 79
- **Grade:** B (Caution)
- **Risk Level:** Caution
- **Recommendation:** recommended

---

## Red Flags

1. **Regular chats are not end-to-end encrypted** (high)  
   > "We store messages, photos, videos and documents from your cloud chats on our servers so that you can access your data from any of your devices anytime without having to rely on third-party backups. All data is stored heavily encrypted and the encryption keys in each case are stored in several other data centers in different jurisdictions."  
   > "Secret chats use end-to-end encryption. This means that all data is encrypted with a key that only you and the recipient know. There is no way for us or anybody else without direct access to your device to learn what content is being sent in those messages."

2. **A phone number is required to sign up** (medium)  
   > "Telegram is a communication service. You provide your mobile number and basic account data (which may include profile name, profile picture and about information) to create a Telegram account."

3. **Your IP address may be kept for up to 12 months** (medium)  
   > "we may collect metadata such as your IP address, devices and Telegram apps you've used, history of username changes, etc. If collected, this metadata can be kept for 12 months maximum."  
   > "If Telegram receives a valid order from the relevant judicial authorities that confirms you're a suspect in a case involving criminal activities that violate the Telegram Terms of Service, we will perform a legal analysis of the request and may disclose your IP address and phone number to the relevant authorities."

4. **Third-party bots receive your messages and profile** (medium)  
   > "By performing any of these actions, you will be sending some of your data to the respective third-party bot developers."  
   > "the developers of an automated user (bot) can get your public account data (see section 3.1 above): your screen name, username and profile picture(s)"

## Green Flags

1. **No ads and no tracking for advertising** (positive)  
   > "We don't use your data to show you ads."  
   > "Telegram only stores the information it needs to function as a secure and feature-rich messaging service."

2. **Secret chats and calls are end-to-end encrypted** (positive)  
   > "Secret chats use end-to-end encryption. This means that all data is encrypted with a key that only you and the recipient know."  
   > "Your messages, media and files from secret chats... as well as the contents of your calls and the data you store in your Telegram Passport are processed only on your device and on the device of your recipient."

3. **Strong deletion and self-destruct controls** (positive)  
   > "Deleting your account removes all messages, media, contacts and every other piece of data you store in the Telegram cloud."  
   > "As of version 5.5, any party can choose to delete any messages in one-on-one chats, both sent and received, for both sides. There is no time limit."

4. **No data sold to third parties** (positive)  
   > "We don't use your data to show you ads."  
   > "Unlike other services, we don't use your data for ad targeting or other commercial purposes."

5. **Open source project** (positive)  
   > "Telegram is an open source project."

---

## Key Category Findings

| Category | Risk | Key Quote |
|----------|------|-----------|
| Camera & Microphone | Unknown | Policy is silent on camera/microphone permissions |
| Location & GPS | Caution | "If you share your Live Location in any chat or turn on 'Make Myself Visible' in People Nearby, Telegram will use your data to display your location... even when the app is closed" |
| Contacts | Caution | "We ask your permission before syncing your contacts" and "We only need the number and name (first and last) for this to work" |
| Storage | Safe | Cloud data "stored heavily encrypted"; secret-chat media encrypted before upload |
| Data Sharing | Caution | Core policy: no ad sharing. Bots receive public profile. Translation/voice-to-text may use Google/Microsoft. Court-ordered disclosure possible. |
| Account Identity | Caution | "You provide your mobile number and basic account data" |
| Ad Tracking | Safe | "We don't use your data to show you ads" |
| Children's Data | Unknown | Policy is silent |
| Network Activity | Caution | "metadata such as your IP address, devices and Telegram apps you've used... can be kept for 12 months maximum" |
| Device Info | Caution | "devices and Telegram apps you've used, history of username changes" |
| Health/Biometric | Safe | No collection mentioned |
| Payments | Safe | "Your credit card information never reaches Telegram's servers" |
| Deletion | Safe | "Deleting your account removes all messages, media, contacts and every other piece of data" |
| Policy Changes | Caution | "Important changes made to this Privacy Policy will be notified to you via Telegram" |

---

## Strict Analysis Notes

- **Score dropped from 80/A to 79/B** because camera/microphone and children's data were marked unknown under strict rules (policy is silent on these topics). This increased deductions by 4.0 points.
- **No "sell" language found.** The policy explicitly states Telegram does not use data for ads or commercial purposes. No "SELLS YOUR DATA" claim was made.
- **No cross-app tracking claimed.** The policy does not describe cross-app tracking.
- **Cloud-not-E2E flag kept at high severity** because the policy explicitly and unambiguously distinguishes cloud chats (server-held keys) from secret chats (E2E). This is fundamental to user privacy.
- **Bot data sharing downgraded to medium** because the policy clearly describes what bots receive and users are warned. It is not a hidden practice.
- **Open source claim supported** by direct quote from the policy footer.
- **Policy change notification upgraded from unknown to caution** because the policy explicitly states: "Important changes made to this Privacy Policy will be notified to you via Telegram."
