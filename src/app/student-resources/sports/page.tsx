import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/student-resources/sports";

export const metadata: Metadata = {
  title: "Student Resources • Sports | Shivalik College of Engineering",
  description: "Sample overview for Student Resources • Sports at Shivalik College of Engineering.",
};

export default function StudentResourcesSportsPage() {
  return (
    <PageRenderer
      path={path}
      title="Student Resources • Sports"
      description="Sample content for Student Resources • Sports will be added soon."
    />
  );
}
