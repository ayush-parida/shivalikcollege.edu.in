import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/iit-ropar-signs-mou-for-future-collaboration";

export const metadata: Metadata = {
  title: "Iit Ropar Signs MoU For Future Collaboration | Shivalik College of Engineering",
  description: "Sample overview for Iit Ropar Signs MoU For Future Collaboration at Shivalik College of Engineering.",
};

export default function IitRoparSignsMouForFutureCollaborationPage() {
  return (
    <PageRenderer
      path={path}
      title="Iit Ropar Signs MoU For Future Collaboration"
      description="Sample content for Iit Ropar Signs MoU For Future Collaboration will be added soon."
    />
  );
}
