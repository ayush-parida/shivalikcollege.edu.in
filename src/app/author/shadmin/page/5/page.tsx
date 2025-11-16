import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page/5";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page • 5 | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page • 5 at Shivalik College of Engineering.",
};

export default function AuthorShadminPage5Page() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page • 5"
      description="Sample content for Author • Shadmin • Page • 5 will be added soon."
    />
  );
}
