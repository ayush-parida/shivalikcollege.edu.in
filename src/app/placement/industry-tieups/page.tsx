import Image from "next/image";
import type { Metadata } from "next";
import { getIndustryTieups } from "@/lib/content";
import type { IITPartnership, IndustryPartnership } from "@/lib/types";

const tieupsPromise = getIndustryTieups();

export async function generateMetadata(): Promise<Metadata> {
  const data = await tieupsPromise;
  return data.metadata;
}

export default async function IndustryTieupsPage() {
  const { hero, sections } = await tieupsPromise;

  const iitSection = sections.find((s) => s.id === "iit-partnerships");
  const industrySection = sections.find((s) => s.id === "industry-collaborations");

  const iitPartnerships = (iitSection?.partnerships || []) as IITPartnership[];
  const industryPartnerships = (industrySection?.partnerships || []) as IndustryPartnership[];

  return (
    <main className="space-y-16 pb-20 pt-10 px-6">
      {/* Hero Section */}
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

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-3 lg:gap-8">
        <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-brand-700">
            {iitPartnerships.length}
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            IIT Partnerships
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-slate-900">
            {industryPartnerships.length}
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Industry Partners
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-slate-900">
            {iitPartnerships.length + industryPartnerships.length}
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Total Collaborations
          </p>
        </div>
      </div>

      {/* IIT Partnerships Section */}
      {iitSection && iitPartnerships.length > 0 ? (
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {iitSection.title}
            </h2>
            <p className="mt-2 text-slate-600">{iitSection.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {iitPartnerships.map((partnership, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="bg-gradient-to-br from-brand-500 to-brand-600 px-6 py-4">
                  <div className="flex items-center gap-4">
                    {partnership.logo ? (
                      <div className="relative h-28 w-32 flex-shrink-0 overflow-hidden rounded-xl bg-white p-2">
                        <Image
                          src={partnership.logo}
                          alt={partnership.institute}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : null}
                    <div>
                      <h3 className="text-xl font-bold text-brand-50">
                        {partnership.institute}
                      </h3>
                      <p className="mt-1 text-sm text-brand-100">
                        {partnership.program}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
                    Student Benefits
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {partnership.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <svg
                          className="mt-1 h-4 w-4 flex-shrink-0 text-brand-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Industry Collaborations Section */}
      {industrySection && industryPartnerships.length > 0 ? (
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {industrySection.title}
            </h2>
            <p className="mt-2 text-slate-600">{industrySection.description}</p>
          </div>
          <IndustryPartnershipsTable partnerships={industryPartnerships} />
        </section>
      ) : null}
    </main>
  );
}

function IndustryPartnershipsTable({
  partnerships,
}: {
  partnerships: IndustryPartnership[];
}) {
  return (
    <div className="overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Company
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Program
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Purpose
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Focus Areas
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {partnerships.map((partnership, idx) => (
              <tr
                key={idx}
                className="transition-colors hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {partnership.logo ? (
                      <div className="relative h-28 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-slate-50 p-1">
                        <Image
                          src={partnership.logo}
                          alt={partnership.company}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : null}
                    <span className="text-base font-semibold text-slate-900">
                      {partnership.company}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {partnership.program}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  {partnership.purpose}
                </td>
                <td className="px-6 py-4">
                  <ul className="space-y-1">
                    {partnership.areas.slice(0, 3).map((area, aIdx) => (
                      <li key={aIdx} className="text-sm text-slate-600">
                        • {area}
                      </li>
                    ))}
                    {partnership.areas.length > 3 ? (
                      <li className="text-xs text-slate-500">
                        +{partnership.areas.length - 3} more
                      </li>
                    ) : null}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
