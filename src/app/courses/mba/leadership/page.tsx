import MbaLayout from '../MbaLayout';
import PageTabs from '@/components/sections/PageTabs';

export default function LeadershipPage() {
  return (
    <MbaLayout>
      <PageTabs 
        tabs={[{
          id: 'leadership',
          label: 'Leadership',
          heading: 'Program Leadership',
          description: 'Meet our distinguished academic leader driving excellence in MBA education.',
        }]} 
        variant="stacked" 
      />
    </MbaLayout>
  );
}
