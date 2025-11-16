import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/academics";

export const metadata: Metadata = {
  title: "Course • Academics | Shivalik College of Engineering",
  description: "Sample overview for Course • Academics at Shivalik College of Engineering.",
};

export default function CourseAcademicsPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Academics"
      description="Sample content for Course • Academics will be added soon."
    />
  );
}
