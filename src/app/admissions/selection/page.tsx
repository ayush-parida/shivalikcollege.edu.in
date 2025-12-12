import type { Metadata } from "next";
import Link from "next/link";
import { getAdmissions } from "@/lib/content";

const timelineDetails = [
  "Use the application portal to share transcripts, short answers, and a personal statement that zooms in on the impact you want to create.",
  "We email a systems prompt 48-72 hours before your slot. Come ready with artifacts, prototypes, or thought sketches that reveal how you think.",
  "Two faculty mentors hold a studio-style conversation to explore your energy, collaboration style, and the communities you hope to serve.",
  "Admissions and financial-aid counselors design a funding pathway with you and summarize the decision timeline within one week."
];

const immersionFormats = [
  {
    title: "Design sprint lab",
    duration: "90 min",
    description:
      "Tackle a real brief with a micro-cohort, narrating how you deconstruct ambiguity and rebuild it into a tangible pathway.",
  },
  {
    title: "Portfolio huddle",
    duration: "20 min",
    description:
      "Share 1-2 projects, prototypes, or research notes. We care more about your decision trail than pixel-perfect decks.",
  },
  {
    title: "Mentor dialogue",
    duration: "30 min",
    description:
      "A reflective conversation with faculty and alumni about the kind of teammate, leader, or builder you are becoming.",
  },
];

const evaluationDimensions = [
  {
    title: "Purpose & impact",
    summary:
      "Clarity of motivation, lived experiences, and the communities you want to elevate through your work.",
    tags: ["Mission fit", "Community lens"],
  },
  {
    title: "Builder mindset",
    summary:
      "Ability to zoom between systems, prototypes, and user insights while shipping thoughtful decisions.",
    tags: ["Systems thinking", "Originality"],
  },
  {
    title: "Collaboration & voice",
    summary:
      "How you listen, synthesize feedback, and energize teams through inclusive leadership.",
    tags: ["Team rituals", "Reflection"],
  },
  {
    title: "Momentum & resilience",
    summary:
      "Evidence of follow-through, experimentation, and how you respond when work gets messy.",
    tags: ["Follow-through", "Learning loops"],
  },
];

const readinessSignals = [
  "You can narrate the why behind your academic or community choices without memorized scripts.",
  "You have attempted to build, prototype, research, or volunteer around a real problem—success is optional.",
  "You thrive in teams but know when to lead, when to listen, and how to credit collaborators.",
  "You view financial planning as part of the decision, not an afterthought.",
];

const prepGuides = [
  {
    title: "Show your process, not just polish",
    description:
      "Use visuals, sketches, or short demos to walk us through how you frame a challenge and arrive at decisions.",
    tips: [
      "Limit slides to eight and dedicate half of them to the problem context.",
      "Highlight the trade-offs you considered instead of only the final outcome.",
    ],
  },
  {
    title: "Quantify collaboration",
    description:
      "Map the roles you played inside teams, the rituals you set up, and how you resolved friction.",
    tips: [
      "Call out co-creators and the specific energy they brought.",
      "Share one story where listening changed your approach.",
    ],
  },
  {
    title: "Calibrate for the dialogue",
    description:
      "Arrive with two questions for faculty mentors—about the studio model, research pods, or life on campus.",
    tips: [
      "Practice a 60-second introduction that centers your purpose.",
      "Bring a notebook; the session doubles as career coaching.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Selection Process | Shivalik Admissions",
  description:
    "Step inside the Selection Day experience—studio challenges, mentor conversations, and how Shivalik evaluates purpose-driven applicants.",
};

export default async function SelectionProcessPage() {
  const admissions = await getAdmissions();
  const timeline = admissions.processSteps.map((step, index) => ({
    step,
    detail:
      timelineDetails[index] ??
      "Expect a collaborative, studio-style experience tailored to the work you have shared.",
    order: index + 1,
  }));

  return (
    <main className="bg-slate-50 pb-20 pt-12">
      <section className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-4xl border border-slate-900/10 bg-slate-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-slate-900 to-slate-900" />
          <div className="relative z-10 space-y-6 px-8 py-12 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
              Selection Day 2025
            </p>
            <h1 className="text-4xl font-semibold leading-tight lg:text-5xl">
              A selection experience built for makers, mentors, and movement builders
            </h1>
            <p className="text-lg text-white/80">
              {admissions.sectionSubtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-white/70">
              <span className="rounded-full border border-white/20 px-4 py-1">Hybrid format</span>
              <span className="rounded-full border border-white/20 px-4 py-1">Studio conversations</span>
              <span className="rounded-full border border-white/20 px-4 py-1">Need-aware funding</span>
            </div>
            <div className="pt-4">
              <Link
                href={admissions.cta.href}
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg"
              >
                {admissions.cta.label}
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          {admissions.highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-3xl border border-white/40 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                {highlight.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                {highlight.value}
              </p>
              {highlight.details ? (
                <p className="mt-1 text-sm text-slate-600">{highlight.details}</p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-4xl border border-slate-200 bg-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
                  {admissions.stepsHeading}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                  Four arcs, one immersive journey
                </h2>
              </div>
            </div>
            <ol className="mt-8 space-y-6">
              {timeline.map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-semibold text-white">
                    {item.order}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-slate-900">
                      {item.step}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-4">
            {immersionFormats.map((format) => (
              <div
                key={format.title}
                className="rounded-3xl border border-brand-100 bg-brand-50/70 p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{format.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                    {format.duration}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6">
        <div className="rounded-4xl border border-slate-200 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
            What we evaluate
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Human skills + maker rigor
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {evaluationDimensions.map((dimension) => (
              <article
                key={dimension.title}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {dimension.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{dimension.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                  {dimension.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-dashed border-brand-200 bg-brand-50/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-700">
              Readiness signals
            </p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {readinessSignals.map((signal) => (
                <li key={signal} className="rounded-2xl bg-white/80 p-4 text-sm text-slate-700">
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6">
        <div className="grid gap-8 rounded-4xl border border-slate-200 bg-white p-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
              Prep studio
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Get selection-ready in 10 days
            </h2>
            <div className="mt-8 space-y-6">
              {prepGuides.map((guide) => (
                <article key={guide.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{guide.description}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-slate-600">
                    {guide.tips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-500 to-brand-700 p-8 text-white">
            <h3 className="text-2xl font-semibold">Hold your slot</h3>
            <p className="mt-3 text-sm text-white/80">
              Selection Day seats are limited each week. Reserve your preferred studio window and upload any additional work samples securely.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/90">
              <li>• Slots released every Monday 09:00 IST</li>
              <li>• Hybrid participation available for global applicants</li>
              <li>• Dedicated counselor assigned after scheduling</li>
            </ul>
            <Link
              href={admissions.cta.href}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
            >
              {admissions.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
