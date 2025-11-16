import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/iot-at-shivalik-college-of-engineering";

export const metadata: Metadata = {
  title: "Iot At Shivalik College Of Engineering | Shivalik College of Engineering",
  description: "Sample overview for Iot At Shivalik College Of Engineering at Shivalik College of Engineering.",
};

export default function IotAtShivalikCollegeOfEngineeringPage() {
  return (
    <PageRenderer
      path={path}
      title="Iot At Shivalik College Of Engineering"
      description="Sample content for Iot At Shivalik College Of Engineering will be added soon."
    />
  );
}
