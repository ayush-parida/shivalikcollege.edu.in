import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/top-colleges-in-dehradun-shivalik-college-of-engineering";

export const metadata: Metadata = {
  title: "Top Colleges In Dehradun Shivalik College Of Engineering | Shivalik College of Engineering",
  description: "Sample overview for Top Colleges In Dehradun Shivalik College Of Engineering at Shivalik College of Engineering.",
};

export default function TopCollegesInDehradunShivalikCollegeOfEngineeringPage() {
  return (
    <PageRenderer
      path={path}
      title="Top Colleges In Dehradun Shivalik College Of Engineering"
      description="Sample content for Top Colleges In Dehradun Shivalik College Of Engineering will be added soon."
    />
  );
}
