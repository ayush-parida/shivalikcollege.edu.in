"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Subject {
  code: string;
  name: string;
}

interface Elective {
  category: string;
  options: Subject[];
}

interface Semester {
  id: number;
  name: string;
  subjects: Subject[];
  electives?: Elective[];
  notes?: string[];
}

interface CurriculumData {
  heading: string;
  description: string;
  semesters: Semester[];
}

interface CurriculumTabProps {
  data: CurriculumData;
}

export default function CurriculumTab({ data }: CurriculumTabProps) {
  const [openSemesters, setOpenSemesters] = useState<number[]>([1]); // First semester open by default

  const toggleSemester = (semesterId: number) => {
    setOpenSemesters((prev) =>
      prev.includes(semesterId)
        ? prev.filter((id) => id !== semesterId)
        : [...prev, semesterId]
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.heading}</h2>
        <p className="text-lg text-gray-600">{data.description}</p>
      </div>

      {/* Semesters Accordion */}
      <div className="space-y-4">
        {data.semesters.map((semester) => {
          const isOpen = openSemesters.includes(semester.id);

          return (
            <div
              key={semester.id}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Semester Header */}
              <button
                onClick={() => toggleSemester(semester.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    {semester.id}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {semester.name}
                  </h3>
                  <span className="text-sm text-gray-500">
                    ({semester.subjects.length} subjects)
                  </span>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-6 h-6 text-gray-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                )}
              </button>

              {/* Semester Content */}
              {isOpen && (
                <div className="px-6 py-6 space-y-6">
                  {/* Core Subjects */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Core Subjects
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {semester.subjects.map((subject, index) => (
                        <div
                          key={index}
                          className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                        >
                          <div className="text-sm font-semibold text-blue-600 mb-1">
                            {subject.code}
                          </div>
                          <div className="text-sm text-gray-700">
                            {subject.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Electives */}
                  {semester.electives && semester.electives.length > 0 && (
                    <div className="space-y-4">
                      {semester.electives.map((elective, idx) => (
                        <div key={idx}>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            {elective.category}
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {elective.options.map((option, optIdx) => (
                              <div
                                key={optIdx}
                                className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-400 hover:bg-purple-100 transition-colors"
                              >
                                <div className="text-sm font-semibold text-purple-600 mb-1">
                                  {option.code}
                                </div>
                                <div className="text-sm text-gray-700">
                                  {option.name}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Notes */}
                  {semester.notes && semester.notes.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <div className="space-y-2">
                        {semester.notes.map((note, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="text-blue-600 font-semibold">•</span>
                            <span>{note}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Note:</span> The curriculum is subject to periodic
          updates to align with industry requirements and technological advancements. Students
          are advised to check with the department for the most current information.
        </p>
      </div>
    </div>
  );
}
