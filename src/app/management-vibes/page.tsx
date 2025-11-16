import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/management-vibes";

export const metadata: Metadata = {
  title: "Management Vibes | Shivalik College of Engineering",
  description: "Sample overview for Management Vibes at Shivalik College of Engineering.",
};

export default function ManagementVibesPage() {
  return (
    <PageRenderer
      path={path}
      title="Management Vibes"
      description="Sample content for Management Vibes will be added soon."
    />
  );
}
