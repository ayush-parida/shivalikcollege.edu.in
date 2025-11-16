import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-pharmacy/b-pharm";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Pharmacy • B Pharm | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Pharmacy • B Pharm at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfPharmacyBPharmPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Pharmacy • B Pharm"
      description="Sample content for Course • Shivalik College Of Pharmacy • B Pharm will be added soon."
    />
  );
}
