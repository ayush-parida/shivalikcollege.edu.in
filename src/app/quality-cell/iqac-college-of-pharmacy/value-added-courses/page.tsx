import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-college-of-pharmacy/value-added-courses";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC College Of Pharmacy • Value Added Courses | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC College Of Pharmacy • Value Added Courses at Shivalik College of Engineering.",
};

export default function QualityCellIqacCollegeOfPharmacyValueAddedCoursesPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC College Of Pharmacy • Value Added Courses"
      description="Sample content for Quality Cell • IQAC College Of Pharmacy • Value Added Courses will be added soon."
    />
  );
}
