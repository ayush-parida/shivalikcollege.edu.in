import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/does-mechanical-engineering-in-india-have-scope-in-near-future";

export const metadata: Metadata = {
  title: "Does Mechanical Engineering In India Have Scope In Near Future | Shivalik College of Engineering",
  description: "Sample overview for Does Mechanical Engineering In India Have Scope In Near Future at Shivalik College of Engineering.",
};

export default function DoesMechanicalEngineeringInIndiaHaveScopeInNearFuturePage() {
  return (
    <PageRenderer
      path={path}
      title="Does Mechanical Engineering In India Have Scope In Near Future"
      description="Sample content for Does Mechanical Engineering In India Have Scope In Near Future will be added soon."
    />
  );
}
