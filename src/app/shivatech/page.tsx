import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/shivatech";

export const metadata: Metadata = {
  title: "Shivatech | Shivalik College of Engineering",
  description: "Sample overview for Shivatech at Shivalik College of Engineering.",
};

export default function ShivatechPage() {
  return (
    <PageRenderer
      path={path}
      title="Shivatech"
      description="Sample content for Shivatech will be added soon."
    />
  );
}
