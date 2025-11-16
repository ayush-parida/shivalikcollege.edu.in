import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/iqac-newsletter";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • IQAC Newsletter | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • IQAC Newsletter at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringIqacInitiativesIqacNewsletterPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • IQAC Newsletter"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • IQAC Newsletter will be added soon."
    />
  );
}
