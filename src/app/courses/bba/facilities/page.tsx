import BbaLayout from '../BbaLayout';
import FacilitiesTab from '@/components/sections/FacilitiesTab';
import bbaFacilitiesData from '../../../../../data/bba-facilities.json';

export default function FacilitiesPage() {
  return (
    <BbaLayout>
      <FacilitiesTab data={bbaFacilitiesData} />
    </BbaLayout>
  );
}
