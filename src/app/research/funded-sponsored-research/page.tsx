import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/research/funded-sponsored-research";

export const metadata: Metadata = {
  title: "Research • Funded Sponsored Research | Shivalik College of Engineering",
  description: "Sample overview for Research • Funded Sponsored Research at Shivalik College of Engineering.",
};

export default function ResearchFundedSponsoredResearchPage() {
  return (
    <PageRenderer
      path={path}
      title="Research • Funded Sponsored Research"
      description="Sample content for Research • Funded Sponsored Research will be added soon."
    />
  );
}
