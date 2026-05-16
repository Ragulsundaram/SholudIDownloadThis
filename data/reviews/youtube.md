# YouTube Re-Analysis Review

**Date:** 2026-05-16
**Policy:** Google Privacy Policy (Effective April 2, 2026)
**Source:** `data/verification/youtube.json`

## Key Changes

### Verdict
- **Score:** 60 → **64** (Grade: C)
- **One-liner softened:** Removed "to sell ads." Now: "YouTube collects information about every video you watch to show personalized ads, but gives you tools to turn off personalized ads and delete your history."

### Flags
- **Removed** `red_passive_acceptance` ("No way to reject policy changes without deleting your account"). This claim was based on a **fabricated quote** not found in the privacy policy text. The actual policy says the opposite: "We will not reduce your rights under this Privacy Policy without your explicit consent."
- `green_no_pii_sales` renamed to `green_no_pii_sharing` and reworded to match the policy verbatim: "We don't share information that personally identifies you with advertisers, such as your name or email, unless you ask us to." The policy never uses the word "sell."
- All flag text now directly supported by verbatim `policy_excerpt` quotes.

### Categories
- **camera_microphone:** caution → **unknown** (unified Google policy does not explicitly address camera/microphone for YouTube)
- **childrens_data:** caution → **unknown** (policy mentions YouTube Kids but does not state age requirements for the main app)
- **policy_change_notification:** caution → **safe** (policy explicitly promises not to reduce rights without explicit consent)
- **contacts_phonebook:** safe unchanged, but quote corrected to note the policy does not clearly attribute contact access to YouTube

### Removed / Corrected Claims
- **Fabricated quote removed:** "Google will notify users of material policy changes; continued use of the service constitutes acceptance of the updated terms." This text does **not** appear in the Google privacy policy. Replaced with the actual text: "We will not reduce your rights under this Privacy Policy without your explicit consent."
- No longer claims Google "sells your personal identity" — the policy says "don't share information that personally identifies you with advertisers."
- No longer claims Google "tracks every video you watch and search you make to sell ads" — reworded to "collects information... to show personalized ads."

## Strict-Rule Compliance
1. Every plain_english and flag title is backed by a verbatim `policy_excerpt`.
2. No strong verbs from weak evidence.
3. No attributed purpose without explicit text.
4. High-severity flags only where the policy is explicit and unambiguous.
5. Silent categories marked `unknown` with `needs_review: true`.
6. No "SELLS YOUR DATA" claims (policy says "don't share identifying info").
7. No "TRACKS YOU ACROSS APPS" claims (policy says "activity across Google services").

## Scoring Check
- `final_score = round((1 - 73.5/205) * 100) = 64`
- `max_possible_deductions = 205`
- `verdict.score = scoring.final_score = 64`
- `verdict.grade = scoring.grade = C`
