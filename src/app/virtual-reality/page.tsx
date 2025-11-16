import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/virtual-reality";

export const metadata: Metadata = {
  title: "Virtual Reality | Shivalik College of Engineering",
  description: "Sample overview for Virtual Reality at Shivalik College of Engineering.",
};

export default function VirtualRealityPage() {
  return (
    <PageRenderer
      path={path}
      title="Virtual Reality"
      description="Sample content for Virtual Reality will be added soon."
    />
  );
}
