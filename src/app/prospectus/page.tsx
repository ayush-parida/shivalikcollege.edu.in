import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/prospectus";

export const metadata: Metadata = {
  title: "Prospectus | Shivalik College of Engineering",
  description: "Sample overview for Prospectus at Shivalik College of Engineering.",
};

export default function ProspectusPage() {
  return (
    <PageRenderer
      path={path}
      title="Prospectus"
      description="Sample content for Prospectus will be added soon."
    />
  );
}
