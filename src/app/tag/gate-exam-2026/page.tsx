import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/tag/gate-exam-2026";

export const metadata: Metadata = {
  title: "Tag • Gate Exam 2026 | Shivalik College of Engineering",
  description: "Sample overview for Tag • Gate Exam 2026 at Shivalik College of Engineering.",
};

export default function TagGateExam2026Page() {
  return (
    <PageRenderer
      path={path}
      title="Tag • Gate Exam 2026"
      description="Sample content for Tag • Gate Exam 2026 will be added soon."
    />
  );
}
