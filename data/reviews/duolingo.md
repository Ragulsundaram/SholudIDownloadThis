# Duolingo iOS — Privacy Policy Review

**Reviewed:** 2026-05-12  
**Policy:** https://www.duolingo.com/privacy  
**Terms:** https://www.duolingo.com/terms  
**Platform:** iOS  
**Score:** 66/100 (Grade C, Caution)

---

## Summary

Duolingo's privacy practices are above average for a free ad-supported education app. The policy is transparent and well-written. Key strengths include excellent COPPA-compliant child protections (non-personalized ads, no behavioral tracking, cartoon avatars), IP address retention limited to 30 days, contact sync that hashes rather than stores actual phone numbers, and meaningful user controls (ad opt-out, session replay opt-out, account deletion via Data Vault).

Key concerns: public profiles are default-on, AI Video Call features send audio/text to OpenAI and Google, FullStory session replay tracks detailed user interactions including typing, and multiple advertising networks receive data for personalized ad targeting.

---

## Methodology

This review was conducted by analyzing the Duolingo Privacy Policy and Terms of Service, accessed via jina.ai text extraction on 2026-05-12. The privacy policy was last revised April 20, 2026.

### Data Collection Observed

- **Account:** Username, age, email, optional phone number
- **Profile:** Name, bio, profile picture, learning progress, languages, stats, achievements, followers/following
- **Social Login:** Email and contacts from Google/Facebook
- **Activity:** Learning engagement, browser/device data, log data, IP address
- **Speech:** Audio sent to Google/Apple/AWS for recognition; optionally collected for product improvement on iOS
- **AI Features:** Text/audio shared with OpenAI/Google for Video Call and AI companions
- **Session Replay:** FullStory/Session Replay track clicks, mouse movements, scrolling, typing, tech specs
- **Contacts:** Optional Contact Sync with hashed phone numbers
- **Device:** Device type, OS, browser, advertising IDs, cookies

### Notable Excerpts

> "We will retain your IP address for no more than thirty (30) days, unless exceptional circumstances require longer retention."

> "Duolingo will not store your contacts' phone numbers, but only an encrypted 'hash' of them. This hash is an alternative code to the actual phone number and can be used only to match the hash of other users' numbers."

> "Duolingo treats Child Users (meaning users under the age of 13 in the United States or another age of digital consent in their country) differently to ensure their parents are in control and we only collect the bare minimum information we need to make Duolingo work."

> "We will not use your audio recordings to develop any voice cloning technology."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | caution | 15 | 0.30 | 4.5 |
| Location & GPS | caution | 15 | 0.30 | 4.5 |
| Contacts & Phonebook | caution | 20 | 0.30 | 6.0 |
| Storage & File Access | caution | 10 | 0.30 | 3.0 |
| Data Sharing with 3rd Parties | risky | 30 | 0.50 | 15.0 |
| Account & Identity | caution | 15 | 0.40 | 6.0 |
| Behavioural & Ad Tracking | risky | 25 | 0.48 | 12.0 |
| Children's Data | safe | 10 | 0.00 | 0 |
| Network & Internet Activity | caution | 5 | 0.30 | 1.5 |
| Device Fingerprinting | risky | 15 | 0.60 | 9.0 |
| Health & Biometric | safe | 15 | 0.00 | 0 |
| Financial & Payment | caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | safe | 10 | 0.15 | 1.5 |
| Policy Change Notification | caution | 5 | 0.30 | 1.5 |

**Total deductions:** 69.0  
**Final score:** round((1 − 69.0/205) × 100) = 66  
**Grade:** C  
**Risk:** Caution
