import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/committees/sc-st-committee";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • Committees • Sc St Committee | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • Committees • Sc St Committee at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringCommitteesScStCommitteePage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • Committees • Sc St Committee"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • Committees • Sc St Committee will be added soon."
    />
  );
}
