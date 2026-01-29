import BtechDataScienceLayout from './BtechDataScienceLayout';
import btechDataScienceHomeData from '../../../../data/btech-data-science-home.json';
import CseHomeTab from '@/components/sections/CseHomeTab';

export default function BtechDataSciencePage() {
  return (
    <BtechDataScienceLayout>
      <CseHomeTab data={btechDataScienceHomeData} />
    </BtechDataScienceLayout>
  );
}
