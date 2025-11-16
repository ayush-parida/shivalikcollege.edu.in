import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page/6";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page • 6 | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page • 6 at Shivalik College of Engineering.",
};

export default function AuthorShadminPage6Page() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page • 6"
      description="Sample content for Author • Shadmin • Page • 6 will be added soon."
    />
  );
}
