import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/international-yoga-day-2025";

export const metadata: Metadata = {
  title: "International Yoga Day 2025 | Shivalik College of Engineering",
  description: "Sample overview for International Yoga Day 2025 at Shivalik College of Engineering.",
};

export default function InternationalYogaDay2025Page() {
  return (
    <PageRenderer
      path={path}
      title="International Yoga Day 2025"
      description="Sample content for International Yoga Day 2025 will be added soon."
    />
  );
}
