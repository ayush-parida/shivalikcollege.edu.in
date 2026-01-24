import BPharmaLayout from '../BPharmaLayout';
import bPharmaVisionMissionData from '../../../../../data/b-pharma-vision-mission.json';
import CseVisionMissionTab from '@/components/sections/CseVisionMissionTab';

export default function VisionMissionPage() {
  return (
    <BPharmaLayout>
      <CseVisionMissionTab data={bPharmaVisionMissionData} />
    </BPharmaLayout>
  );
}
