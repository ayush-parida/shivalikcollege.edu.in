import BcaLayout from '../BcaLayout';
import bcaVisionMissionData from '../../../../../data/bca-vision-mission.json';
import CseVisionMissionTab from '@/components/sections/CseVisionMissionTab';

export default function VisionMissionPage() {
  return (
    <BcaLayout>
      <CseVisionMissionTab data={bcaVisionMissionData} />
    </BcaLayout>
  );
}
