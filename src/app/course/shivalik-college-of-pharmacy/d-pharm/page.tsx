import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-pharmacy/d-pharm";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Pharmacy • D Pharm | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Pharmacy • D Pharm at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfPharmacyDPharmPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Pharmacy • D Pharm"
      description="Sample content for Course • Shivalik College Of Pharmacy • D Pharm will be added soon."
    />
  );
}
