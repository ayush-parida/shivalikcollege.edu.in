import BPharmaLayout from '../BPharmaLayout';
import CurriculumTab from '@/components/sections/CurriculumTab';
import bPharmaCurriculumData from '../../../../../data/b-pharma-curriculum.json';

export default function CurriculumPage() {
  return (
    <BPharmaLayout>
      <CurriculumTab data={bPharmaCurriculumData} />
    </BPharmaLayout>
  );
}
