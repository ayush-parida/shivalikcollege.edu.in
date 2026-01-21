import BtechCseLayout from '../BtechCseLayout';
import PosPeosPsosTab from '@/components/sections/PosPeosPsosTab';
import btechCsePosPeosPsosData from '../../../../../data/btech-cse-pos-peos-psos.json';

export default function PosPeosPsosPage() {
  return (
    <BtechCseLayout>
      <PosPeosPsosTab data={btechCsePosPeosPsosData} />
    </BtechCseLayout>
  );
}
