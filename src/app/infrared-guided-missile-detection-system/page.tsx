import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/infrared-guided-missile-detection-system";

export const metadata: Metadata = {
  title: "Infrared Guided Missile Detection System | Shivalik College of Engineering",
  description: "Sample overview for Infrared Guided Missile Detection System at Shivalik College of Engineering.",
};

export default function InfraredGuidedMissileDetectionSystemPage() {
  return (
    <PageRenderer
      path={path}
      title="Infrared Guided Missile Detection System"
      description="Sample content for Infrared Guided Missile Detection System will be added soon."
    />
  );
}
