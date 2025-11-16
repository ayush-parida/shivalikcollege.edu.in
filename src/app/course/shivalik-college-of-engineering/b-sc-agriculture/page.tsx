import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/b-sc-agriculture";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • B Sc Agriculture | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • B Sc Agriculture at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringBScAgriculturePage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • B Sc Agriculture"
      description="Sample content for Course • Shivalik College Of Engineering • B Sc Agriculture will be added soon."
    />
  );
}
