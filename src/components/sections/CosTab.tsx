"use client";

import { ExternalLink } from 'lucide-react';

interface CosData {
  heading: string;
  description: string;
  note: string;
  documentLink: string;
}

interface CosTabProps {
  data: CosData;
}

export default function CosTab({ data }: CosTabProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.heading}</h2>
        <p className="text-lg text-gray-600">{data.description}</p>
      </div>

      {/* Document Link Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-8 text-center">
        <p className="text-gray-700 mb-6">{data.note}</p>
        <a
          href={data.documentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Course Outcomes Document
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
