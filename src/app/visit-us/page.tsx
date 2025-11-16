import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/visit-us";

export const metadata: Metadata = {
  title: "Visit Us | Shivalik College of Engineering",
  description: "Sample overview for Visit Us at Shivalik College of Engineering.",
};

export default function VisitUsPage() {
  return (
    <PageRenderer
      path={path}
      title="Visit Us"
      description="Sample content for Visit Us will be added soon."
    />
  );
}
