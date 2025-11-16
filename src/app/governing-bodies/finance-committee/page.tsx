import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/governing-bodies/finance-committee";

export const metadata: Metadata = {
  title: "Governing Bodies • Finance Committee | Shivalik College of Engineering",
  description: "Sample overview for Governing Bodies • Finance Committee at Shivalik College of Engineering.",
};

export default function GoverningBodiesFinanceCommitteePage() {
  return (
    <PageRenderer
      path={path}
      title="Governing Bodies • Finance Committee"
      description="Sample content for Governing Bodies • Finance Committee will be added soon."
    />
  );
}
