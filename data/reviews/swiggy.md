# Swiggy Privacy Review

**Analyzed:** 2026-05-16  
**Policy URL:** http://www.swiggy.com/privacy-policy  
**Policy Date:** Last updated on April 17, 2026  
**Model:** claude-sonnet-4  
**Method:** Strict legal-safe analysis — every claim backed by a direct verbatim quote.

---

## Score Summary

- **Deductions:** 144.0 / 205
- **Final Score:** 30
- **Grade:** F (Dangerous)
- **Risk Level:** Dangerous
- **Recommendation:** avoid

---

## Red Flags

1. **You cannot opt out of ads on Swiggy** (high)  
   > "You cannot opt out of advertising on the Platforms, you may opt out of much interest-based advertising on third party sites and through third party ad networks"

2. **Your data is shared with restaurants, advertisers, and AI companies** (high)  
   > "We may share your information with our vendors, consultants, marketing partners, Retail Pharmacies, Medical Practitioners, delivery partners, research firms and other service providers, business partners, payment processing companies"  
   > "To enable AI-assisted features, we may share certain personal data and transaction-related information with third-party AI service providers, including order details, delivery information, preferences, and interaction data"  
   > "With Advertisers and advertising networks: We may work with third parties such as network advertisers to serve advertisements on the Platforms"

3. **Swiggy checks what other apps are on your phone** (high)  
   > "information about the devices you use to access our Services, including the hardware models, operating systems and versions, software, file names and versions, preferred languages, device identifiers, advertising identifiers, device motion information, mobile network information, installed applications on device and phone state"

4. **Swiggy may collect prescription and blood group data** (medium)  
   > "Additionally, we may also collect information relating to you (including your prescriptions), to facilitate through the Instamart Platform, your purchase of pharmaceutical drugs from retail pharmacies"  
   > "Specifically from PDPs/Pickers we may collect: photographs, phone number, name, Pan card, Aadhar/Voter ID, driving license, Bank details, Location (while logged in), gender, vehicle type, home address(for inventory delivery), blood group"

5. **The app may access metadata from files on your device** (medium)  
   > "Our applications also may access metadata and other information associated with other files stored on your mobile device with your consent"

## Green Flags

1. **You can request data deletion** (positive)  
   > "If you wish to withdraw your consent for the use and disclosure of your personal information in the manner provided in this Policy or you want your data to be deleted, please write to us at support@swiggy.in. Please note that we may take time to process such requests, and your request shall take effect no later than 5 (Five) business days from the receipt of such request"

2. **Payment data is tokenized** (positive)  
   > "The third-party service providers with respect to our vault and tokenization services and our payment gateway and payment processing are compliant with the payment card industry standard"

---

## Key Category Findings

| Category | Risk | Key Quote |
|----------|------|-----------|
| Camera & Microphone | Unknown | Policy is silent |
| Location & GPS | Risky | "Our applications collect real-time information about the location of your device, as permitted by you" |
| Contacts | Unknown | Policy is silent for regular users |
| Storage | Risky | "access metadata and other information associated with other files stored on your mobile device" |
| Data Sharing | Dangerous | Extensive sharing with restaurants, advertisers, AI providers, group companies |
| Account Identity | Risky | "Your full name, email address, address, postal code, password and other information... such as your gender, mobile phone number" |
| Ad Tracking | Dangerous | "You cannot opt out of advertising on the Platforms" |
| Children's Data | Unknown | Policy is silent |
| Network Activity | Risky | "log files of our Platforms that may contain Internet Protocol (IP) addresses, browser type and language... clickstream data" |
| Device Info | Dangerous | Collects installed apps, advertising identifiers, device motion, phone state |
| Health | Risky | "including your prescriptions" and "blood group" |
| Payments | Caution | "compliant with the payment card industry standard" |
| Deletion | Risky | "retain and store your personal information in anonymized or aggregated form, for as long as necessary" |
| Policy Changes | Caution | "your continued use... will constitute your consent and acceptance of those changes" |

---

## Strict Analysis Notes

- **No "sell" language found.** The policy does not explicitly state that Swiggy "sells" user data. The claim "shares your data with restaurants, advertisers, and AI companies" is directly supported by the sharing section.
- **Health data flag downgraded to medium** because prescription collection is conditional on using Instamart pharmaceutical services, and blood group collection applies to delivery partners, not all users.
- **Camera, contacts, and children's data marked unknown** because the policy is silent on these topics. Per strict rules, unknown categories trigger `needs_review: true`.
- **Ad opt-out is explicitly denied.** This justifies a dangerous rating for behavioral_ad_tracking and a high-severity red flag.
- **Device fingerprinting rated dangerous** because the policy explicitly lists installed applications, advertising identifiers, and phone state — a uniquely invasive combination.
