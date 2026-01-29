import BtechDataScienceLayout from '../BtechDataScienceLayout';
import FacilitiesTab from '@/components/sections/FacilitiesTab';
import btechDataScienceFacilitiesData from '../../../../../data/btech-data-science-facilities.json';

export default function FacilitiesPage() {
  return (
    <BtechDataScienceLayout>
      <FacilitiesTab data={btechDataScienceFacilitiesData} />
    </BtechDataScienceLayout>
  );
}
