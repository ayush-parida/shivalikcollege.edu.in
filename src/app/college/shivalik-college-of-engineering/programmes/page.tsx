import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/college/shivalik-college-of-engineering/programmes";

export const metadata: Metadata = {
  title: "College • Shivalik College Of Engineering • Programmes | Shivalik College of Engineering",
  description: "Sample overview for College • Shivalik College Of Engineering • Programmes at Shivalik College of Engineering.",
};

export default function CollegeShivalikCollegeOfEngineeringProgrammesPage() {
  return (
    <PageRenderer
      path={path}
      title="College • Shivalik College Of Engineering • Programmes"
      description="Sample content for College • Shivalik College Of Engineering • Programmes will be added soon."
    />
  );
}
