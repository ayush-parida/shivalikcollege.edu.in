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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-brand-500 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-amber-400 blur-3xl" />
      </div>
      
      <div className="section-inner relative z-10">
        <div className="mx-auto">
          <div className="flex flex-col gap-4 text-center">
            <div className="inline-flex items-center gap-2 mx-auto bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white">
                {sectionLabel}
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">{sectionTitle}</h2>
          </div>

          <div className="mt-10 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-10 border border-white/20">
            <ul className="grid gap-4 md:grid-cols-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-500 shadow-lg"
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
                  <span className="text-base leading-relaxed text-slate-800 font-medium">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
}
