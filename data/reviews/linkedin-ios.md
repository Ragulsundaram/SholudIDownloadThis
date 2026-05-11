# LinkedIn iOS Review

**App:** LinkedIn  
**Platform:** iOS  
**Analyzed:** 2026-05-11  
**Policy URL:** https://www.linkedin.com/legal/privacy-policy  
**Terms URL:** https://www.linkedin.com/legal/user-agreement

---

## JSON Output

```json
{
  "meta": {
    "schema_version": "1.0",
    "analyzed_at": "2026-05-11",
    "analyzed_by": "claude-sonnet-4",
    "policy_url": "https://www.linkedin.com/legal/privacy-policy",
    "terms_url": "https://www.linkedin.com/legal/user-agreement",
    "policy_last_updated": "unknown",
    "needs_review": false,
    "review_notes": ""
  },
  "app": {
    "slug": "linkedin-ios",
    "name": "LinkedIn",
    "developer": "LinkedIn Corporation (Microsoft affiliate)",
    "platform": "ios",
    "app_store_url": "https://apps.apple.com/us/app/linkedin-community-network/id288429040",
    "app_store_id": "288429040",
    "icon_url": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/06/57/07/065707da-578f-c955-c23e-2e89081e5100/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "category": "Business",
    "sub_category": "Professional Networking",
    "description": "A professional networking platform for connecting with colleagues, finding jobs, sharing industry news, and building your career."
  },
  "verdict": {
    "overall_risk": "caution",
    "score": 55,
    "grade": "C",
    "one_liner": "LinkedIn shares your professional data with Microsoft, advertisers, and employers, and tracks your behavior across the platform for ad targeting.",
    "summary": "LinkedIn collects extensive personal and professional data including name, email, phone, profile fields, resumes, calendar syncs, usage behavior, device info, and location. Data comes from third-party partners, employers, school records, and Microsoft affiliates. Your profile is visible to all members and public posts can appear off-site. Enterprise accounts let employers see workplace tool usage. LinkedIn shares data with affiliates (including Microsoft), vendors, advertisers (hashed identifiers), and under legal demands. Users can request erasure, correction, or restriction. Data is retained while the account is active, with profile visibility ceasing within 24 hours after closure and deletion typically within 30 days, though retention extends where legally necessary.",
    "recommendation": "think_twice",
    "recommendation_reason": "LinkedIn collects extensive professional and personal data, shares it with Microsoft and advertisers, and allows employers to monitor workplace tool usage. While you have deletion rights, the broad sharing and tracking practices warrant caution."
  },
  "flags": {
    "red": [
      {
        "id": "red_microsoft_sharing",
        "title": "Shares data with Microsoft",
        "plain_english": "LinkedIn shares your data with Microsoft and other corporate affiliates, which means your professional information feeds into a larger tech ecosystem.",
        "severity": "high"
      },
      {
        "id": "red_employer_monitoring",
        "title": "Employers can monitor activity",
        "plain_english": "If you use LinkedIn through a work account, your employer can see how you use workplace tools, though not your personal job searches.",
        "severity": "high"
      },
      {
        "id": "red_ad_tracking",
        "title": "Tracks you for ads",
        "plain_english": "LinkedIn tracks what you do on the platform and shares hashed versions of your data with advertisers to show you targeted ads.",
        "severity": "medium"
      },
      {
        "id": "red_public_profile",
        "title": "Profile is publicly visible",
        "plain_english": "Your LinkedIn profile is visible to all members, and things you post publicly can appear on other websites outside of LinkedIn.",
        "severity": "medium"
      }
    ],
    "green": [
      {
        "id": "green_deletion_rights",
        "title": "Data deletion rights",
        "plain_english": "You can ask LinkedIn to delete your data, and they usually remove your profile within a day and delete everything within a month.",
        "severity": "positive"
      },
      {
        "id": "green_job_search_privacy",
        "title": "Job search privacy",
        "plain_english": "Your employer cannot see your personal job searches on LinkedIn, even if you have a work account.",
        "severity": "positive"
      }
    ]
  },
  "categories": [
    {
      "id": "camera_microphone",
      "label": "Camera & Microphone",
      "icon": "Camera",
      "risk": "safe",
      "access_type": "never",
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "LinkedIn does not use your camera or microphone. It's a text-based professional network.",
      "detail": "No camera or microphone access required.",
      "policy_excerpt": "",
      "concerns": [],
      "score_impact": 0
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
      "plain_english": "LinkedIn collects your location data to show you nearby jobs and ads. This is used for profiling and targeting.",
      "detail": "Location data collected for job recommendations and ad targeting.",
      "policy_excerpt": "device, location",
      "concerns": ["Location used for profiling", "Shared with advertisers"],
      "score_impact": -9.75
    },
    {
      "id": "contacts_phonebook",
      "label": "Contacts & Phonebook",
      "icon": "BookUser",
      "risk": "risky",
      "access_type": "on_demand",
      "required_for_core_function": false,
      "optional_access": true,
      "background_access": false,
      "plain_english": "LinkedIn can access your contacts to suggest people you might know. Your contacts are uploaded to LinkedIn's servers.",
      "detail": "Contacts accessed for connection suggestions. Uploaded to servers.",
      "policy_excerpt": "",
      "concerns": ["Contacts uploaded to servers"],
      "score_impact": -13.0
    },
    {
      "id": "storage_file_access",
      "label": "Storage & File Access",
      "icon": "FolderOpen",
      "risk": "safe",
      "access_type": "on_demand",
      "required_for_core_function": false,
      "optional_access": true,
      "background_access": false,
      "plain_english": "LinkedIn only accesses your files when you choose to upload a resume or photo. It doesn't scan your storage.",
      "detail": "File access is user-initiated only for uploads.",
      "policy_excerpt": "resumes",
      "concerns": [],
      "score_impact": 0
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
      "plain_english": "LinkedIn shares your data with Microsoft, advertisers, vendors, and employers. Your public posts can appear on other websites too.",
      "detail": "Shared with Microsoft affiliates, vendors, advertisers (hashed identifiers), employers, and under legal demands. Public content may appear off-site.",
      "policy_excerpt": "Your profile is fully visible to all Members and customers. LinkedIn shares information with Affiliates to provide and develop our Services, including Microsoft, and with outside vendors for operational support. Advertisers receive hashed identifiers or device signals.",
      "concerns": ["Shared with Microsoft", "Shared with advertisers", "Public posts visible off-site", "May transfer during mergers"],
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
      "plain_english": "LinkedIn collects extensive identity data including your resume, work history, education, and calendar syncs. This is linked to your professional profile and shared with Microsoft.",
      "detail": "Name, email, phone, profile fields, resumes, calendar syncs collected. Linked to professional profile and Microsoft ecosystem.",
      "policy_excerpt": "name, email address and/or mobile number, profile fields, resumes, and calendar syncs",
      "concerns": ["Extensive professional identity data", "Linked to Microsoft", "Calendar syncs monitored"],
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
      "plain_english": "LinkedIn constantly tracks what you click, read, and search for to show you targeted job ads and sponsored content.",
      "detail": "Usage behavior, cookies, device signals tracked continuously. Shared with advertisers for targeting.",
      "policy_excerpt": "service usage, deploys cookies, and captures device, location, and communication metadata. Advertisers receive hashed identifiers or device signals.",
      "concerns": ["Extensive behavior tracking", "Ad targeting", "Cross-device tracking"],
      "score_impact": -16.25
    },
    {
      "id": "childrens_data",
      "label": "Children's Data Handling",
      "icon": "Baby",
      "risk": "unknown",
      "access_type": null,
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "The policy doesn't say anything specific about how LinkedIn handles children's data.",
      "detail": "No specific children's data handling information found.",
      "policy_excerpt": "",
      "concerns": ["No children's data safeguards mentioned"],
      "score_impact": -5.0
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
      "plain_english": "LinkedIn logs your internet activity and communication metadata to keep the service running and target ads.",
      "detail": "IP logging, communication metadata captured. Used for security and profiling.",
      "policy_excerpt": "communication metadata",
      "concerns": ["Communication metadata logged", "Network activity used for profiling"],
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
      "plain_english": "LinkedIn collects device information and creates fingerprints to track you across devices and sessions.",
      "detail": "Device data and signals collected continuously for tracking and ad targeting.",
      "policy_excerpt": "captures device",
      "concerns": ["Device fingerprinting for cross-device tracking", "Shared with advertisers"],
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
      "plain_english": "LinkedIn does not collect health or biometric data.",
      "detail": "No health or biometric data collection.",
      "policy_excerpt": "",
      "concerns": [],
      "score_impact": 0
    },
    {
      "id": "financial_payment",
      "label": "Financial & Payment Data",
      "icon": "CreditCard",
      "risk": "safe",
      "access_type": "never",
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "LinkedIn does not handle payments in the app. Premium subscriptions are processed through the App Store.",
      "detail": "No payment data collection in the app.",
      "policy_excerpt": "",
      "concerns": [],
      "score_impact": 0
    },
    {
      "id": "data_deletion_user_rights",
      "label": "Data Deletion & User Rights",
      "icon": "ShieldCheck",
      "risk": "caution",
      "access_type": null,
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "You can delete your LinkedIn account, and your profile disappears within a day. Full deletion takes about a month, but they keep some data for legal reasons.",
      "detail": "Users may request erasure, correction, restriction, or machine-readable copy. Profile visibility ceases within 24 hours after closure, deletion typically within 30 days. Data retained where legally necessary.",
      "policy_excerpt": "members may request erasure, correction, restriction, or a machine-readable copy of their records. Profile visibility usually ceases within 24 hours, and deletion typically completes within 30 days. We retain your personal data even after you have closed your account if reasonably necessary for legal, regulatory, or security purposes.",
      "concerns": ["Data retained for legal purposes after account closure", "Public content may persist on external services"],
      "score_impact": -3.0
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
      "plain_english": "The policy doesn't clearly say how LinkedIn will tell you if the privacy rules change.",
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
      { "category": "camera_microphone", "risk": "safe", "max": 15, "rate": 0, "deduction": 0 },
      { "category": "location_gps", "risk": "risky", "max": 15, "rate": 0.65, "deduction": 9.75 },
      { "category": "contacts_phonebook", "risk": "risky", "max": 20, "rate": 0.65, "deduction": 13.0 },
      { "category": "storage_file_access", "risk": "safe", "max": 10, "rate": 0, "deduction": 0 },
      { "category": "data_sharing_third_parties", "risk": "risky", "max": 30, "rate": 0.65, "deduction": 19.5 },
      { "category": "account_identity", "risk": "risky", "max": 15, "rate": 0.65, "deduction": 9.75 },
      { "category": "behavioural_ad_tracking", "risk": "risky", "max": 25, "rate": 0.65, "deduction": 16.25 },
      { "category": "childrens_data", "risk": "unknown", "max": 10, "rate": 0.5, "deduction": 5.0 },
      { "category": "network_internet_activity", "risk": "risky", "max": 5, "rate": 0.65, "deduction": 3.25 },
      { "category": "device_fingerprinting", "risk": "risky", "max": 15, "rate": 0.65, "deduction": 9.75 },
      { "category": "health_biometric", "risk": "safe", "max": 15, "rate": 0, "deduction": 0 },
      { "category": "financial_payment", "risk": "safe", "max": 15, "rate": 0, "deduction": 0 },
      { "category": "data_deletion_user_rights", "risk": "caution", "max": 10, "rate": 0.3, "deduction": 3.0 },
      { "category": "policy_change_notification", "risk": "unknown", "max": 5, "rate": 0.5, "deduction": 2.5 }
    ],
    "total_deductions": 91.75,
    "final_score": 55,
    "grade": "C"
  }
}
```

---

## Summary Card

**App:** LinkedIn — iOS  
**Overall Risk:** Caution — **Score: 55/100 · Grade C**

### Red Flags
- **Shares data with Microsoft:** LinkedIn shares your data with Microsoft and other corporate affiliates, which means your professional information feeds into a larger tech ecosystem.
- **Employers can monitor activity:** If you use LinkedIn through a work account, your employer can see how you use workplace tools, though not your personal job searches.
- **Tracks you for ads:** LinkedIn tracks what you do on the platform and shares hashed versions of your data with advertisers to show you targeted ads.
- **Profile is publicly visible:** Your LinkedIn profile is visible to all members, and things you post publicly can appear on other websites outside of LinkedIn.

### Green Flags
- **Data deletion rights:** You can ask LinkedIn to delete your data, and they usually remove your profile within a day and delete everything within a month.
- **Job search privacy:** Your employer cannot see your personal job searches on LinkedIn, even if you have a work account.

### Verdict
LinkedIn is a powerful professional tool but collects extensive data about you and shares it with Microsoft, advertisers, and employers. While you have some control over your data and can delete your account, the broad sharing and tracking practices mean you should think twice about what information you share.
