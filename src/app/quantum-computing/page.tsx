import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quantum-computing";

export const metadata: Metadata = {
  title: "Quantum Computing | Shivalik College of Engineering",
  description: "Sample overview for Quantum Computing at Shivalik College of Engineering.",
};

export default function QuantumComputingPage() {
  return (
    <PageRenderer
      path={path}
      title="Quantum Computing"
      description="Sample content for Quantum Computing will be added soon."
    />
  );
}
