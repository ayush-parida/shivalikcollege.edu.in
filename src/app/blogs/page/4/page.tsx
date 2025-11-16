import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/4";

export const metadata: Metadata = {
  title: "Blogs • Page • 4 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 4 at Shivalik College of Engineering.",
};

export default function BlogsPage4Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 4"
      description="Sample content for Blogs • Page • 4 will be added soon."
    />
  );
}
