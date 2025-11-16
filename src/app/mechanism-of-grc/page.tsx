import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/mechanism-of-grc";

export const metadata: Metadata = {
  title: "Mechanism Of Grc | Shivalik College of Engineering",
  description: "Sample overview for Mechanism Of Grc at Shivalik College of Engineering.",
};

export default function MechanismOfGrcPage() {
  return (
    <PageRenderer
      path={path}
      title="Mechanism Of Grc"
      description="Sample content for Mechanism Of Grc will be added soon."
    />
  );
}
