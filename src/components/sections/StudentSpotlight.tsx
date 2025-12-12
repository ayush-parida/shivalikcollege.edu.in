import Image from "next/image";
import { StudentsData } from "@/lib/types";
import { getFeatureAccent } from "@/lib/theme";

interface StudentSpotlightProps {
  students: StudentsData;
}

export default function StudentSpotlightSection({
  students,
}: StudentSpotlightProps) {
  return (
    <section className="section-band bg-section-a">
      <div className="section-inner space-y-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Voices
          </p>
          <div className="section-heading mt-3 text-slate-900">
            {students.sectionHeading}
          </div>
          <div className="section-subtitle text-slate-600">
            {students.sectionSubtitle}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {students.spotlights.map((student, index) => {
            const accent = getFeatureAccent(index);

            return (
              <article
                key={student.name}
                className="group relative overflow-hidden rounded-[32px] border border-slate-900/10 bg-slate-950 pb-6 text-white shadow-2xl transition hover:-translate-y-1"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-70 transition duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute inset-0 bg-gradient-to-br blur-2xl ${accent.soft}`}
                  />
                </span>
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent" />
                  <div className="absolute inset-x-5 bottom-5 flex flex-col gap-2">
                    <span className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-white">
                      {student.program}
                    </span>
                    <h3 className="text-2xl font-semibold text-white">
                      {student.name}
                    </h3>
                  </div>
                </div>
                <div className="mt-6 space-y-4 px-6">
                  <p className="text-sm text-white/80">“{student.quote}”</p>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    <span className="h-px flex-1 bg-white/30" />
                    Spotlight
                    <span className="h-px flex-1 bg-white/30" />
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
