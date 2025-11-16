import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/iqac-sce-composition";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • IQAC SCE Composition | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • IQAC SCE Composition at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringIqacSceCompositionPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • IQAC SCE Composition"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • IQAC SCE Composition will be added soon."
    />
  );
}
