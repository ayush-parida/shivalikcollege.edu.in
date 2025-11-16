import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/research/list-of-prominent-research-papers";

export const metadata: Metadata = {
  title: "Research • List Of Prominent Research Papers | Shivalik College of Engineering",
  description: "Sample overview for Research • List Of Prominent Research Papers at Shivalik College of Engineering.",
};

export default function ResearchListOfProminentResearchPapersPage() {
  return (
    <PageRenderer
      path={path}
      title="Research • List Of Prominent Research Papers"
      description="Sample content for Research • List Of Prominent Research Papers will be added soon."
    />
  );
}
