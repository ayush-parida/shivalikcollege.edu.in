import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs/page";

export const metadata: Metadata = {
  title: "Blogs • Page | Shivalik College of Engineering",
  description: "Sample overview for Blogs • Page at Shivalik College of Engineering.",
};

export default function BlogsPagePage() {
  return (
    <PageRenderer
      path={path}
      title="Blogs • Page"
      description="Sample content for Blogs • Page will be added soon."
    />
  );
}
