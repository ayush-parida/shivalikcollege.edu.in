import BtechAiMlLayout from '../BtechAiMlLayout';
import PosPeosPsosTab from '@/components/sections/PosPeosPsosTab';
import btechAiMlPosPeosPsosData from '../../../../../data/btech-ai-ml-pos-peos-psos.json';

export default function PosPeosPsosPage() {
  return (
    <BtechAiMlLayout>
      <PosPeosPsosTab data={btechAiMlPosPeosPsosData} />
    </BtechAiMlLayout>
  );
}
