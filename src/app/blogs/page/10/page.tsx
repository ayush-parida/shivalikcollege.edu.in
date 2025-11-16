import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/10";

export const metadata: Metadata = {
  title: "Blogs • Page • 10 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 10 at Shivalik College of Engineering.",
};

export default function BlogsPage10Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 10"
      description="Sample content for Blogs • Page • 10 will be added soon."
    />
  );
}
