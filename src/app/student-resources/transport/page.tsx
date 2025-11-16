import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/student-resources/transport";

export const metadata: Metadata = {
  title: "Student Resources • Transport | Shivalik College of Engineering",
  description: "Sample overview for Student Resources • Transport at Shivalik College of Engineering.",
};

export default function StudentResourcesTransportPage() {
  return (
    <PageRenderer
      path={path}
      title="Student Resources • Transport"
      description="Sample content for Student Resources • Transport will be added soon."
    />
  );
}
