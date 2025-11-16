import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/collaborations";

export const metadata: Metadata = {
  title: "About Us • Collaborations | Shivalik College of Engineering",
  description: "Sample overview for About Us • Collaborations at Shivalik College of Engineering.",
};

export default function AboutUsCollaborationsPage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Collaborations"
      description="Sample content for About Us • Collaborations will be added soon."
    />
  );
}
