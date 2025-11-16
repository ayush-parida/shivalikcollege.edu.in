import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/2";

export const metadata: Metadata = {
  title: "Blogs • Page • 2 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 2 at Shivalik College of Engineering.",
};

export default function BlogsPage2Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 2"
      description="Sample content for Blogs • Page • 2 will be added soon."
    />
  );
}
