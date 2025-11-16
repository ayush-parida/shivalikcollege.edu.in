import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/iqac-sce-2/stake-holder-feedback-sce";

export const metadata: Metadata = {
  title: "IQAC SCE 2 • Stake Holder Feedback SCE | Shivalik College of Engineering",
  description: "Sample overview for IQAC SCE 2 • Stake Holder Feedback SCE at Shivalik College of Engineering.",
};

export default function IqacSce2StakeHolderFeedbackScePage() {
  return (
    <PageRenderer
      path={path}
      title="IQAC SCE 2 • Stake Holder Feedback SCE"
      description="Sample content for IQAC SCE 2 • Stake Holder Feedback SCE will be added soon."
    />
  );
}
