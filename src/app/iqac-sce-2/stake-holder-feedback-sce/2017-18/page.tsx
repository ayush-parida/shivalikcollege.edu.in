import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/iqac-sce-2/stake-holder-feedback-sce/2017-18";

export const metadata: Metadata = {
  title: "IQAC SCE 2 • Stake Holder Feedback SCE • 2017 18 | Shivalik College of Engineering",
  description: "Sample overview for IQAC SCE 2 • Stake Holder Feedback SCE • 2017 18 at Shivalik College of Engineering.",
};

export default function IqacSce2StakeHolderFeedbackSce201718Page() {
  return (
    <PageRenderer
      path={path}
      title="IQAC SCE 2 • Stake Holder Feedback SCE • 2017 18"
      description="Sample content for IQAC SCE 2 • Stake Holder Feedback SCE • 2017 18 will be added soon."
    />
  );
}
