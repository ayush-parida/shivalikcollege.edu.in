"use client";

interface Lab {
  name: string;
}

interface Platform {
  name: string;
}

interface DigitalEcosystem {
  heading: string;
  description: string;
  platforms: Platform[];
}

interface FacilitiesData {
  heading: string;
  description: string;
  labs: Lab[];
  digitalEcosystem: DigitalEcosystem;
}

interface FacilitiesTabProps {
  data: FacilitiesData;
}

export default function FacilitiesTab({ data }: FacilitiesTabProps) {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.heading}</h2>
        <p className="text-lg text-gray-600">{data.description}</p>
      </div>

      {/* Labs Section */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Specialized Laboratories</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.labs.map((lab, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <h4 className="text-lg font-semibold text-gray-900">
                {lab.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Ecosystem */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {data.digitalEcosystem.heading}
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {data.digitalEcosystem.description}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {data.digitalEcosystem.platforms.map((platform, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-gray-900">{platform.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
