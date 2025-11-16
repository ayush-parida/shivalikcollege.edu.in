import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/placement";

export const metadata: Metadata = {
  title: "Placement | Shivalik College of Engineering",
  description: "Sample overview for Placement at Shivalik College of Engineering.",
};

export default function PlacementPage() {
  return (
    <PageRenderer
      path={path}
      title="Placement"
      description="Sample content for Placement will be added soon."
    />
  );
}
