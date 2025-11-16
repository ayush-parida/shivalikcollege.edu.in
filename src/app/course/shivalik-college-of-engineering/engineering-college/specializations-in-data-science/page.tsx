import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/engineering-college/specializations-in-data-science";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • Engineering College • Specializations In Data Science | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • Engineering College • Specializations In Data Science at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringEngineeringCollegeSpecializationsInDataSciencePage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • Engineering College • Specializations In Data Science"
      description="Sample content for Course • Shivalik College Of Engineering • Engineering College • Specializations In Data Science will be added soon."
    />
  );
}
