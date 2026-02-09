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
  chiefGuest: {
    name: string;
    designation: string;
    organization: string;
    role: string;
    address: string;
    image: string;
  };
  eventHighlights: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
  participation: {
    heading: string;
    content: string;
    regions: string[];
    image: string;
  };
  institutionalCommitment: {
    heading: string;
    content: string;
    image: string;
  };
  conclusion: {
    heading: string;
    content: string;
    image: string;
  };
  gallery: Array<{
    image: string;
    caption: string;
  }>;
  recognitionCategories: string[];
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getJsonData<EventData>("guru-gaurav-samman-2026.json");

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    keywords: data.metadata.keywords,
  };
}

export default async function GuruGauravSamman2026Page() {
  const data = await getJsonData<EventData>("guru-gaurav-samman-2026.json");

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
            <span className="text-slate-900">Guru Gaurav Samman 2026</span>
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

      {/* Event Highlights */}
      <section className="py-12 bg-slate-50">
        <div className="section-inner">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {data.eventHighlights.map((highlight, index) => (
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

      {/* Chief Guest Section */}
      <section className="py-16 bg-white">
        <div className="section-inner">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src={data.chiefGuest.image}
                alt={data.chiefGuest.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {data.chiefGuest.role}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {data.chiefGuest.name}
              </h2>
              <p className="text-lg font-medium text-slate-700 mb-1">
                {data.chiefGuest.designation}
              </p>
              <p className="text-slate-600 mb-6">
                {data.chiefGuest.organization}
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                {data.chiefGuest.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Section */}
      <section className="py-16 bg-slate-50">
        <div className="section-inner">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {data.participation.heading}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {data.participation.content}
              </p>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">
                  Participating Regions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.participation.regions.map((region, index) => (
                    <span
                      key={index}
                      className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={data.participation.image}
                alt="Academic Gathering"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Commitment */}
      <section className="py-16 bg-white">
        <div className="section-inner">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src={data.institutionalCommitment.image}
                alt="Quality Education"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {data.institutionalCommitment.heading}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {data.institutionalCommitment.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Categories */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="section-inner">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Recognition Categories
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {data.recognitionCategories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-amber-400 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-slate-100 font-medium">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-slate-50">
        <div className="section-inner">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {data.conclusion.heading}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {data.conclusion.content}
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={data.conclusion.image}
                alt="Event Conclusion"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="section-inner">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
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
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="section-inner text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join a Community That Values Excellence
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            At Shivalik College of Engineering, we believe in recognizing
            dedication and fostering excellence in education.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/admissions/apply"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-transform hover:-translate-y-1 hover:shadow-xl"
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
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
