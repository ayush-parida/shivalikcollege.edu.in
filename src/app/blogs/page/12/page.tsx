import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/12";

export const metadata: Metadata = {
  title: "Blogs • Page • 12 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 12 at Shivalik College of Engineering.",
};

export default function BlogsPage12Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 12"
      description="Sample content for Blogs • Page • 12 will be added soon."
    />
  );
}
