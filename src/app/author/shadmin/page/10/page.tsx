import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page/10";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page • 10 | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page • 10 at Shivalik College of Engineering.",
};

export default function AuthorShadminPage10Page() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page • 10"
      description="Sample content for Author • Shadmin • Page • 10 will be added soon."
    />
  );
}
