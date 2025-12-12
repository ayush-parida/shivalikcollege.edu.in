import { getFeatureAccent } from "@/lib/theme";
import { ProgramTrack } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface ProgramTilesProps {
  programs: ProgramTrack[];
  heading: string;
  subtitle: string;
  tracksHeading: string;
  tracksSubtitle: string;
  linkLabel: string;
}

export default function ProgramTiles({
  programs,
  heading,
  subtitle,
  tracksHeading,
  tracksSubtitle,
  linkLabel,
}: ProgramTilesProps) {
  const summaryAccent = getFeatureAccent(0);

  return (
    <section className="section-band bg-section-b">
      <div className="section-inner">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              Programs
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
              {heading}
            </h2>
            <p className="mt-3 text-base text-slate-600 md:max-w-2xl">
              {subtitle}
            </p>
          </div>
          <div className="rounded-3xl  bg-white px-5 py-4 text-sm text-slate-600 shadow-sm">
            <span className="font-semibold text-slate-900">
              {programs.length} programs
            </span>
            &nbsp;curated with global partners
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => {
            const accent = getFeatureAccent(index);
            const trackLabel = String(index + 1).padStart(2, "0");

            return (
              <Link
                key={program.name}
                href={program.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl text-left text-white shadow-2xl transition duration-300 -translate-y-1 hover:-translate-y-3"
              >
                {program.image ? (
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 90vw"
                    className="absolute inset-0 -z-10 object-cover opacity-70 transition duration-700 group-hover:scale-110"
                  />
                ) : null}
                <span
                  className="pointer-events-none absolute inset-0 opacity-70 transition duration-500"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute inset-0 bg-gradient-to-br ${accent.solid}`}
                  />
                  <span className="absolute inset-0 bg-slate-950/40" />
                  <span
                    className={`absolute inset-0 bg-gradient-to-br blur-3xl ${accent.soft}`}
                  />
                </span>
                <div className="relative z-10 flex h-full flex-col gap-4 px-6 py-6 sm:px-7 sm:py-7">
                  <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-white">
                      <span className="text-[0.65rem] text-white/70">
                        Track
                      </span>
                      <span className="text-sm font-bold tracking-tight">
                        {trackLabel}
                      </span>
                    </span>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[0.7rem] tracking-[0.2em] text-white">
                      {program.mode}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                      Program
                    </p>
                    <h3 className="text-2xl font-semibold text-white">
                      {program.name}
                    </h3>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-white/80">
                    {program.summary}
                  </p>
                  <div className="space-y-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                    <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                      <span>Duration</span>
                      <span className="text-base font-semibold tracking-tight text-white">
                        {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span>Learning Mode</span>
                      <span className="text-base font-semibold tracking-tight text-white">
                        {program.mode}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-white">
                    {linkLabel}
                    <span
                      aria-hidden="true"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15"
                    >
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl  p-6 text-white shadow-2xl">
          <span
            className="pointer-events-none absolute inset-0 opacity-90"
            aria-hidden="true"
          >
            <span
              className={`absolute inset-0 bg-gradient-to-br ${summaryAccent.solid}`}
            />
            <span className="absolute inset-0 bg-slate-950/40" />
          </span>
          <div className="relative z-10 text-white/80">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              {tracksHeading}
            </p>
            <p className="mt-2 text-lg text-white">{tracksSubtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
