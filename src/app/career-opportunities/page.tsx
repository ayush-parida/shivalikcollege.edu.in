import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/career-opportunities";

export const metadata: Metadata = {
  title: "Career Opportunities | Shivalik College of Engineering",
  description: "Sample overview for Career Opportunities at Shivalik College of Engineering.",
};

export default function CareerOpportunitiesPage() {
  return (
    <PageRenderer
      path={path}
      title="Career Opportunities"
      description="Sample content for Career Opportunities will be added soon."
    />
  );
}
