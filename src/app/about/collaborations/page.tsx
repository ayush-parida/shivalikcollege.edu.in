import Image from "next/image";
import type { Metadata } from "next";
import { getCollaborationsPage } from "@/lib/content";

const collaborationsPromise = getCollaborationsPage();

export async function generateMetadata(): Promise<Metadata> {
  const page = await collaborationsPromise;
  return {
    title: page.metadata.title,
    description: page.metadata.description,
    keywords: page.metadata.keywords,
  };
}

export default async function CollaborationsPage() {
  const page = await collaborationsPromise;
  const heroEyebrow = page.heroEyebrow ?? page.title;
  const highlights = page.highlights ?? [];

  return (
    <main className="space-y-16 pb-20 pt-10 px-6">
      <section className="relative overflow-hidden rounded-4xl border border-slate-900/10 bg-slate-900 text-white shadow-2xl">
        {page.heroImage ? (
          <Image
            src={page.heroImage}
            alt={page.title}
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
              {heroEyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white lg:text-5xl">
              {page.title}
            </h1>
            <p className="mt-4 text-lg text-white/80">{page.intro}</p>
          </div>
          {page.heroImage && highlights.length ? (
            <div className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                {page.highlightsLabel}
              </p>
              <ul className="space-y-3 text-white/90">
                {highlights.slice(0, 4).map((item) => (
                  <li key={item} className="text-base font-semibold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      {page.sections?.length ? (
        <section className="grid gap-6 md:grid-cols-2">
          {page.sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
                Collaboration Lens
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                {section.heading}
              </h2>
              <p className="mt-3 text-base text-slate-600">{section.body}</p>
            </article>
          ))}
        </section>
      ) : null}

      {page.tabs?.length ? (
        <section className="space-y-6">
          {page.tabs.map((tab) => {
            const tabHighlights = (tab.highlights ?? []).filter(Boolean);
            const tabCards = (tab.cards ?? []).filter(
              (card) => card.title?.trim() && card.body?.trim()
            );

            return (
              <article
                key={tab.id}
                className="rounded-4xl border border-slate-100 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.4)]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-gradient-to-r from-white via-brand-50 to-white px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-slate-700 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
                    <span>{tab.label}</span>
                    <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-8 gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-6 text-slate-700">
                    {tab.eyebrow ? (
                      <p className="inline-flex items-center rounded-full border border-brand-100/70 bg-brand-50/70 px-5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-brand-700">
                        {tab.eyebrow}
                      </p>
                    ) : null}
                    <h2 className="text-4xl font-semibold leading-tight text-slate-900">
                      {tab.heading}
                    </h2>
                    {tab.description ? (
                      <p className="text-base leading-relaxed text-slate-600">
                        {tab.description}
                      </p>
                    ) : null}
                    {tabHighlights.length ? (
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {tabHighlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                          >
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-brand-600/10 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-700">
                              *
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {tabCards.length ? (
                      <div className="grid gap-4 md:grid-cols-2">
                        {tabCards.map((card, index) => (
                          <article
                            key={`${card.title}-${index}`}
                            className="flex flex-col gap-3 rounded-2xl border border-transparent bg-gradient-to-br from-white via-brand-50/40 to-white p-5 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.4)] ring-1 ring-slate-100/60"
                          >
                            <h3 className="text-lg font-semibold text-slate-900">
                              {card.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                              {card.body}
                            </p>
                            {card.href ? (
                              <a
                                href={card.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-700 transition hover:border-brand-400 hover:text-brand-900"
                              >
                                {card.ctaLabel ?? "View details"}
                                <span aria-hidden="true">→</span>
                              </a>
                            ) : null}
                          </article>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  {tab.image ? (
                    <div className="relative isolate min-h-[320px] overflow-hidden rounded-[2rem] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-brand-50/60">
                      <Image
                        src={tab.image}
                        alt={tab.heading}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 420px, 100vw"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent" />
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </section>
      ) : null}
    </main>
  );
}
