import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-college-of-engineering/stake-holder-feedback-sce";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik College Of Engineering • Stake Holder Feedback SCE | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik College Of Engineering • Stake Holder Feedback SCE at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikCollegeOfEngineeringStakeHolderFeedbackScePage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik College Of Engineering • Stake Holder Feedback SCE"
      description="Sample content for Quality Cell • IQAC Shivalik College Of Engineering • Stake Holder Feedback SCE will be added soon."
    />
  );
}
