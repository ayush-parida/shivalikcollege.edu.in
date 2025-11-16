import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/research/seminar-conference-workshops";

export const metadata: Metadata = {
  title: "Research • Seminar Conference Workshops | Shivalik College of Engineering",
  description: "Sample overview for Research • Seminar Conference Workshops at Shivalik College of Engineering.",
};

export default function ResearchSeminarConferenceWorkshopsPage() {
  return (
    <PageRenderer
      path={path}
      title="Research • Seminar Conference Workshops"
      description="Sample content for Research • Seminar Conference Workshops will be added soon."
    />
  );
}
