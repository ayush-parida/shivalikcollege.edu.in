import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/student-resources/hostel";

export const metadata: Metadata = {
  title: "Student Resources • Hostel | Shivalik College of Engineering",
  description: "Sample overview for Student Resources • Hostel at Shivalik College of Engineering.",
};

export default function StudentResourcesHostelPage() {
  return (
    <PageRenderer
      path={path}
      title="Student Resources • Hostel"
      description="Sample content for Student Resources • Hostel will be added soon."
    />
  );
}
