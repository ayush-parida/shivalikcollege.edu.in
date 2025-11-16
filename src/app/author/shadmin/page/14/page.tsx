import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page/14";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page • 14 | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page • 14 at Shivalik College of Engineering.",
};

export default function AuthorShadminPage14Page() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page • 14"
      description="Sample content for Author • Shadmin • Page • 14 will be added soon."
    />
  );
}
