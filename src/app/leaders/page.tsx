import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/leaders";

export const metadata: Metadata = {
  title: "Leaders | Shivalik College of Engineering",
  description: "Sample overview for Leaders at Shivalik College of Engineering.",
};

export default function LeadersPage() {
  return (
    <PageRenderer
      path={path}
      title="Leaders"
      description="Sample content for Leaders will be added soon."
    />
  );
}
