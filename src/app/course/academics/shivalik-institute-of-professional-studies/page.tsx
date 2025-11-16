import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/academics/shivalik-institute-of-professional-studies";

export const metadata: Metadata = {
  title: "Course • Academics • Shivalik Institute Of Professional Studies | Shivalik College of Engineering",
  description: "Sample overview for Course • Academics • Shivalik Institute Of Professional Studies at Shivalik College of Engineering.",
};

export default function CourseAcademicsShivalikInstituteOfProfessionalStudiesPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Academics • Shivalik Institute Of Professional Studies"
      description="Sample content for Course • Academics • Shivalik Institute Of Professional Studies will be added soon."
    />
  );
}
