import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/academics/shivalik-institute-of-professional-studies/management";

export const metadata: Metadata = {
  title: "Course • Academics • Shivalik Institute Of Professional Studies • Management | Shivalik College of Engineering",
  description: "Sample overview for Course • Academics • Shivalik Institute Of Professional Studies • Management at Shivalik College of Engineering.",
};

export default function CourseAcademicsShivalikInstituteOfProfessionalStudiesManagementPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Academics • Shivalik Institute Of Professional Studies • Management"
      description="Sample content for Course • Academics • Shivalik Institute Of Professional Studies • Management will be added soon."
    />
  );
}
