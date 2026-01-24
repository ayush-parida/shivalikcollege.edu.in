import BPharmaLayout from '../BPharmaLayout';
import FacilitiesTab from '@/components/sections/FacilitiesTab';
import bPharmaFacilitiesData from '../../../../../data/b-pharma-facilities.json';

export default function FacilitiesPage() {
  return (
    <BPharmaLayout>
      <FacilitiesTab data={bPharmaFacilitiesData} />
    </BPharmaLayout>
  );
}
