import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/strategic-plan/sips";

export const metadata: Metadata = {
  title: "About Us • Strategic Plan • SIPS | Shivalik College of Engineering",
  description: "Sample overview for About Us • Strategic Plan • SIPS at Shivalik College of Engineering.",
};

export default function AboutUsStrategicPlanSipsPage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Strategic Plan • SIPS"
      description="Sample content for About Us • Strategic Plan • SIPS will be added soon."
    />
  );
}
