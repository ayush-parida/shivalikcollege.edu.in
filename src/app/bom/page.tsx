import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/bom";

export const metadata: Metadata = {
  title: "Bom | Shivalik College of Engineering",
  description: "Sample overview for Bom at Shivalik College of Engineering.",
};

export default function BomPage() {
  return (
    <PageRenderer
      path={path}
      title="Bom"
      description="Sample content for Bom will be added soon."
    />
  );
}
