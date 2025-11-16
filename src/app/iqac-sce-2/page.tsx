import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/iqac-sce-2";

export const metadata: Metadata = {
  title: "IQAC SCE 2 | Shivalik College of Engineering",
  description: "Sample overview for IQAC SCE 2 at Shivalik College of Engineering.",
};

export default function IqacSce2Page() {
  return (
    <PageRenderer
      path={path}
      title="IQAC SCE 2"
      description="Sample content for IQAC SCE 2 will be added soon."
    />
  );
}
