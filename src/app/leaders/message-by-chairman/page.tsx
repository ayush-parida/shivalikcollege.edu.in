import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/leaders/message-by-chairman";

export const metadata: Metadata = {
  title: "Leaders • Message By Chairman | Shivalik College of Engineering",
  description: "Sample overview for Leaders • Message By Chairman at Shivalik College of Engineering.",
};

export default function LeadersMessageByChairmanPage() {
  return (
    <PageRenderer
      path={path}
      title="Leaders • Message By Chairman"
      description="Sample content for Leaders • Message By Chairman will be added soon."
    />
  );
}
