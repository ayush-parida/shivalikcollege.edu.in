import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/shivalik-college/why-shivalik-college/about-shivalik";

export const metadata: Metadata = {
  title: "About Us • Shivalik College • Why Shivalik College • About Shivalik | Shivalik College of Engineering",
  description: "Sample overview for About Us • Shivalik College • Why Shivalik College • About Shivalik at Shivalik College of Engineering.",
};

export default function AboutUsShivalikCollegeWhyShivalikCollegeAboutShivalikPage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Shivalik College • Why Shivalik College • About Shivalik"
      description="Sample content for About Us • Shivalik College • Why Shivalik College • About Shivalik will be added soon."
    />
  );
}
