import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/icedet-2023/call-for-papers";

export const metadata: Metadata = {
  title: "Icedet 2023 • Call For Papers | Shivalik College of Engineering",
  description: "Sample overview for Icedet 2023 • Call For Papers at Shivalik College of Engineering.",
};

export default function Icedet2023CallForPapersPage() {
  return (
    <PageRenderer
      path={path}
      title="Icedet 2023 • Call For Papers"
      description="Sample content for Icedet 2023 • Call For Papers will be added soon."
    />
  );
}
