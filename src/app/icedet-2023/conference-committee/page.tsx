import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/icedet-2023/conference-committee";

export const metadata: Metadata = {
  title: "Icedet 2023 • Conference Committee | Shivalik College of Engineering",
  description: "Sample overview for Icedet 2023 • Conference Committee at Shivalik College of Engineering.",
};

export default function Icedet2023ConferenceCommitteePage() {
  return (
    <PageRenderer
      path={path}
      title="Icedet 2023 • Conference Committee"
      description="Sample content for Icedet 2023 • Conference Committee will be added soon."
    />
  );
}
