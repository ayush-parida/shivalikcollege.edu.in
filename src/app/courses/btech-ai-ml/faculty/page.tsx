import BtechAiMlLayout from '../BtechAiMlLayout';
import FacultyTab from '@/components/sections/FacultyTab';
import btechAiMlFacultyData from '../../../../../data/btech-ai-ml-faculty.json';

export default function FacultyPage() {
  return (
    <BtechAiMlLayout>
      <FacultyTab data={btechAiMlFacultyData} />
    </BtechAiMlLayout>
  );
}
