import BPharmaLayout from '../BPharmaLayout';
import FacultyTab from '@/components/sections/FacultyTab';
import bPharmaFacultyData from '../../../../../data/b-pharma-faculty.json';

export default function FacultyPage() {
  return (
    <BPharmaLayout>
      <FacultyTab data={bPharmaFacultyData} />
    </BPharmaLayout>
  );
}
