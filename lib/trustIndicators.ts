import type { Flag } from "./types";

export type TrustIndicator = "E2E Encrypted" | "No Ads" | "Open Source";

const RULES: { label: TrustIndicator; pattern: RegExp }[] = [
  { label: "E2E Encrypted", pattern: /end[- ]?to[- ]?end|e2e/i },
  { label: "No Ads", pattern: /\bno\b.*\b(ads|advertis)/i },
  { label: "Open Source", pattern: /open[- ]?source/i },
];

export function deriveTrustIndicators(greenFlags: Flag[]): TrustIndicator[] {
  const text = greenFlags
    .map((f) => `${f.title} ${f.plain_english}`)
    .join(" | ");
  return RULES.filter((r) => r.pattern.test(text)).map((r) => r.label);
}
