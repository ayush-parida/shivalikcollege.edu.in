import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/shivalik-college";

export const metadata: Metadata = {
  title: "About Us • Shivalik College | Shivalik College of Engineering",
  description: "Sample overview for About Us • Shivalik College at Shivalik College of Engineering.",
};

export default function AboutUsShivalikCollegePage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Shivalik College"
      description="Sample content for About Us • Shivalik College will be added soon."
    />
  );
}
