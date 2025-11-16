import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/placement-2";

export const metadata: Metadata = {
  title: "Placement 2 | Shivalik College of Engineering",
  description: "Sample overview for Placement 2 at Shivalik College of Engineering.",
};

export default function Placement2Page() {
  return (
    <PageRenderer
      path={path}
      title="Placement 2"
      description="Sample content for Placement 2 will be added soon."
    />
  );
}
