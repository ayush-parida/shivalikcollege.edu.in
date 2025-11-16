import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/5";

export const metadata: Metadata = {
  title: "Blogs • Page • 5 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 5 at Shivalik College of Engineering.",
};

export default function BlogsPage5Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 5"
      description="Sample content for Blogs • Page • 5 will be added soon."
    />
  );
}
