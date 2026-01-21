import MbaLayout from '../MbaLayout';
import PosPeosPsosTab from '@/components/sections/PosPeosPsosTab';
import mbaPeoData from '../../../../../data/mba-peo.json';

export default function PeoPage() {
  return (
    <MbaLayout>
      <PosPeosPsosTab data={mbaPeoData} />
    </MbaLayout>
  );
}
