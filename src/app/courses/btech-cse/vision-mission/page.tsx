import BtechCseLayout from '../BtechCseLayout';
import btechCseVisionMissionData from '../../../../../data/btech-cse-vision-mission.json';
import CseVisionMissionTab from '@/components/sections/CseVisionMissionTab';

export default function VisionMissionPage() {
  return (
    <BtechCseLayout>
      <CseVisionMissionTab data={btechCseVisionMissionData} />
    </BtechCseLayout>
  );
}
