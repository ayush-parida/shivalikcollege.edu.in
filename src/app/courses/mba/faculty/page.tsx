import MbaLayout from '../MbaLayout';
import FacultyTab from '@/components/sections/FacultyTab';
import mbaFacultyData from '../../../../../data/mba-faculty.json';

export default function FacultyPage() {
  return (
    <MbaLayout>
      <FacultyTab data={mbaFacultyData} />
    </MbaLayout>
  );
}
