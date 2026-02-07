import BcaLayout from '../BcaLayout';
import PosPeosPsosTab from '@/components/sections/PosPeosPsosTab';
import bcaPosPeosPsosData from '../../../../../data/bca-pos-peos-psos.json';

export default function PosPeosPsosPage() {
  return (
    <BcaLayout>
      <PosPeosPsosTab data={bcaPosPeosPsosData} />
    </BcaLayout>
  );
}
