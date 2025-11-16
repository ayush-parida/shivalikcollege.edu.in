import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/award-recognition";

export const metadata: Metadata = {
  title: "About Us • Award Recognition | Shivalik College of Engineering",
  description: "Sample overview for About Us • Award Recognition at Shivalik College of Engineering.",
};

export default function AboutUsAwardRecognitionPage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Award Recognition"
      description="Sample content for About Us • Award Recognition will be added soon."
    />
  );
}
