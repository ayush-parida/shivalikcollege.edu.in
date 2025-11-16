import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/health-club";

export const metadata: Metadata = {
  title: "Health Club | Shivalik College of Engineering",
  description: "Sample overview for Health Club at Shivalik College of Engineering.",
};

export default function HealthClubPage() {
  return (
    <PageRenderer
      path={path}
      title="Health Club"
      description="Sample content for Health Club will be added soon."
    />
  );
}
