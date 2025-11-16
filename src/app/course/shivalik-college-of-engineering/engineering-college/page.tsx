import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/engineering-college";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • Engineering College | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • Engineering College at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringEngineeringCollegePage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • Engineering College"
      description="Sample content for Course • Shivalik College Of Engineering • Engineering College will be added soon."
    />
  );
}
