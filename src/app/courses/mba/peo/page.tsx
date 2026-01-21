import MbaLayout from '../MbaLayout';
import PageTabs from '@/components/sections/PageTabs';

export default function PeoPage() {
  return (
    <MbaLayout>
      <PageTabs 
        tabs={[{
          id: 'peo',
          label: 'PEO',
          heading: 'Program Educational Objectives (PEO)',
          description: 'Educational objectives that prepare graduates for successful careers in business and management.',
        }]} 
        variant="stacked" 
      />
    </MbaLayout>
  );
}
