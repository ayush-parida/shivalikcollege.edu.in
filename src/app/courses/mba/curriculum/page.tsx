import MbaLayout from '../MbaLayout';
import CurriculumTab from '@/components/sections/CurriculumTab';
import mbaCurriculumData from '../../../../../data/mba-curriculum.json';

export default function CurriculumPage() {
  return (
    <MbaLayout>
      <CurriculumTab data={mbaCurriculumData} />
    </MbaLayout>
  );
}
