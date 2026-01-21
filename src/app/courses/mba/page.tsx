import MbaLayout from './MbaLayout';
import mbaHomeData from '../../../../data/mba-home.json';

export default function MbaPage() {
  return (
    <MbaLayout>
      <div className="space-y-12">
        {/* Overview Section */}
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {mbaHomeData.heading}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {mbaHomeData.description}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {mbaHomeData.overview}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 py-12">
          {mbaHomeData.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-8 text-center hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MbaLayout>
  );
}
