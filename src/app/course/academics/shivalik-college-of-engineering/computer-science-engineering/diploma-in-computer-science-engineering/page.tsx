import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/academics/shivalik-college-of-engineering/computer-science-engineering/diploma-in-computer-science-engineering";

export const metadata: Metadata = {
  title: "Course • Academics • Shivalik College Of Engineering • Computer Science Engineering • Diploma In Computer Science Engineering | Shivalik College of Engineering",
  description: "Sample overview for Course • Academics • Shivalik College Of Engineering • Computer Science Engineering • Diploma In Computer Science Engineering at Shivalik College of Engineering.",
};

export default function CourseAcademicsShivalikCollegeOfEngineeringComputerScienceEngineeringDiplomaInComputerScienceEngineeringPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Academics • Shivalik College Of Engineering • Computer Science Engineering • Diploma In Computer Science Engineering"
      description="Sample content for Course • Academics • Shivalik College Of Engineering • Computer Science Engineering • Diploma In Computer Science Engineering will be added soon."
    />
  );
}
