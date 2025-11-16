import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/results";

export const metadata: Metadata = {
  title: "Results | Shivalik College of Engineering",
  description: "Sample overview for Results at Shivalik College of Engineering.",
};

export default function ResultsPage() {
  return (
    <PageRenderer
      path={path}
      title="Results"
      description="Sample content for Results will be added soon."
    />
  );
}
