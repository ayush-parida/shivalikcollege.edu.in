import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/mechanical-engineering/diploma-polytechnic-mechanical-engineering-2";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • Mechanical Engineering • Diploma Polytechnic Mechanical Engineering 2 | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • Mechanical Engineering • Diploma Polytechnic Mechanical Engineering 2 at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringMechanicalEngineeringDiplomaPolytechnicMechanicalEngineering2Page() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • Mechanical Engineering • Diploma Polytechnic Mechanical Engineering 2"
      description="Sample content for Course • Shivalik College Of Engineering • Mechanical Engineering • Diploma Polytechnic Mechanical Engineering 2 will be added soon."
    />
  );
}
