"use client";

import Link from "next/link";
import Image from "next/image";

interface MbaOverviewTabProps {
  data: {
    aboutCourse?: {
      title: string;
      description: string;
      highlights: string[];
      image?: string;
    };
    programs?: {
      major: string[];
      specialization: string[];
    };
    courseDetails?: {
      duration: string;
      eligibility: string;
    };
    studentBenefits?: string[];
    topRecruiters?: string[];
    programHighlights?: string[];
    employabilityTraining?: {
      title: string;
      skills: string[];
      trainingHighlights: string[];
    };
    whyTakeCourse?: Array<{
      title: string;
      description: string;
    }>;
    whyChooseUs?: string[];
    careerOpportunities?: {
      intro: string;
      corporate: {
        title: string;
        description: string;
        areas: string[];
      };
      entrepreneurship?: {
        title: string;
        description: string;
        details?: string;
        outcome?: string;
      };
      progressions?: {
        title: string;
        description: string;
      };
    };
    faqs?: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export default function MbaOverviewTab({ data }: MbaOverviewTabProps) {
  return (
    <div className="space-y-8">
      {/* About the Course */}
      {data.aboutCourse && (
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold leading-tight text-slate-900">
            {data.aboutCourse.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image Section */}
            {data.aboutCourse.image && (
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={data.aboutCourse.image}
                  alt={data.aboutCourse.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            {/* Content Section */}
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-slate-600">
                {data.aboutCourse.description}
              </p>
              
              {data.aboutCourse.highlights && data.aboutCourse.highlights.length > 0 && (
                <ul className="space-y-3">
                  {data.aboutCourse.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-[0.65rem] font-semibold text-blue-600">
                        ✓
                      </span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Programs */}
      {data.programs && (
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
          <div className="space-y-6">
            {/* Major Programs */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Major Programs
              </h3>
              <div className="flex flex-wrap gap-3">
                {data.programs.major.map((program: string, index: number) => (
                  <span
                    key={index}
                    className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold"
                  >
                    {program}
                  </span>
                ))}
              </div>
            </div>

            {/* Specialization Programs */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Specialization Programs
              </h3>
              <div className="flex flex-wrap gap-3">
                {data.programs.specialization.map((program: string, index: number) => (
                  <span
                    key={index}
                    className="px-5 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-full text-sm font-semibold"
                  >
                    {program}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Duration & Eligibility Grid */}
      {data.courseDetails && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Duration */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Duration
            </h3>
            <p className="text-base text-slate-700 font-medium">
              {data.courseDetails.duration}
            </p>
          </div>

          {/* Eligibility */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Eligibility Criteria
            </h3>
            <p className="text-sm text-slate-700">
              {data.courseDetails.eligibility}
            </p>
          </div>
        </div>
      )}

      {/* Student Benefits */}
      {data.studentBenefits && data.studentBenefits.length > 0 && (
        <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Student Benefits
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {data.studentBenefits.map((benefit: string, index: number) => (
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

      {/* Top Recruiters */}
      {data.topRecruiters && data.topRecruiters.length > 0 && (
        <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Our Top Recruiter Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {data.topRecruiters.map((company: string, index: number) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-lg px-3 py-4 border border-purple-100 text-xs text-center text-slate-700 font-medium hover:border-purple-300 transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Program Highlights */}
      {data.programHighlights && data.programHighlights.length > 0 && (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Program Highlights
          </h3>
          <ul className="space-y-3">
            {data.programHighlights.map((highlight: string, index: number) => (
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

      {/* Employability Training */}
      {data.employabilityTraining && (
        <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            {data.employabilityTraining.title}
          </h3>
          
          {/* Skills */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-slate-800 mb-3">
              Core Skills Development
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {data.employabilityTraining.skills.map((skill: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate-700 bg-white rounded-lg px-3 py-2 border border-orange-100"
                >
                  <span className="text-orange-600">▸</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Training Highlights */}
          {data.employabilityTraining.trainingHighlights.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Training Highlights
              </h4>
              <div className="flex flex-wrap gap-3">
                {data.employabilityTraining.trainingHighlights.map((training: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-semibold"
                  >
                    {training}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Why Take This Course */}
      {data.whyTakeCourse && data.whyTakeCourse.length > 0 && (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Why take this Course?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {data.whyTakeCourse.map((item: { title: string; description: string }, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 border border-blue-100 hover:border-blue-300 transition-colors"
              >
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">
                    {index + 1}
                  </span>
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Why Choose Us */}
      {data.whyChooseUs && data.whyChooseUs.length > 0 && (
        <div className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Why choose Us?
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {data.whyChooseUs.map((reason: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-600/10 text-xs font-bold text-teal-600">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Career Opportunities & Progressions */}
      {data.careerOpportunities && (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Progressions & Career
          </h3>
          <p className="text-base text-slate-600 mb-6 leading-relaxed">
            {data.careerOpportunities.intro}
          </p>
          
          <div className="space-y-6">
            {/* Corporate Careers */}
            {data.careerOpportunities.corporate && (
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {data.careerOpportunities.corporate.title}
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  {data.careerOpportunities.corporate.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {data.careerOpportunities.corporate.areas.map((area: string, index: number) => (
                    <span
                      key={index}
                      className="inline-block bg-slate-100 text-slate-700 text-xs px-3 py-2 rounded-lg text-center font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Entrepreneurship */}
            {data.careerOpportunities.entrepreneurship && (
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-5 border border-amber-100">
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {data.careerOpportunities.entrepreneurship.title}
                </h4>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                  {data.careerOpportunities.entrepreneurship.description}
                </p>
                {data.careerOpportunities.entrepreneurship.details && (
                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                    {data.careerOpportunities.entrepreneurship.details}
                  </p>
                )}
                {data.careerOpportunities.entrepreneurship.outcome && (
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    {data.careerOpportunities.entrepreneurship.outcome}
                  </p>
                )}
              </div>
            )}

            {/* Progressions */}
            {data.careerOpportunities.progressions && (
              <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-5 border border-indigo-100">
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {data.careerOpportunities.progressions.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {data.careerOpportunities.progressions.description}
                </p>
              </div>
            )}
          </div>
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
