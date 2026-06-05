# MakeMyTrip Flight, Hotel, Bus — Privacy Review

> **Score:** 42 / 100 | **Grade:** D | **Risk:** Risky
> Analyzed: 2026-06-01 | Slug: `makemytrip-flight-hotel-bus`

---

## App

| Field | Value |
|---|---|
| **Name** | MakeMyTrip Flight, Hotel, Bus |
| **Developer** | MakeMyTrip India Pvt. Ltd. |
| **Category** | Travel |
| **App Store URL** | https://apps.apple.com/in/app/makemytrip-flight-hotel-bus/id530488359 |
| **Icon URL** | https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/8f/f9/fa/8ff9fab8-ba0a-1fcf-53c1-c05117c7cc71/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/512x512bb.jpg |

---

## Executive Summary

**MakeMyTrip** is India's leading online travel company with over 17 million users. It processes flights, hotels, buses, trains, cabs, and holiday packages across the country. The app collects an extraordinary breadth of personal data including government identity documents (Aadhar, PAN, passport, driving license), banking and credit card details, phone contacts, device identifiers (IMEI, IMSI), and even COVID-19 vaccination status. This data is extensively shared with third-party service providers including airlines, hotels, bus operators, group companies, business partners, banks, insurance companies, and advertising networks.

**Key findings:**
1. Government ID documents (Aadhar, passport, driving license) are collected for hotel check-ins, visa services, and identity verification
2. Phone contacts are uploaded to MMT servers for social features, sharing, and referrals
3. SMS messages are read automatically to fill in OTPs during payments
4. IMEI, IMSI, and SIM serial numbers are collected for device identification and fraud prevention
5. COVID-19 vaccination status and certificate may be collected for travel requirements
6. Data sharing extends to service providers whose data practices are explicitly stated to be beyond MMT's control
7. An exceptionally long list of device permissions is requested, with the policy stating these "cannot be customized"

---

## What the Policy Actually Says

### Data Collection

The policy lists the following categories of personal information collected:

**Identity & Personal Details:**
- Name, gender, marital status, religion, age, profile picture
- Email address, postal addresses, telephone (mobile or otherwise), fax numbers
- Contact details of people for whom bookings are made (e.g., family members)
- Government identification documents: passport, Aadhar, PAN, driving license, election card
- Passport copies and bank statements for visa services
- COVID-19 vaccination status and certificate
- Beneficiary details for vaccination-related services

**Financial Data:**
- Cardholder name, credit/debit card number (encrypted), expiration date
- Banking details, wallet details, billing information, payment history
- PAN information for international bookings (RBI Liberalized Remittance Scheme)

**Device & Technical Data:**
- OS name and version, mobile network, hardware model, unique device identifier
- Preferred language, IMEI, IMSI, SIM serial number, Android ID, device ID
- Bluetooth status, Wi-Fi connection, subscription information
- IP address, browser type, operating system, clickstream data

**Social/Contact Data:**
- Phone contacts (if granted permission) — synced to MMT servers
- Family members' travel preferences
- Information collected through social media integrations (Facebook, Twitter)

**Usage Data:**
- Activities conducted on the website, frequency of visits, duration of sessions
- Clickstream data (pages viewed, links clicked)
- Cookie data, pixel tag data, advertising interaction data

### Data Sharing

The policy explicitly states that personal information is shared with:

1. **End Service Providers:** airlines, hotels, bus providers, cab rental, railways — "for fulfilling their part of service" but "how the said service providers/suppliers use the information shared with them is beyond the purview and control of MMT"
2. **Group Companies and Affiliates:** for "greater customization of services, technological updates, and customer requirements"
3. **Business Partners:** co-branded credit cards, travel insurance, banking cards, and other related products
4. **Third-Party Vendors:** for "market research, payment processing and data analysis"
5. **Business Partners for Promotions:** financial institutions, co-branded offers, contests
6. **Advertisers and Advertising Companies:** "to provide advertisements in the Website or any other website about services that may be of potential interest to you"
7. **Law Enforcement:** when required by law or in case of fraud prevention
8. **Successors/Mergers:** in case of merger, acquisition, or reorganization

### Permissions

The app requests an extraordinarily long list of permissions:

| Permission | Purpose |
|---|---|
| Accounts | Auto-fill email IDs |
| Bluetooth | Optimize experience on Bluetooth enabled devices |
| Calendar | View calendar, receive reminders, show calendar |
| Camera | Upload profile pictures, QR code scanning, hotel reviews |
| Contacts | Share bookings, invite friends, send referrals, recommendations |
| Location | Auto-detect nearest airport/city, hotel recommendations |
| Phone | Read phone status, auto-fill contact number |
| Photos | Upload pictures for hotel reviews, profile photos |
| SMS | Read SMS for OTPs, send/verify promotional messages |
| Storage | Upload government IDs, save map data |
| Microphone | Record audio for video reviews |
| Wi-Fi | Optimize map details, determine network quality |

The policy states: **"It may be possible to customize these permissions but is not recommended as it might disable some of the services and affect your experience on the application."**

---

## How the Score Was Reached

| Category | Risk | Max | Rate | Deduction |
|---|---|---|---|---|
| Data Sharing with 3rd Parties | risky | 30 | 0.65 | 19.5 |
| Behavioural & Ad Tracking | risky | 25 | 0.65 | 16.25 |
| Contacts & Phonebook | risky | 20 | 0.65 | 13.0 |
| Location & GPS | risky | 15 | 0.65 | 9.75 |
| Camera & Microphone | risky | 15 | 0.65 | 9.75 |
| Account & Identity Data | risky | 15 | 0.65 | 9.75 |
| Device Fingerprinting | risky | 15 | 0.65 | 9.75 |
| Financial & Payment Data | risky | 15 | 0.65 | 9.75 |
| Health & Biometric Data | risky | 15 | 0.65 | 9.75 |
| Storage & File Access | risky | 10 | 0.65 | 6.5 |
| Data Deletion & User Rights | caution | 10 | 0.30 | 3.0 |
| Network & Internet Activity | caution | 5 | 0.30 | 1.5 |

**Total deductions:** 118.5
**Final score:** clamp(0, 100, round((1 - 118.5/205) × 100)) = **42**

---

## Red Flags

1. **Government ID Documents Collected** — The app asks for copies of passport, Aadhar card, driving license, election card, and PAN card for hotel check-ins, visa services, and identity verification.

2. **Phone Contacts Synced to Servers** — If you allow contacts access, the app copies your phone contacts to its servers to enable social features like sharing trips and sending referrals.

3. **SMS Messages Read Automatically** — If you grant SMS permission, the app reads your text messages to auto-fill OTPs during payments and to verify your phone number.

4. **Credit and Debit Card Details Stored** — The app stores your credit/debit card information (including cardholder name, card number, expiration date, and banking details) to make future bookings faster.

5. **IMEI/IMSI and Device Identifiers Collected** — The app collects your device's IMEI, IMSI, SIM serial number, and Android ID to identify you and prevent fraud.

---

## Green Flags

1. **Payments are Encrypted** — The app uses TLS encryption to protect payment information during transmission.

2. **You Can Delete Your Account** — Users have the option to delete their account through a provided link.

3. **Only for Adults 18+** — You must be at least 18 years old to use the app and provide consent for data processing.

---

## Verdict & Recommendation

**Risk:** Risky | **Grade:** D | **Score:** 42/100

**Recommendation:** Think Twice

MakeMyTrip is India's dominant travel platform with a comprehensive service offering, but users should be aware of the extensive data collection and sharing practices. The app collects government IDs, financial details, vaccination status, phone contacts, and device identifiers, then shares this information with airlines, hotels, advertisers, and business partners. The sheer number of permissions requested is among the highest seen in any app category. While the service is legitimate and widely used, users should carefully consider whether they are comfortable with this level of data exposure for travel convenience.
