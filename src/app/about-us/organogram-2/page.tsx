import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/organogram-2";

export const metadata: Metadata = {
  title: "About Us • Organogram 2 | Shivalik College of Engineering",
  description: "Sample overview for About Us • Organogram 2 at Shivalik College of Engineering.",
};

export default function AboutUsOrganogram2Page() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Organogram 2"
      description="Sample content for About Us • Organogram 2 will be added soon."
    />
  );
}
