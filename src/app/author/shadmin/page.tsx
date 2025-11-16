import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/author/shadmin";

export const metadata: Metadata = {
  title: "Author • Shadmin | Shivalik College of Engineering",
  description: "Sample overview for Author • Shadmin at Shivalik College of Engineering.",
};

export default function AuthorShadminPage() {
  return (
    <PageRenderer
      path={path}
      title="Author • Shadmin"
      description="Sample content for Author • Shadmin will be added soon."
    />
  );
}
