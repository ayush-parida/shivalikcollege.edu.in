import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/augmented-reality";

export const metadata: Metadata = {
  title: "Augmented Reality | Shivalik College of Engineering",
  description: "Sample overview for Augmented Reality at Shivalik College of Engineering.",
};

export default function AugmentedRealityPage() {
  return (
    <PageRenderer
      path={path}
      title="Augmented Reality"
      description="Sample content for Augmented Reality will be added soon."
    />
  );
}
