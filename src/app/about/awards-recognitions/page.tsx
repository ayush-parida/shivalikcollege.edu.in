import Image from "next/image";
import type { Metadata } from "next";
import { getAwardsPage } from "@/lib/content";

const awardsDataPromise = getAwardsPage();
const fallbackBadge = "Highlighted Honors";
const fallbackImage = "/assets/leader-placeholder.svg";

export async function generateMetadata(): Promise<Metadata> {
  const data = await awardsDataPromise;
  return data.metadata;
}

export default async function AwardsRecognitionsPage() {
  const { hero, awards } = await awardsDataPromise;
  const featuredAwards = awards.slice(0, 4);

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
          {featuredAwards.length ? (
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                {hero.eyebrow || fallbackBadge}
              </p>
              <ul className="mt-4 grid gap-3 text-white/90">
                {featuredAwards.map((award) => (
                  <li key={award.title} className="text-base font-semibold">
                    {award.title}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      {awards.length ? (
        <section className="space-y-6">
          {awards.map((award, index) => (
            <article
              key={award.title}
              className="flex flex-col gap-8 overflow-hidden rounded-4xl border border-slate-100 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] lg:flex-row lg:items-center lg:p-10"
            >
              <div className="flex w-full flex-col items-center gap-4 text-center lg:w-64">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border border-slate-200 bg-slate-50 p-4">
                  <Image
                    src={award.image || fallbackImage}
                    alt={award.title}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {award.badge ? (
                    <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                      {award.badge}
                    </span>
                  ) : null}
                  {award.year ? (
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
                      {award.year}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Honor {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900">
                    {award.title}
                  </h2>
                  {award.subtitle ? (
                    <p className="mt-2 text-base font-semibold text-brand-700">
                      {award.subtitle}
                    </p>
                  ) : null}
                  <p className="mt-4 text-base text-slate-600">{award.description}</p>
                  {award.link ? (
                    <a
                      href={award.link}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-600"
                    >
                      Explore citation →
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </section>
      ) : null}
    </main>
  );
}
