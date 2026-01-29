import BtechAiMlLayout from '../BtechAiMlLayout';
import btechAiMlVisionMissionData from '../../../../../data/btech-ai-ml-vision-mission.json';
import CseVisionMissionTab from '@/components/sections/CseVisionMissionTab';

export default function VisionMissionPage() {
  return (
    <BtechAiMlLayout>
      <CseVisionMissionTab data={btechAiMlVisionMissionData} />
    </BtechAiMlLayout>
  );
}
