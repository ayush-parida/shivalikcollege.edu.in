import BtechCseLayout from '../BtechCseLayout';
import FacilitiesTab from '@/components/sections/FacilitiesTab';
import btechCseFacilitiesData from '../../../../../data/btech-cse-facilities.json';

export default function FacilitiesPage() {
  return (
    <BtechCseLayout>
      <FacilitiesTab data={btechCseFacilitiesData} />
    </BtechCseLayout>
  );
}
