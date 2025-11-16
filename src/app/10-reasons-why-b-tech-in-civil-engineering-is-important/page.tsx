import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/10-reasons-why-b-tech-in-civil-engineering-is-important";

export const metadata: Metadata = {
  title: "10 Reasons Why B Tech In Civil Engineering Is Important | Shivalik College of Engineering",
  description: "Sample overview for 10 Reasons Why B Tech In Civil Engineering Is Important at Shivalik College of Engineering.",
};

export default function Route10ReasonsWhyBTechInCivilEngineeringIsImportantPage() {
  return (
    <PageRenderer
      path={path}
      title="10 Reasons Why B Tech In Civil Engineering Is Important"
      description="Sample content for 10 Reasons Why B Tech In Civil Engineering Is Important will be added soon."
    />
  );
}
