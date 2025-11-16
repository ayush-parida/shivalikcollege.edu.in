import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/shivalik-college/why-shivalik-college";

export const metadata: Metadata = {
  title: "About Us • Shivalik College • Why Shivalik College | Shivalik College of Engineering",
  description: "Sample overview for About Us • Shivalik College • Why Shivalik College at Shivalik College of Engineering.",
};

export default function AboutUsShivalikCollegeWhyShivalikCollegePage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Shivalik College • Why Shivalik College"
      description="Sample content for About Us • Shivalik College • Why Shivalik College will be added soon."
    />
  );
}
