import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/computer-science-engineering";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • Computer Science Engineering | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • Computer Science Engineering at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringComputerScienceEngineeringPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • Computer Science Engineering"
      description="Sample content for Course • Shivalik College Of Engineering • Computer Science Engineering will be added soon."
    />
  );
}
