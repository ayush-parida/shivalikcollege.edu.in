import Image from "next/image";
import type { Metadata } from "next";
import { getCodeOfEthics } from "@/lib/content";

const dataPromise = getCodeOfEthics();

export async function generateMetadata(): Promise<Metadata> {
  const data = await dataPromise;
  return data.metadata;
}

export default async function CodeOfEthicsPage() {
  const { hero, preamble, principles, misconduct, misconductTypes } = await dataPromise;

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

      <div className="mx-auto max-w-4xl space-y-12">
        {/* Preamble */}
        <section className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-brand-900">{preamble.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            {preamble.content}
          </p>
        </section>

        {/* Principles */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">PRINCIPLES</h2>
          <div className="space-y-6">
            {principles.map((principle) => (
              <div
                key={principle.id}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {principle.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  {principle.description}
                </p>
                {principle.guidelines && (
                  <ul className="mt-4 space-y-2">
                    {principle.guidelines.map((guideline, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-700">
                        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                        <span>{guideline}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {principle.note && (
                  <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">{principle.note}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Research Misconduct */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">{misconduct.title}</h2>
          <div className="rounded-3xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-8 shadow-lg">
            <p className="text-base font-semibold text-slate-900">
              {misconduct.description}
            </p>
            <p className="mt-2 text-slate-700">This includes:</p>
            <ul className="mt-3 space-y-2">
              {misconduct.includes.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm leading-relaxed text-slate-600">
                {misconduct.note}
              </p>
            </div>
          </div>
        </section>

        {/* What Constitutes Misconduct */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">{misconductTypes.title}</h2>
          <p className="text-slate-700">{misconductTypes.description}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {misconductTypes.types.map((type, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6 shadow-lg"
              >
                <div className="mb-3 inline-flex items-center justify-center rounded-full bg-orange-100 px-4 py-2">
                  <span className="text-sm font-bold text-orange-800">{type.name}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  {type.definition}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-blue-50 p-6">
            <p className="text-sm font-medium text-blue-900">{misconductTypes.note}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
