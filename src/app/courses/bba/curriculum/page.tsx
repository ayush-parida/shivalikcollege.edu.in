import BbaLayout from '../BbaLayout';
import CurriculumTab from '@/components/sections/CurriculumTab';
import bbaCurriculumData from '../../../../../data/bba-curriculum.json';

export default function CurriculumPage() {
  return (
    <BbaLayout>
      <CurriculumTab data={bbaCurriculumData} />
    </BbaLayout>
  );
}
