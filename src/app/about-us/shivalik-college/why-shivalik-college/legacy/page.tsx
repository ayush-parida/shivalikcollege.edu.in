import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/shivalik-college/why-shivalik-college/legacy";

export const metadata: Metadata = {
  title: "About Us • Shivalik College • Why Shivalik College • Legacy | Shivalik College of Engineering",
  description: "Sample overview for About Us • Shivalik College • Why Shivalik College • Legacy at Shivalik College of Engineering.",
};

export default function AboutUsShivalikCollegeWhyShivalikCollegeLegacyPage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Shivalik College • Why Shivalik College • Legacy"
      description="Sample content for About Us • Shivalik College • Why Shivalik College • Legacy will be added soon."
    />
  );
}
