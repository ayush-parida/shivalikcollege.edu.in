import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/tag";

export const metadata: Metadata = {
  title: "Tag | Shivalik College of Engineering",
  description: "Sample overview for Tag at Shivalik College of Engineering.",
};

export default function TagPage() {
  return (
    <PageRenderer
      path={path}
      title="Tag"
      description="Sample content for Tag will be added soon."
    />
  );
}
