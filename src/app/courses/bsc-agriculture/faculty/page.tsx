import BscAgricultureLayout from '../BscAgricultureLayout';
import FacultyTab from '@/components/sections/FacultyTab';
import facultyData from '../../../../../data/bsc-agriculture-faculty.json';

export default function FacultyPage() {
  return (
    <BscAgricultureLayout>
      <FacultyTab data={facultyData} />
    </BscAgricultureLayout>
  );
}
