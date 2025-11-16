import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/tag/shivalik-college-of-engineering";

export const metadata: Metadata = {
  title: "Tag • Shivalik College Of Engineering | Shivalik College of Engineering",
  description: "Sample overview for Tag • Shivalik College Of Engineering at Shivalik College of Engineering.",
};

export default function TagShivalikCollegeOfEngineeringPage() {
  return (
    <PageRenderer
      path={path}
      title="Tag • Shivalik College Of Engineering"
      description="Sample content for Tag • Shivalik College Of Engineering will be added soon."
    />
  );
}
