import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/research";

export const metadata: Metadata = {
  title: "Research | Shivalik College of Engineering",
  description: "Sample overview for Research at Shivalik College of Engineering.",
};

export default function ResearchPage() {
  return (
    <PageRenderer
      path={path}
      title="Research"
      description="Sample content for Research will be added soon."
    />
  );
}
