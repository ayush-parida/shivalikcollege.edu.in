import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/meeting-minutes/2018-19";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • Meeting Minutes • 2018 19 | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • Meeting Minutes • 2018 19 at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringMeetingMinutes201819Page() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • Meeting Minutes • 2018 19"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • Meeting Minutes • 2018 19 will be added soon."
    />
  );
}
