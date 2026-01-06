import { WhyShivalikData } from "@/lib/types";

interface WhyShivalikSectionProps {
  data: WhyShivalikData;
}

export default function WhyShivalikSection({ data }: WhyShivalikSectionProps) {
  const { sectionLabel, sectionTitle, bullets } = data;

  if (!bullets?.length) {
    return null;
  }

  return (
    <section className="section-band bg-section-a">
      <div className="section-inner">
        <div className="mx-auto">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              {sectionLabel}
            </p>
            <div className="section-heading">{sectionTitle}</div>
          </div>

          <div className="mt-10 card-surface p-6 sm:p-10">
            <ul className="grid gap-4 md:grid-cols-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-500/10 text-brand-700"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.071 7.112a1 1 0 0 1-1.42 0L3.29 8.88a1 1 0 0 1 1.414-1.414l3.224 3.224 6.36-6.395a1 1 0 0 1 1.476-.006Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-base leading-relaxed text-slate-700">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
