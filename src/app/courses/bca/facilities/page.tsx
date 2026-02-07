import BcaLayout from '../BcaLayout';
import bcaFacilitiesData from '../../../../../data/bca-facilities.json';
import CseFacilitiesTab from '@/components/sections/CseFacilitiesTab';

export default function FacilitiesPage() {
  return (
    <BcaLayout>
      <CseFacilitiesTab data={bcaFacilitiesData} />
    </BcaLayout>
  );
}
