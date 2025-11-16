import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/bca/bca-college-in-dehradun";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • BCA • BCA College In Dehradun | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • BCA • BCA College In Dehradun at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringBcaBcaCollegeInDehradunPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • BCA • BCA College In Dehradun"
      description="Sample content for Course • Shivalik College Of Engineering • BCA • BCA College In Dehradun will be added soon."
    />
  );
}
