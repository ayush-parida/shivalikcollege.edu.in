import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/vanet-and-its-cloud-based-approaches";

export const metadata: Metadata = {
  title: "Vanet And Its Cloud Based Approaches | Shivalik College of Engineering",
  description: "Sample overview for Vanet And Its Cloud Based Approaches at Shivalik College of Engineering.",
};

export default function VanetAndItsCloudBasedApproachesPage() {
  return (
    <PageRenderer
      path={path}
      title="Vanet And Its Cloud Based Approaches"
      description="Sample content for Vanet And Its Cloud Based Approaches will be added soon."
    />
  );
}
