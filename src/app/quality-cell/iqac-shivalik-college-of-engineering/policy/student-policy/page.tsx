import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/policy/student-policy";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • Policy • Student Policy | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • Policy • Student Policy at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringPolicyStudentPolicyPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • Policy • Student Policy"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • Policy • Student Policy will be added soon."
    />
  );
}
