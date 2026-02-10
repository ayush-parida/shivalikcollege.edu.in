"use client";

import Image from "next/image";
import Link from "next/link";
import applyData from "../../../../data/apply.json";

export default function ApplyPage() {
  const {
    hero,
    applicationProcess,
    totalIntake,
    instructions,
    querySubmission,
    documentsRequired,
    downloadables,
    eligibility,
    exploreCourses,
  } = applyData;

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
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          {applicationProcess.heading}
        </h2>
        <div className="grid md:grid-cols-5 gap-6">
          {applicationProcess.steps.map((step, index) => (
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

      {/* Total Intake */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            {totalIntake.heading}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {totalIntake.categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-4">
                  <h3 className="text-xl font-bold text-white text-center">
                    {category.category}
                  </h3>
                </div>
                <div className="p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-2 text-sm font-semibold text-slate-700">
                          Course
                        </th>
                        <th className="text-right py-2 text-sm font-semibold text-slate-700">
                          Seats
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.courses.map((course, idx) => (
                        <tr key={idx} className="border-b border-slate-100">
                          <td className="py-3 text-slate-900">{course.name}</td>
                          <td className="py-3 text-right text-brand-600 font-semibold">
                            {course.seats}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-amber-50 rounded-3xl p-8 lg:p-12 border-2 border-amber-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {instructions.heading}
          </h2>
          <ul className="space-y-3">
            {instructions.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                  {index + 1}
                </span>
                <p className="text-base text-slate-700 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Query Submission */}
      <section className="bg-gradient-to-br from-slate-100 to-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              {querySubmission.heading}
            </h2>
            <ol className="space-y-4">
              {querySubmission.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <p className="text-lg text-slate-700 pt-2">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          {documentsRequired.heading}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documentsRequired.documents.map((doc, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-shadow border border-slate-100"
            >
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-slate-700">{doc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadables */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            {downloadables.heading}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadables.files.map((file, index) => (
              <a
                key={index}
                href={file.url}
                target="_blank"
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-brand-500 flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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

      {/* Eligibility */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          {eligibility.heading}
        </h2>
        <div className="space-y-4">
          {eligibility.programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-brand-600"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {program.program}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {program.criteria}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Courses */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {exploreCourses.heading}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {exploreCourses.categories.map((category, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                {category.link ? (
                  <Link href={category.link}>
                    <div className="relative h-48">
                      <Image
                        src={category.image || '/assets/placeholder.jpg'}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-2xl font-bold text-white">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <span className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700">
                        View Courses
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p className="text-sm text-slate-600 mb-6 text-center">
                        {category.subtitle}
                      </p>
                    )}
                    <div className="space-y-3">
                      {category.links?.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.url}
                          className="block bg-brand-50 hover:bg-brand-100 text-brand-700 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
