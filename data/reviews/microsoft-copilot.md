# Privacy Review — Microsoft Copilot

## App Information

| Field | Value |
|-------|-------|
| **Name** | Microsoft Copilot |
| **Developer** | Microsoft Corporation |
| **Platform** | iOS |
| **Category** | Productivity / AI Assistant |
| **App Store URL** | https://apps.apple.com/in/app/microsoft-copilot/id6472538445 |
| **Privacy Policy URL** | https://privacy.microsoft.com/en-us/privacystatement |
| **Terms URL** | https://www.microsoft.com/en-us/servicesagreement |
| **Policy Last Updated** | March 2026 |
| **Analyzed At** | 2026-05-18 |
| **Analyzed By** | claude-kimi |
| **Needs Review** | false |

---

## Summary Card

### Microsoft Copilot
- **Overall Risk:** Risky
- **Score:** 54/100 (Grade D)

#### Red Flags
- **Conversations may train AI models by default.** In certain markets, Microsoft uses your Copilot conversations to train its generative AI models unless you actively opt out. This means the things you type or upload could help improve Microsoft's AI.
- **Behavioral data shared with many advertisers.** Microsoft shares your data with third-party advertising platforms like Facebook, Yahoo, Taboola, Outbrain, The Trade Desk, and Xandr to deliver personalized ads across the web.
- **Data combined across all Microsoft products.** Microsoft combines data from your use of Copilot with data from Bing, Edge, Xbox, Windows, and other Microsoft services to build a detailed profile of your interests and activities.
- **Location and device data tracked continuously.** Microsoft collects your location using GPS, cell towers, and Wi-Fi hotspots, along with your device identifiers and IP address, for both providing services and targeting ads.
- **Conversations monitored for performance and safety.** Microsoft uses your Copilot conversations to monitor performance, troubleshoot problems, diagnose bugs, and prevent abuse. Human reviewers may also review some AI outputs against underlying data.

#### Green Flags
- **You can opt out of AI model training.** In markets where conversation data is used for training, you can choose to opt out so your chats are not used to improve Microsoft's generative AI models.
- **You can manage and delete prompt history.** You can manage your Copilot prompt history in the app and on the Microsoft Privacy Dashboard, giving you some control over what is saved.
- **Personal files and chats not used for ads.** Microsoft explicitly states it does not use your emails, chats, voice calls, documents, photos, or other personal files to target advertisements to you.
- **No personalized ads for children under 18.** Microsoft does not deliver personalized advertising to users whose Microsoft account birthdate identifies them as under 18 years old.

#### Verdict
Microsoft Copilot collects extensive personal data and may use your conversations to train AI models unless you opt out. The app also shares behavioral data with a broad network of advertisers and combines data across all Microsoft products to build detailed profiles. While Microsoft offers some privacy controls like opt-out for model training and ad personalization, the depth of data collection and cross-service tracking makes this a risky choice for privacy-conscious users.

---

## Detailed Category Analysis

### Camera & Microphone (Caution)
- **Risk Level:** Caution
- **Access Type:** On-demand
- **Required for Core Function:** No
- **Optional Access:** Yes

**Plain English:** Copilot only accesses your camera or microphone when you actively choose to upload an image, record audio, or use voice input.

**Detail:** The Copilot-specific section states that certain features require access to your device camera, microphone, photos, and videos. Voice data is collected when you use speech input. There is no mention of background access.

**Policy Excerpt:** "Certain Copilot features require access to your device capabilities, such as your device camera, microphone, photos, and videos."

**Concerns:** Uploaded images and voice data may be stored and used for model training unless opted out.

---

### Location & GPS (Risky)
- **Risk Level:** Risky
- **Access Type:** Continuous
- **Required for Core Function:** No
- **Optional Access:** Yes

**Plain English:** Microsoft collects your precise location using GPS, cell towers, and Wi-Fi hotspots to personalize Copilot responses and show relevant ads.

**Detail:** Copilot uses your location, language, and similar settings to formulate helpful responses. Microsoft also collects location data via GNSS, cell towers, and Wi-Fi hotspots, and infers location from IP addresses. Location data is used for both service provision and personalized advertising.

**Policy Excerpt:** "Microsoft Copilot will use this prompt, along with your location, language, and similar settings, as well as other data you might input into the service... to formulate a helpful response. We collect location data using Global Navigation Satellite System (GNSS) (e.g., GPS) and data about nearby cell towers and Wi-Fi hotspots."

**Concerns:** Location data used for personalized advertising. IP address used for location inference even if GPS is off.

---

### Contacts & Phonebook (Caution)
- **Risk Level:** Caution
- **Access Type:** On-demand
- **Required for Core Function:** No
- **Optional Access:** Yes

**Plain English:** Contacts data may be accessed if you use Copilot features that interact with your Microsoft account contacts, but it is not a core requirement of the app.

**Detail:** Microsoft collects contacts and relationships data if you use a product to share information, manage contacts, or communicate with others. For Copilot specifically, contacts access is not highlighted as a core feature, but Microsoft account contacts are stored in Microsoft's ecosystem.

**Policy Excerpt:** "Data about your contacts and relationships if you use a product to share information with others, manage contacts, communicate with others, or improve your productivity."

**Concerns:** Microsoft account contacts stored in Microsoft's cloud may be accessible across services.

---

### Storage & File Access (Caution)
- **Risk Level:** Caution
- **Access Type:** On-demand
- **Required for Core Function:** No
- **Optional Access:** Yes

**Plain English:** Copilot only accesses your files, images, or videos when you actively choose to upload them into a conversation.

**Detail:** The Copilot section explicitly mentions that you might input files, images, and visual media into the service. File access is user-initiated for AI processing. There is no mention of background file scanning.

**Policy Excerpt:** "other data you might input into the service (for example, files, images, and visual media) to formulate a helpful response."

**Concerns:** Uploaded files may be stored and used for model training unless opted out.

---

### Data Sharing with 3rd Parties (Risky)
- **Risk Level:** Risky
- **Access Type:** Continuous
- **Required for Core Function:** No
- **Optional Access:** No

**Plain English:** Microsoft shares your personal data with a wide network of advertisers, data brokers, and partners to deliver personalized ads and improve services.

**Detail:** Microsoft shares data with Microsoft-controlled affiliates and subsidiaries, vendors working on Microsoft's behalf, and third-party advertising platforms including Facebook, Yahoo, Taboola, Outbrain, The Trade Desk, and Xandr. Data is also obtained from data brokers to supplement profiles.

**Policy Excerpt:** "We may then share this information with third party advertising platforms and advertisers to facilitate the delivery and measurement of ads... We also share personal data among Microsoft-controlled affiliates and subsidiaries... We also obtain data about you from Microsoft affiliates, subsidiaries, and third parties... Data brokers from which we purchase demographic data to supplement the data we collect."

**Concerns:** Data shared with multiple advertising networks. Data brokers used to supplement profiles. Cross-service data sharing among Microsoft entities.

---

### Account & Identity Data (Risky)
- **Risk Level:** Risky
- **Access Type:** Continuous
- **Required for Core Function:** Yes
- **Optional Access:** No

**Plain English:** You need a Microsoft account to use Copilot, and Microsoft links your account data across all its products to personalize experiences and target ads.

**Detail:** A Microsoft account is required to sign in and use Copilot. Account data includes credentials, name, contact data, payment data, device and usage data, contacts, activities, interests, and favorites. This data is combined across Microsoft products for personalization and advertising.

**Policy Excerpt:** "With a Microsoft account, you can sign in to Microsoft products... Personal data associated with your Microsoft account includes credentials, name and contact data, payment data, device and usage data, your contacts, information about your activities, and your interests and favorites... For these purposes, we combine data we collect from different contexts (for example, from your use of two Microsoft products)."

**Concerns:** Account data linked to advertising profile. Cross-product data combination for profiling.

---

### Behavioural & Ad Tracking (Risky)
- **Risk Level:** Risky
- **Access Type:** Continuous
- **Required for Core Function:** No
- **Optional Access:** No

**Plain English:** Microsoft tracks your interests, searches, purchases, and app usage across its products to show you targeted ads on Microsoft and third-party websites.

**Detail:** Microsoft uses interests, favorites, location, transactions, search queries, and content viewed for personalized advertising. It combines cookies and device data to deliver ads. Third-party cookies and web beacons are used. Opt-out is available but data collection continues for other purposes.

**Policy Excerpt:** "The ads that you see may be selected based on data we process about you, such as your interests and favorites, your location, your transactions, how you use our products, your search queries, or the content you view... We may share data we collect with internal and external partners, such as Xandr and other subsidiaries and affiliates, Yahoo, Facebook or The Trade Desk."

**Concerns:** Extensive behavioral profiling for ads. Cross-site tracking via cookies and web beacons. Opt-out does not stop data collection for other purposes.

---

### Children's Data Handling (Safe)
- **Risk Level:** Safe
- **Access Type:** None
- **Required for Core Function:** No
- **Optional Access:** No

**Plain English:** Microsoft requires parental consent for users under 13 and does not show personalized ads to anyone under 18.

**Detail:** For users under 13, Microsoft products either block access or require parental consent. No personalized advertising is delivered to users whose Microsoft account birthdate identifies them as under 18. Family Safety controls allow parents to manage child accounts and data.

**Policy Excerpt:** "For users under the age of 13 or as specified by law in their jurisdiction, certain Microsoft products and services will either block users under that age or will ask them to obtain consent or authorization from a parent or guardian... We do not deliver personalized advertising to children whose birthdate in their Microsoft account identifies them as under 18 years of age."

**Concerns:** None identified.

---

### Network & Internet Activity (Risky)
- **Risk Level:** Risky
- **Access Type:** Continuous
- **Required for Core Function:** Yes
- **Optional Access:** No

**Plain English:** Microsoft logs your IP address, browsing history, and search queries, using this data to infer your location and profile your interests for advertising.

**Detail:** Microsoft collects browse history, search queries, IP address, and interaction data. This data is used for product improvement, personalization, and advertising. IP addresses are used for location inference even when GPS is off.

**Policy Excerpt:** "Browse history. Data about the webpages you visit... Searches and commands. Search queries and commands when you use Microsoft products... Device, connectivity, and configuration data. For example... IP address... Location can also be inferred from a device's IP address."

**Concerns:** Browse history logged. Search queries retained. IP address used for location inference and profiling.

---

### Device Info & Fingerprinting (Risky)
- **Risk Level:** Risky
- **Access Type:** Continuous
- **Required for Core Function:** No
- **Optional Access:** No

**Plain English:** Microsoft collects detailed device information including your device identifiers, operating system, and nearby Wi-Fi networks to identify your device and target ads.

**Detail:** Microsoft collects device and usage data including hardware and software details, device identifiers (such as IMEI for phones), IP address, regional and language settings, and information about WLAN access points near your device. The advertising ID is also used for personalized ads.

**Policy Excerpt:** "Device, connectivity, and configuration data. Data about your device, your device configuration, and nearby networks. For example, data about the operating systems and other software installed on your device... IP address, device identifiers (such as the IMEI number for phones), regional and language settings, and information about WLAN access points near your device."

**Concerns:** Device identifiers collected including IMEI. Nearby Wi-Fi networks logged. Advertising ID used for cross-app tracking.

---

### Health & Biometric Data (Caution)
- **Risk Level:** Caution
- **Access Type:** None
- **Required for Core Function:** No
- **Optional Access:** No

**Plain English:** On iOS, any biometric authentication like Face ID happens only on your device and is not sent to Microsoft.

**Detail:** The general policy mentions biometric data collection for certain Microsoft products like Windows Hello, but for the iOS Copilot app, biometric authentication would be handled locally by iOS. Microsoft does not collect health data through Copilot.

**Policy Excerpt:** "Our collection and use of biometric data depends on the products and features you use in certain Microsoft products, as well as your consent. For instance, you can use your fingerprint or facial recognition to sign in to your Windows device via Windows Hello."

**Concerns:** Biometric data collection mentioned for other Microsoft products but not specifically for Copilot iOS app.

---

### Financial & Payment Data (Caution)
- **Risk Level:** Caution
- **Access Type:** On-demand
- **Required for Core Function:** No
- **Optional Access:** Yes

**Plain English:** Microsoft only collects payment information if you subscribe to a paid Copilot or Microsoft 365 plan, and payment is processed by third parties.

**Detail:** Payment data is collected only for optional paid subscriptions such as Microsoft 365 Copilot. Microsoft processes payment data through banks and payment processors. The app itself does not directly store raw card numbers.

**Policy Excerpt:** "Payment data. Data to process payments, such as your payment instrument number (such as a credit card number) and the security code associated with your payment instrument... When you provide payment data to make a purchase, we will share payment data with banks and other entities that process payment transactions."

**Concerns:** Payment data shared with financial institutions for processing.

---

### Data Deletion & User Rights (Caution)
- **Risk Level:** Caution
- **Access Type:** None
- **Required for Core Function:** No
- **Optional Access:** No

**Plain English:** You can delete some data and opt out of personalized ads, but not all personal data can be accessed or deleted through Microsoft's tools.

**Detail:** Microsoft provides a privacy dashboard to view and clear browsing, search, and location data. Users can request access, erasure, updates, and data portability. Prompt history can be managed in-product and on the privacy dashboard. However, Microsoft states that not all personal data can be accessed or controlled via these tools, and some data is retained for business operations and legal compliance.

**Policy Excerpt:** "You can access and clear some of your data through the Microsoft privacy dashboard... Not all personal data processed by Microsoft can be accessed or controlled via the tools above. If you want to exercise your data protection rights... you can always contact Microsoft."

**Concerns:** Not all data accessible via self-service tools. Some data retained for business and legal purposes.

---

### Policy Change Notification (Caution)
- **Risk Level:** Caution
- **Access Type:** None
- **Required for Core Function:** No
- **Optional Access:** No

**Plain English:** Microsoft updates its privacy policy periodically and will notify you of material changes, but continued use counts as acceptance.

**Detail:** Microsoft revises the "last updated" date when changes are made. For material changes, it will notify users by prominently posting a notice or sending a direct notification. Users are encouraged to review the statement periodically.

**Policy Excerpt:** "When we post changes to this statement, we will revise the 'last updated' date at the top of the statement... If there are material changes to the statement... we will notify you either by prominently posting a notice of such changes before they take effect or by directly sending you a notification."

**Concerns:** Continued use after notification equals acceptance.

---

## Scoring Details

| Category | Risk | Max Deduction | Rate | Deduction |
|----------|------|---------------|------|-----------|
| Camera & Microphone | Caution | 15 | 30% | 4.50 |
| Location & GPS | Risky | 15 | 65% | 9.75 |
| Contacts & Phonebook | Caution | 20 | 30% | 6.00 |
| Storage & File Access | Caution | 10 | 30% | 3.00 |
| Data Sharing with 3rd Parties | Risky | 30 | 65% | 19.50 |
| Account & Identity Data | Risky | 15 | 65% | 9.75 |
| Behavioural & Ad Tracking | Risky | 25 | 65% | 16.25 |
| Children's Data Handling | Safe | 10 | 0% | 0.00 |
| Network & Internet Activity | Risky | 5 | 65% | 3.25 |
| Device Info & Fingerprinting | Risky | 15 | 65% | 9.75 |
| Health & Biometric Data | Caution | 15 | 30% | 4.50 |
| Financial & Payment Data | Caution | 15 | 30% | 4.50 |
| Data Deletion & User Rights | Caution | 10 | 30% | 3.00 |
| Policy Change Notification | Caution | 5 | 30% | 1.50 |
| **Total** | | **205** | | **95.25** |

**Score Formula:** `round((1 - 95.25 / 205) * 100) = 54`

**Final Score:** 54 / 100
**Grade:** D
**Overall Risk:** Risky

---

## Raw Policy Source

- **Scraped File:** `microsoft-copilot_policy.md`
- **Policy URL:** https://privacy.microsoft.com/en-us/privacystatement
- **Terms URL:** https://www.microsoft.com/en-us/servicesagreement
- **App Store URL:** https://apps.apple.com/in/app/microsoft-copilot/id6472538445
