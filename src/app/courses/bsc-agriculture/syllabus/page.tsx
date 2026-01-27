import BscAgricultureLayout from '../BscAgricultureLayout';
import syllabusData from '../../../../../data/bsc-agriculture-syllabus.json';

export default function SyllabusPage() {
  return (
    <BscAgricultureLayout>
      <div className="prose max-w-none">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3">
            {syllabusData.label}
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {syllabusData.heading}
          </h1>
          <p className="text-lg text-gray-600">
            {syllabusData.description}
          </p>
        </div>
        
        {syllabusData.note && (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <p className="text-gray-700">{syllabusData.note}</p>
          </div>
        )}
      </div>
    </BscAgricultureLayout>
  );
}
