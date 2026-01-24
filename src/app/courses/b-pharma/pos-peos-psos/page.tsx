import BPharmaLayout from '../BPharmaLayout';
import PosPeosPsosTab from '@/components/sections/PosPeosPsosTab';
import bPharmaPosPeosPsosData from '../../../../../data/b-pharma-pos-peos-psos.json';

export default function PosPeosPsosPage() {
  return (
    <BPharmaLayout>
      <PosPeosPsosTab data={bPharmaPosPeosPsosData} />
    </BPharmaLayout>
  );
}
