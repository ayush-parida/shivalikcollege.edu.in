import BcaLayout from './BcaLayout';
import bcaHomeData from '../../../../data/bca-home.json';
import CseHomeTab from '@/components/sections/CseHomeTab';

export default function BcaPage() {
  return (
    <BcaLayout>
      <CseHomeTab data={bcaHomeData} />
    </BcaLayout>
  );
}
