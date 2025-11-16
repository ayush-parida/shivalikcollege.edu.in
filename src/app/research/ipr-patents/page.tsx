import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/research/ipr-patents";

export const metadata: Metadata = {
  title: "Research • Ipr Patents | Shivalik College of Engineering",
  description: "Sample overview for Research • Ipr Patents at Shivalik College of Engineering.",
};

export default function ResearchIprPatentsPage() {
  return (
    <PageRenderer
      path={path}
      title="Research • Ipr Patents"
      description="Sample content for Research • Ipr Patents will be added soon."
    />
  );
}
