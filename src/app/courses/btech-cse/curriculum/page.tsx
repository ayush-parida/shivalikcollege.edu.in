import BtechCseLayout from '../BtechCseLayout';
import CurriculumTab from '@/components/sections/CurriculumTab';
import btechCseCurriculumData from '../../../../../data/btech-cse-curriculum.json';

export default function CurriculumPage() {
  return (
    <BtechCseLayout>
      <CurriculumTab data={btechCseCurriculumData} />
    </BtechCseLayout>
  );
}
