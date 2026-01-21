import MbaLayout from '../MbaLayout';
import PageTabs from '@/components/sections/PageTabs';

export default function CurriculumPage() {
  return (
    <MbaLayout>
      <PageTabs 
        tabs={[{
          id: 'curriculum',
          label: 'Curriculum',
          heading: 'MBA Curriculum',
          description: 'Comprehensive 2-year MBA program with specializations in Marketing, Finance, and Analytics.',
        }]} 
        variant="stacked" 
      />
    </MbaLayout>
  );
}
