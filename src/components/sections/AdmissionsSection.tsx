import Link from "next/link";
import { AdmissionsData } from "@/lib/types";
import { getFeatureAccent } from "@/lib/theme";

interface AdmissionsSectionProps {
  admissions: AdmissionsData;
}

export default function AdmissionsSection({
  admissions,
}: AdmissionsSectionProps) {
  return (
    <section className="section-band bg-section-a">
      <div className="section-inner grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
            {admissions.sectionLabel}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            {admissions.sectionHeading}
          </h2>
          <p className="mt-3 text-slate-600">{admissions.sectionSubtitle}</p>
          <dl className="mt-6 grid gap-4">
            {admissions.highlights.map((highlight, index) => {
              const accent = getFeatureAccent(index);

              return (
                <div
                  key={highlight.label}
                  className="relative overflow-hidden rounded-2xl border border-white/10 p-4 text-white shadow-xl"
                >
                  <span
                    className="pointer-events-none absolute inset-0 opacity-90"
                    aria-hidden="true"
                  >
                    <span
                      className={`absolute inset-0 bg-gradient-to-br ${accent.solid}`}
                    />
                    <span className="absolute inset-0 bg-slate-950/30" />
                  </span>
                  <div className="relative z-10">
                    <dt className="text-sm uppercase tracking-wide text-white/70">
                      {highlight.label}
                    </dt>
                    <dd className="text-xl font-semibold text-white">
                      {highlight.value}
                    </dd>
                    {highlight.details && (
                      <p className="text-sm text-white/80">
                        {highlight.details}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {admissions.stepsHeading}
            </h3>
            <ol className="mt-4 space-y-3 text-sm text-slate-600">
              {admissions.processSteps.map((step, index) => {
                const accent = getFeatureAccent(index);

                return (
                  <li key={step} className="flex gap-3">
                    <span
                      className={`mt-1 h-6 w-6 rounded-full bg-gradient-to-br text-center text-xs font-semibold text-white ${accent.solid}`}
                    >
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                );
              })}
            </ol>
          </div>
          <Link
            href={admissions.cta.href}
            className="mt-8 inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg"
          >
            {admissions.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
