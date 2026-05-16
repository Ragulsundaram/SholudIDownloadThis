# Uber - Request a Ride

**Developer:** Uber Technologies, Inc.
**Category:** Travel
**Analyzed:** 2026-05-16 by claude-sonnet-4

## Summary Card

- **Overall Risk:** RISKY
- **Score:** 52/100
- **Grade:** D

### Red Flags

- **Precise location tracked and approximate location shared with advertisers** (high)
  - Uber collects your precise location during trips and when the app is open. It shares your approximate location and trip details with ad intermediaries such as Google and The Trade Desk to personalize ads.

- **Government ID and facial scans collected** (high)
  - For verification and age-restricted items, Uber may require photos of your government ID and real-time selfies. This biometric data is stored for up to three years.

- **Data shared with ad networks and resellers** (high)
  - Uber receives demographic and interest data from data resellers and shares your information with advertising companies, ad intermediaries, and social media platforms to target ads.

- **Data kept for years after deletion** (medium)
  - Even if you delete your account, Uber can keep your data for up to seven years for tax, insurance, and legal reasons, and longer for fraud or safety issues.

- **Customer support data processed with GenAI** (medium)
  - Uber may use generative AI tools to process your customer support communications for quality and investigation purposes.

### Green Flags

- **Account deletion offered**
  - You can request to delete your account and most associated data through the Privacy Center in the app.

- **Personalized ads can be turned off**
  - Uber allows you to opt out of personalized ads and marketing communications in the Privacy Center.

- **Location sharing controls**
  - You can disable precise location collection and live location sharing with drivers through device and app settings.

### Verdict

Uber collects and shares an unusually large amount of sensitive data, including your location, identity documents, and trip details, with advertisers and data brokers. Use the privacy settings to limit ad personalization and location sharing if you choose to use the app.

---

## Key Policy Excerpts

> "We also determine your approximate location and can determine your precise location if you allow us to do so through the settings on your phone. If you do, we will collect your precise location from the time you request a ride or order until the ride is finished or your order is delivered. We also collect such data when you have the Uber app open on your phone's screen."

> "Government-issued identification documents, such as driver's licenses or passports (which may contain identification photos and numbers, expiration date, and demographics) User-submitted selfies Facial verification information"

> "Enrichment data such as demographics (age range, household income range, gender), general interests and lifestyle, general purchasing behavior, viewing preferences and streaming habits."

> "Ad intermediaries, such as Criteo, Google, Rokt, The Trade Desk, TripleLift and others. We share data - including advertising or device identifier, hashed email address, approximate location, current trip or order information, and ad interaction data - with these intermediaries to enable their services and for such other purposes as are disclosed in their privacy notices."

> "Uber retains your data for as long as necessary for the purposes described above... for 7 years from collection (unless you first delete your Uber account) if necessary for purposes of Uber's tax, insurance, legal or regulatory requirements"

> "Uber may use GenAI tools for these purposes." (customer support)

> "If we make significant changes, we will notify you in advance of the changes through the Uber apps or through other means, such as email."

---

## Full Raw Policy Text

The complete privacy notice text is stored in `data/verification/uber-request-a-ride.json`.
