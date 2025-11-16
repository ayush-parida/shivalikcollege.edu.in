import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page/2";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page • 2 | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page • 2 at Shivalik College of Engineering.",
};

export default function AuthorShadminPage2Page() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page • 2"
      description="Sample content for Author • Shadmin • Page • 2 will be added soon."
    />
  );
}
