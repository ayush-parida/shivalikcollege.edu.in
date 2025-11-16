import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/placement-2/about-dotp-overview";

export const metadata: Metadata = {
  title: "Placement 2 • About DoTP Overview | Shivalik College of Engineering",
  description: "Sample overview for Placement 2 • About DoTP Overview at Shivalik College of Engineering.",
};

export default function Placement2AboutDotpOverviewPage() {
  return (
    <PageRenderer
      path={path}
      title="Placement 2 • About DoTP Overview"
      description="Sample content for Placement 2 • About DoTP Overview will be added soon."
    />
  );
}
