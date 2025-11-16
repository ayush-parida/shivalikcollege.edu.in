import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/disabled-friendly-barrier-free-campus";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Disabled Friendly Barrier Free Campus | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Disabled Friendly Barrier Free Campus at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringIqacInitiativesDisabledFriendlyBarrierFreeCampusPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Disabled Friendly Barrier Free Campus"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • IQAC Initiatives • Disabled Friendly Barrier Free Campus will be added soon."
    />
  );
}
