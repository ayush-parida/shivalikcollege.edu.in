import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/shivalik-tribune";

export const metadata: Metadata = {
  title: "Shivalik Tribune | Shivalik College of Engineering",
  description: "Sample overview for Shivalik Tribune at Shivalik College of Engineering.",
};

export default function ShivalikTribunePage() {
  return (
    <PageRenderer
      path={path}
      title="Shivalik Tribune"
      description="Sample content for Shivalik Tribune will be added soon."
    />
  );
}
