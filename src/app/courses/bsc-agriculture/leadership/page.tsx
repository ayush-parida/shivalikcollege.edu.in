import BscAgricultureLayout from '../BscAgricultureLayout';
import leadershipData from '../../../../../data/bsc-agriculture-leadership.json';

export default function LeadershipPage() {
  return (
    <BscAgricultureLayout>
      <div className="prose max-w-none">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3">
            {leadershipData.label}
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {leadershipData.heading}
          </h1>
          <p className="text-lg text-gray-600">
            {leadershipData.description}
          </p>
        </div>
        
        {leadershipData.note && (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <p className="text-gray-700">{leadershipData.note}</p>
          </div>
        )}
      </div>
    </BscAgricultureLayout>
  );
}
