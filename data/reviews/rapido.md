# Re-analysis: Rapido
**Date:** 2026-05-16  
**Analyst:** claude-sonnet-4  
**Policy:** https://rapido.bike/privacy.html

## Verdict
- **Score:** 56 / Grade: C / Risk: caution
- **Recommendation:** think_twice

## Red Flags (5)
1. **Captains' location is collected when the app is closed** (high) — Background location collected when On-Duty is enabled.
2. **Government IDs and selfies may be required for Captains** (high) — Aadhaar, PAN, license, and real-time selfies collected.
3. **May collect health information from Captains** (medium) — Body temperature, symptoms, vaccination status. Downgraded from high because policy says "may collect" and applies only to Captains.
4. **Your data may be shared for market research and other purposes** (medium) — Broad third-party sharing clause.
5. **Calls with Rapido are recorded for Captains** (medium) — Calls with Vendor Partners and Captains are recorded.

## Green Flags (3)
1. **No targeted advertising**
2. **Data deleted after 180 days**
3. **Complies with Indian IT Act**

## Key Changes in This Re-analysis
- **Fixed `device_fingerprinting` plain_english:** Removed unsupported claim that device data is used "to build a unique identifier for advertising." The policy explicitly states: "Please note, we do not use the information collected from you for targeted advertising."
- **Downgraded `red_health_data_collection` severity:** From high to medium because the policy says "may collect" and it applies only to Captains.
- **Tightened red flag titles:** Changed "is collected" to "may be required" or "are recorded" to match policy verbs exactly.
- **Removed unsupported concern:** Deleted "Device fingerprint persists even if you delete and reinstall the app" because the policy does not explicitly state this.

## Scoring
No category risk levels changed. Total deductions remain 90.0. Score and grade unchanged (56, C).
