import BtechCseLayout from '../BtechCseLayout';
import PageTabs from '@/components/sections/PageTabs';

export default function CosPage() {
  return (
    <BtechCseLayout>
      <PageTabs 
        tabs={[{
          id: 'cos',
          label: 'COs',
          heading: 'Course Outcomes',
          description: 'Detailed course outcomes for all subjects in the B.Tech CSE program.',
        }]} 
        variant="stacked" 
      />
    </BtechCseLayout>
  );
}
