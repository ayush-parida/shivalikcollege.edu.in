import BtechCseLayout from '../BtechCseLayout';
import PageTabs from '@/components/sections/PageTabs';

export default function FacilitiesPage() {
  return (
    <BtechCseLayout>
      <PageTabs 
        tabs={[{
          id: 'facilities',
          label: 'Facilities',
          heading: 'Facilities',
          description: 'State-of-the-art facilities and labs for B.Tech Computer Science Engineering students.',
        }]} 
        variant="stacked" 
      />
    </BtechCseLayout>
  );
}
