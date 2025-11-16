import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/library";

export const metadata: Metadata = {
  title: "Library | Shivalik College of Engineering",
  description: "Sample overview for Library at Shivalik College of Engineering.",
};

export default function LibraryPage() {
  return (
    <PageRenderer
      path={path}
      title="Library"
      description="Sample content for Library will be added soon."
    />
  );
}
