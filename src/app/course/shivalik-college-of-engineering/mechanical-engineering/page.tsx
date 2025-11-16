import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/mechanical-engineering";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • Mechanical Engineering | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • Mechanical Engineering at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringMechanicalEngineeringPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • Mechanical Engineering"
      description="Sample content for Course • Shivalik College Of Engineering • Mechanical Engineering will be added soon."
    />
  );
}
