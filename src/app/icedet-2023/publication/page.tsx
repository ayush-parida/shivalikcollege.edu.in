import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/icedet-2023/publication";

export const metadata: Metadata = {
  title: "Icedet 2023 • Publication | Shivalik College of Engineering",
  description: "Sample overview for Icedet 2023 • Publication at Shivalik College of Engineering.",
};

export default function Icedet2023PublicationPage() {
  return (
    <PageRenderer
      path={path}
      title="Icedet 2023 • Publication"
      description="Sample content for Icedet 2023 • Publication will be added soon."
    />
  );
}
