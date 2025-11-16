import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/ihub-cbii";

export const metadata: Metadata = {
  title: "iHUB CBII | Shivalik College of Engineering",
  description: "Sample overview for iHUB CBII at Shivalik College of Engineering.",
};

export default function IhubCbiiPage() {
  return (
    <PageRenderer
      path={path}
      title="iHUB CBII"
      description="Sample content for iHUB CBII will be added soon."
    />
  );
}
