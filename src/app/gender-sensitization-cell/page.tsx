import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/gender-sensitization-cell";

export const metadata: Metadata = {
  title: "Gender Sensitization Cell | Shivalik College of Engineering",
  description: "Sample overview for Gender Sensitization Cell at Shivalik College of Engineering.",
};

export default function GenderSensitizationCellPage() {
  return (
    <PageRenderer
      path={path}
      title="Gender Sensitization Cell"
      description="Sample content for Gender Sensitization Cell will be added soon."
    />
  );
}
