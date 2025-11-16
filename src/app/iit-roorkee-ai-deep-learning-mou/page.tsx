import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/iit-roorkee-ai-deep-learning-mou";

export const metadata: Metadata = {
  title: "Iit Roorkee Ai Deep Learning MoU | Shivalik College of Engineering",
  description: "Sample overview for Iit Roorkee Ai Deep Learning MoU at Shivalik College of Engineering.",
};

export default function IitRoorkeeAiDeepLearningMouPage() {
  return (
    <PageRenderer
      path={path}
      title="Iit Roorkee Ai Deep Learning MoU"
      description="Sample content for Iit Roorkee Ai Deep Learning MoU will be added soon."
    />
  );
}
