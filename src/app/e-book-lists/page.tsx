import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/e-book-lists";

export const metadata: Metadata = {
  title: "E Book Lists | Shivalik College of Engineering",
  description: "Sample overview for E Book Lists at Shivalik College of Engineering.",
};

export default function EBookListsPage() {
  return (
    <PageRenderer
      path={path}
      title="E Book Lists"
      description="Sample content for E Book Lists will be added soon."
    />
  );
}
