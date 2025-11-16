import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/ai-and-ml-algorithms-for-a-better-future";

export const metadata: Metadata = {
  title: "Ai And Ml Algorithms For A Better Future | Shivalik College of Engineering",
  description: "Sample overview for Ai And Ml Algorithms For A Better Future at Shivalik College of Engineering.",
};

export default function AiAndMlAlgorithmsForABetterFuturePage() {
  return (
    <PageRenderer
      path={path}
      title="Ai And Ml Algorithms For A Better Future"
      description="Sample content for Ai And Ml Algorithms For A Better Future will be added soon."
    />
  );
}
