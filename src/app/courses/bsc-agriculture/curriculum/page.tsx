import BscAgricultureLayout from '../BscAgricultureLayout';
import curriculumData from '../../../../../data/bsc-agriculture-curriculum.json';

export default function CurriculumPage() {
  return (
    <BscAgricultureLayout>
      <div className="prose max-w-none">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3">
            {curriculumData.label}
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {curriculumData.heading}
          </h1>
          <p className="text-lg text-gray-600">
            {curriculumData.description}
          </p>
        </div>
        
        {curriculumData.note && (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <p className="text-gray-700">{curriculumData.note}</p>
          </div>
        )}
      </div>
    </BscAgricultureLayout>
  );
}
