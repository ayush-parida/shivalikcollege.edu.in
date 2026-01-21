import BtechCseLayout from '../BtechCseLayout';
import PageTabs from '@/components/sections/PageTabs';

export default function PosPeosPsosPage() {
  return (
    <BtechCseLayout>
      <PageTabs 
        tabs={[{
          id: 'pos-peos-psos',
          label: 'POs, PEOs & PSOs',
          heading: 'Program Outcomes, Program Educational Objectives & Program Specific Outcomes',
          description: 'Detailed information about POs, PEOs, and PSOs for the B.Tech CSE program.',
        }]} 
        variant="stacked" 
      />
    </BtechCseLayout>
  );
}
