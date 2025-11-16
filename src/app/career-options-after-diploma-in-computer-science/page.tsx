import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/career-options-after-diploma-in-computer-science";

export const metadata: Metadata = {
  title: "Career Options After Diploma In Computer Science | Shivalik College of Engineering",
  description: "Sample overview for Career Options After Diploma In Computer Science at Shivalik College of Engineering.",
};

export default function CareerOptionsAfterDiplomaInComputerSciencePage() {
  return (
    <PageRenderer
      path={path}
      title="Career Options After Diploma In Computer Science"
      description="Sample content for Career Options After Diploma In Computer Science will be added soon."
    />
  );
}
