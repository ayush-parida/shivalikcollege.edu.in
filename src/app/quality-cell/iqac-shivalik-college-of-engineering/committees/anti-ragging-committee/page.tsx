import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/committees/anti-ragging-committee";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • Committees • Anti Ragging Committee | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • Committees • Anti Ragging Committee at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringCommitteesAntiRaggingCommitteePage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • Committees • Anti Ragging Committee"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • Committees • Anti Ragging Committee will be added soon."
    />
  );
}
