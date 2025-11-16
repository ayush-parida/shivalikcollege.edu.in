import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/strategic-plan/sce";

export const metadata: Metadata = {
  title: "About Us • Strategic Plan • SCE | Shivalik College of Engineering",
  description: "Sample overview for About Us • Strategic Plan • SCE at Shivalik College of Engineering.",
};

export default function AboutUsStrategicPlanScePage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Strategic Plan • SCE"
      description="Sample content for About Us • Strategic Plan • SCE will be added soon."
    />
  );
}
