import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page/9";

export const metadata: Metadata = {
  title: "Blogs • Page • 9 | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page • 9 at Shivalik College of Engineering.",
};

export default function BlogsPage9Page() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page • 9"
      description="Sample content for Blogs • Page • 9 will be added soon."
    />
  );
}
