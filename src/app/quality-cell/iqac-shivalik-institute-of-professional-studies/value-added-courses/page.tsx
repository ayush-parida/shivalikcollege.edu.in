import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-institute-of-professional-studies/value-added-courses";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik Institute Of Professional Studies • Value Added Courses | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik Institute Of Professional Studies • Value Added Courses at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikInstituteOfProfessionalStudiesValueAddedCoursesPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik Institute Of Professional Studies • Value Added Courses"
      description="Sample content for Quality Cell • IQAC Shivalik Institute Of Professional Studies • Value Added Courses will be added soon."
    />
  );
}
