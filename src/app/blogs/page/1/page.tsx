import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/1";

export const metadata: Metadata = {
  title: "Blogs • Page • 1 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 1 at Shivalik College of Engineering.",
};

export default function BlogsPage1Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 1"
      description="Sample content for Blogs • Page • 1 will be added soon."
    />
  );
}
