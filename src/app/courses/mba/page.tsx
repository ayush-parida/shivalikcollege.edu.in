import MbaLayout from './MbaLayout';
import mbaHomeData from '../../../../data/mba-home.json';
import MbaOverviewTab from '@/components/sections/MbaOverviewTab';

export default function MbaPage() {
  return (
    <MbaLayout>
      <MbaOverviewTab data={mbaHomeData} />
    </MbaLayout>
  );
}
