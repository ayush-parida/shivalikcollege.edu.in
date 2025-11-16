import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/civil-engineering/b-tech-civil-engineering";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • Civil Engineering • B Tech Civil Engineering | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • Civil Engineering • B Tech Civil Engineering at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringCivilEngineeringBTechCivilEngineeringPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • Civil Engineering • B Tech Civil Engineering"
      description="Sample content for Course • Shivalik College Of Engineering • Civil Engineering • B Tech Civil Engineering will be added soon."
    />
  );
}
