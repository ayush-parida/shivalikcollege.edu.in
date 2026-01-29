import BtechAiMlLayout from '../BtechAiMlLayout';
import CurriculumTab from '@/components/sections/CurriculumTab';
import btechAiMlCurriculumData from '../../../../../data/btech-ai-ml-curriculum.json';

export default function CurriculumPage() {
  return (
    <BtechAiMlLayout>
      <CurriculumTab data={btechAiMlCurriculumData} />
    </BtechAiMlLayout>
  );
}
