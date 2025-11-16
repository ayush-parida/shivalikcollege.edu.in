import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/7";

export const metadata: Metadata = {
  title: "Blogs • Page • 7 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 7 at Shivalik College of Engineering.",
};

export default function BlogsPage7Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 7"
      description="Sample content for Blogs • Page • 7 will be added soon."
    />
  );
}
