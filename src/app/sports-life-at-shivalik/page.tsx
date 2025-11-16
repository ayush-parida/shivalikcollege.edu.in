import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/sports-life-at-shivalik";

export const metadata: Metadata = {
  title: "Sports Life At Shivalik | Shivalik College of Engineering",
  description: "Sample overview for Sports Life At Shivalik at Shivalik College of Engineering.",
};

export default function SportsLifeAtShivalikPage() {
  return (
    <PageRenderer
      path={path}
      title="Sports Life At Shivalik"
      description="Sample content for Sports Life At Shivalik will be added soon."
    />
  );
}
