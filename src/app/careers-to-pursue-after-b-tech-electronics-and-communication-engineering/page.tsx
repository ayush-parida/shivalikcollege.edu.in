import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/careers-to-pursue-after-b-tech-electronics-and-communication-engineering";

export const metadata: Metadata = {
  title: "Careers To Pursue After B Tech Electronics And Communication Engineering | Shivalik College of Engineering",
  description: "Sample overview for Careers To Pursue After B Tech Electronics And Communication Engineering at Shivalik College of Engineering.",
};

export default function CareersToPursueAfterBTechElectronicsAndCommunicationEngineeringPage() {
  return (
    <PageRenderer
      path={path}
      title="Careers To Pursue After B Tech Electronics And Communication Engineering"
      description="Sample content for Careers To Pursue After B Tech Electronics And Communication Engineering will be added soon."
    />
  );
}
