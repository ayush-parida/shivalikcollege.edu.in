import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/category";

export const metadata: Metadata = {
  title: "Category | Shivalik College of Engineering",
  description: "Sample overview for Category at Shivalik College of Engineering.",
};

export default function CategoryPage() {
  return (
    <PageRenderer
      path={path}
      title="Category"
      description="Sample content for Category will be added soon."
    />
  );
}
