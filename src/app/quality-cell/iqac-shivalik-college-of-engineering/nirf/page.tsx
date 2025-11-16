import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/nirf";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • Nirf | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • Nirf at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringNirfPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • Nirf"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • Nirf will be added soon."
    />
  );
}
