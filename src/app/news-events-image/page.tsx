import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/news-events-image";

export const metadata: Metadata = {
  title: "News Events Image | Shivalik College of Engineering",
  description: "Sample overview for News Events Image at Shivalik College of Engineering.",
};

export default function NewsEventsImagePage() {
  return (
    <PageRenderer
      path={path}
      title="News Events Image"
      description="Sample content for News Events Image will be added soon."
    />
  );
}
