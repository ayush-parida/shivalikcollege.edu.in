import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/strategic-plan";

export const metadata: Metadata = {
  title: "About Us • Strategic Plan | Shivalik College of Engineering",
  description: "Sample overview for About Us • Strategic Plan at Shivalik College of Engineering.",
};

export default function AboutUsStrategicPlanPage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Strategic Plan"
      description="Sample content for About Us • Strategic Plan will be added soon."
    />
  );
}
