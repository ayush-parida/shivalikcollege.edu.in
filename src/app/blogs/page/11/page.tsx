import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/11";

export const metadata: Metadata = {
  title: "Blogs • Page • 11 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 11 at Shivalik College of Engineering.",
};

export default function BlogsPage11Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 11"
      description="Sample content for Blogs • Page • 11 will be added soon."
    />
  );
}
