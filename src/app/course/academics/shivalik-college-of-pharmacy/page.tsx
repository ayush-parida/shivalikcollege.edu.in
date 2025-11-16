import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/academics/shivalik-college-of-pharmacy";

export const metadata: Metadata = {
  title: "Course • Academics • Shivalik College Of Pharmacy | Shivalik College of Engineering",
  description: "Sample overview for Course • Academics • Shivalik College Of Pharmacy at Shivalik College of Engineering.",
};

export default function CourseAcademicsShivalikCollegeOfPharmacyPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Academics • Shivalik College Of Pharmacy"
      description="Sample content for Course • Academics • Shivalik College Of Pharmacy will be added soon."
    />
  );
}
