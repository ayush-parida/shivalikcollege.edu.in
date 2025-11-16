import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/committees";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • Committees | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • Committees at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringCommitteesPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • Committees"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • Committees will be added soon."
    />
  );
}
