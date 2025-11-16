import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/g-ceip-mou";

export const metadata: Metadata = {
  title: "G Ceip MoU | Shivalik College of Engineering",
  description: "Sample overview for G Ceip MoU at Shivalik College of Engineering.",
};

export default function GCeipMouPage() {
  return (
    <PageRenderer
      path={path}
      title="G Ceip MoU"
      description="Sample content for G Ceip MoU will be added soon."
    />
  );
}
