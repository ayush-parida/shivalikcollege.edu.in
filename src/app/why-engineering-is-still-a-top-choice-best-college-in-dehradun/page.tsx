import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/why-engineering-is-still-a-top-choice-best-college-in-dehradun";

export const metadata: Metadata = {
  title: "Why Engineering Is Still A Top Choice Best College In Dehradun | Shivalik College of Engineering",
  description: "Sample overview for Why Engineering Is Still A Top Choice Best College In Dehradun at Shivalik College of Engineering.",
};

export default function WhyEngineeringIsStillATopChoiceBestCollegeInDehradunPage() {
  return (
    <PageRenderer
      path={path}
      title="Why Engineering Is Still A Top Choice Best College In Dehradun"
      description="Sample content for Why Engineering Is Still A Top Choice Best College In Dehradun will be added soon."
    />
  );
}
