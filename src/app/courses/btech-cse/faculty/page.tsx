import BtechCseLayout from '../BtechCseLayout';
import PageTabs from '@/components/sections/PageTabs';

export default function FacultyPage() {
  return (
    <BtechCseLayout>
      <PageTabs 
        tabs={[{
          id: 'faculty',
          label: 'Faculty',
          heading: 'Faculty',
          description: 'Meet our expert faculty members with industry and research experience.',
        }]} 
        variant="stacked" 
      />
    </BtechCseLayout>
  );
}
