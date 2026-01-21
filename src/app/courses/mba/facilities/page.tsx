import MbaLayout from '../MbaLayout';
import PageTabs from '@/components/sections/PageTabs';

export default function FacilitiesPage() {
  return (
    <MbaLayout>
      <PageTabs 
        tabs={[{
          id: 'facilities',
          label: 'Facilities',
          heading: 'Facilities & Infrastructure',
          description: 'Modern facilities supporting comprehensive business education.',
        }]} 
        variant="stacked" 
      />
    </MbaLayout>
  );
}
