import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/naac-a-college";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • NAAC A College | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • NAAC A College at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringNaacACollegePage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • NAAC A College"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • NAAC A College will be added soon."
    />
  );
}
