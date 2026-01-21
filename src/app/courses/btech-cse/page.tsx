import BtechCseLayout from './BtechCseLayout';
import btechCseHomeData from '../../../../data/btech-cse-home.json';
import CseHomeTab from '@/components/sections/CseHomeTab';

export default function BtechCsePage() {
  return (
    <BtechCseLayout>
      <CseHomeTab data={btechCseHomeData} />
    </BtechCseLayout>
  );
}
