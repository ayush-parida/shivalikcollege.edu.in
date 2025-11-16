import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/14";

export const metadata: Metadata = {
  title: "Blogs • Page • 14 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 14 at Shivalik College of Engineering.",
};

export default function BlogsPage14Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 14"
      description="Sample content for Blogs • Page • 14 will be added soon."
    />
  );
}
