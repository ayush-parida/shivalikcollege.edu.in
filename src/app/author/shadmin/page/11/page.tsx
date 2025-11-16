import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page/11";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page • 11 | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page • 11 at Shivalik College of Engineering.",
};

export default function AuthorShadminPage11Page() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page • 11"
      description="Sample content for Author • Shadmin • Page • 11 will be added soon."
    />
  );
}
