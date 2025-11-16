import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/cutting-edge-technology-courses-after-12th-grade";

export const metadata: Metadata = {
  title: "Cutting Edge Technology Courses After 12th Grade | Shivalik College of Engineering",
  description: "Sample overview for Cutting Edge Technology Courses After 12th Grade at Shivalik College of Engineering.",
};

export default function CuttingEdgeTechnologyCoursesAfter12thGradePage() {
  return (
    <PageRenderer
      path={path}
      title="Cutting Edge Technology Courses After 12th Grade"
      description="Sample content for Cutting Edge Technology Courses After 12th Grade will be added soon."
    />
  );
}
