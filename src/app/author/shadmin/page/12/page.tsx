import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page/12";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page • 12 | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page • 12 at Shivalik College of Engineering.",
};

export default function AuthorShadminPage12Page() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page • 12"
      description="Sample content for Author • Shadmin • Page • 12 will be added soon."
    />
  );
}
