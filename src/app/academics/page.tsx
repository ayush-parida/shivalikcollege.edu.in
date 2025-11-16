import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/academics";

export const metadata: Metadata = {
  title: "Academics | Shivalik College of Engineering",
  description: "Sample overview for Academics at Shivalik College of Engineering.",
};

export default function AcademicsPage() {
  return (
    <PageRenderer
      path={path}
      title="Academics"
      description="Sample content for Academics will be added soon."
    />
  );
}
