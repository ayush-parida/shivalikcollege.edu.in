import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/reasons-to-study-bsc-agriculture";

export const metadata: Metadata = {
  title: "Reasons To Study Bsc Agriculture | Shivalik College of Engineering",
  description: "Sample overview for Reasons To Study Bsc Agriculture at Shivalik College of Engineering.",
};

export default function ReasonsToStudyBscAgriculturePage() {
  return (
    <PageRenderer
      path={path}
      title="Reasons To Study Bsc Agriculture"
      description="Sample content for Reasons To Study Bsc Agriculture will be added soon."
    />
  );
}
