import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/student-resources/cafeteria";

export const metadata: Metadata = {
  title: "Student Resources • Cafeteria | Shivalik College of Engineering",
  description: "Sample overview for Student Resources • Cafeteria at Shivalik College of Engineering.",
};

export default function StudentResourcesCafeteriaPage() {
  return (
    <PageRenderer
      path={path}
      title="Student Resources • Cafeteria"
      description="Sample content for Student Resources • Cafeteria will be added soon."
    />
  );
}
