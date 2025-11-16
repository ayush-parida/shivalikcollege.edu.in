import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/b-tech-aiml";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • B Tech Aiml | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • B Tech Aiml at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringBTechAimlPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • B Tech Aiml"
      description="Sample content for Course • Shivalik College Of Engineering • B Tech Aiml will be added soon."
    />
  );
}
