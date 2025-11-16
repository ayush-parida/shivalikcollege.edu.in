import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/placement-2/placement-team";

export const metadata: Metadata = {
  title: "Placement 2 • Placement Team | Shivalik College of Engineering",
  description: "Sample overview for Placement 2 • Placement Team at Shivalik College of Engineering.",
};

export default function Placement2PlacementTeamPage() {
  return (
    <PageRenderer
      path={path}
      title="Placement 2 • Placement Team"
      description="Sample content for Placement 2 • Placement Team will be added soon."
    />
  );
}
