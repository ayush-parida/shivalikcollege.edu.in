import Link from "next/link";
import { SecondaryHeader } from "@/components/navigation/SecondaryHeader";
import { MainHeader } from "@/components/navigation/MainHeader";

const stats = [
  { label: "Placement success", value: "95%" },
  { label: "Recruiting partners", value: "120+" },
  { label: "Innovation studios", value: "35" },
  { label: "Alumni network", value: "18k+" },
];

const blogHighlights = [
  {
    tag: "Campus Life",
    title: "Designing student-led micro urban farms",
    excerpt:
      "Engineering and agriculture students collaborate on sustainable food systems powering the campus.",
  },
  {
    tag: "Research",
    title: "Shivalik Mobility Lab wins global patent",
    excerpt: "Faculty duo secures an international patent for a modular mobility platform for hilly terrains.",
  },
  {
    tag: "Alumni",
    title: "A CTO at 28: Megha Rawat's journey",
    excerpt: "From the School of Computer Science to leading AI products at a global SaaS unicorn.",
  },
];

const campusHighlights = [
  {
    title: "Immersive Learning Streets",
    detail: "Modular classrooms with 360° visualization walls and live prototyping pods.",
  },
  {
    title: "Residences that recharge",
    detail: "Smart dorms, Himalayan wellness studios, and late-night idea cafés.",
  },
  {
    title: "Living labs",
    detail: "Hydroponics terraces, autonomous EV track, and med-tech simulation bays.",
  },
];

const serviceTiles = [
  {
    id: "students",
    eyebrow: "Students",
    title: "One-touch academic services",
    points: ["Academic calendar", "Learning management system", "24/7 help desk"],
  },
  {
    id: "alumni",
    eyebrow: "Alumni",
    title: "Lifelong community & mentorship",
    points: ["Mentor a cohort", "Partner for research", "Access alumni chapters"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-slate-900">
      <SecondaryHeader />
      <MainHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12">
        <section className="grid gap-10 rounded-[2.5rem] bg-gradient-to-br from-[var(--brand-navy)] via-[#1d2f6f] to-[#1a9077] px-8 py-12 text-white lg:grid-cols-2 lg:px-14 lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/70">
              NAAC Accredited | AICTE Approved
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
              Shivalik College of Engineering, Dehradun
            </h1>
            <p className="mt-4 text-lg text-white/85">
              A learner-first campus empowering engineers, designers, and entrepreneurs to build solutions for the Himalayas and beyond.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[var(--brand-navy)] shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5"
              >
                Apply Now
              </Link>
              <Link
                href="#campus"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Experience the Campus
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <dt className="text-xs uppercase tracking-[0.3em] text-white/70">
                    {stat.label}
                  </dt>
                  <dd className="text-2xl font-black text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            id="cbii"
            className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/70">
              CBII / iHUB Spotlight
            </p>
            <h2 className="mt-4 text-2xl font-bold">
              Center for Breakthrough Innovation & Incubation
            </h2>
            <p className="mt-4 text-base text-white/80">
              Prototype your venture with mentors from IISc, ISRO alumni, and impact investors. Access micro grants, fabrication floors, and go-to-market playbooks under one roof.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              <li>• 120+ startups incubated since 2018</li>
              <li>• Dedicated iHUB for defense, agri-tech & clean mobility</li>
              <li>• Patent fast-track desk with in-house legal partners</li>
            </ul>
            <Link
              href="#cbii"
              className="mt-6 inline-flex items-center text-sm font-semibold text-white transition hover:text-white/70"
            >
              Explore CBII Programs →
            </Link>
          </div>
        </section>

        <section id="campus" className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-navy)]">
            Campus Experience
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {campusHighlights.map((highlight) => (
              <div key={highlight.title} className="rounded-2xl bg-[var(--surface)] p-5">
                <h3 className="text-lg font-semibold text-slate-900">{highlight.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{highlight.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-navy)]">
            About Us
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[3fr_2fr]">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Crafted for Himalayan resilience, fueled by global ambition.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Shivalik College is home to interdisciplinary schools spanning engineering, health
                sciences, design, agriculture, and management. We pair emerging technology labs with
                community immersion so every learner sees the impact of their work in the real world.
              </p>
              <p className="mt-4 text-slate-600">
                Our IQAC continuously pilots outcome-based education, while our placement ecosystem brings
                Fortune 500, unicorns, and impact ventures to campus every season.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-[var(--surface)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">
                Quick facts
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>• 65,000 sq.ft of hands-on learning studios</li>
                <li>• 150+ faculty with global fellowships</li>
                <li>• 80+ live research & consultancy projects</li>
                <li>• Resident entrepreneurship coaches & mentors</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="blogs" className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-navy)]">
                Blogs & Stories
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Insights from classrooms, labs, and founders.
              </h2>
            </div>
            <Link href="#blogs" className="text-sm font-semibold text-[var(--brand-navy)]">
              View all posts →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogHighlights.map((blog) => (
              <article key={blog.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-navy)]">
                  {blog.tag}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{blog.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{blog.excerpt}</p>
                <button
                  type="button"
                  className="mt-4 text-sm font-semibold text-[var(--brand-navy)]"
                >
                  Continue reading →
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {serviceTiles.map((tile) => (
            <div key={tile.id} id={tile.id} className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-navy)]">
                {tile.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">{tile.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {tile.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <Link href={`#${tile.id}`} className="mt-4 inline-flex text-sm font-semibold text-[var(--brand-navy)]">
                Access portal →
              </Link>
            </div>
          ))}
        </section>

        <section
          id="apply"
          className="rounded-3xl bg-[var(--brand-navy)] p-8 text-white shadow-[0_25px_60px_rgba(4,21,55,0.35)]"
        >
          <div id="prospectus" className="sr-only" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Admissions 2025
          </p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Begin your Shivalik journey today.</h2>
              <p className="mt-3 text-white/80">
                Submit your application, upload supporting documents, and book your personalized
                counseling slot with the admissions desk in under 15 minutes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-navy)] shadow-lg shadow-black/20"
              >
                Start Application
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
              >
                Talk to Admissions
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="rounded-3xl bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-navy)]">
                Contact Us
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Always-on admissions and student support desks.
              </h2>
              <p className="mt-4 text-slate-600">
                Visit our admission lounge in Dehradun, write to us at admissions@shivalikcollege.edu.in,
                or dial +91-7300900900 for 24/7 guidance.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                    Admissions Office
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Shivalik College Campus, Shimla Bypass Road, Dehradun - 248197
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                    IQAC
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    iqac@shivalikcollege.edu.in | +91-7300900915
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-[var(--surface)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                Get Personalized Guidance
              </p>
              <form className="mt-4 space-y-4">
                <input
                  required
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-[var(--brand-navy)] focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-[var(--brand-navy)] focus:outline-none"
                />
                <textarea
                  rows={3}
                  placeholder="How can we help you?"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-[var(--brand-navy)] focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-[var(--brand-navy)] px-4 py-3 text-sm font-semibold text-white"
                >
                  Request a callback
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-12 bg-white py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Shivalik College of Engineering. All rights reserved.
      </footer>
    </div>
  );
}
