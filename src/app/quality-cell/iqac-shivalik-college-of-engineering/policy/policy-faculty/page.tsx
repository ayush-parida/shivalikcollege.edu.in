import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/policy/policy-faculty";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • Policy • Policy Faculty | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • Policy • Policy Faculty at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringPolicyPolicyFacultyPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • Policy • Policy Faculty"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • Policy • Policy Faculty will be added soon."
    />
  );
}
