import BtechDataScienceLayout from '../BtechDataScienceLayout';
import PosPeosPsosTab from '@/components/sections/PosPeosPsosTab';
import btechDataSciencePosPeosPsosData from '../../../../../data/btech-data-science-pos-peos-psos.json';

export default function PosPeosPsosPage() {
  return (
    <BtechDataScienceLayout>
      <PosPeosPsosTab data={btechDataSciencePosPeosPsosData} />
    </BtechDataScienceLayout>
  );
}
