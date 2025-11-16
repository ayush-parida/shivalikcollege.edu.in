import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course";

export const metadata: Metadata = {
  title: "Course | Shivalik College of Engineering",
  description: "Sample overview for Course at Shivalik College of Engineering.",
};

export default function CoursePage() {
  return (
    <PageRenderer
      path={path}
      title="Course"
      description="Sample content for Course will be added soon."
    />
  );
}
