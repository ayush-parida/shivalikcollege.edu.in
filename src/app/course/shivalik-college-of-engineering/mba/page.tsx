import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/mba";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • MBA | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • MBA at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringMbaPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • MBA"
      description="Sample content for Course • Shivalik College Of Engineering • MBA will be added soon."
    />
  );
}
