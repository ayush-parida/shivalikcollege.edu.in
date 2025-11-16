import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/student-resources/gymnasium";

export const metadata: Metadata = {
  title: "Student Resources • Gymnasium | Shivalik College of Engineering",
  description: "Sample overview for Student Resources • Gymnasium at Shivalik College of Engineering.",
};

export default function StudentResourcesGymnasiumPage() {
  return (
    <PageRenderer
      path={path}
      title="Student Resources • Gymnasium"
      description="Sample content for Student Resources • Gymnasium will be added soon."
    />
  );
}
