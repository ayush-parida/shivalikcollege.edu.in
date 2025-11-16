import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/fee-structure";

export const metadata: Metadata = {
  title: "Fee Structure | Shivalik College of Engineering",
  description: "Sample overview for Fee Structure at Shivalik College of Engineering.",
};

export default function FeeStructurePage() {
  return (
    <PageRenderer
      path={path}
      title="Fee Structure"
      description="Sample content for Fee Structure will be added soon."
    />
  );
}
