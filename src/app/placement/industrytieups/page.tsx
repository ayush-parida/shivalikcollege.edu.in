import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/placement/industrytieups";

export const metadata: Metadata = {
  title: "Placement • Industrytieups | Shivalik College of Engineering",
  description: "Sample overview for Placement • Industrytieups at Shivalik College of Engineering.",
};

export default function PlacementIndustrytieupsPage() {
  return (
    <PageRenderer
      path={path}
      title="Placement • Industrytieups"
      description="Sample content for Placement • Industrytieups will be added soon."
    />
  );
}
