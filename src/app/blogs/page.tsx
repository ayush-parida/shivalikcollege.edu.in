import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blogs";

export const metadata: Metadata = {
  title: "Blogs | Shivalik College of Engineering",
  description: "Sample overview for Blogs at Shivalik College of Engineering.",
};

export default function BlogsPage() {
  return (
    <PageRenderer
      path={path}
      title="Blogs"
      description="Sample content for Blogs will be added soon."
    />
  );
}
