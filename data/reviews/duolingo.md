# Duolingo — Privacy Policy Review

**Reviewed:** 2026-05-16
**Policy:** https://www.duolingo.com/privacy
**Terms:** https://www.duolingo.com/terms
**Platform:** iOS
**Score:** 66/100 (Grade C, Caution)

---

## Summary

Duolingo's privacy practices are above average for a free ad-supported education app. The policy is transparent and well-written. Key strengths include excellent COPPA-compliant child protections (non-personalized ads, no behavioral tracking, cartoon avatars), IP address retention limited to 30 days, contact sync that hashes rather than stores actual phone numbers, and meaningful user controls (ad opt-out, session replay opt-out, account deletion via Data Vault).

Key concerns: public profiles are default-on, AI Video Call features may send audio/text to OpenAI and Google, FullStory session replay tracks detailed user interactions including typing, multiple advertising networks receive data for personalized ad targeting, and third-party targeting cookies may track activities across multiple websites.

---

## Methodology

This review was conducted by analyzing the Duolingo Privacy Policy and Terms of Service, accessed via jina.ai text extraction on 2026-05-16. The privacy policy was last revised April 20, 2026. All claims are backed by direct verbatim quotes. Cautious language ("may," "states that") is used where the policy leaves room for interpretation.

### Data Collection Observed

- **Account:** Username, age, email, optional phone number
- **Profile:** Name, bio, profile picture, learning progress, languages, stats, achievements, followers/following (public by default)
- **Social Login:** Email and contacts from Google/Facebook
- **Activity:** Learning engagement, browser/device data, log data, IP address (retained max 30 days)
- **Speech:** Audio may be sent to Google/Apple/AWS for recognition; optionally collected for product improvement on iOS
- **AI Features:** Text/audio may be shared with OpenAI/Google for Video Call and AI companions; Duolingo may store transcripts for AI training
- **Session Replay:** FullStory/Session Replay track clicks, mouse movements, scrolling, typing, tech specs
- **Contacts:** Optional Contact Sync with hashed phone numbers
- **Device:** Device type, OS, browser, advertising IDs, cookies (including targeting cookies from Google, Meta, Amazon)

### Notable Excerpts

> "By default, your Profile is public, and visible to other Duolingo users and anyone else on the Internet."

> "When you interact with Video Call or other AI-enabled features, the text and audio you submit may be shared with AI vendors such as OpenAI and Google."

> "FullStory and Session Replay capture and analyze your activity and provide us with data and a video session replay of your activity... They record usage patterns (e.g., clicks, mouse movements, scrolling, and typing)."

> "Please note that our cookies include Targeting Cookies from Google, Meta, Amazon, and other companies, which these companies may use to track your activities across multiple websites to deliver personalized advertising to you."

> "We will retain your IP address for no more than thirty (30) days, unless exceptional circumstances require longer retention."

> "Duolingo treats Child Users (meaning users under the age of 13 in the United States or another age of digital consent in their country) differently to ensure their parents are in control and we only collect the bare minimum information we need to make Duolingo work."

> "We will not use your audio recordings to develop any voice cloning technology."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | Caution | 15 | 0.30 | 4.5 |
| Location & GPS | Caution | 15 | 0.30 | 4.5 |
| Contacts & Phonebook | Caution | 20 | 0.30 | 6.0 |
| Storage & File Access | Caution | 10 | 0.30 | 3.0 |
| Data Sharing with 3rd Parties | Risky | 30 | 0.50 | 15.0 |
| Account & Identity Data | Caution | 15 | 0.40 | 6.0 |
| Behavioural & Ad Tracking | Risky | 25 | 0.48 | 12.0 |
| Children's Data Handling | Safe | 10 | 0.00 | 0 |
| Network & Internet Activity | Caution | 5 | 0.30 | 1.5 |
| Device Info & Fingerprinting | Risky | 15 | 0.60 | 9.0 |
| Health & Biometric Data | Safe | 15 | 0.00 | 0 |
| Financial & Payment Data | Caution | 15 | 0.30 | 4.5 |
| Data Deletion & User Rights | Safe | 10 | 0.15 | 1.5 |
| Policy Change Notification | Caution | 5 | 0.30 | 1.5 |

**Total Deductions:** 69.0
**Final Score:** round((1 - 69.0/205) * 100) = **66**
**Grade:** C

---

## Changes from Previous Review

- Added new red flag: `red_targeting_cookies` (medium) based on explicit policy text about third-party targeting cookies tracking across multiple websites.
- Corrected slug from `duolingo-ios` to `duolingo` to match folder name and index entry.
- Updated `red_ai_audio_sharing` and `red_speech_third_party` plain_english to use cautious "may be shared / may be sent" language matching the policy text.
- Updated review date and analyst metadata.
