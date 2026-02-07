import BcaLayout from '../BcaLayout';
import bcaFacilitiesData from '../../../../../data/bca-facilities.json';
import FacilitiesTab from '@/components/sections/FacilitiesTab';

export default function FacilitiesPage() {
  return (
    <BcaLayout>
      <FacilitiesTab data={bcaFacilitiesData} />
    </BcaLayout>
  );
}
