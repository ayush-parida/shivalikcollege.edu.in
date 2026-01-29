import BtechDataScienceLayout from '../BtechDataScienceLayout';
import FacultyTab from '@/components/sections/FacultyTab';
import btechDataScienceFacultyData from '../../../../../data/btech-data-science-faculty.json';

export default function FacultyPage() {
  return (
    <BtechDataScienceLayout>
      <FacultyTab data={btechDataScienceFacultyData} />
    </BtechDataScienceLayout>
  );
}
