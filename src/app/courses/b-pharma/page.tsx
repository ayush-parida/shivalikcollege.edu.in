import BPharmaLayout from './BPharmaLayout';
import bPharmaHomeData from '../../../../data/b-pharma-home.json';
import CseHomeTab from '@/components/sections/CseHomeTab';

export default function BPharmaPage() {
  return (
    <BPharmaLayout>
      <CseHomeTab data={bPharmaHomeData} />
    </BPharmaLayout>
  );
}
