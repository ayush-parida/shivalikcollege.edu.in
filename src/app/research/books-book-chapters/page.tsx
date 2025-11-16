import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/research/books-book-chapters";

export const metadata: Metadata = {
  title: "Research • Books Book Chapters | Shivalik College of Engineering",
  description: "Sample overview for Research • Books Book Chapters at Shivalik College of Engineering.",
};

export default function ResearchBooksBookChaptersPage() {
  return (
    <PageRenderer
      path={path}
      title="Research • Books Book Chapters"
      description="Sample content for Research • Books Book Chapters will be added soon."
    />
  );
}
