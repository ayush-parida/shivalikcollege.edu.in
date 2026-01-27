import BscAgricultureLayout from '../BscAgricultureLayout';
import CseLeadershipTab from '@/components/sections/CseLeadershipTab';
import leadershipData from '../../../../../data/bsc-agriculture-leadership.json';

export default function LeadershipPage() {
  return (
    <BscAgricultureLayout>
      <CseLeadershipTab data={leadershipData} />
    </BscAgricultureLayout>
  );
}
