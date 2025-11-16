import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/bba/bachelor-of-business-administration";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • BBA • Bachelor Of Business Administration | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • BBA • Bachelor Of Business Administration at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringBbaBachelorOfBusinessAdministrationPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • BBA • Bachelor Of Business Administration"
      description="Sample content for Course • Shivalik College Of Engineering • BBA • Bachelor Of Business Administration will be added soon."
    />
  );
}
