import Image from "next/image";
import Link from "next/link";
import { CollegesData } from "@/lib/types";
import { getFeatureAccent } from "@/lib/theme";

interface CollegesSectionProps {
  data: CollegesData;
}

export default function CollegesSection({ data }: CollegesSectionProps) {
  const { sectionLabel, sectionTitle, sectionSubtitle, ctaText, colleges } =
    data;

  return (
    <section className="section-band bg-section-b">
      <div className="section-inner space-y-10">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-500">
            {sectionLabel}
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                {sectionTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-base text-slate-600">
                {sectionSubtitle}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              {ctaText}
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {colleges.map((college, index) => {
            const accent = getFeatureAccent(index);

            return (
              <article
                key={college.name}
                className="group relative min-h-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl"
              >
                <Image
                  src={college.image}
                  alt={college.name}
                  fill
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-b to-slate-950" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_55%)]" />
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-80"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute inset-0 bg-gradient-to-br ${accent.soft}`}
                  />
                </span>

                <div className="relative z-10 flex h-full flex-col justify-between p-8">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[0.65rem]">
                      {college.badge || "COLLEGE"}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl font-semibold text-white">
                        {college.name}
                      </h3>
                      <p className="mt-3 text-base text-white/80">
                        {college.description}
                      </p>
                    </div>
                    <ul className="flex flex-wrap gap-3 text-xs text-white/80">
                      {college.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-medium text-white"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-2">
                      <Link
                        href={college.href}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
                      >
                        Explore Now
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
