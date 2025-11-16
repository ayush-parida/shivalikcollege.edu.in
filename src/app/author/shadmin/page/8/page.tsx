import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page/8";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page • 8 | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page • 8 at Shivalik College of Engineering.",
};

export default function AuthorShadminPage8Page() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page • 8"
      description="Sample content for Author • Shadmin • Page • 8 will be added soon."
    />
  );
}
