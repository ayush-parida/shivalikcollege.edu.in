import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/strategic-plan/sips/academic-celander";

export const metadata: Metadata = {
  title: "About Us • Strategic Plan • SIPS • Academic Celander | Shivalik College of Engineering",
  description: "Sample overview for About Us • Strategic Plan • SIPS • Academic Celander at Shivalik College of Engineering.",
};

export default function AboutUsStrategicPlanSipsAcademicCelanderPage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Strategic Plan • SIPS • Academic Celander"
      description="Sample content for About Us • Strategic Plan • SIPS • Academic Celander will be added soon."
    />
  );
}
