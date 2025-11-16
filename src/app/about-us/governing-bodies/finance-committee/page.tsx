import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/governing-bodies/finance-committee";

export const metadata: Metadata = {
  title: "About Us • Governing Bodies • Finance Committee | Shivalik College of Engineering",
  description: "Sample overview for About Us • Governing Bodies • Finance Committee at Shivalik College of Engineering.",
};

export default function AboutUsGoverningBodiesFinanceCommitteePage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Governing Bodies • Finance Committee"
      description="Sample content for About Us • Governing Bodies • Finance Committee will be added soon."
    />
  );
}
