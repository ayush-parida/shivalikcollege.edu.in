import BtechCseLayout from '../BtechCseLayout';
import btechCseLeadershipData from '../../../../../data/btech-cse-leadership.json';
import CseLeadershipTab from '@/components/sections/CseLeadershipTab';

export default function LeadershipPage() {
  return (
    <BtechCseLayout>
      <CseLeadershipTab data={btechCseLeadershipData} />
    </BtechCseLayout>
  );
}
