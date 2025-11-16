import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/syllabus";

export const metadata: Metadata = {
  title: "Syllabus | Shivalik College of Engineering",
  description: "Sample overview for Syllabus at Shivalik College of Engineering.",
};

export default function SyllabusPage() {
  return (
    <PageRenderer
      path={path}
      title="Syllabus"
      description="Sample content for Syllabus will be added soon."
    />
  );
}
