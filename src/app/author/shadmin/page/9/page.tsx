import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page/9";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page • 9 | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page • 9 at Shivalik College of Engineering.",
};

export default function AuthorShadminPage9Page() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page • 9"
      description="Sample content for Author • Shadmin • Page • 9 will be added soon."
    />
  );
}
