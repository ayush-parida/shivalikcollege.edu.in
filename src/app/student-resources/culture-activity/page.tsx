import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/student-resources/culture-activity";

export const metadata: Metadata = {
  title: "Student Resources • Culture Activity | Shivalik College of Engineering",
  description: "Sample overview for Student Resources • Culture Activity at Shivalik College of Engineering.",
};

export default function StudentResourcesCultureActivityPage() {
  return (
    <PageRenderer
      path={path}
      title="Student Resources • Culture Activity"
      description="Sample content for Student Resources • Culture Activity will be added soon."
    />
  );
}
