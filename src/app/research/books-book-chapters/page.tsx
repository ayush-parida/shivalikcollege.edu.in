import Image from "next/image";
import type { Metadata } from "next";
import { getBooksChapters } from "@/lib/content";
import type { BookPublication } from "@/lib/types";

const booksPromise = getBooksChapters();

export async function generateMetadata(): Promise<Metadata> {
  const data = await booksPromise;
  return data.metadata;
}

export default async function BooksChaptersPage() {
  const { hero, publications } = await booksPromise;

  const pubs2025 = publications.filter((p) => p.year === 2025);
  const pubs2024 = publications.filter((p) => p.year === 2024);
  const pubs2021 = publications.filter((p) => p.year === 2021);
  const pubs2020 = publications.filter((p) => p.year === 2020);
  const pubs2019 = publications.filter((p) => p.year === 2019);

  const publishers = new Set(publications.map((p) => p.publisher));

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
          <p className="text-4xl font-bold text-brand-700">
            {publications.length}
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Total Publications
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-slate-900">
            {new Set(publications.map((p) => p.facultyName)).size}
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Contributing Authors
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-slate-900">{publishers.size}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Publishers
          </p>
        </div>
      </div>

      {pubs2025.length ? (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">
              2025 Publications
            </h2>
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
              {pubs2025.length} books
            </span>
          </div>
          <PublicationsTable publications={pubs2025} />
        </section>
      ) : null}

      {pubs2024.length ? (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">
              2024 Publications
            </h2>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {pubs2024.length} books
            </span>
          </div>
          <PublicationsTable publications={pubs2024} />
        </section>
      ) : null}

      {pubs2021.length ? (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">
              2021 Publications
            </h2>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {pubs2021.length} books
            </span>
          </div>
          <PublicationsTable publications={pubs2021} />
        </section>
      ) : null}

      {pubs2020.length ? (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">
              2020 Publications
            </h2>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {pubs2020.length} books
            </span>
          </div>
          <PublicationsTable publications={pubs2020} />
        </section>
      ) : null}

      {pubs2019.length ? (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">
              2019 Publications
            </h2>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {pubs2019.length} books
            </span>
          </div>
          <PublicationsTable publications={pubs2019} />
        </section>
      ) : null}
    </main>
  );
}

function PublicationsTable({
  publications,
}: {
  publications: BookPublication[];
}) {
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
                Faculty Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Year
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Publisher
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                ISBN/ISSN No.
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {publications.map((pub) => (
              <tr key={pub.sno} className="transition-colors hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-600">{pub.sno}</td>
                <td className="px-6 py-4 text-base font-semibold text-slate-900">
                  {pub.facultyName}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{pub.year}</td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  {pub.publisher}
                </td>
                <td className="px-6 py-4">
                  <code className="rounded-md bg-slate-100 px-2 py-1 text-xs font-mono text-slate-700">
                    {pub.isbnIssn}
                  </code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
