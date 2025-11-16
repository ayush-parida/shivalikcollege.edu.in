import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/academics/shivalik-college-of-engineering";

export const metadata: Metadata = {
  title: "Course • Academics • Shivalik College Of Engineering | Shivalik College of Engineering",
  description: "Sample overview for Course • Academics • Shivalik College Of Engineering at Shivalik College of Engineering.",
};

export default function CourseAcademicsShivalikCollegeOfEngineeringPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Academics • Shivalik College Of Engineering"
      description="Sample content for Course • Academics • Shivalik College Of Engineering will be added soon."
    />
  );
}
