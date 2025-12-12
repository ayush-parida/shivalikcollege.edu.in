import Link from "next/link";
import { ResearchData } from "@/lib/types";
import { getFeatureAccent } from "@/lib/theme";

interface ResearchSectionProps {
  research: ResearchData;
}

export default function ResearchSection({ research }: ResearchSectionProps) {
  return (
    <section className="section-band bg-section-a">
      <div className="section-inner">
        <div className="section-heading">{research.sectionHeading}</div>
        <div className="section-subtitle">{research.sectionSubtitle}</div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {research.focusAreas.map((area, index) => {
            const accent = getFeatureAccent(index);

            return (
              <Link
                key={area.name}
                href={area.href}
                className="relative overflow-hidden rounded-2xl border border-white/10 p-5 text-white shadow-xl"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-90"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute inset-0 bg-gradient-to-br ${accent.solid}`}
                  />
                  <span className="absolute inset-0 bg-slate-950/40" />
                </span>
                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                    {area.name}
                  </p>
                  <p className="mt-2 text-sm text-white/90">
                    {area.description}
                  </p>
                  <ul className="mt-4 space-y-1 text-sm text-white/80">
                    {area.pillars.map((pillar) => (
                      <li key={pillar}>{pillar}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            );
          })}
        </div>
        <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-slate-500">
          {research.metricsHeading}
        </h3>
        <div className="mt-3 flex gap-6 text-center text-sm font-semibold text-white">
          {research.metrics.map((metric, index) => {
            const accent = getFeatureAccent(index);

            return (
              <div
                key={metric.label}
                className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 p-4"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-90"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute inset-0 bg-gradient-to-br ${accent.solid}`}
                  />
                  <span className="absolute inset-0 bg-slate-950/40" />
                </span>
                <div className="relative z-10">
                  <p className="text-3xl font-bold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-white/70">
                    {metric.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
