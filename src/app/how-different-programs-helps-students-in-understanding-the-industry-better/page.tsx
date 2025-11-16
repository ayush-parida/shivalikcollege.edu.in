import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/how-different-programs-helps-students-in-understanding-the-industry-better";

export const metadata: Metadata = {
  title: "How Different Programs Helps Students In Understanding The Industry Better | Shivalik College of Engineering",
  description: "Sample overview for How Different Programs Helps Students In Understanding The Industry Better at Shivalik College of Engineering.",
};

export default function HowDifferentProgramsHelpsStudentsInUnderstandingTheIndustryBetterPage() {
  return (
    <PageRenderer
      path={path}
      title="How Different Programs Helps Students In Understanding The Industry Better"
      description="Sample content for How Different Programs Helps Students In Understanding The Industry Better will be added soon."
    />
  );
}
