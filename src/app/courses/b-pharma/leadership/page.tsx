import BPharmaLayout from '../BPharmaLayout';
import bPharmaLeadershipData from '../../../../../data/b-pharma-leadership.json';
import LeadershipTab from '@/components/sections/LeadershipTab';

export default function LeadershipPage() {
  return (
    <BPharmaLayout>
      <LeadershipTab data={bPharmaLeadershipData} />
    </BPharmaLayout>
  );
}
