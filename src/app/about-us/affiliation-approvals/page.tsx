import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/about-us/affiliation-approvals";

export const metadata: Metadata = {
  title: "About Us • Affiliation Approvals | Shivalik College of Engineering",
  description: "Sample overview for About Us • Affiliation Approvals at Shivalik College of Engineering.",
};

export default function AboutUsAffiliationApprovalsPage() {
  return (
    <PageRenderer
      path={path}
      title="About Us • Affiliation Approvals"
      description="Sample content for About Us • Affiliation Approvals will be added soon."
    />
  );
}
