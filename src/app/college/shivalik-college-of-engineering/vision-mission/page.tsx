import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/college/shivalik-college-of-engineering/vision-mission";

export const metadata: Metadata = {
  title: "College • Shivalik College Of Engineering • Vision Mission | Shivalik College of Engineering",
  description: "Sample overview for College • Shivalik College Of Engineering • Vision Mission at Shivalik College of Engineering.",
};

export default function CollegeShivalikCollegeOfEngineeringVisionMissionPage() {
  return (
    <PageRenderer
      path={path}
      title="College • Shivalik College Of Engineering • Vision Mission"
      description="Sample content for College • Shivalik College Of Engineering • Vision Mission will be added soon."
    />
  );
}
