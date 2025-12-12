import Link from "next/link";
import { NewsData } from "@/lib/types";
import { getFeatureAccent } from "@/lib/theme";

interface NewsSectionProps {
  news: NewsData;
}

export default function NewsSection({ news }: NewsSectionProps) {
  return (
    <section className="section-band relative overflow-hidden bg-section-b">
      <div className="pointer-events-none absolute inset-x-10 top-0 h-32 rounded-[40px] bg-brand-500/10 blur-3xl" />
      <div className="section-inner relative z-10 space-y-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Dispatches
          </p>
          <div className="section-heading">{news.sectionHeading}</div>
          <div className="section-subtitle text-slate-600">
            {news.sectionSubtitle}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {news.articles.map((article, index) => {
            const accent = getFeatureAccent(index);

            return (
              <Link
                key={article.title}
                href={article.href}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] p-6 text-white shadow-2xl transition hover:-translate-y-1"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-90 transition duration-500"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute inset-0 bg-gradient-to-br ${accent.solid}`}
                  />
                  <span className="absolute inset-0 bg-slate-950/50" />
                  <span
                    className={`absolute inset-0 bg-gradient-to-br blur-3xl ${accent.soft}`}
                  />
                </span>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em]">
                    {String(index + 1).padStart(2, "0")}
                    <span className="font-normal tracking-normal text-white/80">
                      {new Date(article.date).toLocaleDateString("en-IN", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/80">
                    {article.summary}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  {news.articleCta}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14m0 0-5-5m5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
