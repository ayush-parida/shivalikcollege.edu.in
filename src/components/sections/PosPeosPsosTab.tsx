"use client";

import { BookOpen, Target, Award } from 'lucide-react';

interface OutcomeItem {
  code: string;
  title: string;
  description: string;
}

interface Section {
  id: string;
  title: string;
  description: string;
  items: OutcomeItem[];
}

interface PosPeosPsosData {
  heading: string;
  description: string;
  sections: Section[];
}

interface PosPeosPsosTabProps {
  data: PosPeosPsosData;
}

export default function PosPeosPsosTab({ data }: PosPeosPsosTabProps) {
  const getSectionIcon = (id: string) => {
    switch (id) {
      case 'pos':
        return <BookOpen className="w-6 h-6" />;
      case 'psos':
        return <Award className="w-6 h-6" />;
      case 'peos':
        return <Target className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  const getSectionColor = (id: string) => {
    switch (id) {
      case 'pos':
        return 'blue';
      case 'psos':
        return 'purple';
      case 'peos':
        return 'green';
      default:
        return 'blue';
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.heading}</h2>
        <p className="text-lg text-gray-600">{data.description}</p>
      </div>

      {/* Sections */}
      {data.sections.map((section) => {
        const color = getSectionColor(section.id);

        return (
          <div key={section.id} className="space-y-6">
            {/* Section Header */}
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-14 h-14 rounded-lg ${
                color === 'blue' ? 'bg-blue-600' : 
                color === 'purple' ? 'bg-purple-600' : 
                'bg-green-600'
              } text-white flex items-center justify-center`}>
                {getSectionIcon(section.id)}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </div>

            {/* Section Items */}
            <div className="grid gap-4">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-lg border-2 transition-all ${
                    color === 'blue' 
                      ? 'bg-blue-50 border-blue-200 hover:border-blue-400 hover:shadow-md' 
                      : color === 'purple' 
                      ? 'bg-purple-50 border-purple-200 hover:border-purple-400 hover:shadow-md' 
                      : 'bg-green-50 border-green-200 hover:border-green-400 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-lg ${
                      color === 'blue' ? 'bg-blue-600' : 
                      color === 'purple' ? 'bg-purple-600' : 
                      'bg-green-600'
                    } text-white flex items-center justify-center font-bold text-sm`}>
                      {item.code}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-semibold mb-2 ${
                        color === 'blue' ? 'text-blue-900' : 
                        color === 'purple' ? 'text-purple-900' : 
                        'text-green-900'
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Footer Note */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-12">
        <h4 className="font-semibold text-gray-900 mb-2">Accreditation & Quality Standards</h4>
        <p className="text-sm text-gray-700">
          These Program Outcomes, Program Educational Objectives, and Program Specific Outcomes are 
          aligned with the National Board of Accreditation (NBA) criteria and are designed to ensure 
          that our graduates meet the highest standards of engineering education and professional practice.
        </p>
      </div>
    </div>
  );
}
