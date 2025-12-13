import Image from "next/image";
import { PageContent } from "@/lib/types";
import PageTabs from "./PageTabs";

interface PageDetailProps {
  page: PageContent;
}

export default function PageDetail({ page }: PageDetailProps) {
  return (
    <section className="space-y-8">
      <div className="relative overflow-hidden rounded-4xl border border-slate-900/10 bg-slate-900 text-white shadow-2xl">
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
              {page.heroEyebrow ?? page.title}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white lg:text-5xl">
              {page.title}
            </h1>
            <p className="mt-4 text-lg text-white/80">{page.intro}</p>
          </div>
          {page.heroImage ? (
            <div className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Highlights
              </p>
              <ul className="space-y-3 text-white/90">
                {(page.highlights ?? []).slice(0, 4).map((item) => (
                  <li key={item} className="text-base font-semibold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      {page.tabs?.length ? (
        <PageTabs tabs={page.tabs} variant={page.tabsVariant} />
      ) : null}
      {page.sections?.length ? (
        <div className="grid gap-6 md:grid-cols-2">
          {page.sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-3xl border border-slate-100 bg-white p-6"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {section.heading}
              </h2>
              <p className="mt-3 text-slate-600">{section.body}</p>
            </article>
          ))}
        </div>
      ) : null}
      {page.highlights?.length ? (
        <div className="rounded-3xl border border-brand-100 bg-brand-50/60 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            {page.highlightsLabel}
          </p>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {page.highlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-white/70 p-4 text-sm text-slate-600 shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
