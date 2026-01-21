import BbaLayout from '../BbaLayout';
import bbaLeadershipData from '../../../../../data/bba-leadership.json';
import CseLeadershipTab from '@/components/sections/CseLeadershipTab';

export default function LeadershipPage() {
  return (
    <BbaLayout>
      <CseLeadershipTab data={bbaLeadershipData} />
    </BbaLayout>
  );
}
