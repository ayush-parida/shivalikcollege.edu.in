import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/environmental-initiative";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Environmental Initiative | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Environmental Initiative at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringIqacInitiativesEnvironmentalInitiativePage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Environmental Initiative"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Environmental Initiative will be added soon."
    />
  );
}
