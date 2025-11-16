import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/student-resources/n-s-s";

export const metadata: Metadata = {
  title: "Student Resources • N S S | Shivalik College of Engineering",
  description: "Sample overview for Student Resources • N S S at Shivalik College of Engineering.",
};

export default function StudentResourcesNSSPage() {
  return (
    <PageRenderer
      path={path}
      title="Student Resources • N S S"
      description="Sample content for Student Resources • N S S will be added soon."
    />
  );
}
