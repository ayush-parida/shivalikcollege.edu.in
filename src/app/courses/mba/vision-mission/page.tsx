import MbaLayout from '../MbaLayout';
import mbaVisionMissionData from '../../../../../data/mba-vision-mission.json';
import CseVisionMissionTab from '@/components/sections/CseVisionMissionTab';

export default function VisionMissionPage() {
  return (
    <MbaLayout>
      <CseVisionMissionTab data={mbaVisionMissionData} />
    </MbaLayout>
  );
}
