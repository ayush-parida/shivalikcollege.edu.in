import BcaLayout from '../BcaLayout';
import bcaLeadershipData from '../../../../../data/bca-leadership.json';
import CseLeadershipTab from '@/components/sections/CseLeadershipTab';

export default function LeadershipPage() {
  return (
    <BcaLayout>
      <CseLeadershipTab data={bcaLeadershipData} />
    </BcaLayout>
  );
}
