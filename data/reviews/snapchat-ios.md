# Snapchat iOS Review

**App:** Snapchat  
**Platform:** iOS  
**Analyzed:** 2026-05-11  
**Policy URL:** https://values.snap.com/privacy/privacy-policy  
**Terms URL:** https://values.snap.com/terms

---

## JSON Output

```json
{
  "meta": {
    "schema_version": "1.0",
    "analyzed_at": "2026-05-11",
    "analyzed_by": "claude-sonnet-4",
    "policy_url": "https://values.snap.com/privacy/privacy-policy",
    "terms_url": "https://values.snap.com/terms",
    "policy_last_updated": "unknown",
    "needs_review": false,
    "review_notes": ""
  },
  "app": {
    "slug": "snapchat-ios",
    "name": "Snapchat",
    "developer": "Snap, Inc.",
    "platform": "ios",
    "app_store_url": "https://apps.apple.com/us/app/snapchat/id447188370",
    "app_store_id": "447188370",
    "icon_url": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/71/d8/6e/71d86ed5-8e4c-8486-03b2-8b4412b42a94/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    "category": "Social Networking",
    "sub_category": "Photo & Video Messaging",
    "description": "A multimedia messaging app known for ephemeral photos and videos, creative filters, and location-based features like Snap Map."
  },
  "verdict": {
    "overall_risk": "caution",
    "score": 63,
    "grade": "C",
    "one_liner": "Snapchat's disappearing messages are a privacy win, but the app still tracks your location, collects device data, and shares information with partners and advertisers.",
    "summary": "Snapchat collects account credentials, photos/videos you send, usage data, and device metrics. Data also comes from other users, affiliates, and third parties. Messages usually disappear from servers about one day after viewing unless saved. Stored media remains until deleted. Users can access, update, and delete their information, restrict contacts, export records, and modify promotional settings. Data is shared with connections, public spaces, vendors, commercial collaborators, anti-fraud groups, and regulators when mandated. Retention is broad: kept as long as you tell them to, or as long as they need it. Courts or misconduct probes may extend preservation.",
    "recommendation": "think_twice",
    "recommendation_reason": "Snapchat's ephemeral messaging is great for privacy, but Snap Maps tracks your location, and the company shares data widely with vendors and advertisers. The broad retention policy is also concerning."
  },
  "flags": {
    "red": [
      {
        "id": "red_snap_maps_tracking",
        "title": "Snap Maps tracks your location",
        "plain_english": "Snapchat's Snap Maps feature can show your exact location to friends in real-time, which is a major privacy risk if you forget to turn it off.",
        "severity": "high"
      },
      {
        "id": "red_device_tracking",
        "title": "Collects device metrics",
        "plain_english": "Snapchat collects detailed information about your device to recognize you and deliver content.",
        "severity": "medium"
      },
      {
        "id": "red_third_party_sharing",
        "title": "Shares data with partners",
        "plain_english": "Snapchat shares your data with vendors, advertisers, and anti-fraud companies.",
        "severity": "medium"
      },
      {
        "id": "red_broad_retention",
        "title": "Broad data retention",
        "plain_english": "Snapchat keeps your data for as long as they think they need it, and law enforcement can extend that even further.",
        "severity": "medium"
      }
    ],
    "green": [
      {
        "id": "green_ephemeral_messages",
        "title": "Messages disappear by default",
        "plain_english": "Most of your messages automatically delete from Snapchat's servers within about a day after they're viewed, which is great for privacy.",
        "severity": "positive"
      },
      {
        "id": "green_user_controls",
        "title": "User data controls",
        "plain_english": "You can access, update, and delete your information, as well as restrict who can contact you and export your records.",
        "severity": "positive"
      },
      {
        "id": "green_no_ads_targeting",
        "title": "Limited ad targeting options",
        "plain_english": "You can modify your promotional settings to reduce how Snapchat uses your data for ads.",
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
      "required_for_core_function": true,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Snapchat needs your camera and microphone to send photos and videos, which is the main purpose of the app. It only accesses them when you choose to send something.",
      "detail": "Camera and microphone are core to the messaging experience. Used on-demand only.",
      "policy_excerpt": "media",
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
      "plain_english": "Snapchat's Snap Maps can track your precise location and show it to your friends. This is a major privacy risk if left on.",
      "detail": "Location collected for Snap Maps and other features. Can be disabled in settings.",
      "policy_excerpt": "",
      "concerns": ["Real-time location sharing", "Precise location tracked"],
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
      "plain_english": "Snapchat can access your phone contacts to suggest friends. Your contacts are uploaded to their servers.",
      "detail": "Contacts accessed for friend suggestions. Uploaded to servers.",
      "policy_excerpt": "",
      "concerns": ["Contacts uploaded to servers"],
      "score_impact": -13.0
    },
    {
      "id": "storage_file_access",
      "label": "Storage & File Access",
      "icon": "FolderOpen",
      "risk": "caution",
      "access_type": "on_demand",
      "required_for_core_function": true,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Snapchat needs access to your photos so you can send them. Messages disappear by default, but saved media (Memories) stays on their servers until you delete it.",
      "detail": "Storage access for sending media. Saved Memories persist until deleted.",
      "policy_excerpt": "stored media remains until erased",
      "concerns": ["Saved media persists on servers"],
      "score_impact": -3.0
    },
    {
      "id": "data_sharing_third_parties",
      "label": "Data Sharing with 3rd Parties",
      "icon": "Share2",
      "risk": "caution",
      "access_type": null,
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Snapchat shares your data with companies that help run the service, advertisers, and anti-fraud groups. They don't sell your data, but they do share it.",
      "detail": "Shared with vendors, commercial collaborators, anti-fraud groups, and regulators.",
      "policy_excerpt": "Dissemination occurs with connections, optional public spaces, vendors, commercial collaborators, and anti-fraud groups, plus regulators when mandated.",
      "concerns": ["Shared with advertisers", "Shared with anti-fraud groups"],
      "score_impact": -9.0
    },
    {
      "id": "account_identity",
      "label": "Account & Identity Data",
      "icon": "UserCircle",
      "risk": "caution",
      "access_type": "on_demand",
      "required_for_core_function": true,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Snapchat needs your email and phone number to create an account. They also collect account credentials you provide.",
      "detail": "Account credentials collected for account management.",
      "policy_excerpt": "account credentials",
      "concerns": [],
      "score_impact": -4.5
    },
    {
      "id": "behavioural_ad_tracking",
      "label": "Behavioural & Ad Tracking",
      "icon": "BarChart2",
      "risk": "caution",
      "access_type": "continuous",
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Snapchat tracks your usage behavior to show you ads and content. You can modify your ad settings, but tracking happens by default.",
      "detail": "Usage behavior tracked for ads and content personalization. Promotional settings can be modified.",
      "policy_excerpt": "usage and device metrics",
      "concerns": ["Behavior tracked for ads"],
      "score_impact": -7.5
    },
    {
      "id": "childrens_data",
      "label": "Children's Data Handling",
      "icon": "Baby",
      "risk": "caution",
      "access_type": null,
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Snapchat says you must be 13 or older, but it's very popular with teenagers and doesn't have strong safeguards for young users.",
      "detail": "13+ requirement but popular with teens. No strong children's data safeguards mentioned.",
      "policy_excerpt": "",
      "concerns": ["Popular with teenagers", "Limited age verification"],
      "score_impact": -3.0
    },
    {
      "id": "network_internet_activity",
      "label": "Network & Internet Activity",
      "icon": "Wifi",
      "risk": "caution",
      "access_type": "continuous",
      "required_for_core_function": true,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Snapchat logs your internet activity to deliver messages and show you content. This is necessary for the app to work.",
      "detail": "Network activity logged for service delivery.",
      "policy_excerpt": "usage and device metrics",
      "concerns": [],
      "score_impact": -1.5
    },
    {
      "id": "device_fingerprinting",
      "label": "Device Info & Fingerprinting",
      "icon": "Smartphone",
      "risk": "caution",
      "access_type": "continuous",
      "required_for_core_function": false,
      "optional_access": false,
      "background_access": false,
      "plain_english": "Snapchat collects device metrics to recognize your device and keep your account secure.",
      "detail": "Device metrics collected for security and service delivery.",
      "policy_excerpt": "device metrics",
      "concerns": ["Device metrics collected"],
      "score_impact": -4.5
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
      "plain_english": "Snapchat does not collect health or biometric data.",
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
      "plain_english": "Snapchat does not handle payments in the app. Premium features are processed through the App Store.",
      "detail": "No payment data collection.",
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
      "plain_english": "You can delete your Snapchat account and most data, but they keep some information for as long as they think they need it. Law enforcement can also request extended retention.",
      "detail": "Users can access, update, and delete information. Messages usually vanish ~1 day after viewing. Stored media until erased. Broad retention: kept as long as needed. Courts/misconduct may extend preservation.",
      "policy_excerpt": "The firm will keep information as long as you tell us to, and otherwise as long as we need it. Messages usually vanish from systems roughly one day after viewing unless preserved; stored media remains until erased. Courts or misconduct probes may extend preservation.",
      "concerns": ["Broad retention policy", "Law enforcement can extend retention"],
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
      "plain_english": "The policy doesn't clearly say how Snapchat will tell you if the privacy rules change.",
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
      { "category": "contacts_phonebook", "risk": "risky", "max": 20, "rate": 0.65, "deduction": 13.0 },
      { "category": "storage_file_access", "risk": "caution", "max": 10, "rate": 0.3, "deduction": 3.0 },
      { "category": "data_sharing_third_parties", "risk": "caution", "max": 30, "rate": 0.3, "deduction": 9.0 },
      { "category": "account_identity", "risk": "caution", "max": 15, "rate": 0.3, "deduction": 4.5 },
      { "category": "behavioural_ad_tracking", "risk": "caution", "max": 25, "rate": 0.3, "deduction": 7.5 },
      { "category": "childrens_data", "risk": "caution", "max": 10, "rate": 0.3, "deduction": 3.0 },
      { "category": "network_internet_activity", "risk": "caution", "max": 5, "rate": 0.3, "deduction": 1.5 },
      { "category": "device_fingerprinting", "risk": "caution", "max": 15, "rate": 0.3, "deduction": 4.5 },
      { "category": "health_biometric", "risk": "safe", "max": 15, "rate": 0, "deduction": 0 },
      { "category": "financial_payment", "risk": "safe", "max": 15, "rate": 0, "deduction": 0 },
      { "category": "data_deletion_user_rights", "risk": "caution", "max": 10, "rate": 0.3, "deduction": 3.0 },
      { "category": "policy_change_notification", "risk": "unknown", "max": 5, "rate": 0.5, "deduction": 2.5 }
    ],
    "total_deductions": 75.25,
    "final_score": 63,
    "grade": "C"
  }
}
```

---

## Summary Card

**App:** Snapchat — iOS  
**Overall Risk:** Caution — **Score: 63/100 · Grade C**

### Red Flags
- **Snap Maps tracks your location:** Snapchat's Snap Maps feature can show your exact location to friends in real-time, which is a major privacy risk if you forget to turn it off.
- **Collects device metrics:** Snapchat collects detailed information about your device to recognize you and deliver content.
- **Shares data with partners:** Snapchat shares your data with vendors, advertisers, and anti-fraud companies.
- **Broad data retention:** Snapchat keeps your data for as long as they think they need it, and law enforcement can extend that even further.

### Green Flags
- **Messages disappear by default:** Most of your messages automatically delete from Snapchat's servers within about a day after they're viewed, which is great for privacy.
- **User data controls:** You can access, update, and delete your information, as well as restrict who can contact you and export your records.
- **Limited ad targeting options:** You can modify your promotional settings to reduce how Snapchat uses your data for ads.

### Verdict
Snapchat's ephemeral messaging is a genuine privacy advantage over most messaging apps. However, Snap Maps is a serious location tracking risk, and the company shares data broadly with partners and advertisers. If you use Snapchat, turn off Snap Maps and be careful about what you save to Memories.
