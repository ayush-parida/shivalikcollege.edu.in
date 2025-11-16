import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/governing-bodies/proctoral-board";

export const metadata: Metadata = {
  title: "Governing Bodies • Proctoral Board | Shivalik College of Engineering",
  description: "Sample overview for Governing Bodies • Proctoral Board at Shivalik College of Engineering.",
};

export default function GoverningBodiesProctoralBoardPage() {
  return (
    <PageRenderer
      path={path}
      title="Governing Bodies • Proctoral Board"
      description="Sample content for Governing Bodies • Proctoral Board will be added soon."
    />
  );
}
