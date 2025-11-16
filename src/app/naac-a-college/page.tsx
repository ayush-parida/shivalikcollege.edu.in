import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/naac-a-college";

export const metadata: Metadata = {
  title: "NAAC A College | Shivalik College of Engineering",
  description: "Sample overview for NAAC A College at Shivalik College of Engineering.",
};

export default function NaacACollegePage() {
  return (
    <PageRenderer
      path={path}
      title="NAAC A College"
      description="Sample content for NAAC A College will be added soon."
    />
  );
}
