import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/computer-science-engineering/research-sce";

export const metadata: Metadata = {
  title: "Computer Science Engineering • Research SCE | Shivalik College of Engineering",
  description: "Sample overview for Computer Science Engineering • Research SCE at Shivalik College of Engineering.",
};

export default function ComputerScienceEngineeringResearchScePage() {
  return (
    <PageRenderer
      path={path}
      title="Computer Science Engineering • Research SCE"
      description="Sample content for Computer Science Engineering • Research SCE will be added soon."
    />
  );
}
