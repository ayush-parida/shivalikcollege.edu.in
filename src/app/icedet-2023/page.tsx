import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/icedet-2023";

export const metadata: Metadata = {
  title: "Icedet 2023 | Shivalik College of Engineering",
  description: "Sample overview for Icedet 2023 at Shivalik College of Engineering.",
};

export default function Icedet2023Page() {
  return (
    <PageRenderer
      path={path}
      title="Icedet 2023"
      description="Sample content for Icedet 2023 will be added soon."
    />
  );
}
