import Image from "next/image";
import type { Metadata } from "next";
import { getResearchPapers } from "@/lib/content";
import type { ResearchPaper } from "@/lib/types";

const papersPromise = getResearchPapers();

export async function generateMetadata(): Promise<Metadata> {
  const data = await papersPromise;
  return data.metadata;
}

export default async function ResearchPapersPage() {
  const { hero, papers } = await papersPromise;

  const papers2025 = papers.filter((p) => p.year === 2025);
  const papers2024 = papers.filter((p) => p.year === 2024);
  const papers2023 = papers.filter((p) => p.year === 2023);

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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40" />
        <div className="relative z-10 px-8 py-12 lg:px-12 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-white lg:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/80">{hero.intro}</p>
        </div>
      </section>

      <div className="grid gap-6 sm:grid-cols-3 lg:gap-8">
        <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-brand-700">{papers.length}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Total Publications
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-slate-900">
            {papers2025.length}
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Published in 2025
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-slate-900">
            {new Set(papers.map((p) => p.faculty)).size}
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Contributing Faculty
          </p>
        </div>
      </div>

      {papers2025.length ? (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">2025 Publications</h2>
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
              {papers2025.length} papers
            </span>
          </div>
          <PapersTable papers={papers2025} />
        </section>
      ) : null}

      {papers2024.length ? (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">2024 Publications</h2>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {papers2024.length} papers
            </span>
          </div>
          <PapersTable papers={papers2024} />
        </section>
      ) : null}

      {papers2023.length ? (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">2023 Publications</h2>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {papers2023.length} papers
            </span>
          </div>
          <PapersTable papers={papers2023} />
        </section>
      ) : null}
    </main>
  );
}

function PapersTable({ papers }: { papers: ResearchPaper[] }) {
  return (
    <div className="overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                S.No.
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Faculty
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Journal
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Year
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Indexed
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Link
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {papers.map((paper) => (
              <tr
                key={paper.sno}
                className="transition-colors hover:bg-slate-50"
              >
                <td className="px-6 py-4 text-sm text-slate-600">
                  {paper.sno}
                </td>
                <td className="px-6 py-4 text-base font-semibold text-slate-900">
                  {paper.faculty}
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  {paper.journal}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {paper.year}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      paper.indexed === "SCI"
                        ? "border border-brand-200 bg-brand-50 text-brand-700"
                        : "border border-slate-200 bg-slate-50 text-slate-700"
                    }`}
                  >
                    {paper.indexed}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                  >
                    View
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
