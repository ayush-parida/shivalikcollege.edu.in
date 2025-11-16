import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/cobots";

export const metadata: Metadata = {
  title: "Cobots | Shivalik College of Engineering",
  description: "Sample overview for Cobots at Shivalik College of Engineering.",
};

export default function CobotsPage() {
  return (
    <PageRenderer
      path={path}
      title="Cobots"
      description="Sample content for Cobots will be added soon."
    />
  );
}
