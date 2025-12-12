import Link from "next/link";
import { CallToActionData } from "@/lib/types";
import { getFeatureAccent } from "@/lib/theme";

interface CallToActionProps {
  data: CallToActionData;
}

export default function CallToAction({ data }: CallToActionProps) {
  const accent = getFeatureAccent(1);
  const actionButtons = [
    { ...data.primaryCta, variant: "primary" as const },
    { ...data.secondaryCta, variant: "secondary" as const },
  ];

  return (
    <section className="section-band bg-section-b">
      <div className="section-inner">
        <div className="relative overflow-hidden rounded-[48px] border border-white/60 bg-slate-950 text-white shadow-[0_40px_120px_rgba(15,23,42,0.35)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#fff_0%,transparent_45%),radial-gradient(circle_at_bottom,#f97316/35_0%,transparent_55%)] opacity-30" />
          <div className="relative z-10 grid gap-10 px-8 py-10 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:px-14 lg:py-14">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                {data.label}
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {data.heading}
              </h2>
              <p className="text-base leading-relaxed text-white/80">
                {data.body}
              </p>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <p className="flex items-center gap-3">
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${accent.solid}`}
                  />
                  Immersive campus life • Future-ready labs • Personalized
                  mentorship
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {actionButtons.map((cta) => {
                  const isPrimary = cta.variant === "primary";
                  return (
                    <Link
                      key={cta.href}
                      href={cta.href}
                      className={`group relative flex h-full flex-col justify-between rounded-3xl border px-6 py-5 transition duration-200 ${
                        isPrimary
                          ? `border-transparent bg-gradient-to-r ${accent.solid} text-white shadow-xl hover:brightness-110`
                          : "border-white/15 bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.4em]">
                          {cta.label}
                        </p>
                        {cta.description ? (
                          <p
                            className={`mt-3 text-base leading-relaxed ${
                              isPrimary ? "text-white/90" : "text-white/80"
                            }`}
                          >
                            {cta.description}
                          </p>
                        ) : null}
                      </div>
                      <span
                        className={`mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full ${
                          isPrimary ? "bg-white/20" : "bg-white/10"
                        }`}
                        aria-hidden="true"
                      >
                        &rarr;
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                {data.highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="rounded-3xl border border-white/15 bg-white/10 px-4 py-5 text-white"
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/60">
                      {highlight.label}
                    </p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight">
                      {highlight.value}
                    </p>
                    {highlight.description ? (
                      <p className="mt-1 text-sm text-white/70">
                        {highlight.description}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent px-5 py-4 text-sm text-white/80">
                Need guidance?{" "}
                <span className="font-semibold text-white">
                  Talk to an admissions mentor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
