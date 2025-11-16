import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/placement/about-dotp-overview";

export const metadata: Metadata = {
  title: "Placement • About DoTP Overview | Shivalik College of Engineering",
  description: "Sample overview for Placement • About DoTP Overview at Shivalik College of Engineering.",
};

export default function PlacementAboutDotpOverviewPage() {
  return (
    <PageRenderer
      path={path}
      title="Placement • About DoTP Overview"
      description="Sample content for Placement • About DoTP Overview will be added soon."
    />
  );
}
