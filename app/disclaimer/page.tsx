import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getAllApps } from "@/lib/getAllApps";

export const metadata: Metadata = {
  title: "Disclaimer - ShouldIDownloadThis",
  description:
    "Important information about how ShouldIDownloadThis ratings are generated and the limitations of AI-based privacy analysis.",
};

const SECTIONS = [
  {
    heading: "AI-generated analysis",
    body: "All privacy ratings, scores, and summaries on ShouldIDownloadThis are produced by an artificial intelligence system that reads and interprets publicly available privacy policies and terms of service. The AI may misread, misunderstand, or miss sections of those documents. Ratings reflect the language in the policy - not the actual technical behaviour of the app.",
  },
  {
    heading: "Not legal advice",
    body: "Nothing on this site constitutes legal, professional, or regulatory advice of any kind. ShouldIDownloadThis is an informational tool only. If you need a legal assessment of an app's data practices - for compliance, due diligence, or any other purpose - you should consult a qualified legal professional.",
  },
  {
    heading: "No warranty",
    body: "We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or fitness for any purpose of any rating, score, or analysis on this site. Your use of this information is entirely at your own risk.",
  },
  {
    heading: "Policies change",
    body: "Privacy policies are updated frequently, sometimes without notice. Each rating shows the date it was last analysed. A rating that was accurate on that date may no longer reflect the current policy. Always check the app's live privacy policy before making a decision.",
  },
  {
    heading: "Trademark notice",
    body: "All app names, logos, and brand identifiers displayed on this site are the trademarks or registered trademarks of their respective owners. Their appearance here does not imply any endorsement of, affiliation with, or sponsorship by those companies. ShouldIDownloadThis is an independent, third-party commentary service.",
  },
  {
    heading: "No affiliation",
    body: "ShouldIDownloadThis is not affiliated with, endorsed by, or connected to Apple Inc., Google LLC, or any app developer whose product appears on this site. App Store data is sourced from Apple's public iTunes Search API and publicly accessible App Store pages.",
  },
  {
    heading: "Limitation of liability",
    body: "To the fullest extent permitted by law, ShouldIDownloadThis and its contributors shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your reliance on any rating or analysis published here - including but not limited to decisions to install or not install an application.",
  },
];

export default async function DisclaimerPage() {
  const allApps = await getAllApps();

  return (
    <>
      <Navbar apps={allApps} />
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-ink">Disclaimer</h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Please read this before relying on any rating or analysis published on ShouldIDownloadThis.
          </p>

          <div className="mt-12 space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.heading}>
                <h2 className="text-base font-semibold text-ink">{s.heading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-16 text-xs text-ink-subtle">Last updated: May 2025</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
