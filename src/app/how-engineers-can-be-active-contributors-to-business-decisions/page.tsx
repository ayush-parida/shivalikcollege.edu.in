import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/how-engineers-can-be-active-contributors-to-business-decisions";

export const metadata: Metadata = {
  title: "How Engineers Can Be Active Contributors To Business Decisions | Shivalik College of Engineering",
  description: "Sample overview for How Engineers Can Be Active Contributors To Business Decisions at Shivalik College of Engineering.",
};

export default function HowEngineersCanBeActiveContributorsToBusinessDecisionsPage() {
  return (
    <PageRenderer
      path={path}
      title="How Engineers Can Be Active Contributors To Business Decisions"
      description="Sample content for How Engineers Can Be Active Contributors To Business Decisions will be added soon."
    />
  );
}
