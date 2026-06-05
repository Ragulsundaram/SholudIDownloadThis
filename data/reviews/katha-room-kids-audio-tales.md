# Katha Room - Kids audio tales — Privacy Review

**Analyzed:** 2026-06-01  
**Policy URL:** https://www.parjanya.org/privacy-policy  
**Terms URL:** https://www.parjanya.org/terms-of-service  
**Policy Last Updated:** 2022-06-21  
**Analyzed By:** claude-kimi-k2.6  
**Needs Review:** ✅ Yes — policy appears to be a generic template with significant mismatches to the actual app

---

## Summary Card

**App:** Katha Room - Kids audio tales  
**Developer:** Parjanya Creative Solutions LLP  
**Overall Risk:** Risky (Score: 51/100, Grade: D)

### Red Flags
- **Third-party ads inside a 4+ children's app:** The privacy policy says the app uses outside advertising companies to show ads to your child. These companies can track what your child does in the app and on other websites to show them targeted ads.
- **Tracking technology watches how kids use the app:** The developer allows outside companies to put tracking tools inside the app that record how your child taps, swipes, and moves through the stories over time.
- **Privacy policy looks like a copy-paste template:** The policy claims the app collects heart-rate data through Apple HealthKit and requests camera access — features that make no sense for a simple audio-story player.
- **Data shared with 'marketing' vendors:** The developer shares your child's information with outside companies for marketing and data analysis, but does not name these companies.
- **No meaningful child-specific data protections:** The app is rated 4+ but the policy only says they don't 'knowingly' collect from kids under 18. No COPPA, no parental consent, no special child safeguards.

### Green Flags
- **Claims to delete data after 30 days:** The policy says they will not keep personal information for longer than 30 days unless the law requires it.
- **Offers a form to request data deletion:** You can fill out a form to ask the developer to show you, update, or delete the data they have about your child. They say they will respond within 30 days.
- **Payment handled by Apple:** Any in-app purchases go through Apple, so the developer never sees your credit card.

### Verdict
Katha Room is marketed to parents of 3–7 year olds, yet its privacy policy admits to third-party advertising, cross-app tracking technology, and data sharing with marketing vendors inside a children's app. The policy also appears to be a generic template that falsely claims the app collects heart-rate and fitness data. These are serious red flags for any child-directed product. Parents should look for an audio-story app with a genuine, child-specific privacy policy and no ad tracking.

---

## Raw Policy Source

See `katha-room-kids-audio-tales_policy.md` (deleted after processing) for the full scraped text.

**Key excerpts:**

> "We may request access or permission to certain features from your mobile device, including your mobile device's camera, storage, and other features."

> "We may allow selected third parties to use tracking technology on the Apps, which will enable them to collect data about how you interact with the Apps over time."

> "We may use third-party advertising companies to serve ads when you visit the Apps. These companies may use information about your visits to our Website(s) and other websites that are contained in web cookies and other tracking technologies in order to provide advertisements about goods and services of interest to you."

> "Our Application utilizes Apple Health and the HealthKit API... Activity, performance and workout data, such as heart rate samples during a workout, are also collected by the Application."

> "We do not knowingly collect data from or market to children under 18 years of age."

> "No purpose in this policy will require us keeping your personal information for longer than 30 days."

---

## Auditor Notes

**Why this app needs human review:**

1. **Template policy mismatch:** The mention of HealthKit, heart-rate tracking, and camera access in an audio-story app for 3-7 year olds is implausible. This suggests the policy was copy-pasted from a fitness or general-purpose app without customization. The actual data practices may differ significantly from what's written.

2. **Advertising in a 4+ app:** The policy explicitly admits to third-party advertising and tracking technology. For an app clearly designed for preschoolers, this raises serious ethical and potentially legal concerns under COPPA and similar regulations.

3. **Age threshold mismatch:** The policy uses an 18-year-old threshold for child protection, while the app is rated 4+ and marketed to children aged 3-7. This 11-year gap suggests no genuine child-privacy safeguards.

**Recommended follow-up:**
- Test the actual app to verify whether ads and tracking SDKs are present
- Check if HealthKit permissions are actually requested at runtime
- Verify the privacy policy URL from within the app's settings menu (it may differ from the website)
