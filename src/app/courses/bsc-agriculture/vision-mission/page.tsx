import BscAgricultureLayout from '../BscAgricultureLayout';
import CseVisionMissionTab from '@/components/sections/CseVisionMissionTab';
import visionMissionData from '../../../../../data/bsc-agriculture-vision-mission.json';

export default function VisionMissionPage() {
  return (
    <BscAgricultureLayout>
      <CseVisionMissionTab data={visionMissionData} />
    </BscAgricultureLayout>
  );
}
