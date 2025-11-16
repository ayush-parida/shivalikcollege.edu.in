import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/bca";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • BCA | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • BCA at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringBcaPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • BCA"
      description="Sample content for Course • Shivalik College Of Engineering • BCA will be added soon."
    />
  );
}
