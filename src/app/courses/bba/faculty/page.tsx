import BbaLayout from '../BbaLayout';
import FacultyTab from '@/components/sections/FacultyTab';
import bbaFacultyData from '../../../../../data/bba-faculty.json';

export default function FacultyPage() {
  return (
    <BbaLayout>
      <FacultyTab data={bbaFacultyData} />
    </BbaLayout>
  );
}
