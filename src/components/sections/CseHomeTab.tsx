"use client";

import Link from "next/link";
import Image from "next/image";

interface CseHomeTabProps {
  data: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    image?: string;
    specializations?: { heading: string; programs: string[] };
    duration?: { heading: string; value: string };
    eligibility?: { heading: string; general: string; lateralEntry?: string[] };
    studentBenefits?: { heading: string; benefits: string[] };
    programHighlights?: { heading: string; intro: string; highlights: string[] };
    whyTakeCourse?: { heading: string; description: string; jobProfiles: string[] };
    whyChooseUs?: { heading: string; reasons: string[] };
    progressionsCareer?: {
      heading: string;
      intro: string;
      progression: { heading: string; options: string[] };
      career: { heading: string; description: string; roles: string[] };
    };
    feeStructure?: { heading: string; documentUrl: string };
    faqs?: Array<{ question: string; answer: string }>;
  };
}

export default function CseHomeTab({ data }: CseHomeTabProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        {data.eyebrow && (
          <p className="inline-flex items-center rounded-full border border-brand-100/70 bg-brand-50/70 px-5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-brand-700">
            {data.eyebrow}
          </p>
        )}
        <h2 className="text-4xl font-semibold leading-tight text-slate-900">
          {data.heading}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Image Section */}
          {data.image && (
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={data.image}
                alt={data.heading || 'B.Tech CSE'}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          {/* Content Section */}
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-slate-600">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* Specializations */}
      {data.specializations && (
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            {data.specializations.heading}
          </h3>
          <div className="flex flex-wrap gap-3">
            {data.specializations.programs.map((program: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold"
              >
                {program}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Duration & Eligibility Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Duration */}
        {data.duration && (
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              {data.duration.heading}
            </h3>
            <p className="text-base text-slate-700 font-medium">
              {data.duration.value}
            </p>
          </div>
        )}

        {/* Eligibility */}
        {data.eligibility && (
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              {data.eligibility.heading}
            </h3>
            <p className="text-sm text-slate-700 mb-3">
              {data.eligibility.general}
            </p>
            {data.eligibility.lateralEntry && (
              <details className="text-sm">
                <summary className="cursor-pointer text-blue-600 font-semibold hover:text-blue-700">
                  For Lateral Entry (Click to expand)
                </summary>
                <ul className="mt-3 space-y-2 pl-4">
                  {data.eligibility.lateralEntry.map((item: string, index: number) => (
                    <li key={index} className="text-slate-600 text-xs leading-relaxed">
                      {String.fromCharCode(97 + index)}. {item}
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        )}
      </div>

      {/* Student Benefits */}
      {data.studentBenefits && (
        <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            {data.studentBenefits.heading}
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {data.studentBenefits.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-600/10 text-[0.65rem] font-semibold text-green-600">
                  ✓
                </span>
                <span className="leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Program Highlights */}
      {data.programHighlights && (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            {data.programHighlights.heading}
          </h3>
          <p className="text-base text-slate-600 mb-4 leading-relaxed">
            {data.programHighlights.intro}
          </p>
          <ul className="space-y-3">
            {data.programHighlights.highlights.map((highlight: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-xs font-bold text-blue-600">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Why Take This Course */}
      {data.whyTakeCourse && (
        <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            {data.whyTakeCourse.heading}
          </h3>
          <p className="text-base text-slate-700 mb-4 leading-relaxed">
            {data.whyTakeCourse.description}
          </p>
          <div>
            <p className="text-sm font-semibold text-slate-900 mb-3">
              Top job profiles unlocked after completing this course:
            </p>
            <div className="grid md:grid-cols-2 gap-2">
              {data.whyTakeCourse.jobProfiles.map((job: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate-700 bg-white rounded-lg px-3 py-2 border border-purple-100"
                >
                  <span className="text-purple-600">▸</span>
                  <span>{job}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us */}
      {data.whyChooseUs && (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            {data.whyChooseUs.heading}
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {data.whyChooseUs.reasons.map((reason: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-600/10 text-xs font-bold text-orange-600">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Progressions & Career */}
      {data.progressionsCareer && (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            {data.progressionsCareer.heading}
          </h3>
          <p className="text-base text-slate-600 mb-6 leading-relaxed">
            {data.progressionsCareer.intro}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Progression */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">
                {data.progressionsCareer.progression.heading}
              </h4>
              <ul className="space-y-2">
                {data.progressionsCareer.progression.options.map((option: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-[0.65rem] font-semibold text-blue-600">
                      ✓
                    </span>
                    <span className="leading-relaxed">{option}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">
                {data.progressionsCareer.career.heading}
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                {data.progressionsCareer.career.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {data.progressionsCareer.career.roles.map((role: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fee Structure */}
      {data.feeStructure && (
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            {data.feeStructure.heading}
          </h3>
          <Link
            href={data.feeStructure.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Fee Structure
          </Link>
        </div>
      )}

      {/* FAQs */}
      {data.faqs && data.faqs.length > 0 && (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {data.faqs.map((faq: { question: string; answer: string }, index: number) => (
              <details
                key={index}
                className="group rounded-lg border border-slate-200 p-4 hover:border-blue-300 transition-colors"
              >
                <summary className="cursor-pointer text-base font-semibold text-slate-900 hover:text-blue-600">
                  {index + 1}. {faq.question}
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
