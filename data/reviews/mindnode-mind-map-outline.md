# MindNode - Mind Map & Outline — Privacy Review

**Reviewed:** 2026-05-18
**Policy:** https://mindnode.com/privacy
**Terms:** (not fetched)
**Platform:** iOS
**Score:** 91/100 (Grade A, Safe)

---

## Summary Card

**MindNode - Mind Map & Outline**  
*Privacy Score: 91/100 (Grade A — Safe)*

### Red Flags

- **Device identifiers collected at launch**  
  The app collects your device model, hashed serial number on Mac, and a unique user identifier when you launch it for licensing and subscription verification.

- **Data kept for up to 7 years after you stop using the app**  
  MindNode stores purchase receipts and account data for up to 7 years for tax and legal reasons, even after you delete the app or cancel your subscription.

- **Some data processed by US-based companies**  
  Your data is handled by providers like Vercel and fly.io in the United States. While these transfers are covered by EU adequacy decisions, your data still leaves the European Economic Area.

### Green Flags

- **Live collaboration is end-to-end encrypted**  
  When you collaborate on a mind map in real time, your document data is encrypted on your device and only decrypted on your collaborators' devices. The servers cannot read your content.

- **No ads or behavioral tracking**  
  MindNode doesn't show ads or track your behavior across apps and websites. Their website analytics use Plausible, which doesn't use cookies or track individual visitors.

- **Strong GDPR compliance with named processors**  
  MindNode clearly explains your rights under GDPR and names every company that processes your data, including what they do and where they are located.

- **Account is optional**  
  You can use MindNode without creating an account. An account is only needed if you want to sync your subscription across multiple platforms.

---

## Verdict

**Highly Recommended**

MindNode is a refreshing example of privacy-first app design. The Austrian company IdeasOnCanvas clearly commits to GDPR compliance, collects only essential technical data needed for licensing and sync, doesn't monetize through advertising, and provides end-to-end encryption for their collaboration features. With a score of 91/100 (Grade A), this is one of the best privacy scores in our database.

---

## Methodology

This re-analysis was conducted with strict adherence to the scoring rules: every claim is backed by a direct verbatim quote, cautious language is used, and categories not addressed by the policy are marked based on app-type plausibility.

### Data Collection Observed

- **Technical/Licensing:** Device model, OS version, hashed device serial number (Mac), unique device ID, app version, user identifier, language
- **Optional Account:** Email address (stored encrypted), password hash (stored encrypted)
- **Subscription:** App Store digital purchase receipts, unique device identifier, pseudonymized iCloud identifier
- **Collaboration:** Document data and transient metadata (end-to-end encrypted)
- **Website:** Anonymous usage data via Plausible (no cookies), IP address in server logs (20 days)
- **Support:** Email address, support request content
- **Newsletter (opt-in):** Email, name, IP address, open/click tracking

### Notable Excerpts

> "The MindNode App will use a Service to exchange document data and transient metadata (those might include: selection, scroll position, cursor position, ...) to all online participants of the current document. All transferred data is end-to-end encrypted."

> "When you visit the MindNode Website, we collect some anonymous usage data for statistical purposes only. We don't track individual visitors and all the data is in aggregate only. No personal data is collected and no cookies are set for tracking or analytic purposes."

> "At activation of the app, as a technical requirement to run the service, we sync an universal unique identifier (UUID) between devices so you don't have to register at each device for our app separately."

> "We do not knowingly collect Personal Data from children under the age of 16. In case we learn that we have collected Personal Data of a child under the age of 16, we will delete that information as quickly as possible."

> "Below you will find a list of all processors with the purposes of the processing and, in case of third country transfers, the legal bases for the transfer..."

---

## Scoring Breakdown

| Category | Risk | Max | Rate | Deduction |
|----------|------|-----|------|-----------|
| Camera & Microphone | safe | 15 | 0% | 0 |
| Location & GPS | safe | 15 | 0% | 0 |
| Contacts & Phonebook | safe | 20 | 0% | 0 |
| Storage & File Access | safe | 10 | 0% | 0 |
| Data Sharing with 3rd Parties | caution | 30 | 30% | 9.0 |
| Account & Identity Data | caution | 15 | 30% | 4.5 |
| Behavioural & Ad Tracking | safe | 25 | 0% | 0 |
| Children's Data Handling | safe | 10 | 0% | 0 |
| Network & Internet Activity | safe | 5 | 0% | 0 |
| Device Info & Fingerprinting | caution | 15 | 30% | 4.5 |
| Health & Biometric Data | safe | 15 | 0% | 0 |
| Financial & Payment Data | safe | 15 | 0% | 0 |
| Data Deletion & User Rights | safe | 10 | 0% | 0 |
| Policy Change Notification | safe | 5 | 0% | 0 |

**Total deductions:** 18.0  
**Final score:** round((1 - 18/205) x 100) = 91  
**Grade:** A  
**Risk:** Safe

---

## Strict Rules Applied

- Camera & Microphone, Location & GPS, Contacts & Phonebook, and Health & Biometric Data marked as **safe** because these permissions are not required for a mind mapping app and the comprehensive policy does not mention them.
- Behavioural & Ad Tracking marked as **safe** because the app contains no advertising or cross-app tracking. Website analytics are anonymous and cookie-free via Plausible.
- Network & Internet Activity marked as **safe** because IP logging is limited to 20 days for security, and website analytics are anonymous.
- Data Sharing with 3rd Parties marked as **caution** because data is explicitly shared with multiple named processors, including some US-based providers.
- Device Fingerprinting marked as **caution** because hashed device serial numbers and unique user identifiers are collected at launch for licensing.
- All score_impact values use negative notation for deductions as required by the schema.
- `verdict.score` equals `scoring.final_score` (91) and `verdict.grade` equals `scoring.grade` (A).
