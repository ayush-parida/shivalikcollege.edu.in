import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/diploma-vs-degree-which-one-to-choose";

export const metadata: Metadata = {
  title: "Diploma Vs Degree Which One To Choose | Shivalik College of Engineering",
  description: "Sample overview for Diploma Vs Degree Which One To Choose at Shivalik College of Engineering.",
};

export default function DiplomaVsDegreeWhichOneToChoosePage() {
  return (
    <PageRenderer
      path={path}
      title="Diploma Vs Degree Which One To Choose"
      description="Sample content for Diploma Vs Degree Which One To Choose will be added soon."
    />
  );
}
