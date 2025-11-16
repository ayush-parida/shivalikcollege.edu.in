import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell";

export const metadata: Metadata = {
  title: "Quality Cell | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell at Shivalik College of Engineering.",
};

export default function QualityCellPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell"
      description="Sample content for Quality Cell will be added soon."
    />
  );
}
