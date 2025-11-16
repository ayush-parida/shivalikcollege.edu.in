import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering will be added soon."
    />
  );
}
