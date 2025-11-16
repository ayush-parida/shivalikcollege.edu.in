import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/13";

export const metadata: Metadata = {
  title: "Blogs • Page • 13 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 13 at Shivalik College of Engineering.",
};

export default function BlogsPage13Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 13"
      description="Sample content for Blogs • Page • 13 will be added soon."
    />
  );
}
