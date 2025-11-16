import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/infra-demands-in-india-for-the-next-3-5-decades-makes-civil-engineering-a-great-career-option";

export const metadata: Metadata = {
  title: "Infra Demands In India For The Next 3 5 Decades Makes Civil Engineering A Great Career Option | Shivalik College of Engineering",
  description: "Sample overview for Infra Demands In India For The Next 3 5 Decades Makes Civil Engineering A Great Career Option at Shivalik College of Engineering.",
};

export default function InfraDemandsInIndiaForTheNext35DecadesMakesCivilEngineeringAGreatCareerOptionPage() {
  return (
    <PageRenderer
      path={path}
      title="Infra Demands In India For The Next 3 5 Decades Makes Civil Engineering A Great Career Option"
      description="Sample content for Infra Demands In India For The Next 3 5 Decades Makes Civil Engineering A Great Career Option will be added soon."
    />
  );
}
