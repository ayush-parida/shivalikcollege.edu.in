import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/institution-performance";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Institution Performance | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Institution Performance at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringIqacInitiativesInstitutionPerformancePage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Institution Performance"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Institution Performance will be added soon."
    />
  );
}
