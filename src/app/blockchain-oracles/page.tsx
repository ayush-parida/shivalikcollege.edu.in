import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/blockchain-oracles";

export const metadata: Metadata = {
  title: "Blockchain Oracles | Shivalik College of Engineering",
  description: "Sample overview for Blockchain Oracles at Shivalik College of Engineering.",
};

export default function BlockchainOraclesPage() {
  return (
    <PageRenderer
      path={path}
      title="Blockchain Oracles"
      description="Sample content for Blockchain Oracles will be added soon."
    />
  );
}
