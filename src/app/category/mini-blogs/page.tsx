import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/category/mini-blogs";

export const metadata: Metadata = {
  title: "Category • Mini Blogs | Shivalik College of Engineering",
  description: "Sample overview for Category • Mini Blogs at Shivalik College of Engineering.",
};

export default function CategoryMiniBlogsPage() {
  return (
    <PageRenderer
      path={path}
      title="Category • Mini Blogs"
      description="Sample content for Category • Mini Blogs will be added soon."
    />
  );
}
