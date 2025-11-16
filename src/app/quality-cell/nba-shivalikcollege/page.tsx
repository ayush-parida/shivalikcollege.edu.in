import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/nba-shivalikcollege";

export const metadata: Metadata = {
  title: "Quality Cell • NBA Shivalikcollege | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • NBA Shivalikcollege at Shivalik College of Engineering.",
};

export default function QualityCellNbaShivalikcollegePage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • NBA Shivalikcollege"
      description="Sample content for Quality Cell • NBA Shivalikcollege will be added soon."
    />
  );
}
