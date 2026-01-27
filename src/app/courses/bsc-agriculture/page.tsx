import BscAgricultureLayout from './BscAgricultureLayout';
import bscAgricultureHomeData from '../../../../data/bsc-agriculture-home.json';
import CseHomeTab from '@/components/sections/CseHomeTab';

export default function BscAgriculturePage() {
  return (
    <BscAgricultureLayout>
      <CseHomeTab data={bscAgricultureHomeData} />
    </BscAgricultureLayout>
  );
}
