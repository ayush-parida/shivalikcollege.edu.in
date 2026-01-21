import BtechCseLayout from '../BtechCseLayout';
import CosTab from '@/components/sections/CosTab';
import btechCseCosData from '../../../../../data/btech-cse-cos.json';

export default function CosPage() {
  return (
    <BtechCseLayout>
      <CosTab data={btechCseCosData} />
    </BtechCseLayout>
  );
}
