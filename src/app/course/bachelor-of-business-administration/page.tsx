import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/bachelor-of-business-administration";

export const metadata: Metadata = {
  title: "Course • Bachelor Of Business Administration | Shivalik College of Engineering",
  description: "Sample overview for Course • Bachelor Of Business Administration at Shivalik College of Engineering.",
};

export default function CourseBachelorOfBusinessAdministrationPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Bachelor Of Business Administration"
      description="Sample content for Course • Bachelor Of Business Administration will be added soon."
    />
  );
}
