'use client';

import Link from 'next/link';
import { useState } from 'react';
import pharmacyData from '../../../../data/college-pharmacy-home.json';

export default function PharmacyCollegePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/colleges" className="text-blue-600 hover:text-blue-700">
              Colleges
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Pharmacy</span>
          </nav>
        </div>
      </div>

      {/* Hero Carousel */}
      <div className="relative h-[500px] bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden">
        <div className="absolute inset-0">
          {pharmacyData.hero.slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slide.type === 'main' && (
                <>
                  {slide.image && (
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${slide.image}')` }}
                    >
                      <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                  )}
                  <div className="relative flex flex-col justify-center items-center text-center text-white h-full px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl">{slide.title}</h1>
                    <p className="text-2xl text-gray-200 max-w-2xl">{slide.subtitle}</p>
                  </div>
                </>
              )}

              {slide.type === 'recognition' && (
                <>
                  {slide.image && (
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${slide.image}')` }}
                    >
                      <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                  )}
                  <div className="relative flex flex-col justify-center items-center text-center text-white h-full px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{slide.title}</h2>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-2xl">
                      <p className="text-lg text-gray-200">Awarded by</p>
                      <p className="text-xl font-semibold mt-2">{slide.awardedBy}</p>
                    </div>
                  </div>
                </>
              )}

              {slide.type === 'achiever' && (
                <>
                  {slide.image && (
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${slide.image}')` }}
                    >
                      <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                  )}
                  <div className="relative flex flex-col justify-center items-center text-center text-white h-full px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">{slide.title}</h2>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-xl">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2">{slide.achiever.name}</h3>
                      <p className="text-sm text-gray-300 mb-4">{slide.achiever.batch}</p>
                      <p className="text-lg text-gray-100">{slide.achiever.achievement}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {pharmacyData.hero.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{pharmacyData.pageTitle}</h2>
        </div>
      </div>

      {/* Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{pharmacyData.courses.title}</h2>
        <div className="flex justify-center">
          {pharmacyData.courses.programs.map((program, i) => (
            <Link
              key={i}
              href={program.href}
              className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 border border-green-200 hover:shadow-lg transition-all hover:scale-105 text-center"
            >
              <h3 className="font-bold text-gray-900 text-2xl group-hover:text-green-600 transition-colors">
                {program.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Affiliations */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {pharmacyData.affiliations.title}
          </h2>
          <p className="text-center text-lg text-gray-700 mb-8">{pharmacyData.affiliations.subtitle}</p>
          <div className="bg-white rounded-lg p-8 shadow-md max-w-3xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Affiliated to:</h3>
            <ul className="space-y-3">
              {pharmacyData.affiliations.affiliatedTo.map((org, i) => (
                <li key={i} className="text-gray-700 flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  {org}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Industrial Collaborations */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {pharmacyData.industrialCollaborations.title}
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-4xl mx-auto">
            {pharmacyData.industrialCollaborations.description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {pharmacyData.industrialCollaborations.partners.map((partner, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-24 border border-gray-200">
                <span className="text-gray-700 text-sm text-center font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{pharmacyData.benefits.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pharmacyData.benefits.features.map((feature, i) => (
              <div key={i} className="flex items-start space-x-3 bg-white rounded-lg p-4 shadow-sm border border-green-200">
                <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recruitment Partners */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {pharmacyData.recruitmentPartners.title}
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            {pharmacyData.recruitmentPartners.companies.map((company, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-20 border border-gray-200">
                <span className="text-gray-700 text-sm text-center font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GPAT Support */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {pharmacyData.gpatSupport.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pharmacyData.gpatSupport.features.map((feature, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-600">
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {pharmacyData.testimonials.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pharmacyData.testimonials.reviews.map((review, i) => (
              <div key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                <p className="text-gray-700 italic">&ldquo;{review.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-green-900 to-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{pharmacyData.whyChooseUs.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pharmacyData.whyChooseUs.reasons.map((reason, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">{reason.title}</h3>
                <p className="text-gray-100">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/admissions"
            className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Explore Admissions
          </Link>
        </div>
      </div>
    </div>
  );
}
