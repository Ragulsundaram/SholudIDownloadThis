import { ExternalLink, Flag } from "lucide-react";
import type { AppMeta, Platform } from "@/lib/types";
import { PLATFORM_LABEL } from "@/lib/risk";

type Props = {
  meta: AppMeta;
  platform: Platform;
  appName: string;
};

export function MetaStrip({ meta, platform, appName }: Props) {
  const flagSubject = encodeURIComponent(
    `Flag rating: ${appName} (${PLATFORM_LABEL[platform] ?? platform})`,
  );

  return (
    <section className="mt-12 rounded-xl border border-line bg-surface p-5 text-xs">
      <dl className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
        <Field label="Policy source">
          {meta.policy_url ? (
            <a
              href={meta.policy_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brand hover:text-brand-hover"
            >
              View source
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : (
            <span className="text-ink-muted">—</span>
          )}
        </Field>
        <Field label="Policy updated">
          <span className="text-ink">{formatDate(meta.policy_last_updated)}</span>
        </Field>
        <Field label="Our analysis">
          <span className="text-ink">{formatDate(meta.analyzed_at)}</span>
        </Field>
        <Field label="Platform">
          <span className="text-ink">{PLATFORM_LABEL[platform] ?? platform}</span>
        </Field>
        <Field label="Schema">
          <span className="text-ink">v{meta.schema_version}</span>
        </Field>
      </dl>

      <div className="mt-4 flex items-center justify-between border-t border-divider pt-3">
        <p className="text-ink-subtle">
          Analyzed by {meta.analyzed_by}
          {meta.needs_review && (
            <span className="ml-2 rounded-full bg-caution-soft px-2 py-0.5 text-[10px] font-medium text-caution-ink">
              needs review
            </span>
          )}
        </p>
        <a
          href={`mailto:flag@example.com?subject=${flagSubject}`}
          className="inline-flex items-center gap-1 text-ink-muted hover:text-ink"
        >
          <Flag className="h-3 w-3" />
          Flag this rating
        </a>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="font-semibold uppercase tracking-wider text-ink-subtle">
        {label}
      </dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

function formatDate(value: string): string {
  if (!value || value === "unknown") return "Unknown";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
