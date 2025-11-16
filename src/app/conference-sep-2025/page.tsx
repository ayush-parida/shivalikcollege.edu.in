import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/conference-sep-2025";

export const metadata: Metadata = {
  title: "Conference Sep 2025 | Shivalik College of Engineering",
  description: "Sample overview for Conference Sep 2025 at Shivalik College of Engineering.",
};

export default function ConferenceSep2025Page() {
  return (
    <PageRenderer
      path={path}
      title="Conference Sep 2025"
      description="Sample content for Conference Sep 2025 will be added soon."
    />
  );
}
