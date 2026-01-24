import BPharmaLayout from '../BPharmaLayout';
import bPharmaLeadershipData from '../../../../../data/b-pharma-leadership.json';
import BPharmaLeadershipTab from '@/components/sections/BPharmaLeadershipTab';

export default function LeadershipPage() {
  return (
    <BPharmaLayout>
      <BPharmaLeadershipTab data={bPharmaLeadershipData} />
    </BPharmaLayout>
  );
}
