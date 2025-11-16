import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/pharmaceutical-companies-in-artificial-intelligence";

export const metadata: Metadata = {
  title: "Pharmaceutical Companies In Artificial Intelligence | Shivalik College of Engineering",
  description: "Sample overview for Pharmaceutical Companies In Artificial Intelligence at Shivalik College of Engineering.",
};

export default function PharmaceuticalCompaniesInArtificialIntelligencePage() {
  return (
    <PageRenderer
      path={path}
      title="Pharmaceutical Companies In Artificial Intelligence"
      description="Sample content for Pharmaceutical Companies In Artificial Intelligence will be added soon."
    />
  );
}
