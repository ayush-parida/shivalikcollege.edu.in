import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/nirf";

export const metadata: Metadata = {
  title: "Nirf | Shivalik College of Engineering",
  description: "Sample overview for Nirf at Shivalik College of Engineering.",
};

export default function NirfPage() {
  return (
    <PageRenderer
      path={path}
      title="Nirf"
      description="Sample content for Nirf will be added soon."
    />
  );
}
