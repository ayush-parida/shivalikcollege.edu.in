import BscAgricultureLayout from '../BscAgricultureLayout';
import posData from '../../../../../data/bsc-agriculture-pos-peos-psos.json';

export default function PosPeosPsosPage() {
  return (
    <BscAgricultureLayout>
      <div className="prose max-w-none">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3">
            {posData.label}
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {posData.heading}
          </h1>
          <p className="text-lg text-gray-600">
            {posData.description}
          </p>
        </div>
        
        {posData.note && (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <p className="text-gray-700">{posData.note}</p>
          </div>
        )}
      </div>
    </BscAgricultureLayout>
  );
}
