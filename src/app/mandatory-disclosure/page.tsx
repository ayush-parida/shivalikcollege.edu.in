import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/mandatory-disclosure";

export const metadata: Metadata = {
  title: "Mandatory Disclosure | Shivalik College of Engineering",
  description: "Sample overview for Mandatory Disclosure at Shivalik College of Engineering.",
};

export default function MandatoryDisclosurePage() {
  return (
    <PageRenderer
      path={path}
      title="Mandatory Disclosure"
      description="Sample content for Mandatory Disclosure will be added soon."
    />
  );
}
