import React from "react";
import BtechCivilLayout from "../BtechCivilLayout";
import syllabusData from "../../../../../data/btech-civil-syllabus.json";

export default function SyllabusPage() {
  return (
    <BtechCivilLayout>
      <div className="prose max-w-none">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {syllabusData.heading}
          </h1>
          <p className="text-lg text-gray-600">
            {syllabusData.description}
          </p>
        </div>
        
        {syllabusData.note && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-gray-700">{syllabusData.note}</p>
          </div>
        )}
      </div>
    </BtechCivilLayout>
  );
}
