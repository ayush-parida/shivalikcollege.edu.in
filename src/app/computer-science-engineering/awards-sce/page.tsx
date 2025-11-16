import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/computer-science-engineering/awards-sce";

export const metadata: Metadata = {
  title: "Computer Science Engineering • Awards SCE | Shivalik College of Engineering",
  description: "Sample overview for Computer Science Engineering • Awards SCE at Shivalik College of Engineering.",
};

export default function ComputerScienceEngineeringAwardsScePage() {
  return (
    <PageRenderer
      path={path}
      title="Computer Science Engineering • Awards SCE"
      description="Sample content for Computer Science Engineering • Awards SCE will be added soon."
    />
  );
}
