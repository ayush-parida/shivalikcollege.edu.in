import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/why-you-should-opt-for-polytechnic-courses";

export const metadata: Metadata = {
  title: "Why You Should Opt For Polytechnic Courses | Shivalik College of Engineering",
  description: "Sample overview for Why You Should Opt For Polytechnic Courses at Shivalik College of Engineering.",
};

export default function WhyYouShouldOptForPolytechnicCoursesPage() {
  return (
    <PageRenderer
      path={path}
      title="Why You Should Opt For Polytechnic Courses"
      description="Sample content for Why You Should Opt For Polytechnic Courses will be added soon."
    />
  );
}
