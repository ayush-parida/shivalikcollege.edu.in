import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/academic-calendar";

export const metadata: Metadata = {
  title: "Academic Calendar | Shivalik College of Engineering",
  description: "Sample overview for Academic Calendar at Shivalik College of Engineering.",
};

export default function AcademicCalendarPage() {
  return (
    <PageRenderer
      path={path}
      title="Academic Calendar"
      description="Sample content for Academic Calendar will be added soon."
    />
  );
}
