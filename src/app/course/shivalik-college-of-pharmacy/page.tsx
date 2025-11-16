import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-pharmacy";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Pharmacy | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Pharmacy at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfPharmacyPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Pharmacy"
      description="Sample content for Course • Shivalik College Of Pharmacy will be added soon."
    />
  );
}
