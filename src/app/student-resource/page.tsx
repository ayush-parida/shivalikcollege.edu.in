"use client";

import Image from "next/image";
import { useState } from "react";
import studentResourceData from "../../../data/student-resource.json";

export default function StudentResourcePage() {
  const { hero, libraryPurpose, digitalResources, bookCollection, libraryServices } = studentResourceData;
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300 mb-4">
                {hero.eyebrow}
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                {hero.title}
              </h1>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6">
                <p className="text-xl lg:text-2xl text-white/90 italic mb-2">
                  &ldquo;{hero.quote}&rdquo;
                </p>
                <p className="text-sm text-white/70 font-semibold tracking-wider">
                  – {hero.quoteAuthor}
                </p>
              </div>
              <p className="text-lg text-white/80">
                {hero.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Library Purpose */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            {libraryPurpose.heading}
          </h2>
          <div className="space-y-4 mb-8">
            {libraryPurpose.purposes.map((purpose, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <p className="text-lg text-slate-700 pt-1">{purpose}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-slate-600 leading-relaxed">
            {libraryPurpose.description}
          </p>
        </div>
      </section>

      {/* Digital Resources */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            {digitalResources.heading}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalResources.resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-brand-500"
              >
                <div className="flex items-center justify-center h-16 mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors text-center">
                    {resource.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 text-center">
                  {resource.description}
                </p>
                <div className="mt-4 flex items-center justify-center text-brand-600 group-hover:text-brand-700 font-semibold">
                  <span className="text-sm">Access Now</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Book Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          {bookCollection.heading}
        </h2>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-brand-600 to-brand-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Titles</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Volumes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bookCollection.categories.map((item, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-slate-50 transition-colors ${
                      item.category.includes('Total') ? 'bg-brand-50 font-semibold' : ''
                    }`}
                  >
                    <td className="px-6 py-4 text-slate-900">{item.category}</td>
                    <td className="px-6 py-4 text-right text-slate-700">{item.titles}</td>
                    <td className="px-6 py-4 text-right text-slate-700">{item.volumes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
            <div className="flex flex-wrap gap-6 justify-center">
              {bookCollection.additionalStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-brand-600">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Library Services */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            {libraryServices.heading}
          </h2>
          <div className="space-y-4">
            {libraryServices.services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200"
              >
                <button
                  onClick={() => toggleService(index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-slate-900 text-left">
                    {service.title}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-brand-600 transition-transform ${
                      expandedService === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedService === index && (
                  <div className="px-6 py-5 bg-slate-50 border-t border-slate-200">
                    <p className="text-base text-slate-700 leading-relaxed">
                      {service.description}
                    </p>
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
