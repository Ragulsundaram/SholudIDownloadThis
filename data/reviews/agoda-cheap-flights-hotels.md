# Privacy Review: Agoda: Cheap Flights & Hotels

## Summary Card

- **Score:** 56 / 100
- **Grade:** C
- **Risk Level:** Caution
- **Category:** Travel
- **Developer:** Agoda Company Pte. Ltd.
- **Analyzed:** 2026-06-01

Agoda is a major online travel agency for booking hotels, flights, and activities, owned by Booking Holdings Inc. This review examines how it handles the extensive personal data it collects from users.

---

## What It Collects

**Account & Identity Data:**
- Name, email, phone number, date of birth, gender
- Passport, national ID, driver's license, country of issue, expiry date, nationality, visas
- Tax IDs such as Brazilian CPF or Indian PAN (for certain currencies)
- Social login data (Facebook, Google, Kakao, etc.)
- Media (photos/videos) you upload in reviews

**Travel & Booking Data:**
- Payment card details, Travel Supplier info, itinerary, length of stay, prices
- Arrival/departure times, pick-up/drop-off locations
- Extra baggage, upgrades, preferred language
- Special dietary and accessibility needs
- Physical characteristics: height, weight (for certain activities)
- Mobile device models, IMEI numbers, SIM activation dates

**Device & Technical Data:**
- Device type, OS, browser, app version, language settings
- Unique device identifiers, advertising ID
- App crashes, system activities
- IP address, date/time of access

**Usage & Communications Data:**
- Pages viewed, links clicked, searches performed
- Customer service communications (email, phone, in-app messages, chatbots, social media apps)
- Call recordings with customer service team
- Reviews, survey responses, wishlists
- AI travel assistant conversation threads and inputs

**Location Data:**
- Precise location (if you grant access) for searching nearby properties
- Location metadata extracted from uploaded photos (EXIF data)

---

## What It Does With Your Data

**Extensive Third-Party Sharing:**
- **Travel Suppliers:** Hotels, airlines, activity providers, transportation services receive your booking and identity data
- **Booking Holdings Group:** Data shared across affiliated companies for analytics, fraud detection, marketing, and personalized offers
- **Payment Processors:** Adyen, Wise, and others handle your payment data
- **Advertising Partners:** Meta, Google, Criteo, TikTok, Appsflyer, and others receive data (including hashed identifiers) for interest-based advertising
- **Business Partners:** Loyalty programs, banks, other online travel agencies
- **Government Agencies:** In China, user data may be shared with Chinese authorities including the State Tax Administration
- **Service Providers:** Analytics, customer service, IT infrastructure, fraud prevention, insurance

**Behavioural Tracking:**
- Cookies, pixels, SDKs, APIs, and tracking URLs monitor your activity
- Cross-device tracking links your browser, phone, and other devices into a single profile
- Interest-based advertising on Agoda's platform and across the web
- One-way hashed data shared with advertising partners who combine it with other identifiers

**AI & Automated Systems:**
- AI-powered travel assistant processes your chat inputs and past booking data to build a travel preference profile
- Automated systems review, scan, and analyze communications for security, fraud, and marketing
- Algorithms and AI generate personalized content, promotions, and recommendations
- Call recordings analyzed for quality assurance and fraud detection

**Call Recording:**
- Customer service calls may be live-listened to or recorded
- Recordings kept for a limited time, then automatically deleted
- May be retained longer if there's a legitimate interest (e.g., fraud investigation)

---

## The Good

1. **Strong User Rights:** Comprehensive GDPR and CCPA rights including access, correction, deletion, portability, and objection.
2. **Two-Factor Authentication:** Agoda supports and recommends 2FA to protect your account.
3. **PCI-DSS Compliance:** Payment data protected with encryption and access controls following industry standards.
4. **Cookie Controls:** Detailed cookie consent banner lets you choose which types of tracking to allow.
5. **EXIF Location Warning:** Agoda explicitly warns that uploaded photos may contain location metadata.
6. **No Contacts Access:** Doesn't read your phone contacts or address book.
7. **Account Data Editable:** You can log in and edit or delete most of your personal data and saved payment methods.

---

## The Concerning

1. **Passport & Government ID Collection:** For many bookings, Agoda requires passport, national ID, driver's license, or Tax ID numbers. This data is shared with Travel Suppliers and potentially government agencies.
2. **IMEI & SIM Data Collection:** Highly invasive device identifiers including IMEI numbers and SIM activation dates are collected as standard practice.
3. **Health Data Collected:** Height, weight, dietary needs, accessibility requirements, and medical certificates are collected for certain activities.
4. **Cross-Device Tracking:** Your activity is linked across multiple browsers and devices to build a unified profile for advertising.
5. **Call Recording:** Customer service calls may be recorded without always giving you a clear opt-out at the start of the call.
6. **AI Assistant Profiling:** The AI travel assistant builds a preference profile from your chat inputs and past bookings.
7. **Government Data Sharing (China):** Chinese residents' data may be shared with Chinese authorities upon request.
8. **Booking Holdings Ecosystem:** Data flows to sister companies across the Booking Holdings group for marketing and analytics.

---

## Verdict

Agoda is a functional and popular travel booking platform, but its privacy practices are extensive and invasive. The collection of passport data, IMEI numbers, health information, and cross-device tracking represents a significant privacy trade-off for the convenience of booking travel. Users should take advantage of the cookie controls, enable two-factor authentication, and be cautious about what sensitive data they share — especially with the AI travel assistant.

**Risk Level:** Caution — Use with awareness of the extensive data collection and sharing practices.
