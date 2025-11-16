import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/examinations";

export const metadata: Metadata = {
  title: "Examinations | Shivalik College of Engineering",
  description: "Sample overview for Examinations at Shivalik College of Engineering.",
};

export default function ExaminationsPage() {
  return (
    <PageRenderer
      path={path}
      title="Examinations"
      description="Sample content for Examinations will be added soon."
    />
  );
}
