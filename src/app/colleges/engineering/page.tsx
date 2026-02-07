'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import engineeringData from '../../../../data/college-engineering-home.json';

export default function EngineeringCollegePage() {
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
            <span className="text-gray-900 font-medium">Engineering</span>
          </nav>
        </div>
      </div>

      {/* Hero Carousel */}
      <div className="relative h-[500px] bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          {engineeringData.hero.slides.map((slide, index) => (
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
                    <div className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 font-bold text-sm rounded-full mb-4">
                      {slide.title}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl">{slide.subtitle}</h1>
                    <p className="text-xl text-gray-200 max-w-2xl">{slide.description}</p>
                  </div>
                </>
              )}

              {slide.type === 'rankings' && (
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
                  <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
                    {slide.rankings?.map((ranking, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                        <div className="text-4xl font-bold text-yellow-400 mb-2">{ranking.position}</div>
                        <p className="text-sm text-gray-200">{ranking.description}</p>
                      </div>
                    ))}
                  </div>
                  </div>
                </>
              )}

              {slide.type === 'achievers' && (
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
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-7xl">
                    {slide.achievers?.map((achiever, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="text-2xl font-bold text-yellow-400 mb-1">{achiever.package}</div>
                        <p className="text-sm font-semibold mb-1">{achiever.name}</p>
                        <p className="text-xs text-gray-300">{achiever.program}</p>
                        <p className="text-xs text-gray-400">{achiever.company}</p>
                      </div>
                    ))}
                  </div>
                  </div>
                </>
              )}

              {slide.type === 'recruiters' && (
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
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl">
                      {slide.companies?.map((company, i) => (
                      <div key={i} className="bg-white rounded-lg p-4 flex items-center justify-center h-20 relative">
                          <Image 
                            src={company.logo} 
                            alt={company.name}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 768px) 33vw, 16vw"
                          />
                      </div>
                    ))}
                  </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {engineeringData.hero.slides.map((_, index) => (
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
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{engineeringData.pageTitle}</h2>
        </div>
      </div>

      {/* Courses Offered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{engineeringData.courses.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringData.courses.programs.map((program, i) => (
            <Link
              key={i}
              href={program.href}
              className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 hover:shadow-lg transition-all hover:scale-105"
            >
              <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                {program.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Academic Excellence with IITs */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {engineeringData.academicExcellence.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {engineeringData.academicExcellence.collaborations.map((collab, i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{collab.institution}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Specialization Programs:</h4>
                  <ul className="space-y-2">
                    {collab.specializations.map((spec, j) => (
                      <li key={j} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {collab.benefits.map((benefit, j) => (
                      <li key={j} className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Entrepreneurship */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {engineeringData.entrepreneurship.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {engineeringData.entrepreneurship.centers.map((center, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 border border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-2">{center.name}</h3>
                <p className="text-lg text-gray-700 mb-2">{center.fullName}</p>
                {center.recognition && (
                  <p className="text-sm text-gray-600 italic">{center.recognition}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engineeringData.entrepreneurship.achievements.map((achievement, i) => (
              <div key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200 text-center">
                <div className="text-3xl font-bold text-green-700 mb-3">{achievement.amount}</div>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infrastructure */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {engineeringData.infrastructure.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {engineeringData.infrastructure.facilities.map((facility, i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.name}</h3>
                <p className="text-gray-700">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research and Innovation */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {engineeringData.researchInnovation.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {engineeringData.researchInnovation.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.count}</div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{engineeringData.whyChooseUs.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {engineeringData.whyChooseUs.reasons.map((reason, i) => (
              <div key={i} className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <span className="text-yellow-400 text-xl flex-shrink-0">✓</span>
                <p className="text-gray-100">{reason}</p>
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
            className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Explore Admissions
          </Link>
        </div>
      </div>
    </div>
  );
}
