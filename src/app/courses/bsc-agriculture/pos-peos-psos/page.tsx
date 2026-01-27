import BscAgricultureLayout from '../BscAgricultureLayout';
import PosPeosPsosTab from '@/components/sections/PosPeosPsosTab';
import posData from '../../../../../data/bsc-agriculture-pos-peos-psos.json';

export default function PosPeosPsosPage() {
  return (
    <BscAgricultureLayout>
      <PosPeosPsosTab data={posData} />
    </BscAgricultureLayout>
  );
}
