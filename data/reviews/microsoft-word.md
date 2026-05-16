# Microsoft Word Re-Analysis Review

**Date:** 2026-05-16  
**App:** Microsoft Word  
**Score:** 59 / Grade C (unchanged)

## Verification Issue

The fresh verification fetch returned the Microsoft privacy **landing page** (`https://privacy.microsoft.com/`) rather than the full Privacy Statement. The landing page contains high-level commitments but no specific data-practice details.

## Handling

Because the landing page is not the actual privacy statement, the re-analysis relied on the **verified policy excerpts** already present in the existing `app.json`, which were drawn from the real Microsoft Privacy Statement. The following strict-rule adjustments were applied:

- **needs_review** set to `true` with note about landing-page fetch.
- Unsupported red flags removed:
  - "Data may train AI models" — no direct quote available in the retained excerpts.
  - "Collects and links your contacts" — quote does not explicitly say contacts are "linked to your identity."
  - "Extensive device tracking" — rephrased to match exact quote language about hardware/software info and device identifiers.
- Green flags retained only where directly quoted:
  - "No content-based ad targeting" — supported by explicit quote.
- All `plain_english` claims tightened to cautious phrasing ("may," "states that," "does not clearly explain").

## Score Retention

Category risk levels were not changed because the retained quotes from the actual Privacy Statement still support the original ratings. Total deductions remain **83.25** → **Score: 59 / Grade C**.

## Action Required

Re-fetch the full Microsoft Privacy Statement (`https://privacy.microsoft.com/en-us/privacystatement`) to verify whether any practices have changed since the prior analysis.
