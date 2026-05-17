# Telegram Messenger Privacy Review

**Date:** 2026-05-17  
**Analyst:** claude-kimi-k2.5  
**Policy:** https://telegram.org/privacy  
**Policy Last Updated:** 2024-09-29

## Verdict
- **Score:** 72 / Grade: B / Risk: caution
- **Recommendation:** recommended

## Red Flags (4)

1. **Your contacts are uploaded to Telegram's servers** (high)  
   When you sync contacts, Telegram stores your contacts' names and phone numbers on its servers to notify you when they join. While you can delete this data anytime, it happens without your contacts' explicit consent.

2. **Phone number is your unique identifier** (medium)  
   Telegram uses your phone number as your account identifier. While you can set a username to hide your number, your phone number is visible to anyone who has it in their contacts.

3. **Messages sent to Google for translation** (medium)  
   When you use the translate feature, your message text is sent to Google or Microsoft for translation. These companies promise not to use the data for other purposes.

4. **Voice messages sent to Google for transcription** (medium)  
   When Premium users convert voice messages to text, the audio is sent to Google for transcription. Google promises not to log or use the data for other purposes.

## Green Flags (5)

1. **Telegram promises not to use your data for ads**  
   Telegram has a fundamental principle: "We don't use your data to show you ads." This is rare for a free app and is a significant privacy advantage.

2. **Secret Chats use end-to-end encryption**  
   Secret Chats use end-to-end encryption, meaning only you and the recipient can read messages. Telegram cannot decrypt them, and they are not stored on servers.

3. **Open source with verifiable builds**  
   Telegram's apps are open source, and they provide reproducible builds so you can verify the app you download matches the published source code.

4. **Inactive accounts automatically delete**  
   If you don't use Telegram for 18 months (configurable), your account and all data are automatically deleted. You can also manually delete your account anytime.

5. **Delete messages for both sides anytime**  
   In one-on-one chats, either party can delete any message for both participants with no time limit. This gives you control over your conversation history.

---

## Key Findings

### No Ads Based on User Data
Telegram explicitly states: "We don't use your data to show you ads." This is one of their two fundamental privacy principles. While they do show sponsored messages in public channels, these are based solely on the channel topic, not user data. No user data is mined or analyzed to display ads or sponsored messages.

### Strong Encryption Options
Telegram offers two types of chats:
- **Cloud Chats**: Messages are encrypted on servers, stored so you can sync across devices. Telegram holds the encryption keys.
- **Secret Chats**: End-to-end encrypted, messages not stored on servers, can only be accessed on the devices involved.

### Contact Syncing Trade-off
The main privacy concern is contact syncing. When enabled, Telegram uploads your contacts' names and phone numbers to their servers. This enables the "who joined Telegram" notifications but happens without your contacts' consent. The good news: it's optional, and you can delete synced contacts anytime.

### Limited Data Retention
- Messages in secret chats: Not stored on servers
- Cloud chat metadata: Up to 12 months
- Inactive accounts: Auto-deleted after 18 months (user configurable)

### Third-Party Sharing Is Limited
Telegram shares data with:
- Group companies (Telegram Group Inc, Telegraph Inc, Telegram FZ-LLC) for operations
- Law enforcement only with valid judicial orders (disclosed in transparency reports)
- Google/Microsoft for translation (only when user initiates)
- Google for transcription (only for Premium users who request it)
- Payment providers for transactions (Telegram never sees card data)

### User Rights and Controls
- Full account deletion with all data removed
- Data export available
- GDPR rights supported with EEA representative
- Delete synced contacts anytime
- Clear payment and shipping info
- Control message auto-delete timers
- Disable "Suggest Frequent Contacts" feature

---

## Scoring Breakdown

| Category | Risk | Deduction |
|----------|------|-----------|
| Camera & Microphone | Caution | 4.5 |
| Location & GPS | Caution | 4.5 |
| Contacts & Phonebook | Caution | 6.0 |
| Storage & File Access | Caution | 3.0 |
| Data Sharing with 3rd Parties | Caution | 9.0 |
| Account & Identity Data | Caution | 4.5 |
| Behavioural & Ad Tracking | Safe | 0 |
| Children's Data Handling | Caution | 3.0 |
| Network & Internet Activity | Caution | 1.5 |
| Device Info & Fingerprinting | Caution | 4.5 |
| Health & Biometric Data | Safe | 0 |
| Financial & Payment Data | Caution | 4.5 |
| Data Deletion & User Rights | Safe | 0 |
| Policy Change Notification | Caution | 1.5 |

**Total Deductions:** 56.5  
**Final Score:** 72 (Grade B)

---

## Verbatim Policy Excerpts

**On No Ads:**
> "We don't use your data to show you ads. We only store the data that Telegram needs to function as a secure and feature-rich messaging service."

**On Secret Chats:**
> "Secret chats use end-to-end encryption. This means that all data is encrypted with a key that only you and the recipient know. There is no way for us or anybody else without direct access to your device to learn what content is being sent in those messages."

**On Contact Syncing:**
> "We store your up-to-date contacts in order to notify you as soon as one of your contacts signs up for Telegram and to properly display names in notifications. We only need the number and name (first and last) for this to work and store no other data about your contacts."

**On Account Self-Destruction:**
> "By default, if you stop using Telegram and do not come online for at least 18 months, your account will be deleted along with all messages, media, contacts and every other piece of data you store in the Telegram cloud."

**On Payment Data:**
> "Your credit card information never reaches Telegram's servers. We do not access and do not store your credit card information."

**On Metadata Retention:**
> "If collected, this metadata can be kept for 12 months maximum."

**On Message Deletion:**
> "As of version 5.5, any party can choose to delete any messages in one-on-one chats, both sent and received, for both sides. There is no time limit."
