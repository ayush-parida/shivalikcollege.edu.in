import Image from "next/image";
import { FacultyData } from "@/lib/types";
import { getFeatureAccent } from "@/lib/theme";

interface FacultyShowcaseProps {
  faculty: FacultyData;
}

export default function FacultyShowcase({ faculty }: FacultyShowcaseProps) {
  const sharedAccent = getFeatureAccent(0);

  return (
    <section className="section-band relative overflow-hidden bg-section-b text-slate-900">
      <div className="pointer-events-none absolute -left-16 top-0 h-80 w-80 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-amber-400/20 blur-[160px]" />
      <div className="section-inner relative z-10 space-y-10">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            {faculty.pillarsTitle}
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                {faculty.sectionHeading}
              </h2>
              <p className="mt-3 max-w-3xl text-base text-slate-600">
                {faculty.sectionSubtitle}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 shadow-sm">
              Leadership Collective
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {faculty.leaders.map((leader) => {
            const accent = sharedAccent;

            return (
              <article
                key={leader.name}
                className="group relative overflow-hidden rounded-[28px] border border-white/20 bg-white p-1 shadow-2xl"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-70 transition duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute inset-0 bg-gradient-to-br blur-2xl ${accent.soft}`}
                  />
                </span>
                <div className="relative h-64 w-full overflow-hidden rounded-[24px]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent" />
                  <div className="absolute inset-x-5 bottom-5 flex items-center justify-between">
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.4em] text-transparent [text-shadow:0_0_20px_rgba(15,23,42,0.7)] bg-gradient-to-r ${accent.solid} bg-clip-text`}
                    >
                      {leader.title}
                    </p>
                    <span
                      className={`rounded-full bg-gradient-to-r ${accent.solid} px-3 py-1 text-[0.65rem] font-semibold text-slate-950`}
                    >
                      {leader.expertise.split(",")[0] || leader.expertise}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 px-6 py-6 text-slate-900">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.45em] text-transparent bg-gradient-to-r ${accent.solid} bg-clip-text`}
                  >
                    {leader.title}
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {leader.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {leader.expertise}
                  </p>
                  <div className="inline-flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    <span className="text-slate-400">Signature Focus</span>
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold tracking-tight text-slate-900`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-2 w-2 rounded-full bg-gradient-to-br ${accent.solid}`}
                      />
                      {leader.expertise.length > 45
                        ? `${leader.expertise.slice(0, 45)}…`
                        : leader.expertise}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="rounded-[32px] border border-white/20 bg-white/80 p-6 text-slate-700 shadow-xl backdrop-blur">
          <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">
            {faculty.pillarsTitle}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm text-slate-700">
            {faculty.pillars.map((pillar) => (
              <li
                key={pillar}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
              >
                {pillar}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
