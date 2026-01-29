import BtechAiMlLayout from './BtechAiMlLayout';
import btechAiMlHomeData from '../../../../data/btech-ai-ml-home.json';
import CseHomeTab from '@/components/sections/CseHomeTab';

export default function BtechAiMlPage() {
  return (
    <BtechAiMlLayout>
      <CseHomeTab data={btechAiMlHomeData} />
    </BtechAiMlLayout>
  );
}
