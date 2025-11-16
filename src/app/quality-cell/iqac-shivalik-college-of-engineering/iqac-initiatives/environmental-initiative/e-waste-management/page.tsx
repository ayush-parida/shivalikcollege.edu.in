import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/environmental-initiative/e-waste-management";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Environmental Initiative • E Waste Management | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Environmental Initiative • E Waste Management at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringIqacInitiativesEnvironmentalInitiativeEWasteManagementPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Environmental Initiative • E Waste Management"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Environmental Initiative • E Waste Management will be added soon."
    />
  );
}
