import Image from "next/image";
import type { Metadata } from "next";
import { getResearchPage } from "@/lib/content";

const researchPromise = getResearchPage();

export async function generateMetadata(): Promise<Metadata> {
  const data = await researchPromise;
  return data.metadata;
}

export default async function ResearchOverviewPage() {
  const { hero, sections, vision, mission } = await researchPromise;

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

      {sections.length ? (
        <section className="space-y-6">
          {sections.map((section) => (
            <article
              key={section.title}
              className="flex flex-col gap-8 overflow-hidden rounded-4xl border border-slate-100 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] lg:flex-row lg:items-center lg:p-10"
            >
              <div className="flex-1">
                <h2 className="text-3xl font-semibold text-slate-900">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {section.description}
                </p>
              </div>
              {section.image ? (
                <div className="relative h-64 w-full flex-shrink-0 overflow-hidden rounded-3xl lg:h-80 lg:w-96">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 384px"
                  />
                </div>
              ) : null}
            </article>
          ))}
        </section>
      ) : null}

      <div className="grid gap-8 lg:grid-cols-2">
        <section className="rounded-4xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] lg:p-10">
          <h2 className="text-3xl font-semibold text-slate-900">
            {vision.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            {vision.statement}
          </p>
        </section>

        <section className="rounded-4xl border border-slate-100 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] lg:p-10">
          <h2 className="text-3xl font-semibold text-slate-900">
            {mission.title}
          </h2>
          <ul className="mt-6 space-y-4">
            {mission.statements.map((statement) => (
              <li key={statement.id} className="flex gap-3">
                <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                  {statement.id.replace("M", "")}
                </span>
                <p className="text-base text-slate-700">{statement.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
