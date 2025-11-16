import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/15";

export const metadata: Metadata = {
  title: "Blogs • Page • 15 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 15 at Shivalik College of Engineering.",
};

export default function BlogsPage15Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 15"
      description="Sample content for Blogs • Page • 15 will be added soon."
    />
  );
}
