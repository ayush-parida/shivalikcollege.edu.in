"use client";

import { GraduationCap } from 'lucide-react';

interface FacultyMember {
  name: string;
  department: string;
  qualification: string;
  designation: string;
  joiningDate: string;
  type: string;
}

interface FacultyData {
  heading: string;
  description: string;
  faculty: FacultyMember[];
}

interface FacultyTabProps {
  data: FacultyData;
}

export default function FacultyTab({ data }: FacultyTabProps) {
  // Group faculty by designation
  const groupedFaculty = data.faculty.reduce((acc, member) => {
    if (!acc[member.designation]) {
      acc[member.designation] = [];
    }
    acc[member.designation].push(member);
    return acc;
  }, {} as Record<string, FacultyMember[]>);

  const designationOrder = ['Professor', 'Associate Professor', 'Assistant Professor'];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.heading}</h2>
        <p className="text-lg text-gray-600">{data.description}</p>
      </div>

      {/* Faculty by Designation */}
      {designationOrder.map((designation) => {
        const members = groupedFaculty[designation];
        if (!members || members.length === 0) return null;

        return (
          <div key={designation} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">
              {designation}s ({members.length})
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 mb-1">{member.name}</h4>
                      <p className="text-sm text-blue-600 font-semibold mb-2">
                        {member.qualification}
                      </p>
                      <p className="text-xs text-gray-500">
                        Joined: {member.joiningDate}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
