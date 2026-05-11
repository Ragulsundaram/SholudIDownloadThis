# Canva iOS Review

**App:** Canva  
**Platform:** iOS  
**Analyzed:** 2026-05-11  
**Policy URL:** https://www.canva.com/policies/privacy-policy/  
**Terms URL:** https://www.canva.com/policies/terms-of-use/

---

## JSON Output

```json
{
  "meta": {
    "schema_version": "1.0",
    "analyzed_at": "2026-05-11",
    "analyzed_by": "claude-sonnet-4",
    "policy_url": "https://www.canva.com/policies/privacy-policy/",
    "terms_url": "https://www.canva.com/policies/terms-of-use/",
    "policy_last_updated": "unknown",
    "needs_review": false,
    "review_notes": ""
  },
  "app": {
    "slug": "canva-ios",
    "name": "Canva",
    "developer": "Canva Pty Ltd",
    "platform": "ios",
    "app_store_url": "https://apps.apple.com/us/app/canva-ai-video-photo-editor/id897446215",
    "app_store_id": "897446215",
    "icon_url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/37/bd/b5/37bdb5a5-1d36-fed0-7e55-80c2f67fe901/AppIcon-0-0-1x_U007epad-0-11-0-85-220.png/512x512bb.jpg",
    "category": "Graphics & Design",
    "sub_category": "Photo & Video Editor",
    "description": "An all-in-one design platform for creating social media graphics, presentations, posters, videos, and more with AI-powered tools."
  },
  "verdict": {
    "overall_risk": "risky",
    "score": 47,
    "grade": "D",
    "one_liner": "Canva collects extensive personal data including your designs, location, and device info, uses it for AI training, and shares it with advertisers and vendors.",
    "summary": "Canva gathers username, names, birthdate, phone number, communications, uploaded creations, and data from external accounts, public databases, and data aggregators. It also collects activity logs, hardware tokens, and geographic information. Data is used for functionality, analysis, personalization, and AI training (except Canva Education content). Shared with vendors for hosting, payments, and analysis; colleagues can see shared workspace materials; openly shared publications are public worldwide. Business email registrations may give organizations account oversight. External ad platforms receive data for tailored promotions. Canva states it does not sell directly collected information. Users can request access, amendments, or erasure. After account closure, data remains for a commercially reasonable time. Education accounts are warned after 12 months of inactivity and erased when school contracts end.",
    "recommendation": "think_twice",
    "recommendation_reason": "Canva collects extensive data, uses your content for AI training, and shares with advertisers and vendors. While education accounts have some protections, the broad data collection and vague retention policy are concerning."
  },
  "flags": {
    "red": [
      {
        "id": "red_ai_training",
        "title": "Uses your content for AI training",
        "plain_english": "Canva uses the designs and content you upload to train its artificial intelligence systems, unless you're on a special education plan.",
        "severity": "high"
      },
      {
        "id": "red_data_aggregation",
        "title": "Buys data from third-party brokers",
        "plain_english": "Canva purchases additional information about you from commercial data brokers and public databases to build a fuller profile.",
        "severity": "high"
      },
      {
        "id": "red_ad_sharing",
        "title": "Shares data with ad platforms",
        "plain_english": "Canva shares your information with external advertising companies so they can show you targeted ads.",
        "severity": "medium"
      },
      {
        "id": "red_org_oversight",
        "title": "Employers may gain account control",
        "plain_english": "If you sign up with a work email, your employer might be able to take control of your Canva account and see your designs.",
        "severity": "medium"
      },
      {
        "id": "red_vague_retention",
        "title": "Vague data retention policy",
        "plain_english": "Canva says it keeps your data for a commercially reasonable time after you close your account, which is vague and could mean years.",
        "severity": "medium"
      }
    ],
    "green": [
      {
        "id": "green_education_protection",
        "title": "Education accounts protected",
        "plain_english": "If you're a student using Canva through school, your content won't be used for AI training and you won't see ads.",
        "severity": "positive"
      },
      {
        "id": "green_no_selling",
        "title": "Does not sell your data directly",
        "plain_english": "Canva promises not to sell or rent the personal information it collects directly from you to other companies.",
        "severity": "positive"
      }
    ]
  },
  "categories": [
    {
      "id": "camera_microphone",
      "label": "Camera & Microphone",
      "icon": "Camera",
      "risk": "caution",
      "access_type": "on_demand",
      "required_for_core_function": false,
      "optional_access": true,
      "background_access": false,
      "plain_english": "Canva can access your camera to take photos for your designs, but only when you choose to use it.",
      "detail": "Camera access is on-demand for uploading photos to designs.",
      "policy_excerpt": "",
      "concerns": [],
      "score_impact": -4.5
    },
    {
      "id": "location_gps",
      "label": "Location & GPS",
      "icon": "MapPin",
      "risk": "risky",
      "access_type": "on_demand",
      "required_for_core_function": false,
      "optional_access": true,
      "background_access": false,
      "plain_english": "Canva collects your geographic location to personalize your experience and show localized content.",
      "detail": "Geographic information collected for personalization and localization.",
      "policy_excerpt": "geographic information",
      "concerns": ["Location used for profiling"],
      "score_impact": -9.75
    },
    {
      "id": "contacts_phonebook",
      "label": "Contacts & Phonebook",
      "icon": "BookUser",
      "risk": "unknown",
      "access_type": null,
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "The policy doesn't clearly say whether Canva accesses your phone contacts.",
      "detail": "No specific mention of contacts or phonebook access.",
      "policy_excerpt": "",
      "concerns": ["Not specified in policy"],
      "score_impact": -5.0
    },
    {
      "id": "storage_file_access",
      "label": "Storage & File Access",
      "icon": "FolderOpen",
      "risk": "risky",
      "access_type": "on_demand",
      "required_for_core_function": true,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Canva needs access to your photos and files so you can upload them to your designs. Your uploaded creations are stored on their servers and may be used for AI training.",
      "detail": "Full file access for uploading content. Uploads stored on servers and used for AI training (except education accounts).",
      "policy_excerpt": "uploaded creations",
      "concerns": ["Uploads used for AI training", "Publicly shared designs visible worldwide"],
      "score_impact": -6.5
    },
    {
      "id": "data_sharing_third_parties",
      "label": "Data Sharing with 3rd Parties",
      "icon": "Share2",
      "risk": "risky",
      "access_type": null,
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Canva shares your data with companies that host the service, process payments, and analyze usage. It also shares with advertisers and may transfer data during corporate restructuring.",
      "detail": "Shared with vendors (hosting, payments, analysis), ad platforms, and may transfer during corporate restructuring. Organization oversight possible with business emails.",
      "policy_excerpt": "Disclosure occurs with vendors handling hosting, payments, and analysis. Business email registrations may cause an organization to assume account oversight. During corporate restructuring, user records may transfer to successors. External ad platforms display tailored promotions.",
      "concerns": ["Shared with advertisers", "Organization oversight possible", "Data may transfer during restructuring"],
      "score_impact": -19.5
    },
    {
      "id": "account_identity",
      "label": "Account & Identity Data",
      "icon": "UserCircle",
      "risk": "risky",
      "access_type": "on_demand",
      "required_for_core_function": true,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Canva collects extensive identity data including your name, birthdate, phone number, and data from your social media accounts. They also buy extra data about you from data brokers.",
      "detail": "Username, names, birthdate, phone number, external account data, and commercial data aggregator information collected.",
      "policy_excerpt": "username, your first and last names, birthdate, phone number, data from external account connections, publicly available databases, and commercial data aggregators",
      "concerns": ["Extensive identity data collected", "Birthdate collected", "Data purchased from brokers"],
      "score_impact": -9.75
    },
    {
      "id": "behavioural_ad_tracking",
      "label": "Behavioural & Ad Tracking",
      "icon": "BarChart2",
      "risk": "risky",
      "access_type": "continuous",
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Canva tracks your activity logs and shares data with ad platforms to show you targeted advertisements.",
      "detail": "Activity logs and hardware tokens tracked continuously. Shared with external ad platforms for tailored promotions.",
      "policy_excerpt": "activity logs, hardware tokens, and geographic information. External ad platforms display tailored promotions.",
      "concerns": ["Behavior tracked for ads", "Shared with ad platforms"],
      "score_impact": -16.25
    },
    {
      "id": "childrens_data",
      "label": "Children's Data Handling",
      "icon": "Baby",
      "risk": "risky",
      "access_type": null,
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Canva has an education program that doesn't show ads or use content for AI training, but it still collects data from students and warns about deletion after 12 months of inactivity.",
      "detail": "Canva Education: no ads, no AI training on user content. Inactive student accounts warned after 12 months, erased when school contract ends.",
      "policy_excerpt": "Canva Education: We will not use User Content of Canva Education for AI training. The education platform shows no ads to pupils.",
      "concerns": ["Student data still collected", "12-month inactivity deletion warning"],
      "score_impact": -6.5
    },
    {
      "id": "network_internet_activity",
      "label": "Network & Internet Activity",
      "icon": "Wifi",
      "risk": "risky",
      "access_type": "continuous",
      "required_for_core_function": true,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Canva logs your internet activity and device signals to run the service and personalize your experience.",
      "detail": "Activity logs captured continuously for service functionality and personalization.",
      "policy_excerpt": "activity logs",
      "concerns": ["Activity logged continuously"],
      "score_impact": -3.25
    },
    {
      "id": "device_fingerprinting",
      "label": "Device Info & Fingerprinting",
      "icon": "Smartphone",
      "risk": "risky",
      "access_type": "continuous",
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Canva collects hardware tokens and device information to track you and personalize your experience.",
      "detail": "Hardware tokens collected continuously for tracking and personalization.",
      "policy_excerpt": "hardware tokens",
      "concerns": ["Device fingerprinting for tracking"],
      "score_impact": -9.75
    },
    {
      "id": "health_biometric",
      "label": "Health & Biometric Data",
      "icon": "Heart",
      "risk": "safe",
      "access_type": null,
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Canva does not collect health or biometric data.",
      "detail": "No health or biometric data collection.",
      "policy_excerpt": "",
      "concerns": [],
      "score_impact": 0
    },
    {
      "id": "financial_payment",
      "label": "Financial & Payment Data",
      "icon": "CreditCard",
      "risk": "caution",
      "access_type": "on_demand",
      "required_for_core_function": false,
      "optional_access": true,
      "background_access": false,
      "plain_english": "Canva collects payment information when you upgrade to a paid plan. Payments are processed by third-party vendors.",
      "detail": "Payment data collected for premium subscriptions, processed by vendors.",
      "policy_excerpt": "vendors handling payments",
      "concerns": ["Payment data shared with vendors"],
      "score_impact": -4.5
    },
    {
      "id": "data_deletion_user_rights",
      "label": "Data Deletion & User Rights",
      "icon": "ShieldCheck",
      "risk": "risky",
      "access_type": null,
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "You can ask Canva to delete your data, but they keep it for a commercially reasonable time which could mean a long while. Student accounts get warnings after a year of not using the app.",
      "detail": "Users may request access, amendments, or erasure. After account closure, profiles remain for a commercially reasonable time. Education accounts warned after 12 months of inactivity.",
      "policy_excerpt": "Individuals may request access, amendments, or erasure by contacting the privacy team. After account closure, profiles and materials remain for a commercially reasonable time to satisfy regulatory, audit, and backup needs. Under the education program, inactive student accounts receive deletion warnings after twelve months.",
      "concerns": ["Vague retention period", "Commercially reasonable time is undefined", "Publicly shared content may persist"],
      "score_impact": -6.5
    },
    {
      "id": "policy_change_notification",
      "label": "Policy Change Notification",
      "icon": "Bell",
      "risk": "unknown",
      "access_type": null,
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "The policy doesn't clearly say how Canva will tell you if the privacy rules change.",
      "detail": "No specific policy change notification mechanism mentioned.",
      "policy_excerpt": "",
      "concerns": ["No clear notification mechanism stated"],
      "score_impact": -2.5
    }
  ],
  "scoring": {
    "base_score": 100,
    "max_possible_deductions": 205,
    "deductions": [
      { "category": "camera_microphone", "risk": "caution", "max": 15, "rate": 0.3, "deduction": 4.5 },
      { "category": "location_gps", "risk": "risky", "max": 15, "rate": 0.65, "deduction": 9.75 },
      { "category": "contacts_phonebook", "risk": "unknown", "max": 20, "rate": 0.5, "deduction": 10.0 },
      { "category": "storage_file_access", "risk": "risky", "max": 10, "rate": 0.65, "deduction": 6.5 },
      { "category": "data_sharing_third_parties", "risk": "risky", "max": 30, "rate": 0.65, "deduction": 19.5 },
      { "category": "account_identity", "risk": "risky", "max": 15, "rate": 0.65, "deduction": 9.75 },
      { "category": "behavioural_ad_tracking", "risk": "risky", "max": 25, "rate": 0.65, "deduction": 16.25 },
      { "category": "childrens_data", "risk": "risky", "max": 10, "rate": 0.65, "deduction": 6.5 },
      { "category": "network_internet_activity", "risk": "risky", "max": 5, "rate": 0.65, "deduction": 3.25 },
      { "category": "device_fingerprinting", "risk": "risky", "max": 15, "rate": 0.65, "deduction": 9.75 },
      { "category": "health_biometric", "risk": "safe", "max": 15, "rate": 0, "deduction": 0 },
      { "category": "financial_payment", "risk": "caution", "max": 15, "rate": 0.3, "deduction": 4.5 },
      { "category": "data_deletion_user_rights", "risk": "risky", "max": 10, "rate": 0.65, "deduction": 6.5 },
      { "category": "policy_change_notification", "risk": "unknown", "max": 5, "rate": 0.5, "deduction": 2.5 }
    ],
    "total_deductions": 109.25,
    "final_score": 47,
    "grade": "D"
  }
}
```

---

## Summary Card

**App:** Canva — iOS  
**Overall Risk:** Risky — **Score: 47/100 · Grade D**

### Red Flags
- **Uses your content for AI training:** Canva uses the designs and content you upload to train its artificial intelligence systems, unless you're on a special education plan.
- **Buys data from third-party brokers:** Canva purchases additional information about you from commercial data brokers and public databases to build a fuller profile.
- **Shares data with ad platforms:** Canva shares your information with external advertising companies so they can show you targeted ads.
- **Employers may gain account control:** If you sign up with a work email, your employer might be able to take control of your Canva account and see your designs.
- **Vague data retention policy:** Canva says it keeps your data for a commercially reasonable time after you close your account, which is vague and could mean years.

### Green Flags
- **Education accounts protected:** If you're a student using Canva through school, your content won't be used for AI training and you won't see ads.
- **Does not sell your data directly:** Canva promises not to sell or rent the personal information it collects directly from you to other companies.

### Verdict
Canva is a powerful design tool but collects extensive data about you, uses your content for AI training, and shares with advertisers. The vague retention policy and possibility of employer oversight are concerning. Think twice before uploading sensitive designs or using a work email.
