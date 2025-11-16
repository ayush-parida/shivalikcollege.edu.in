import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/solar-energy-as-a-way-for-sustainable-energy";

export const metadata: Metadata = {
  title: "Solar Energy As A Way For Sustainable Energy | Shivalik College of Engineering",
  description: "Sample overview for Solar Energy As A Way For Sustainable Energy at Shivalik College of Engineering.",
};

export default function SolarEnergyAsAWayForSustainableEnergyPage() {
  return (
    <PageRenderer
      path={path}
      title="Solar Energy As A Way For Sustainable Energy"
      description="Sample content for Solar Energy As A Way For Sustainable Energy will be added soon."
    />
  );
}
