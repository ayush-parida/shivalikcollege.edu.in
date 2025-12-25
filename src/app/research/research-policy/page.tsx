import Image from "next/image";
import type { Metadata } from "next";
import { getResearchPolicy } from "@/lib/content";

const dataPromise = getResearchPolicy();

export async function generateMetadata(): Promise<Metadata> {
  const data = await dataPromise;
  return data.metadata;
}

export default async function ResearchPolicyPage() {
  const { hero, policies } = await dataPromise;

  const institutionalPolicies = policies.filter((p) => p.category === "Institutional Policy");
  const supportingDocs = policies.filter((p) => p.category === "Supporting Documents");

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
          <p className="text-4xl font-bold text-brand-700">{policies.length}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Policy Documents
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-slate-900">{institutionalPolicies.length}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Institutional Policies
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-slate-900">{supportingDocs.length}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Supporting Documents
          </p>
        </div>
      </div>

      {institutionalPolicies.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">Institutional Policies</h2>
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
              {institutionalPolicies.length} {institutionalPolicies.length === 1 ? "policy" : "policies"}
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {institutionalPolicies.map((policy) => (
              <div
                key={policy.id}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:border-brand-200 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition">
                      {policy.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {policy.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={policy.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold transition hover:bg-brand-700"
                  >
                    Explore More
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {supportingDocs.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">Supporting Documents</h2>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {supportingDocs.length} {supportingDocs.length === 1 ? "document" : "documents"}
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {supportingDocs.map((policy) => (
              <div
                key={policy.id}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:border-slate-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition">
                      {policy.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {policy.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={policy.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-700 px-6 py-3 text-sm font-semibold transition hover:bg-slate-800"
                  >
                    Explore More
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
