import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/b-tech-data-science";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • B Tech Data Science | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • B Tech Data Science at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringBTechDataSciencePage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • B Tech Data Science"
      description="Sample content for Course • Shivalik College Of Engineering • B Tech Data Science will be added soon."
    />
  );
}
