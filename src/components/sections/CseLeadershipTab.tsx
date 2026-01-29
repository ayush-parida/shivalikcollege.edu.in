"use client";

import Image from "next/image";

interface CseLeadershipTabProps {
  data: {
    heading: string;
    description: string;
    profile: {
      name: string;
      title: string;
      department: string;
      college: string;
      image: string;
      bio: string[];
      awards: string[];
      contact: {
        email: string;
        phone: string;
      };
    };
  };
}

export default function CseLeadershipTab({ data }: CseLeadershipTabProps) {
  const { heading, description, profile } = data;

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

      {/* Leader Profile Card */}
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 lg:p-10 shadow-lg">
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">
          {/* Leader Image */}
          <div className="relative">
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <Image
                src={profile.image}
                alt={profile.name}
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
                    href={`mailto:${profile.contact.email}`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 break-all"
                  >
                    {profile.contact.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-600 mb-1">
                    Contact No
                  </p>
                  <a 
                    href={`tel:${profile.contact.phone}`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    {profile.contact.phone}
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
                {profile.name}
              </h3>
              <p className="text-xl font-semibold text-blue-600 mb-1">
                {profile.title}
              </p>
              <p className="text-base text-slate-600">
                {profile.department}
              </p>
              <p className="text-sm text-slate-500 mt-1">
                {profile.college}
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              {profile.bio.map((paragraph, index) => (
                <p key={index} className="text-base text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Awards */}
            {/* <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-6">
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
                {profile.awards?.map((award, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span className="text-sm leading-relaxed font-medium">{award}</span>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
