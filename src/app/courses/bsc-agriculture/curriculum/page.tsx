import BscAgricultureLayout from '../BscAgricultureLayout';
import CurriculumTab from '@/components/sections/CurriculumTab';
import curriculumData from '../../../../../data/bsc-agriculture-curriculum.json';

export default function CurriculumPage() {
  return (
    <BscAgricultureLayout>
      <CurriculumTab data={curriculumData} />
    </BscAgricultureLayout>
  );
}
