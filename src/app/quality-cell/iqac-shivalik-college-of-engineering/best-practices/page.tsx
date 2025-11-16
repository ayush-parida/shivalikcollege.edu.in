import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/best-practices";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • Best Practices | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • Best Practices at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringBestPracticesPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • Best Practices"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • Best Practices will be added soon."
    />
  );
}
