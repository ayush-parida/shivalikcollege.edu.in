import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/committee-member";

export const metadata: Metadata = {
  title: "Committee Member | Shivalik College of Engineering",
  description: "Sample overview for Committee Member at Shivalik College of Engineering.",
};

export default function CommitteeMemberPage() {
  return (
    <PageRenderer
      path={path}
      title="Committee Member"
      description="Sample content for Committee Member will be added soon."
    />
  );
}
