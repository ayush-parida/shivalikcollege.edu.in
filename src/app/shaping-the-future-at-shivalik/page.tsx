import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/shaping-the-future-at-shivalik";

export const metadata: Metadata = {
  title: "Shaping The Future At Shivalik | Shivalik College of Engineering",
  description: "Sample overview for Shaping The Future At Shivalik at Shivalik College of Engineering.",
};

export default function ShapingTheFutureAtShivalikPage() {
  return (
    <PageRenderer
      path={path}
      title="Shaping The Future At Shivalik"
      description="Sample content for Shaping The Future At Shivalik will be added soon."
    />
  );
}
