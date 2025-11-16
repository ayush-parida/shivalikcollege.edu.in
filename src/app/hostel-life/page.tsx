import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/hostel-life";

export const metadata: Metadata = {
  title: "Hostel Life | Shivalik College of Engineering",
  description: "Sample overview for Hostel Life at Shivalik College of Engineering.",
};

export default function HostelLifePage() {
  return (
    <PageRenderer
      path={path}
      title="Hostel Life"
      description="Sample content for Hostel Life will be added soon."
    />
  );
}
