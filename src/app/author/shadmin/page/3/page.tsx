import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page/3";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page • 3 | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page • 3 at Shivalik College of Engineering.",
};

export default function AuthorShadminPage3Page() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page • 3"
      description="Sample content for Author • Shadmin • Page • 3 will be added soon."
    />
  );
}
