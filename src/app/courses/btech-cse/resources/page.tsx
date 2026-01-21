import BtechCseLayout from '../BtechCseLayout';
import PageTabs from '@/components/sections/PageTabs';

export default function ResourcesPage() {
  return (
    <BtechCseLayout>
      <PageTabs 
        tabs={[{
          id: 'resources',
          label: 'Resources',
          heading: 'Learning Resources',
          description: 'Extensive library, online resources, and research materials to support your academic journey.',
        }]} 
        variant="stacked" 
      />
    </BtechCseLayout>
  );
}
