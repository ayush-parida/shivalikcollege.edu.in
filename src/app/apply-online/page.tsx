import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/apply-online";

export const metadata: Metadata = {
  title: "Apply Online | Shivalik College of Engineering",
  description: "Sample overview for Apply Online at Shivalik College of Engineering.",
};

export default function ApplyOnlinePage() {
  return (
    <PageRenderer
      path={path}
      title="Apply Online"
      description="Sample content for Apply Online will be added soon."
    />
  );
}
