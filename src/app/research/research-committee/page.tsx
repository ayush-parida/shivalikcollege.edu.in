import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/research/research-committee";

export const metadata: Metadata = {
  title: "Research • Research Committee | Shivalik College of Engineering",
  description: "Sample overview for Research • Research Committee at Shivalik College of Engineering.",
};

export default function ResearchResearchCommitteePage() {
  return (
    <PageRenderer
      path={path}
      title="Research • Research Committee"
      description="Sample content for Research • Research Committee will be added soon."
    />
  );
}
