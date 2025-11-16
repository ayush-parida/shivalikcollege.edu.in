import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/student-resources/medical";

export const metadata: Metadata = {
  title: "Student Resources • Medical | Shivalik College of Engineering",
  description: "Sample overview for Student Resources • Medical at Shivalik College of Engineering.",
};

export default function StudentResourcesMedicalPage() {
  return (
    <PageRenderer
      path={path}
      title="Student Resources • Medical"
      description="Sample content for Student Resources • Medical will be added soon."
    />
  );
}
