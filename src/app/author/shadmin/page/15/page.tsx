import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin/page/15";

export const metadata: Metadata = {
  title: "Author • Shadmin • Page • 15 | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin • Page • 15 at Shivalik College of Engineering.",
};

export default function AuthorShadminPage15Page() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin • Page • 15"
      description="Sample content for Author • Shadmin • Page • 15 will be added soon."
    />
  );
}
