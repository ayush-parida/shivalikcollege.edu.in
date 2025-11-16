import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/computer-science-engineering";

export const metadata: Metadata = {
  title: "Computer Science Engineering | Shivalik College of Engineering",
  description: "Sample overview for Computer Science Engineering at Shivalik College of Engineering.",
};

export default function ComputerScienceEngineeringPage() {
  return (
    <PageRenderer
      path={path}
      title="Computer Science Engineering"
      description="Sample content for Computer Science Engineering will be added soon."
    />
  );
}
