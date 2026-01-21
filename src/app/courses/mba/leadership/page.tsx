import MbaLayout from '../MbaLayout';
import mbaLeadershipData from '../../../../../data/mba-leadership.json';
import CseLeadershipTab from '@/components/sections/CseLeadershipTab';

export default function LeadershipPage() {
  return (
    <MbaLayout>
      <CseLeadershipTab data={mbaLeadershipData} />
    </MbaLayout>
  );
}
