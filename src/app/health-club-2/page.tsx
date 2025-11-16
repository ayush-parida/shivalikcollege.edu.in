import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/health-club-2";

export const metadata: Metadata = {
  title: "Health Club 2 | Shivalik College of Engineering",
  description: "Sample overview for Health Club 2 at Shivalik College of Engineering.",
};

export default function HealthClub2Page() {
  return (
    <PageRenderer
      path={path}
      title="Health Club 2"
      description="Sample content for Health Club 2 will be added soon."
    />
  );
}
