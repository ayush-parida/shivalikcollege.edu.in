import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/machine-vision";

export const metadata: Metadata = {
  title: "Machine Vision | Shivalik College of Engineering",
  description: "Sample overview for Machine Vision at Shivalik College of Engineering.",
};

export default function MachineVisionPage() {
  return (
    <PageRenderer
      path={path}
      title="Machine Vision"
      description="Sample content for Machine Vision will be added soon."
    />
  );
}
