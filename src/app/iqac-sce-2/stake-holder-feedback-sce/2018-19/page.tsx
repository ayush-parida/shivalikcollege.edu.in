import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/iqac-sce-2/stake-holder-feedback-sce/2018-19";

export const metadata: Metadata = {
  title: "IQAC SCE 2 • Stake Holder Feedback SCE • 2018 19 | Shivalik College of Engineering",
  description: "Sample overview for IQAC SCE 2 • Stake Holder Feedback SCE • 2018 19 at Shivalik College of Engineering.",
};

export default function IqacSce2StakeHolderFeedbackSce201819Page() {
  return (
    <PageRenderer
      path={path}
      title="IQAC SCE 2 • Stake Holder Feedback SCE • 2018 19"
      description="Sample content for IQAC SCE 2 • Stake Holder Feedback SCE • 2018 19 will be added soon."
    />
  );
}
