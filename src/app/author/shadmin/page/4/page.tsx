import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page/4";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page • 4 | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page • 4 at Shivalik College of Engineering.",
};

export default function AuthorShadminPage4Page() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page • 4"
      description="Sample content for Author • Shadmin • Page • 4 will be added soon."
    />
  );
}
