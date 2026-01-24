"use client";

import Image from "next/image";

interface Leader {
  name: string;
  title: string;
  department: string;
  college: string;
  image: string;
  bio: string[];
  awards: string[];
  achievements?: string[];
  specialization?: string[];
  contact: {
    email: string;
    phone: string;
  };
}

interface BPharmaLeadershipTabProps {
  data: {
    heading: string;
    description: string;
    leaders: Leader[];
  };
}

export default function BPharmaLeadershipTab({ data }: BPharmaLeadershipTabProps) {
  const { heading, description, leaders } = data;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900">
          {heading}
        </h2>
        <p className="text-lg text-slate-600">
          {description}
        </p>
      </div>

      {/* Leaders */}
      <div className="space-y-12">
        {leaders.map((leader, idx) => (
          <div key={idx} className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 lg:p-10 shadow-lg">
            <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">
              {/* Leader Image */}
              <div className="relative">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
                
                {/* Contact Card */}
                <div className="mt-6 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5">
                  <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">
                    Contact Info
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-600 mb-1">
                        E-Mail
                      </p>
                      <a 
                        href={`mailto:${leader.contact.email}`}
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 break-all"
                      >
                        {leader.contact.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 mb-1">
                        Contact No
                      </p>
                      <a 
                        href={`tel:${leader.contact.phone}`}
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                      >
                        {leader.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leader Info */}
              <div className="space-y-8">
                {/* Name and Title */}
                <div>
                  <h3 className="text-4xl font-bold text-slate-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-xl font-semibold text-blue-600 mb-1">
                    {leader.title}
                  </p>
                  <p className="text-base text-slate-600">
                    {leader.department}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    {leader.college}
                  </p>
                </div>

                {/* Bio */}
                <div className="space-y-4">
                  {leader.bio.map((paragraph, index) => (
                    <p key={index} className="text-base text-slate-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Awards */}
                <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">
                      Awards & Recognition
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {leader.awards.map((award, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <span className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                        <span className="text-sm leading-relaxed font-medium">{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements - if present */}
                {leader.achievements && leader.achievements.length > 0 && (
                  <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
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
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">
                        Key Achievements
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {leader.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-slate-700"
                        >
                          <span className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          <span className="text-sm leading-relaxed font-medium">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specialization - if present */}
                {leader.specialization && leader.specialization.length > 0 && (
                  <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">
                        Areas of Specialization
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {leader.specialization.map((spec, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-amber-200 text-sm font-medium text-slate-700"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
