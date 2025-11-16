import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/governing-bodies";

export const metadata: Metadata = {
  title: "About Us • Governing Bodies | Shivalik College of Engineering",
  description: "Sample overview for About Us • Governing Bodies at Shivalik College of Engineering.",
};

export default function AboutUsGoverningBodiesPage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Governing Bodies"
      description="Sample content for About Us • Governing Bodies will be added soon."
    />
  );
}
