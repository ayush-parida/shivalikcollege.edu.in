import Image from "next/image";
import type { Metadata } from "next";
import { getTrainingEmployability } from "@/lib/content";

const dataPromise = getTrainingEmployability();

export async function generateMetadata(): Promise<Metadata> {
  const data = await dataPromise;
  return data.metadata;
}

export default async function TrainingEmployabilityPage() {
  const {
    hero,
    departments,
    skillAreas,
    placementReadinessIndex,
    technicalPrograms,
  } = await dataPromise;

  return (
    <main className="space-y-16 pb-20 pt-10 px-6">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-4xl border border-slate-900/10 bg-gradient-to-br from-slate-900 via-brand-900 to-brand-800 text-white shadow-2xl">
        {hero.image ? (
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative z-10 px-8 py-12 lg:px-12 lg:py-16 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white lg:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 text-lg text-white/80 lg:text-xl">
            {hero.intro}
          </p>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
            Five Career Pathways
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Comprehensive preparation for diverse professional opportunities
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "Corporate Jobs",
            "Government Jobs",
            "Higher Studies",
            "Research & Development",
            "Entrepreneurship",
          ].map((pathway) => (
            <div
              key={pathway}
              className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 text-center shadow-lg transition hover:shadow-xl"
            >
              <p className="font-semibold text-slate-900">{pathway}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
            Training & Development Departments
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Specialized departments focused on holistic skill development
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {departments.map((dept) => (
            <div
              key={dept.title}
              className="rounded-4xl border border-slate-100 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition hover:border-brand-200 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-900">{dept.title}</h3>
              <p className="mt-4 text-slate-600">{dept.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Areas */}
      <section className="rounded-4xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] lg:p-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
            Advance Your Skills
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Comprehensive training covering essential employability skills
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillAreas.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-white p-4 shadow-sm"
            >
              <div className="flex h-2 w-2 rounded-full bg-brand-500" />
              <p className="text-slate-700">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placement Readiness Index */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
            {placementReadinessIndex.title}
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-lg text-slate-600">
            {placementReadinessIndex.description}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placementReadinessIndex.criteria.map((criterion, index) => (
            <div
              key={criterion}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition hover:border-brand-200 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-700">
                  {index + 1}
                </div>
                <p className="flex-1 text-slate-900 font-medium">{criterion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="rounded-4xl border border-slate-100 bg-white p-8 text-center shadow-[0_20px_45px_rgba(15,23,42,0.08)] lg:p-12">
        <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
          Get Trained with Industry Experts
        </h2>
        <p className="mt-3 text-lg text-slate-600">
          Hiring Partners • Startup Mentors • Skill Partners
        </p>
      </section>

      {/* Technical Programs */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
            Technical Training Programs
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Discipline-specific training designed for industry readiness
          </p>
        </div>
        <div className="grid gap-6 lg:gap-8">
          {technicalPrograms.map((program) => (
            <div
              key={program.id}
              className="rounded-4xl border border-slate-100 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition hover:border-brand-200 hover:shadow-xl lg:p-10"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {program.program}
              </h3>
              <div className="mt-6 space-y-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                  Training Highlights
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {program.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-brand-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="rounded-4xl border border-brand-100 bg-gradient-to-br from-brand-600 to-brand-700 p-8 text-center text-white shadow-2xl lg:p-12">
        <h2 className="text-3xl font-semibold lg:text-4xl">
          Ready to Enhance Your Employability?
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Join our comprehensive training programs and prepare for your dream career
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/admissions/apply"
            className="rounded-full bg-white px-8 py-3 font-semibold text-brand-700 shadow-lg transition hover:bg-slate-50"
          >
            Apply Now
          </a>
          <a
            href="/placement/overview"
            className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            View Placement Overview
          </a>
        </div>
      </section> */}
    </main>
  );
}
