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
  highlights: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
  dignitaries: Array<{
    name: string;
    designation: string;
    role: string;
  }>;
  funding: Array<{
    source: string;
    amount: string;
    purpose: string;
  }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getJsonData<EventData>("cbii-ihub-event.json");

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    keywords: data.metadata.keywords,
  };
}

export default async function CbiiIhubEventPage() {
  const data = await getJsonData<EventData>("cbii-ihub-event.json");

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
            <span className="text-slate-900">CBII and iHUB Shivalik</span>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
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
                <p className="text-2xl font-bold text-slate-900">
                  {highlight.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="section-inner space-y-20">
          {data.sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col gap-8 ${
                section.image && index % 2 === 0
                  ? "md:flex-row"
                  : section.image
                    ? "md:flex-row-reverse"
                    : ""
              } items-center`}
            >
              <div className={section.image ? "md:w-1/2" : "max-w-4xl mx-auto"}>
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

      {/* Dignitaries Section */}
      <section className="py-16 bg-slate-50">
        <div className="section-inner">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Inauguration Dignitaries
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.dignitaries.map((dignitary, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {dignitary.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">
                    {dignitary.designation}
                  </p>
                  <p className="text-sm font-semibold text-amber-600">
                    {dignitary.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section className="py-16 bg-white">
        <div className="section-inner">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Financial Support
            </h2>
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Source
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {data.funding.map((fund, index) => (
                    <tr
                      key={index}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-slate-900">
                        {fund.source}
                      </td>
                      <td className="px-6 py-4 text-slate-700 font-semibold">
                        {fund.amount}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {fund.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="section-inner text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Joining Our Incubation Program?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Transform your innovative ideas into viable startups with
            mentorship, funding, and resources.
          </p>
          <Link
            href="/admissions/apply"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            Apply Now
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
        </div>
      </section>
    </main>
  );
}
