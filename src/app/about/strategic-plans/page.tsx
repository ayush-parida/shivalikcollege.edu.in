import Image from "next/image";
import type { Metadata } from "next";
import { getStrategicPlansPage } from "@/lib/content";

const strategicPlansPromise = getStrategicPlansPage();

export async function generateMetadata(): Promise<Metadata> {
  const data = await strategicPlansPromise;
  return data.metadata;
}

export default async function StrategicPlansPage() {
  const { hero, objectives } = await strategicPlansPromise;

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
        </div>
      </section>

      {objectives.length ? (
        <section className="rounded-4xl border border-slate-200 bg-slate-50/60 p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-700">
                Institutional Objectives
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Mission-aligned targets for SCE & COP
              </h2>
            </div>
            <p className="text-sm text-slate-600 md:max-w-sm">
              Outcomes drawn from the official strategic plan, spanning academic quality, accreditation readiness, and funded research momentum.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {objectives.map((group) => (
              <article
                key={group.id}
                className="space-y-4 rounded-3xl border border-white bg-white/80 p-6 shadow-sm"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {group.title}
                  </h3>
                  {group.description ? (
                    <p className="mt-2 text-sm text-slate-600">{group.description}</p>
                  ) : null}
                </div>
                <ol className="space-y-3">
                  {group.objectives.map((objective, index) => (
                    <li key={`${group.id}-${index}`} className="flex gap-3">
                      <span className="text-sm font-semibold text-brand-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-slate-700">{objective}</p>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
