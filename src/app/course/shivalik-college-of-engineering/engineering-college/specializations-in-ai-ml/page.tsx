import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/engineering-college/specializations-in-ai-ml";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • Engineering College • Specializations In Ai Ml | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • Engineering College • Specializations In Ai Ml at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringEngineeringCollegeSpecializationsInAiMlPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • Engineering College • Specializations In Ai Ml"
      description="Sample content for Course • Shivalik College Of Engineering • Engineering College • Specializations In Ai Ml will be added soon."
    />
  );
}
