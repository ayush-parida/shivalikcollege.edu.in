import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/autonomous-cars";

export const metadata: Metadata = {
  title: "Autonomous Cars | Shivalik College of Engineering",
  description: "Sample overview for Autonomous Cars at Shivalik College of Engineering.",
};

export default function AutonomousCarsPage() {
  return (
    <PageRenderer
      path={path}
      title="Autonomous Cars"
      description="Sample content for Autonomous Cars will be added soon."
    />
  );
}
