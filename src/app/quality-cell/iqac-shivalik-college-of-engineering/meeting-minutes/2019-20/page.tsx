import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/meeting-minutes/2019-20";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • Meeting Minutes • 2019 20 | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • Meeting Minutes • 2019 20 at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringMeetingMinutes201920Page() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • Meeting Minutes • 2019 20"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • Meeting Minutes • 2019 20 will be added soon."
    />
  );
}
