import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/the-demand-for-engineers-with-managerial-skills";

export const metadata: Metadata = {
  title: "The Demand For Engineers With Managerial Skills | Shivalik College of Engineering",
  description: "Sample overview for The Demand For Engineers With Managerial Skills at Shivalik College of Engineering.",
};

export default function TheDemandForEngineersWithManagerialSkillsPage() {
  return (
    <PageRenderer
      path={path}
      title="The Demand For Engineers With Managerial Skills"
      description="Sample content for The Demand For Engineers With Managerial Skills will be added soon."
    />
  );
}
