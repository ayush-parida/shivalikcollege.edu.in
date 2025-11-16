import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/research/code-of-ethics-in-research";

export const metadata: Metadata = {
  title: "Research • Code Of Ethics In Research | Shivalik College of Engineering",
  description: "Sample overview for Research • Code Of Ethics In Research at Shivalik College of Engineering.",
};

export default function ResearchCodeOfEthicsInResearchPage() {
  return (
    <PageRenderer
      path={path}
      title="Research • Code Of Ethics In Research"
      description="Sample content for Research • Code Of Ethics In Research will be added soon."
    />
  );
}
