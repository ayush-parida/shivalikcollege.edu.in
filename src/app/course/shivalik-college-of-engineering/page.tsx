import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering"
      description="Sample content for Course • Shivalik College Of Engineering will be added soon."
    />
  );
}
