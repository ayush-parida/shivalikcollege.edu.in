"use client";

interface CseVisionMissionTabProps {
  data: {
    eyebrow?: string;
    heading: string;
    description: string;
    sections?: Array<{
      heading: string;
      items: string[];
    }>;
  };
}

export default function CseVisionMissionTab({ data }: CseVisionMissionTabProps) {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        {data.eyebrow && (
          <p className="inline-flex items-center rounded-full border border-purple-100/70 bg-purple-50/70 px-5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-purple-700">
            {data.eyebrow}
          </p>
        )}
        <h2 className="text-4xl font-bold text-slate-900">
          {data.heading}
        </h2>
      </div>

      {/* Vision Card */}
      <div className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-purple-50/30 p-8 shadow-lg">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Our Vision
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      {data.sections && data.sections.map((section, index) => (
        <div key={index} className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              {section.heading}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                    {itemIndex + 1}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pt-0.5">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
