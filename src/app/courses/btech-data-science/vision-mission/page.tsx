import BtechDataScienceLayout from '../BtechDataScienceLayout';
import btechDataScienceVisionMissionData from '../../../../../data/btech-data-science-vision-mission.json';
import CseVisionMissionTab from '@/components/sections/CseVisionMissionTab';

export default function VisionMissionPage() {
  return (
    <BtechDataScienceLayout>
      <CseVisionMissionTab data={btechDataScienceVisionMissionData} />
    </BtechDataScienceLayout>
  );
}
