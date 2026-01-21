import BbaLayout from '../BbaLayout';
import bbaVisionMissionData from '../../../../../data/bba-vision-mission.json';
import CseVisionMissionTab from '@/components/sections/CseVisionMissionTab';

export default function VisionMissionPage() {
  return (
    <BbaLayout>
      <CseVisionMissionTab data={bbaVisionMissionData} />
    </BbaLayout>
  );
}
