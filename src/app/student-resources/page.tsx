import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/student-resources";

export const metadata: Metadata = {
  title: "Student Resources | Shivalik College of Engineering",
  description: "Sample overview for Student Resources at Shivalik College of Engineering.",
};

export default function StudentResourcesPage() {
  return (
    <PageRenderer
      path={path}
      title="Student Resources"
      description="Sample content for Student Resources will be added soon."
    />
  );
}
