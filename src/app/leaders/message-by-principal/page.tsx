import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/leaders/message-by-principal";

export const metadata: Metadata = {
  title: "Leaders • Message By Principal | Shivalik College of Engineering",
  description: "Sample overview for Leaders • Message By Principal at Shivalik College of Engineering.",
};

export default function LeadersMessageByPrincipalPage() {
  return (
    <PageRenderer
      path={path}
      title="Leaders • Message By Principal"
      description="Sample content for Leaders • Message By Principal will be added soon."
    />
  );
}
