import MbaLayout from '../MbaLayout';
import PageTabs from '@/components/sections/PageTabs';

export default function FacultyPage() {
  return (
    <MbaLayout>
      <PageTabs 
        tabs={[{
          id: 'faculty',
          label: 'Faculty',
          heading: 'Faculty Members',
          description: 'Experienced faculty members with expertise in various business domains.',
        }]} 
        variant="stacked" 
      />
    </MbaLayout>
  );
}
