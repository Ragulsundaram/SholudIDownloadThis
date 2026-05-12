"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, GitCompareArrows, Smartphone, Trophy, ShieldAlert, ShieldCheck } from "lucide-react";
import type { CompareEntry } from "@/app/api/compare/route";
import type { Category, Flag, RiskLevel } from "@/lib/types";
import { ThreatMeter } from "./ThreatMeter";
import { RISK_LABEL } from "@/lib/risk";
import { CategoryIcon } from "./CategoryIcon";

type Props = { entries: CompareEntry[] };

const RISK_CLASS: Record<RiskLevel, string> = {
  safe: "bg-safe-soft text-safe-ink border-safe-line",
  caution: "bg-caution-soft text-caution-ink border-caution-line",
  risky: "bg-risky-soft text-risky-ink border-risky-line",
  dangerous: "bg-dangerous-soft text-dangerous-ink border-dangerous-line",
  unknown: "bg-divider text-ink-muted border-line",
};

export function CompareView({ entries }: Props) {
  const winner = [...entries].sort((a, b) => b.data.verdict.score - a.data.verdict.score)[0];
  const worst = [...entries].sort((a, b) => a.data.verdict.score - b.data.verdict.score)[0];

  const categoryIds: string[] = [];
  const categoryLabels = new Map<string, string>();
  const categoryIcons = new Map<string, string>();
  for (const e of entries) {
    for (const c of e.data.categories) {
      if (!categoryLabels.has(c.id)) {
        categoryLabels.set(c.id, c.label);
        categoryIcons.set(c.id, c.icon);
        categoryIds.push(c.id);
      }
    }
  }

  return (
    <>
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink">
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="mt-4 flex items-center gap-3">
        <GitCompareArrows className="h-7 w-7 text-brand" />
        <h1 className="text-3xl font-bold tracking-tight text-ink">Compare</h1>
      </div>
      <p className="mt-1 text-sm text-ink-muted">
        Side-by-side privacy ratings for {entries.length} apps.
      </p>

      <div
        className="mt-6 grid gap-4"
        style={{ gridTemplateColumns: `repeat(${entries.length}, minmax(0, 1fr))` }}
      >
        {entries.map((e) => (
          <AppColumnCard key={e.slug} entry={e} isWinner={e.slug === winner.slug} />
        ))}
      </div>

      {entries.length >= 2 && winner.slug !== worst.slug && (
        <VerdictBanner winner={winner} worst={worst} />
      )}

      <Section title="At a glance">
        <ComparisonGrid
          cols={entries.length}
          headers={entries.map((e) => e.parent.name)}
          rows={[
            {
              label: "Score",
              cells: entries.map((e) => (
                <ThreatMeter
                  key={e.slug}
                  score={e.data.verdict.score}
                  risk={e.data.verdict.overall_risk}
                />
              )),
            },
            {
              label: "Overall risk",
              cells: entries.map((e) => (
                <RiskPill key={e.slug} risk={e.data.verdict.overall_risk} />
              )),
            },
            {
              label: "Red flags",
              cells: entries.map((e) => (
                <FlagHoverChip
                  key={e.slug}
                  flags={e.data.flags.red}
                  tone="risky"
                  icon={<ShieldAlert className="h-3.5 w-3.5" />}
                />
              )),
            },
            {
              label: "Green flags",
              cells: entries.map((e) => (
                <FlagHoverChip
                  key={e.slug}
                  flags={e.data.flags.green}
                  tone="safe"
                  icon={<ShieldCheck className="h-3.5 w-3.5" />}
                />
              )),
            },
            {
              label: "Verdict",
              cells: entries.map((e) => (
                <p key={e.slug} className="text-sm text-ink">
                  {e.data.verdict.one_liner}
                </p>
              )),
            },
            {
              label: "Developer",
              cells: entries.map((e) => (
                <p key={e.slug} className="text-sm text-ink-muted">
                  {e.data.app.developer}
                </p>
              )),
            },
            {
              label: "Category",
              cells: entries.map((e) => (
                <p key={e.slug} className="text-sm text-ink-muted">
                  {e.data.app.category}
                </p>
              )),
            },
          ]}
        />
      </Section>

      <Section title="Permissions & data handling">
        <ComparisonGrid
          cols={entries.length}
          headers={entries.map((e) => e.parent.name)}
          rows={categoryIds.map((id) => ({
            label: categoryLabels.get(id) ?? id,
            labelNode: (
              <PermLabel
                icon={categoryIcons.get(id) ?? "HelpCircle"}
                label={categoryLabels.get(id) ?? id}
              />
            ),
            cells: entries.map((e) => {
              const cat = e.data.categories.find((c) => c.id === id);
              return cat ? <PermCell key={e.slug} cat={cat} /> : <Dash key={e.slug} />;
            }),
          }))}
        />
      </Section>
    </>
  );
}

function AppColumnCard({ entry, isWinner }: { entry: CompareEntry; isWinner: boolean }) {
  const { parent, slug, platform, data } = entry;
  return (
    <Link
      href={`/app/${slug}/${platform}`}
      className={`group relative flex flex-col items-center gap-3 rounded-2xl border p-5 text-center transition-all hover:border-brand/40 hover:bg-divider/30 ${
        isWinner ? "border-safe-line bg-safe-soft/30" : "border-line bg-surface"
      }`}
    >
      {isWinner && (
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-safe-line px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-safe-ink">
          <Trophy className="h-3 w-3" />
          Safest
        </span>
      )}
      <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-line">
        {parent.icon_url ? (
          <Image src={parent.icon_url} alt="" fill sizes="64px" className="object-cover" unoptimized />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-divider">
            <Smartphone className="h-7 w-7 text-ink-subtle" />
          </div>
        )}
      </div>
      <div className="min-w-0">
        <p className="truncate text-base font-semibold text-ink group-hover:text-brand">
          {parent.name}
        </p>
        <p className="text-xs text-ink-subtle">{platform.toUpperCase()}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold text-ink">{data.verdict.score}</span>
        <span className="text-xs text-ink-subtle">/ 100</span>
      </div>
      <RiskPill risk={data.verdict.overall_risk} />
    </Link>
  );
}

function VerdictBanner({ winner, worst }: { winner: CompareEntry; worst: CompareEntry }) {
  return (
    <div className="mt-5 flex flex-col gap-2 rounded-2xl border border-safe-line bg-safe-soft/30 p-5 sm:flex-row sm:items-center sm:gap-4">
      <Trophy className="h-6 w-6 flex-shrink-0 text-safe-ink" />
      <div className="flex-1 text-sm text-ink">
        <p>
          <span className="font-semibold text-ink">{winner.parent.name}</span> has the
          safest privacy posture with a score of{" "}
          <span className="font-semibold">{winner.data.verdict.score}</span>.{" "}
          <span className="text-ink-muted">
            {worst.parent.name} is the riskiest of the group ({worst.data.verdict.score}).
          </span>
        </p>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink-subtle">
        {title}
      </h2>
      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        {children}
      </div>
    </section>
  );
}

type Row = { label: string; labelNode?: React.ReactNode; cells: React.ReactNode[] };

function ComparisonGrid({
  cols,
  headers,
  rows,
}: {
  cols: number;
  headers: string[];
  rows: Row[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead className="sr-only">
          <tr>
            <th>Field</th>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={row.label} className={idx === 0 ? "" : "border-t border-line"}>
              <th
                scope="row"
                className="w-20 bg-divider/30 px-4 py-3 text-left align-middle text-xs font-medium uppercase tracking-wider text-ink-subtle"
              >
                {row.labelNode ?? row.label}
              </th>
              {row.cells.map((c, i) => (
                <td
                  key={i}
                  className="px-5 py-3 align-top"
                  style={{ width: `calc((100% - 5rem) / ${cols})` }}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PermLabel({ icon, label }: { icon: string; label: string }) {
  return (
    <span
      className="group relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-ink-muted"
      title={label}
    >
      <CategoryIcon name={icon} className="h-4 w-4" />
      <span className="pointer-events-none absolute left-full top-1/2 z-20 ml-2 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-line bg-page px-2 py-1 text-[11px] font-medium normal-case tracking-normal text-ink shadow-md group-hover:block">
        {label}
      </span>
    </span>
  );
}

function PermCell({ cat }: { cat: Category }) {
  return (
    <div className="flex flex-col gap-1.5">
      <RiskPill risk={cat.risk} />
      <p className="text-xs leading-snug text-ink-muted">{cat.plain_english}</p>
    </div>
  );
}

function RiskPill({ risk }: { risk: RiskLevel }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-md border px-2 py-0.5 text-[11px] font-medium capitalize ${RISK_CLASS[risk]}`}
    >
      {RISK_LABEL[risk] ?? risk}
    </span>
  );
}

function FlagHoverChip({
  flags,
  tone,
  icon,
}: {
  flags: Flag[];
  tone: "safe" | "risky";
  icon: React.ReactNode;
}) {
  const cls =
    tone === "safe"
      ? "bg-safe-soft text-safe-ink border-safe-line"
      : "bg-risky-soft text-risky-ink border-risky-line";
  const itemCls =
    tone === "safe"
      ? "border-safe-line bg-safe-soft text-safe-ink"
      : "border-risky-line bg-risky-soft text-risky-ink";

  return (
    <span className="group relative inline-block">
      <span
        className={`inline-flex w-fit cursor-default items-center gap-1 rounded-md border px-2 py-1 text-xs font-semibold ${cls}`}
      >
        {icon}
        {flags.length}
      </span>
      {flags.length > 0 && (
        <div className="pointer-events-none absolute left-0 top-full z-20 mt-2 hidden w-72 rounded-lg border border-line bg-page p-3 shadow-lg group-hover:block">
          <ul className="flex flex-col gap-1.5">
            {flags.map((f) => (
              <li key={f.id} className={`rounded-md border px-2 py-1.5 text-xs ${itemCls}`}>
                <p className="font-medium">{f.title}</p>
                <p className="mt-0.5 leading-snug opacity-80">{f.plain_english}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </span>
  );
}

function Dash() {
  return <span className="text-xs text-ink-subtle">—</span>;
}

