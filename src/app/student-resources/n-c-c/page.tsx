import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/student-resources/n-c-c";

export const metadata: Metadata = {
  title: "Student Resources • N C C | Shivalik College of Engineering",
  description: "Sample overview for Student Resources • N C C at Shivalik College of Engineering.",
};

export default function StudentResourcesNCCPage() {
  return (
    <PageRenderer
      path={path}
      title="Student Resources • N C C"
      description="Sample content for Student Resources • N C C will be added soon."
    />
  );
}
