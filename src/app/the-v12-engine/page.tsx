import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/the-v12-engine";

export const metadata: Metadata = {
  title: "The V12 Engine | Shivalik College of Engineering",
  description: "Sample overview for The V12 Engine at Shivalik College of Engineering.",
};

export default function TheV12EnginePage() {
  return (
    <PageRenderer
      path={path}
      title="The V12 Engine"
      description="Sample content for The V12 Engine will be added soon."
    />
  );
}
