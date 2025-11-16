import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/strategic-plan/sips/examinations";

export const metadata: Metadata = {
  title: "About Us • Strategic Plan • SIPS • Examinations | Shivalik College of Engineering",
  description: "Sample overview for About Us • Strategic Plan • SIPS • Examinations at Shivalik College of Engineering.",
};

export default function AboutUsStrategicPlanSipsExaminationsPage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Strategic Plan • SIPS • Examinations"
      description="Sample content for About Us • Strategic Plan • SIPS • Examinations will be added soon."
    />
  );
}
