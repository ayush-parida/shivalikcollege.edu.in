import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/bba";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • BBA | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • BBA at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringBbaPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • BBA"
      description="Sample content for Course • Shivalik College Of Engineering • BBA will be added soon."
    />
  );
}
