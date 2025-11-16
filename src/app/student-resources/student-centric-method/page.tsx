import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/student-resources/student-centric-method";

export const metadata: Metadata = {
  title: "Student Resources • Student Centric Method | Shivalik College of Engineering",
  description: "Sample overview for Student Resources • Student Centric Method at Shivalik College of Engineering.",
};

export default function StudentResourcesStudentCentricMethodPage() {
  return (
    <PageRenderer
      path={path}
      title="Student Resources • Student Centric Method"
      description="Sample content for Student Resources • Student Centric Method will be added soon."
    />
  );
}
