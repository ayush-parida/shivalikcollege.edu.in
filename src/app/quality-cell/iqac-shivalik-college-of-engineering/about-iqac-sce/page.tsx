import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/about-iqac-sce";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • About IQAC SCE | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • About IQAC SCE at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringAboutIqacScePage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • About IQAC SCE"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • About IQAC SCE will be added soon."
    />
  );
}
