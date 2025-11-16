import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/engineering-college/specialization-digital-manufacturing-ai-cps";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • Engineering College • Specialization Digital Manufacturing Ai Cps | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • Engineering College • Specialization Digital Manufacturing Ai Cps at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringEngineeringCollegeSpecializationDigitalManufacturingAiCpsPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • Engineering College • Specialization Digital Manufacturing Ai Cps"
      description="Sample content for Course • Shivalik College Of Engineering • Engineering College • Specialization Digital Manufacturing Ai Cps will be added soon."
    />
  );
}
