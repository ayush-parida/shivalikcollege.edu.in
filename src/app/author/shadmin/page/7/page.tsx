import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page/7";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page • 7 | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page • 7 at Shivalik College of Engineering.",
};

export default function AuthorShadminPage7Page() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page • 7"
      description="Sample content for Author • Shadmin • Page • 7 will be added soon."
    />
  );
}
