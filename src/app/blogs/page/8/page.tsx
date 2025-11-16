import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/8";

export const metadata: Metadata = {
  title: "Blogs • Page • 8 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 8 at Shivalik College of Engineering.",
};

export default function BlogsPage8Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 8"
      description="Sample content for Blogs • Page • 8 will be added soon."
    />
  );
}
