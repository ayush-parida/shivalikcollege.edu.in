import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/icedet-2023/instructions";

export const metadata: Metadata = {
  title: "Icedet 2023 • Instructions | Shivalik College of Engineering",
  description: "Sample overview for Icedet 2023 • Instructions at Shivalik College of Engineering.",
};

export default function Icedet2023InstructionsPage() {
  return (
    <PageRenderer
      path={path}
      title="Icedet 2023 • Instructions"
      description="Sample content for Icedet 2023 • Instructions will be added soon."
    />
  );
}
