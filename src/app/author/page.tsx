import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author";

export const metadata: Metadata = {
  title: "Author | Shivalik College of Engineering",
  description: "Sample overview for Author at Shivalik College of Engineering.",
};

export default function AuthorPage() {
  return (
    <PageRenderer
      path={path}
      title="Author"
      description="Sample content for Author will be added soon."
    />
  );
}
