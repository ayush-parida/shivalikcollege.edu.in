import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page at Shivalik College of Engineering.",
};

export default function AuthorShadminPagePage() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page"
      description="Sample content for Author • Shadmin • Page will be added soon."
    />
  );
}
