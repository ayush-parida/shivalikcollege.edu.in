import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/research/leadership";

export const metadata: Metadata = {
  title: "Research • Leadership | Shivalik College of Engineering",
  description: "Sample overview for Research • Leadership at Shivalik College of Engineering.",
};

export default function ResearchLeadershipPage() {
  return (
    <PageRenderer
      path={path}
      title="Research • Leadership"
      description="Sample content for Research • Leadership will be added soon."
    />
  );
}
