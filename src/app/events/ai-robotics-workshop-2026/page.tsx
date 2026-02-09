import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getJsonData } from "@/lib/data-loader";

interface ExpertSession {
  name: string;
  department: string;
  topic: string;
  image: string;
}

interface Dignitary {
  name: string;
  designation: string;
  role: string;
}

interface EventData {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  slug: string;
  heroImage: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  introduction: {
    heading: string;
    content: string[];
  };
  objectives: string[];
  expertSessions: ExpertSession[];
  inauguration: {
    heading: string;
    content: string;
    image: string;
    dignitaries: Dignitary[];
  };
  coordinators: Array<{
    name: string;
    role: string;
  }>;
  supportingFaculty: string[];
  highlights: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
  gallery: Array<{
    image: string;
    caption: string;
  }>;
  outcomes: {
    heading: string;
    content: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getJsonData<EventData>("ai-robotics-workshop-2026.json");

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    keywords: data.metadata.keywords,
  };
}

export default async function AIRoboticsWorkshop2026Page() {
  const data = await getJsonData<EventData>("ai-robotics-workshop-2026.json");

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="section-inner py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/#events"
              className="hover:text-slate-900 transition-colors"
            >
              Events
            </Link>
            <span>/</span>
            <span className="text-slate-900">AI & Robotics Workshop 2026</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="section-inner pb-12 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300 mb-3">
              {data.date} • {data.location}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-slate-200">{data.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="section-inner">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {data.introduction.heading}
            </h2>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              {data.introduction.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-12 bg-slate-50">
        <div className="section-inner">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {data.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center border border-slate-200 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  {highlight.label}
                </p>
                <p className="text-xl md:text-2xl font-bold text-slate-900">
                  {highlight.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-white">
        <div className="section-inner">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Workshop Objectives
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {data.objectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-slate-50 rounded-lg p-4 border border-slate-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                  <span className="text-slate-700">{objective}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inauguration Section */}
      <section className="py-16 bg-slate-50">
        <div className="section-inner">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {data.inauguration.heading}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {data.inauguration.content}
              </p>
              <div className="space-y-3">
                {data.inauguration.dignitaries.map((dignitary, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-slate-200"
                  >
                    <h3 className="font-bold text-slate-900">
                      {dignitary.name}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {dignitary.designation}
                    </p>
                    <p className="text-xs font-semibold text-amber-600 mt-1">
                      {dignitary.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={data.inauguration.image}
                alt="Inauguration Ceremony"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expert Sessions */}
      <section className="py-16 bg-white">
        <div className="section-inner">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Expert Sessions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data.expertSessions.map((session, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={session.image}
                    alt={session.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {session.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {session.department}
                  </p>
                  <p className="text-sm font-medium text-amber-600">
                    {session.topic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordinators & Support */}
      <section className="py-16 bg-slate-50">
        <div className="section-inner">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Workshop Coordinators
              </h2>
              <div className="space-y-3">
                {data.coordinators.map((coordinator, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-slate-200"
                  >
                    <h3 className="font-bold text-slate-900">
                      {coordinator.name}
                    </h3>
                    <p className="text-sm text-slate-600">{coordinator.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Supporting Faculty
              </h2>
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <ul className="space-y-2">
                  {data.supportingFaculty.map((faculty, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-amber-500"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="2" fill="currentColor" />
                      </svg>
                      {faculty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-white">
        <div className="section-inner">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {data.outcomes.heading}
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {data.outcomes.content}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-slate-50">
        <div className="section-inner">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Event Gallery
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {data.gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 to-transparent p-3">
                  <p className="text-white text-sm font-medium">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="section-inner text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Our Future Workshops?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Stay connected with Shivalik College of Engineering for upcoming
            workshops, seminars, and professional development programs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/admissions/apply"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              Join Our Institution
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M5 12h14m0 0-5-5m5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </Link>
            <Link
              href="/research/overview"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
            >
              Explore Research
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
