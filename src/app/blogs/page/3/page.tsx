import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/3";

export const metadata: Metadata = {
  title: "Blogs • Page • 3 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 3 at Shivalik College of Engineering.",
};

export default function BlogsPage3Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 3"
      description="Sample content for Blogs • Page • 3 will be added soon."
    />
  );
}
