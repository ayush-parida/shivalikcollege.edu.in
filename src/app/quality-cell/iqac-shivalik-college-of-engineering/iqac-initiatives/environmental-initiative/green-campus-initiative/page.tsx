import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/environmental-initiative/green-campus-initiative";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Environmental Initiative • Green Campus Initiative | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Environmental Initiative • Green Campus Initiative at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringIqacInitiativesEnvironmentalInitiativeGreenCampusInitiativePage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Environmental Initiative • Green Campus Initiative"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Environmental Initiative • Green Campus Initiative will be added soon."
    />
  );
}
