import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/top-5-projections-in-artificial-intelligence-for-2021";

export const metadata: Metadata = {
  title: "Top 5 Projections In Artificial Intelligence For 2021 | Shivalik College of Engineering",
  description: "Sample overview for Top 5 Projections In Artificial Intelligence For 2021 at Shivalik College of Engineering.",
};

export default function Top5ProjectionsInArtificialIntelligenceFor2021Page() {
  return (
    <PageRenderer
      path={path}
      title="Top 5 Projections In Artificial Intelligence For 2021"
      description="Sample content for Top 5 Projections In Artificial Intelligence For 2021 will be added soon."
    />
  );
}
