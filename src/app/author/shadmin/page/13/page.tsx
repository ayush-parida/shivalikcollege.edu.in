import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page/13";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page • 13 | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page • 13 at Shivalik College of Engineering.",
};

export default function AuthorShadminPage13Page() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page • 13"
      description="Sample content for Author • Shadmin • Page • 13 will be added soon."
    />
  );
}
