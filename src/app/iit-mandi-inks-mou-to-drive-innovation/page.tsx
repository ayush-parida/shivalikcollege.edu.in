import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/iit-mandi-inks-mou-to-drive-innovation";

export const metadata: Metadata = {
  title: "Iit Mandi Inks MoU To Drive Innovation | Shivalik College of Engineering",
  description: "Sample overview for Iit Mandi Inks MoU To Drive Innovation at Shivalik College of Engineering.",
};

export default function IitMandiInksMouToDriveInnovationPage() {
  return (
    <PageRenderer
      path={path}
      title="Iit Mandi Inks MoU To Drive Innovation"
      description="Sample content for Iit Mandi Inks MoU To Drive Innovation will be added soon."
    />
  );
}
