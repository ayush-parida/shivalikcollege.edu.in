import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/student-resources/mess";

export const metadata: Metadata = {
  title: "Student Resources • Mess | Shivalik College of Engineering",
  description: "Sample overview for Student Resources • Mess at Shivalik College of Engineering.",
};

export default function StudentResourcesMessPage() {
  return (
    <PageRenderer
      path={path}
      title="Student Resources • Mess"
      description="Sample content for Student Resources • Mess will be added soon."
    />
  );
}
