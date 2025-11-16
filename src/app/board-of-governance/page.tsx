import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/board-of-governance";

export const metadata: Metadata = {
  title: "Board Of Governance | Shivalik College of Engineering",
  description: "Sample overview for Board Of Governance at Shivalik College of Engineering.",
};

export default function BoardOfGovernancePage() {
  return (
    <PageRenderer
      path={path}
      title="Board Of Governance"
      description="Sample content for Board Of Governance will be added soon."
    />
  );
}
