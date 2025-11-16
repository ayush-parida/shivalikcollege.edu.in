import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/icedet-2023/contact-us";

export const metadata: Metadata = {
  title: "Icedet 2023 • Contact Us | Shivalik College of Engineering",
  description: "Sample overview for Icedet 2023 • Contact Us at Shivalik College of Engineering.",
};

export default function Icedet2023ContactUsPage() {
  return (
    <PageRenderer
      path={path}
      title="Icedet 2023 • Contact Us"
      description="Sample content for Icedet 2023 • Contact Us will be added soon."
    />
  );
}
