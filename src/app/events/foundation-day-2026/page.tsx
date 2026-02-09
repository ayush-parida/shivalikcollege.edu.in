import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getJsonData } from "@/lib/data-loader";

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
  sections: Array<{
    heading: string;
    content: string[];
    image?: string;
  }>;
  gallery: Array<{
    image: string;
    caption: string;
  }>;
  highlights: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
  mission: {
    heading: string;
    points: string[];
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getJsonData<EventData>("foundation-day-2026.json");

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    keywords: data.metadata.keywords,
  };
}

export default async function FoundationDay2026Page() {
  const data = await getJsonData<EventData>("foundation-day-2026.json");

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
            <span className="text-slate-900">Foundation Day 2026</span>
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
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
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

      {/* Content Sections with Images */}
      <section className="py-16">
        <div className="section-inner space-y-20">
          {data.sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
              {section.image && (
                <div className="md:w-1/2">
                  <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={section.image}
                      alt={section.heading}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="section-inner">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">{data.mission.heading}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {data.mission.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-left bg-white/10 rounded-lg p-4 backdrop-blur"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5"
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
                  <span className="text-slate-100">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-slate-50">
        <div className="section-inner">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Event Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 to-transparent p-4">
                  <p className="text-white font-medium">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="section-inner text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Be Part of Our Journey
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join Shivalik College of Engineering and become part of a legacy of
            excellence, values, and innovation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/admissions/apply"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              Apply for Admission
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
              href="/about/about-shivalik"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-900 hover:text-white"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
