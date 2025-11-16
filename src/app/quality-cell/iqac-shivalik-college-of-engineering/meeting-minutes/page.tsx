import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/meeting-minutes";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • Meeting Minutes | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • Meeting Minutes at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringMeetingMinutesPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • Meeting Minutes"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • Meeting Minutes will be added soon."
    />
  );
}
