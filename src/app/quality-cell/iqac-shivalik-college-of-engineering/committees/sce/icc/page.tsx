import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/committees/sce/icc";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • Committees • SCE • Icc | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • Committees • SCE • Icc at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringCommitteesSceIccPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • Committees • SCE • Icc"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • Committees • SCE • Icc will be added soon."
    />
  );
}
