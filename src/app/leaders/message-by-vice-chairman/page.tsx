import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/leaders/message-by-vice-chairman";

export const metadata: Metadata = {
  title: "Leaders • Message By Vice Chairman | Shivalik College of Engineering",
  description: "Sample overview for Leaders • Message By Vice Chairman at Shivalik College of Engineering.",
};

export default function LeadersMessageByViceChairmanPage() {
  return (
    <PageRenderer
      path={path}
      title="Leaders • Message By Vice Chairman"
      description="Sample content for Leaders • Message By Vice Chairman will be added soon."
    />
  );
}
