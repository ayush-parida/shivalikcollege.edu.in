import BtechCseLayout from '../BtechCseLayout';
import FacultyTab from '@/components/sections/FacultyTab';
import btechCseFacultyData from '../../../../../data/btech-cse-faculty.json';

export default function FacultyPage() {
  return (
    <BtechCseLayout>
      <FacultyTab data={btechCseFacultyData} />
    </BtechCseLayout>
  );
}
