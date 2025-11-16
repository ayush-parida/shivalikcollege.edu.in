import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/research/research-policy";

export const metadata: Metadata = {
  title: "Research • Research Policy | Shivalik College of Engineering",
  description: "Sample overview for Research • Research Policy at Shivalik College of Engineering.",
};

export default function ResearchResearchPolicyPage() {
  return (
    <PageRenderer
      path={path}
      title="Research • Research Policy"
      description="Sample content for Research • Research Policy will be added soon."
    />
  );
}
