import BtechDataScienceLayout from '../BtechDataScienceLayout';
import CurriculumTab from '@/components/sections/CurriculumTab';
import btechDataScienceCurriculumData from '../../../../../data/btech-data-science-curriculum.json';

export default function CurriculumPage() {
  return (
    <BtechDataScienceLayout>
      <CurriculumTab data={btechDataScienceCurriculumData} />
    </BtechDataScienceLayout>
  );
}
