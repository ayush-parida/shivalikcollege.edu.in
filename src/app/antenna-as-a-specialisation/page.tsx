import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/antenna-as-a-specialisation";

export const metadata: Metadata = {
  title: "Antenna As A Specialisation | Shivalik College of Engineering",
  description: "Sample overview for Antenna As A Specialisation at Shivalik College of Engineering.",
};

export default function AntennaAsASpecialisationPage() {
  return (
    <PageRenderer
      path={path}
      title="Antenna As A Specialisation"
      description="Sample content for Antenna As A Specialisation will be added soon."
    />
  );
}
