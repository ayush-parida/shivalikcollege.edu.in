"use client";

import Image from "next/image";
import Link from "next/link";
import formData from "../../../../data/application-form.json";

export default function ApplicationFormPage() {
  const {
    hero,
    download,
    instructions,
    documentsRequired,
    relatedDownloads,
    cta,
  } = formData;

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
              <p className="text-blue-200 text-lg">{download.description}</p>
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

      {/* How to Fill */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          {instructions.heading}
        </h2>
        <div className="grid md:grid-cols-5 gap-6">
          {instructions.steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-brand-600"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                {step.step}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            {documentsRequired.heading}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {documentsRequired.documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-shadow border border-slate-100"
              >
                <svg
                  className="w-5 h-5 text-green-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm text-slate-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Online Option */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {onlineOption.heading}
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            {onlineOption.description}
          </p>
          <Link
            href={onlineOption.button.href}
            className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-10 py-4 rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
          >
            {onlineOption.button.label}
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
        </div>
      </section> */}

      {/* Related Downloads */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            {relatedDownloads.heading}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
