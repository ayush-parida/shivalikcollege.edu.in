import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/student-resources/student-clubs";

export const metadata: Metadata = {
  title: "Student Resources • Student Clubs | Shivalik College of Engineering",
  description: "Sample overview for Student Resources • Student Clubs at Shivalik College of Engineering.",
};

export default function StudentResourcesStudentClubsPage() {
  return (
    <PageRenderer
      path={path}
      title="Student Resources • Student Clubs"
      description="Sample content for Student Resources • Student Clubs will be added soon."
    />
  );
}
