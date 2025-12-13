import Image from "next/image";
import type { Metadata } from "next";
import { getGoverningBodiesPage } from "@/lib/content";

const governingBodiesPromise = getGoverningBodiesPage();

function renderCellContent(value: string) {
  const lines = value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length <= 1) {
    return <span className="text-sm text-slate-600">{lines[0] ?? ""}</span>;
  }

  return (
    <ul className="space-y-1 text-sm text-slate-600">
      {lines.map((line, index) => (
        <li key={`${line}-${index}`} className="flex gap-2">
          <span aria-hidden className="text-brand-500">•</span>
          <span>{line}</span>
        </li>
      ))}
    </ul>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await governingBodiesPromise;
  return data.metadata;
}

export default async function GoverningBodiesPage() {
  const { hero, sections } = await governingBodiesPromise;
  const highlightSections = sections.slice(0, 3);

  return (
    <main className="space-y-16 pb-20 pt-10 px-6">
      <section className="relative overflow-hidden rounded-4xl border border-slate-900/10 bg-slate-900 text-white shadow-2xl">
        {hero.image ? (
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30" />
        <div className="relative z-10 grid gap-8 px-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white lg:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-4 text-lg text-white/80">{hero.intro}</p>
          </div>
          {highlightSections.length ? (
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Statutory Committees
              </p>
              <ul className="mt-4 space-y-3 text-white/90">
                {highlightSections.map((section) => (
                  <li key={section.id} className="text-base font-semibold">
                    {section.title}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section className="space-y-10">
        {sections.map((section) => (
          <article
            key={section.id}
            className="space-y-6 rounded-4xl border border-slate-100 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] lg:p-10"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-600">
                  Committee
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                  {section.title}
                </h2>
                {section.description ? (
                  <p className="mt-3 max-w-3xl text-base text-slate-600">
                    {section.description}
                  </p>
                ) : null}
              </div>
            </div>

            {section.table ? (
              <div className="overflow-x-auto rounded-3xl border border-slate-100">
                <table className="min-w-full divide-y divide-slate-200 text-left w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      {section.table.columns.map((column) => (
                        <th
                          key={`${section.id}-${column}`}
                          scope="col"
                          className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {section.table.rows.map((row, rowIndex) => (
                      <tr key={`${section.id}-row-${rowIndex}`} className="align-top">
                        {row.cells.map((cell, cellIndex) => (
                          <td key={`${section.id}-row-${rowIndex}-cell-${cellIndex}`} className="px-4 py-4">
                            {renderCellContent(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}

            {section.list ? (
              <ul className="grid gap-4 md:grid-cols-2">
                {section.list.map((item, index) => (
                  <li
                    key={`${section.id}-list-${index}`}
                    className="rounded-3xl border border-slate-100 bg-slate-50/70 p-5 text-sm text-slate-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </section>
    </main>
  );
}
