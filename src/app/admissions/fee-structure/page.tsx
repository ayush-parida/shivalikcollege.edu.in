"use client";

import Image from "next/image";
import Link from "next/link";
import feeData from "../../../../data/fee-structure.json";

export default function FeeStructurePage() {
  const {
    hero,
    download,
    feeCategories,
    additionalInfo,
    relatedDownloads,
    cta,
  } = feeData;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[500px] w-full">
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-800/60" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300 mb-4">
                {hero.eyebrow}
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                {hero.title}
              </h1>
              <p className="text-xl text-white/90 mb-4 leading-relaxed">
                {hero.intro}
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                {hero.description}
              </p>
              {/* Hero Download Button */}
              <a
                href={download.file.url}
                target="_blank"
                className="mt-8 inline-flex items-center gap-3 bg-white text-brand-700 font-bold px-8 py-4 rounded-xl hover:bg-brand-50 transition-colors shadow-xl"
              >
                <svg
                  className="w-6 h-6"
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
                {download.file.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              {download.heading}
            </h2>
            <p className="text-blue-200 text-lg">
              {download.description}
            </p>
          </div>
          <a
            href={download.file.url}
            target="_blank"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-white text-brand-700 font-bold px-8 py-4 rounded-xl hover:bg-brand-50 transition-colors shadow-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download PDF
          </a>
        </div>
        </div>
      </section>

      {/* Program-wise Fee Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {feeCategories.heading}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {feeCategories.description}
          </p>
        </div>
        <div className="space-y-10">
          {feeCategories.categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-brand-600 to-brand-700 px-8 py-5">
                <h3 className="text-2xl font-bold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="p-6 md:p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-slate-200">
                        <th className="text-left py-4 px-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                          Program
                        </th>
                        {/* <th className="text-center py-4 px-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                          Annual Fee (Approx.)
                        </th> */}
                        <th className="text-center py-4 px-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.programs.map((program, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-slate-100 hover:bg-brand-50/50 transition-colors"
                        >
                          <td className="py-4 px-4">
                            <span className="font-semibold text-slate-900">
                              {program.name}
                            </span>
                          </td>
                          {/* <td className="py-4 px-4 text-center">
                            <span className="text-lg font-bold text-brand-600">
                              {program.annual}
                            </span>
                          </td> */}
                          <td className="py-4 px-4 text-center">
                            <Link
                              href={program.link}
                              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                            >
                              View Course
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important Information */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            {additionalInfo.heading}
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {additionalInfo.notes.map((note, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white rounded-lg px-5 py-4 shadow-md border border-amber-100"
              >
                <svg
                  className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-slate-700">{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Downloads */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          {relatedDownloads.heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {relatedDownloads.files.map((file, index) => (
            <a
              key={index}
              href={file.url}
              target="_blank"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-brand-500 flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
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
              </div>
              <div>
                <h3 className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {file.name}
                </h3>
                <p className="text-xs text-slate-600">Click to download</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {cta.heading}
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={cta.primaryButton.href}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-10 py-4 rounded-xl transition-colors shadow-lg"
            >
              {cta.primaryButton.label}
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href={cta.secondaryButton.href}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-xl transition-colors border border-white/20"
            >
              {cta.secondaryButton.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
