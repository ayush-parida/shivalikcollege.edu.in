import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/tag/shivalik-college-of-e";

export const metadata: Metadata = {
  title: "Tag • Shivalik College Of E | Shivalik College of Engineering",
  description: "Sample overview for Tag • Shivalik College Of E at Shivalik College of Engineering.",
};

export default function TagShivalikCollegeOfEPage() {
  return (
    <PageRenderer
      path={path}
      title="Tag • Shivalik College Of E"
      description="Sample content for Tag • Shivalik College Of E will be added soon."
    />
  );
}
