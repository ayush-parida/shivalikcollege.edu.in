import Image from "next/image";
import type { Metadata } from "next";
import { getIPRPatents } from "@/lib/content";
import type { Patent } from "@/lib/types";

const dataPromise = getIPRPatents();

export async function generateMetadata(): Promise<Metadata> {
  const data = await dataPromise;
  return data.metadata;
}

function PatentsTable({ patents }: { patents: Patent[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
              S.No
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
              Title/Name of IP
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
              Application No.
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
              Country
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {patents.map((patent) => (
            <tr key={patent.sno} className="transition hover:bg-slate-50">
              <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                {patent.sno}
              </td>
              <td className="px-6 py-4 text-sm text-slate-900">
                {patent.title}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-slate-700">
                {patent.applicationNo}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                    patent.country === "International"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {patent.country}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function IPRPatentsPage() {
  const { hero, patents } = await dataPromise;

  const patents2024 = patents.filter((p) => p.year === 2024);
  const patents2023 = patents.filter((p) => p.year === 2023);
  const patents2022 = patents.filter((p) => p.year === 2022);

  const internationalPatents = patents.filter((p) => p.country === "International");
  const indiaPatents = patents.filter((p) => p.country === "India");

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

      <div className="grid gap-6 sm:grid-cols-4 lg:gap-8">
        <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-brand-700">{patents.length}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Total Patents
          </p>
        </div>
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-blue-700">{indiaPatents.length}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            India Patents
          </p>
        </div>
        <div className="rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-purple-700">{internationalPatents.length}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            International
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-slate-900">{patents2024.length}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Filed in 2024
          </p>
        </div>
      </div>

      {patents2024.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">2024 Patents</h2>
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
              {patents2024.length} patents
            </span>
          </div>
          <PatentsTable patents={patents2024} />
        </section>
      )}

      {patents2023.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">2023 Patents</h2>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {patents2023.length} patents
            </span>
          </div>
          <PatentsTable patents={patents2023} />
        </section>
      )}

      {patents2022.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">2022 Patents</h2>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {patents2022.length} patents
            </span>
          </div>
          <PatentsTable patents={patents2022} />
        </section>
      )}
    </main>
  );
}
