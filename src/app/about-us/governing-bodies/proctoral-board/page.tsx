import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/governing-bodies/proctoral-board";

export const metadata: Metadata = {
  title: "About Us • Governing Bodies • Proctoral Board | Shivalik College of Engineering",
  description: "Sample overview for About Us • Governing Bodies • Proctoral Board at Shivalik College of Engineering.",
};

export default function AboutUsGoverningBodiesProctoralBoardPage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Governing Bodies • Proctoral Board"
      description="Sample content for About Us • Governing Bodies • Proctoral Board will be added soon."
    />
  );
}
