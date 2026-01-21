import BbaLayout from './BbaLayout';
import bbaHomeData from '../../../../data/bba-home.json';
import MbaOverviewTab from '@/components/sections/MbaOverviewTab';

export default function BbaPage() {
  return (
    <BbaLayout>
      <MbaOverviewTab data={bbaHomeData} />
    </BbaLayout>
  );
}
