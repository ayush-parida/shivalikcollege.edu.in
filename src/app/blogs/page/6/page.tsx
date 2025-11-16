import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/6";

export const metadata: Metadata = {
  title: "Blogs • Page • 6 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 6 at Shivalik College of Engineering.",
};

export default function BlogsPage6Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 6"
      description="Sample content for Blogs • Page • 6 will be added soon."
    />
  );
}
