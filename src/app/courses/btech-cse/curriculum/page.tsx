import BtechCseLayout from '../BtechCseLayout';
import PageTabs from '@/components/sections/PageTabs';

export default function CurriculumPage() {
  return (
    <BtechCseLayout>
      <PageTabs 
        tabs={[{
          id: 'curriculum',
          label: 'Curriculum',
          heading: 'Curriculum',
          description: 'Comprehensive curriculum details for B.Tech Computer Science Engineering program.',
        }]} 
        variant="stacked" 
      />
    </BtechCseLayout>
  );
}
